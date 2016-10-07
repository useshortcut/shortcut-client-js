/*global require */

var INPUT_CSV_FILE = 'another_test_20160511_1636.csv';
var OUTPUT_JSON_FILE = 'new_stories.json';

var Promise = require('bluebird');
var _ = require('lodash');
var fs = Promise.promisifyAll(require('fs'));
var csv = require('csv');
var csvParse = Promise.promisify(csv.parse);

var Clubhouse = require('../clubhouse');
var clubhouse = new Clubhouse(process.env.CLUBHOUSE_TOKEN);

function findUserByName(users, name) {
    return _.find(users, function (x) { return x.name === name; });
}

function findWorkflowStateByName(workflows, name) {
    return _.find(workflows[0].states, function (x) { return x.name === name; });
}

var workflowMapping = {
    unscheduled: 'Unscheduled',
    unstarted: 'Ready for Development',
    started: 'In Development',
    rejected: 'In Development',
    finished: 'Ready for Deploy',
    delivered: 'Deployed',
    accepted: 'Completed'
};

function generateStory(ctx, story) {
    var requester = findUserByName(ctx.users, story['Requested By']);
    var workflowState = findWorkflowStateByName(ctx.workflows, workflowMapping[story['Current State']]);
    var estimate = parseInt(story.Estimate);
    var mappedStory =  { name: story.Title,
                         project_id: ctx.projects[0].id,
                         description: story.Description,
                         story_type: story.Type,
                         workflow_state_id: workflowState.id,
                         requested_by_id: requester.id };

    if (!isNaN(estimate)) {
        mappedStory.estimate = estimate;
    }
    return mappedStory;
}

function processCsv(context, csv) {
    return Promise.resolve(csv.map(_.partial(generateStory, context)));
}

Promise.props({
    projects: clubhouse.listProjects().filter(function (x) { return x.name === 'API'; }),
    epics: clubhouse.listEpics().filter(function (x) { return x.name === 'Multi-org Support'; }),
    users: clubhouse.listUsers(),
    workflows: clubhouse.listWorkflows(),
    csv: fs.readFileAsync(INPUT_CSV_FILE, 'utf-8')
}).then(function (ctx) {
    csvParse(ctx.csv, { columns: true }).then(_.partial(processCsv, ctx)).then(function (stories) {
        return Promise.all(stories.map(function (x) {
            return clubhouse.createStory(x);
        }));
    }).then(function (all) {
        console.log('Created ' + all.length + ' new stories.');
        return fs.writeFileAsync(OUTPUT_JSON_FILE, JSON.stringify(all, null, 4));
    }).catch(function (error) {
        console.log(error);
    });
});
