/*global require, __dirname */
'use strict';

let chai      = require('chai').assert;
let fs        = require('fs');
let Promise   = require('bluebird');
let sinon     = require('sinon');
let http      = require('http');
let FormData  = require('form-data');
let Clubhouse = require('../clubhouse');
let yakbak    = require('yakbak');

let mocha      = require('mocha');
let describe   = mocha.describe;
let it         = mocha.it;
let beforeEach = mocha.beforeEach;
let afterEach  = mocha.afterEach;


let generateSubject = () => {
    return new Clubhouse('', { baseUrl: 'http://localhost:4001'});
};

describe('Client', function () {

    it('can create a clubhouse client with a token', function () {
        let clubhouse = new Clubhouse('token value');

        chai.equal(clubhouse.token, 'token value');
        chai.equal(clubhouse.baseUrl, 'https://api.clubhouse.io');
        chai.equal(clubhouse.version, 'v1');
    });

});

describe('Errors', function () {

    it('can return the correct error message for a 400', function () {
        let subject = generateSubject();

        sinon.stub(subject, 'http').returns(Promise.resolve({ statusCode: 400, body: { message: '' } }));
        return subject.createProject({}).catch((error) => {
            chai.propertyVal(error, 'name', 'BadRequest');
        });
    });

    it('can return the correct error message for a 404', function () {
        let subject = generateSubject();

        sinon.stub(subject, 'http').returns(Promise.resolve({ statusCode: 404 }));
        return subject.createProject({}).catch((error) => {
            chai.propertyVal(error, 'name', 'NotFound');
        });
    });

    it('can return the correct error message for a 500', function () {
        let subject = generateSubject();

        sinon.stub(subject, 'http').returns(Promise.resolve({ statusCode: 500 }));
        return subject.createProject({}).catch((error) => {
            chai.propertyVal(error, 'name', 'ServerError');
        });
    });

    it('can return the correct error message for a 422', function () {
        let subject = generateSubject();

        sinon.stub(subject, 'http').returns(Promise.resolve({ statusCode: 422, body: {}}));
        return subject.createProject({}).catch((error) => {
            chai.propertyVal(error, 'name', 'Unprocessable');
        });
    });
});

describe('Token missing error', function () {
    it('throws and error if the user does not supply a token', function () {
        chai.throws(function () { new Clubhouse(); });
    });
});


describe('It supports both a promise api and a callback api', function () {
    it('', function (done) {
        let subject = generateSubject();
        subject.listUsers(function (error, users) {
            chai.isNull(error);
            chai.lengthOf(users, 9);
            done();
        });
    });
});

describe('Users', function () {

    it('can list all of the users within an organization', function () {
        let subject = generateSubject();

        return subject.listUsers().then((users) => {
            chai.lengthOf(users, 9);
        });
    });

    it('can request a single user', function () {

    });

});

describe('Project', function () {

    it('can list all of the projects within an account', function () {
        let subject = generateSubject();

        return subject.listProjects().then((projects) => {
            chai.lengthOf(projects, 8);
        });
    });

    it('can create a new project', function () {
        let subject = generateSubject();

        return subject.createProject({ name: 'This is a test' }).then((project) => {
            chai.equal(project.name, 'This is a test');
        });
    });

    it('can request the details for a single project', function () {
        let subject = generateSubject();

        return subject.getProject(274).then((project) => {
            chai.equal(project.name, 'API');
        });
    });

    it('can update some proprties of a project', function () {
        let subject = generateSubject();

        return subject.createProject({ name: 'This is another test' }).then((project) => {
            chai.equal(project.name, 'This is another test');
            return Promise.resolve(project);
        }).then((project) => {
            return subject.updateProject(project.id, { name: 'New name' });
        }).then((project) => {
            chai.equal(project.name, 'New name');
            return subject.deleteProject(project.id);
        });
    });

    it('can delete all of the test projects', function () {
        let subject = generateSubject();

        return subject.listProjects().filter((project) => {
            return project.name === 'This is a test';
        }).map((project) => {
            return subject.deleteProject(project.id);
        }).then(() => {
            return subject.listProjects().then((projects) => {
                chai.lengthOf(projects, 8);
            });
        });
    });
});

