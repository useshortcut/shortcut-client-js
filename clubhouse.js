'use strict';
let Promise = require('bluebird');
let request = Promise.promisify(require('request'));

Promise.promisifyAll(request);

let defaultVersion = 'v1';
let defaultBaseUrl = 'https://api.clubhouse.io';

class Unprossable extends Error {
    constructor(body) {
        super();
        this.name = 'Unprocessable';
        this.message = body.message;
    }
}

class BadRequest extends Error {
    constructor(body) {
        super();
        this.name = 'BadRequest';
        this.message = body.message;
    }
}

class NotFound extends Error {
    constructor() {
        super();
        this.name = 'NotFound';
    }
}

class ServerError extends Error {
    constructor() {
        super();
        this.name = 'ServerError';
    }
}

class Forbidden extends Error {
    constructor() {
        super();
        this.name = 'Forbidden';
    }
}

class Unauthorized extends Error {
    constructor() {
        super();
        this.name = 'Unauthorized';
    }
}

/**
 * A base class to manage your interactions with the Clubhouse API
 */
class Clubhouse {

    /**
     * @param {string} token - Your Clubhouse token
     * @param {Object} options -
     * @param {string} [options.version=v1] - The version of the Clubhouse API to use
     */
    constructor(token, options) {
        options = options || {};

        if (token == null) {
            throw Error('You must supply a token value');
        }

        this.token = token;
        this.baseUrl = options.baseUrl || defaultBaseUrl;
        this.version = options.version || defaultVersion;
        this.http = request;
    }

    parseResponse(response) {
        let body = response.body;
        let status = response.statusCode;

        if (status === 403) {
            throw new Forbidden();
        } else if (status === 401) {
            throw new Unauthorized();
        } else if (status === 404) {
            throw new NotFound();
        } else  if (status === 400) {
            throw new BadRequest(body);
        } else if (status === 422) {
            throw new Unprossable(body);
        } else if ((status === 200) || (status === 201) || (status === 204)) {
            return body;
        } else if (status === 500) {
            throw new ServerError();
        }
        throw new Error('Unknown Unknowns' + status);
    };

    generateUrl(uri) {
        return this.baseUrl + '/api/' + this.version + '/' + uri + '?token=' + this.token;
    }

    listResource(uri) {
        return this.http({
            uri: this.generateUrl(uri),
            json: true
        }).then(this.parseResponse);
    }

    createResource(uri, values) {
        return this.http({
            uri: this.generateUrl(uri),
            json: true,
            body: values,
            method: 'POST'
        }).then(this.parseResponse);
    }

    getResource(uri) {
        return this.http({
            uri: this.generateUrl(uri),
            json: true,
            method: 'GET'
        }).then(this.parseResponse);
    }

    updateResource(uri, values) {
        return this.http({
            uri: this.generateUrl(uri),
            json: true,
            body: values,
            method: 'PUT'
        }).then(this.parseResponse);
    }

    deleteResource(uri) {
        return this.http({
            uri: this.generateUrl(uri),
            method: 'DELETE'
        }).then(this.parseResponse);
    }

    wrapCallback(cb, promise) {
        if (typeof cb === 'function') {
            return promise.then(function (x) {
                cb(null, x);
            }).catch(function (error) {
                cb(error);
            });
        }
        return promise;
    }

    /**
     * @return {Promise}
     */
    listUsers(cb) {
        return this.wrapCallback(cb, this.listResource('users'));
    }

    /**
     * @param  {number} userId
     * @return {Promise}
     */
    getUser(userId, cb) {
        return this.wrapCallback(cb, this.getResource('users/' + userId));
    }

    /**
     * @return {Promise}
     */
    listProjects(cb) {
        return this.wrapCallback(cb, this.listResource('projects'));
    }

    /**
     * @param  {Object} project
     * @param  {string} project.name
     * @param  {string} [project.description]
     * @param  {string} [project.abbreviation]
     * @param  {string} [project.color]
     * @param  {Array}  [project.follower_ids]
     * @param  {Date}   [project.start_time]
     * @param  {string} [project.external_id]
     * @return {Promise}
     */
    createProject(project, cb) {
        return this.wrapCallback(cb, this.createResource('projects', project));
    }

    /**
     * @param  {number} projectId
     * @return {Promise}
     */
    getProject(projectId, cb) {
        return this.wrapCallback(cb, this.getResource('projects/' + projectId));
    }

