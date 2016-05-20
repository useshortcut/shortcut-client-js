var Clubhouse = require('clubhouse-lib');
var clubhouse = new Clubhouse(process.env.CLUBHOUSE_TOKEN, { baseUrl: 'http://localhost:4001' });

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