describe('Epic', function () {

    it('can list all of the epics', function () {
        let subject = generateSubject();

        return subject.listEpics().then((epics) => {
            chai.lengthOf(epics, 77);
        });
    });

    it('can create a new epic', function () {
        let subject = generateSubject();

        return subject.createEpic({ name: 'This is a test' }).then((epic) => {
            chai.equal(epic.name, 'This is a test');
        });
    });

    it('can get the details of an existing epic', function () {
        let subject = generateSubject();

        return subject.createEpic({ name: 'This is a test' }).then((epic) => {
            return subject.getEpic(epic.id).then((epic) => {
                chai.equal(epic.name, 'This is a test');
                return Promise.resolve(epic);
            }).then((epic) => {
                return subject.deleteEpic(epic.id);
            });
        });
    });

    it('can update an epic', function () {
        let subject = generateSubject();

        return subject.createEpic({ name: 'This is a test' }).then((epic) => {
            return subject.updateEpic(epic.id, { name: 'Not a test' });
        }).then((epic) => {
            chai.equal(epic.name, 'Not a test');
            return subject.deleteEpic(epic.id);
        });
    });

    it('can delete all of the testing epics', function () {
        let subject = generateSubject();

        return subject.listEpics().filter((epic) => {
            return epic.name  === 'This is a test';
        }).map((epic) => {
            return subject.deleteEpic(epic.id);
        }).then(() => {
            return subject.listEpics().then((epics) => {
                chai.lengthOf(epics, 77);
            });
        });
    });
});

describe('Story', function () {
    let stories;
    let project;
    let clubhouse = generateSubject();

    beforeEach(function () {
        return clubhouse.createProject({ name: 'This is a test project'}).then((p) => {
            project = p;
            let all = [
                clubhouse.createStory({ name: 'test1', project_id: p.id }),
                clubhouse.createStory({ name: 'test2', project_id: p.id }),
                clubhouse.createStory({ name: 'test3', project_id: p.id }),
                clubhouse.createStory({ name: 'test4', project_id: p.id }),
                clubhouse.createStory({ name: 'test5', project_id: p.id }),
            ];
            return Promise.all(all).then((s) => {
                stories = s.map(x => x.id);
            });
        });
    });

    afterEach(function () {
        return Promise.all(stories.map((x) => { return clubhouse.deleteStory(x); })).then(() => {
            return clubhouse.deleteProject(project.id);
        });
    });

    it('can list all of the stories within a project', function () {
        let subject = generateSubject();

        return subject.listStories(project.id).then((stories) => {
            chai.lengthOf(stories, 5);
        });
    });

    it('can create a new story', function () {
        let subject = generateSubject();

        return subject.createStory({
            name: 'This is a good test story',
            project_id: project.id
        }).then((story) => {
            return subject.deleteStory(story.id);
        });
    });

    it('can update an existing story', function () {
        let subject = generateSubject();

        return subject.listStories(project.id).then((stories) => {
            let story = stories[0];

            return clubhouse.updateStory(story.id, { name: 'Another test story' }).then((story) => {
                chai.propertyVal(story, 'name', 'Another test story');
            });
        });
    });

    it('can delete an existing story', function () {
        let subject = generateSubject();

        return subject.createStory({ name: 'Another test story', project_id: project.id }).then((story) => {
            return subject.deleteStory(story.id);
        });
    });
});

describe('Workflows', function () {

    it('can list all of the workflows', function () {
        let subject = generateSubject();

        return subject.listWorkflows().then((workflows) => {
            let workflow = workflows[0];
            chai.lengthOf(workflow.states, 7);
            chai.equal(workflow.name, 'Tracker');
        });
    });

});

