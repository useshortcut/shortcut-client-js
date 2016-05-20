/*global require */

var Promise = require('bluebird');
var _ = require('lodash');
var fs = require('fs');
var Clubhouse = require('clubhouse-lib');
var clubhouse = new Clubhouse('', { baseUrl: 'http://localhost:4001' });

function findUserByEmail(users, email) {
    return _.find(users, function (x) { return x.permissions[0].email === email; });
}

function findWorkflowStateByName(workflows, name) {
    return _.find(workflows[0].states, function (x) { return x.name === name; });
}

function generateStory(ctx, row) {
    var rawStory = row.split(',');
    var user = findUserByEmail(ctx.users, rawStory[4]);
    var workflowState = findWorkflowStateByName(ctx.workflows, rawStory[3]);

    return { external_id: rawStory[0],
             name: rawStory[1],
             story_type: rawStory[2],
             workflow_state_id: workflowState.id,
             requested_by_id: user.id,
             project_id: ctx.projects[0].id,
             epic_id: ctx.epics[0].id,
             estimate: parseInt(rawStory[8])
    };

}

Promise.props({
    projects: clubhouse.listProjects().filter(function (x) { return x.name === 'API'; }),
    epics: clubhouse.listEpics().filter(function (x) { return x.name === 'Multi-org Support'; }),
    users: clubhouse.listUsers(),
    workflows: clubhouse.listWorkflows()
}).then(function (ctx) {

    fs.readFile('./stories.csv', function (error, csv) {
        if (error) { throw error; }
        // Remove CSV header
        var stories = _.tail(csv.toString().split('\n')).map(_.partial(generateStory, ctx));

        Promise.all(
            stories.map(function (x) { return clubhouse.createStory(x); })
         ).then(function (all) {
             console.log('Created ' + all.length + ' new stories');
         }).catch(function (e) {
             console.log(e);
         });

    });

});
