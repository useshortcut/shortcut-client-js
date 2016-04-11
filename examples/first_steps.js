var Clubhouse = require('clubhouse');
var clubhouse = new Clubhouse('', { baseUrl: 'http://localhost:4001' });

var story = {
    'name': 'This is a test',
    'project_id': 274
};

clubhouse.createStory(story).then(function (newStory) {
    console.log('new story', newStory);
    return clubhouse.deleteStory(newStory.id);
}).catch(function (error) {
    console.log(error);
});
