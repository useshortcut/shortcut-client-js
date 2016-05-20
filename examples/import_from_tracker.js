/*global require */

var Promise = require('bluebird');
var _ = require('lodash');
var fs = Promise.promisifyAll(require('fs'));
var csv = require('csv');
var parse = Promise.promisify(csv.parse);

var Clubhouse = require('../clubhouse');
var clubhouse = new Clubhouse(process.env.CLUBHOUSE_TOKEN, { baseUrl: 'http://localhost:4001' });

function findUserByName(users, name) {
    return _.find(users, function (x) { return x.name === name; });
}

function findWorkflowStateByName(workflows, name) {
    return _.find(workflows[0].states, function (x) { return x.name === name; });
}

var workflowMapping = {
    'unscheduled': 'Backlog',
    'finished': 'Completed',
    'unstarted': 'Ready for Dev'
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
    csv: fs.readFileAsync('another_test_20160511_1636.csv', 'utf-8')
}).then(function (ctx) {

    parse(ctx.csv, { columns: true }).then(_.partial(processCsv, ctx)).then(function (stories) {
        return Promise.all(stories.map(function (x) {
            return clubhouse.createStory(x);
        }));
    }).then(function (all) {
        console.log('Created ' + all.length + ' new stories');
        return fs.writeFileAsync('new_stories.json', JSON.stringify(all, null, 4));
    }).catch(function (error) {
        console.log(error);
    });

});
