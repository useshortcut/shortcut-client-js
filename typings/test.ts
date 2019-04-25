import * as clubhouse from './index';
import {StoryChange} from "./index";

const client = clubhouse.create("test");

client.searchStories("test");
client.getStory(12);
client.createStory({} as StoryChange);