    /**
     * @param  {number} projectId
     * @param  {Object} values
     * @return {Promise}
     */
    updateProject(projectId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('projects/' + projectId, values));
    }

    /**
     * @param  {number} projectId
     * @return {Promise}
     */
    deleteProject(projectId, cb) {
        return this.wrapCallback(cb, this.deleteResource('projects/' + projectId));
    }

    /**
     * @return {Promise}
     */
    listEpics(cb) {
        return this.wrapCallback(cb, this.listResource('epics'));
    }

    /**
     * @param  {Object} values
     * @return {Promise}
     */
    createEpic(values, cb) {
        return this.wrapCallback(cb, this.createResource('epics', values));
    }

    /**
     * @param  {number} epicId
     * @return {Promise}
     */
    getEpic(epicId, cb) {
        return this.wrapCallback(cb, this.getResource('epics/' + epicId));
    }

    /**
     * @param  {number} epicId
     * @param  {Object} values
     * @return {Promise}
     */
    updateEpic(epicId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('epics/' + epicId, values));
    }

    /**
     * @param  {number} epicId
     * @return {Promise}
     */
    deleteEpic(epicId, cb) {
        return this.wrapCallback(cb, this.deleteResource('epics/' + epicId));
    }

    /**
     * @param  {number} projectId
     * @return {Promise}
     */
    listStories(projectId, cb) {
        return this.wrapCallback(cb, this.listResource('projects/' + projectId + '/stories'));
    }

    /**
     * @param  {Object} values
     * @return {Promise}
     */
    createStory(values, cb) {
        return this.wrapCallback(cb, this.createResource('stories', values));
    }

    /**
     * @param  {number} storyId
     * @param  {object} values
     * @return {Promise}
     */
    updateStory(storyId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('stories/' + storyId, values));
    }

    /**
     * @param  {number} storyId
     * @return {Promise}
     */
    deleteStory(storyId, cb) {
        return this.wrapCallback(cb, this.deleteResource('stories/' + storyId));
    }

    /**
     * @param  {number} storyId
     * @return {Promise}
     */
    listTasks(storyId, cb) {
        return this.wrapCallback(cb, this.listResource('stories/' + storyId + '/tasks'));
    }

    /**
     * @param  {number} storyId
     * @param  {Object} values
     * @return {Promise}
     */
    createTask(storyId, values, cb) {
        return this.wrapCallback(cb, this.createResource('stories/' + storyId + '/tasks', values));
    }

    /**
     * @param  {number} storyId
     * @param  {number} taskId
     * @return {Promise}
     */
    getTask(storyId, taskId, cb) {
        return this.wrapCallback(cb, this.getResource('stories/' + storyId + '/tasks/' + taskId));
    }

    /**
     * @param  {number} storyId
     * @param  {number} taskId
     * @param  {Object} values
     * @return {Promise}
     */
    updateTask(storyId, taskId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('stories/' + storyId + '/tasks/' + taskId, values));
    }

    /**
     * @param  {number} storyId
     * @param  {number} taskId
     * @return {Promise}
     */
    deleteTask(storyId, taskId, cb) {
        return this.wrapCallback(cb, this.deleteResource('stories/' + storyId + '/tasks/' + taskId));
    }

    /**
     * @return {Promise}
     */
    listWorkflows(cb) {
        return this.wrapCallback(cb, this.listResource('workflows'));
    }

    /**
     * @param  {Object} values
     * @return {Promise}
     */
    createStoryLink(values, cb) {
        return this.wrapCallback(cb, this.createResource('story-links', values));
    }

    /**
     * @param  {number} storyLinkId
     * @return {Promise}
     */
    getStoryLink(storyLinkId, cb) {
        return this.wrapCallback(cb, this.getResource('story-links/' + storyLinkId));
    }

    /**
     * @param  {number} storyLinkid
     * @return {Promise}
     */
    deleteStoryLink(storyLinkId, cb) {
        return this.wrapCallback(cb, this.deleteResource('story-links/' + storyLinkId));
    }

    /**
     * @return {Promise}
     */
    listFiles(cb) {
        return this.wrapCallback(cb, this.listResource('files'));
    }

    /**
     * @param  {Object} values
     * @return {Promise}
     */
    createFile(file) {
        return this.http({
            method: 'POST',
            preambleCRLF: true,
            postambleCRLF: true,
            url: this.generateUrl('files'),
            multipart: [{
                'content-type': 'text/pain',
                'body': file
            }]
        }).then(this.parseResponse);
    }

    /**
     * @param  {number} fileId
     * @param  {Object} value
     * @return {Promise}
     */
    updateFile(fileId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('files/' + fileId, values));
    }

    /**
     * @param  {number} fileId
     * @return {Promise}
     */
    deleteFile(fileId, cb) {
        return this.wrapCallback(cb, this.deleteResource('files/' + fileId));
    }

    /**
     * @return {Promise}
     */
    listLinkedFiles(cb) {
        return this.wrapCallback(cb, this.listResource('linked-files'));
    }

    /**
     * @param  {Object} values
     * @return {Promise}
     */
    createLinkedFile(values, cb) {
        return this.wrapCallback(cb, this.createResource('linked-files', values));
    }

    /**
     * @param  {number} linkedFileId
     * @param  {Object} values
     * @return {Promise}
     */
    updateLinkedFile(linkedFileId, values, cb) {
        return this.wrapCallback(cb, this.updateResource('linked-files' + linkedFileId, values));
    }

    /**
     * @param  {number} linkedFileId
     * @return {Promise}
     */
    deleteLinkedFile(linkedFileId, cb) {
        return this.wrapCallback(cb, this.deleteResource('linked-files/' + linkedFileId));
    }

}

module.exports = Clubhouse;
