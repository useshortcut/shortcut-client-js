/*global require */

var Promise = require('bluebird');
var _ = require('lodash');
var fs = require('fs');
var request = Promise.promisify(require('request'));

var Clubhouse = require('clubhouse-lib');
var clubhouse = new Clubhouse(process.env.CLUBHOUSE_TOKEN);

function fetchGithubIssues() {
    var username = 'iwillig',
        password = '',
        url = 'https://' + username + ':' + password + '@api.github.com/repos/iwillig/dot-files/issues';

    return request({uri: url, headers: {'User-Agent': 'Clubhouse Importer'}}).then(function (x) { return JSON.parse(x.body); });
}

function generateStory(ctx, issue) {
    return {
        name: ''
    };
}

Promise.props({
    githubIssues: fetchGithubIssues(),
    projects: clubhouse.listProjects(),
    users: clubhouse.listUsers()
}).then(function (ctx) {
    console.log(JSON.stringify(ctx.githubIssues, null, 4));
});