describe('Tasks', function () {
    let story;
    let project;
    let clubhouse = generateSubject();

    beforeEach(function () {
        return clubhouse.createProject({ name: 'This is a test project' }).then((p) => {
            project = p;
            return clubhouse.createStory({ name: 'test1', project_id: p.id }).then((s) => {
                story = s;
            });
        });
    });

    afterEach(function () {
        return clubhouse.deleteStory(story.id).then(() => {
            return clubhouse.deleteProject(project.id);
        });
    });

    it('can create a new task', function () {
        let subject = generateSubject();

        return subject.listUsers().then((users) => {
            let ivan = users[0];

            return subject.createTask(story.id, { description: 'This is a task', complete: false, owner_ids: [ivan.id] }).then((task) => {
                chai.propertyVal(task, 'description', 'This is a task');
                chai.isFalse(task.complete);
                chai.deepEqual(task.owner_ids, [ivan.id]);
                return subject.deleteTask(story.id, task.id);
            });
        });

    });

    it('get an existing task', function () {
        let subject = generateSubject();
        return subject.createTask(story.id, { description: 'this', complete: false }).then((origin) => {
            return subject.getTask(story.id, origin.id).then((task) => {
                chai.propertyVal(origin, 'description', task.description);
                chai.propertyVal(origin, 'id', task.id);
                return subject.deleteTask(story.id, task.id);
            });

        });

    });

    it('can update a task', function () {
        let subject = generateSubject();

        return subject.createTask(story.id, { description: 'this', complete: false }).then((task) => {
            return subject.updateTask(story.id, task.id, { description: 'new value' }).then((updated_task) => {
                chai.equal(updated_task.description, 'new value');
            }).then(() => {
                return subject.deleteTask(story.id, task.id);
            });
        });

    });

    it('can delete a task', function () {
        let subject = generateSubject();
        return subject.createTask(story.id, { description: 'more stuff', complete: false }).then((task) => {
            return subject.deleteTask(story.id, task.id);
        }).then(() => {
            return subject.listTasks(story.id).catch((error) => {
                chai.instanceOf(error, Error);
                chai.equal(error.name, 'NotFound');
            });
        });
    });

});

describe('Story Links', function () {
    let clubhouse = generateSubject();
    let project;
    let storyA;
    let storyB;
    let params;

    beforeEach(function () {
        return clubhouse.createProject({ name: 'This is a test project'}).then((p) => {
            project = p;
            let all = [ clubhouse.createStory({ name: 'test1', project_id: p.id }),
                        clubhouse.createStory({ name: 'test2', project_id: p.id })
                      ];

            return Promise.all(all).then((stories) => {
                storyA = stories[0];
                storyB = stories[1];
            });
        });
    });

    afterEach(function () {
        return Promise.all(([storyA, storyB]).map((x) => { return clubhouse.deleteStory(x.id); })).then(() => {
            return clubhouse.deleteProject(project.id);
        });
    });

    it('can create a story link', function () {
        let subject = generateSubject();
        return subject.createStoryLink({ verb: 'blocks', subject_id: storyA.id, object_id: storyB.id }).then((storyLink) => {
            chai.propertyVal(storyLink, 'verb', 'blocks');
            chai.propertyVal(storyLink, 'subject_id', storyA.id);
            chai.propertyVal(storyLink, 'object_id', storyB.id);
        });
    });

    it('can get a story link', function () {
        let subject = generateSubject();

        return subject.createStoryLink({ verb: 'blocks', subject_id: storyA.id, object_id: storyB.id }).then((origin) => {
            return subject.getStoryLink(origin.id).then((storyLink) => {
                chai.equal(origin.id, storyLink.id);
            });
        });

    });

    it('can delete a story link', function () {
        let subject = generateSubject();

        return subject.createStoryLink({ verb: 'blocks', subject_id: storyA.id, object_id: storyB.id }).then((storyLink) => {
            return subject.deleteStoryLink(storyLink.id).then(() => {
                return subject.getStoryLink(storyLink.id).catch((error) => {
                    chai.instanceOf(error, Error);
                    chai.equal(error.name, 'NotFound');
                });
            });
        });

    });
});

// TODO
describe.skip('File', function () {

    it('can create a file', function () {
        let clubhouse = generateSubject();
        let file = fs.createReadStream(__dirname + '/file.txt');

        return clubhouse.createFile(file).then((file) => {
            console.log(file);
            return Promise.resolve(file);
        }).then((file) => {
            console.log(file);
        });
    });

});
