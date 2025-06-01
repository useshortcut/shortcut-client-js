import { ShortcutClient } from '@shortcut/client';

if (!process.env.SHORTCUT_API_TOKEN) {
  console.error('Please set SHORTCUT_API_TOKEN environment variable');
  process.exit(1);
}

const shortcut = new ShortcutClient(process.env.SHORTCUT_API_TOKEN);

async function demonstrateTypedSearch() {
  console.log('🔍 Demonstrating typed search functionality...\n');

  try {
    // Example 1: Search for active bug stories assigned to specific team
    console.log('1. Searching for active bug stories...');
    const bugStories = await shortcut.searchStoriesTyped({
      story_type: 'bug',
      archived: false,
      // team_ids: ['team-uuid-here'], // Uncomment and add real team ID
    }, {
      page_size: 5,
      detail: 'slim'
    });
    console.log(`Found ${bugStories.total} bug stories (showing ${bugStories.data.length})`);
    bugStories.data.forEach(story => {
      console.log(`  - ${story.name} (${story.story_type})`);
    });

    // Example 2: Search for epics in a specific state
    console.log('\n2. Searching for completed epics...');
    const completedEpics = await shortcut.searchEpicsTyped({
      state: 'done',
      archived: false,
    }, {
      page_size: 3,
      detail: 'slim'
    });
    console.log(`Found ${completedEpics.total} completed epics (showing ${completedEpics.data.length})`);
    completedEpics.data.forEach(epic => {
      console.log(`  - ${epic.name} (${epic.state})`);
    });

    // Example 3: Search for iterations by date range
    console.log('\n3. Searching for recent iterations...');
    const recentIterations = await shortcut.searchIterationsTyped({
      created_at_start: '2024-01-01',
      // created_at_end: '2024-12-31', // Optional end date
    }, {
      page_size: 3,
      detail: 'slim'
    });
    console.log(`Found ${recentIterations.total} recent iterations (showing ${recentIterations.data.length})`);
    recentIterations.data.forEach(iteration => {
      console.log(`  - ${iteration.name} (created: ${new Date(iteration.created_at!).toLocaleDateString()})`);
    });

    // Example 4: Search for objectives with specific criteria
    console.log('\n4. Searching for active objectives...');
    const activeObjectives = await shortcut.searchObjectivesTyped({
      state: 'started',
      archived: false,
    }, {
      page_size: 3,
      detail: 'slim'
    });
    console.log(`Found ${activeObjectives.total} active objectives (showing ${activeObjectives.data.length})`);
    activeObjectives.data.forEach(objective => {
      console.log(`  - ${objective.name} (${objective.state})`);
    });

    // Example 5: Complex story search with multiple filters
    console.log('\n5. Complex story search with multiple filters...');
    const complexStorySearch = await shortcut.searchStoriesTyped({
      name: 'login', // Stories with "login" in the name
      story_type: 'feature',
      archived: false,
      created_at_start: '2024-01-01',
      // label_names: ['frontend', 'authentication'], // Uncomment for label filtering
    }, {
      page_size: 5,
      detail: 'full'
    });
    console.log(`Found ${complexStorySearch.total} matching stories (showing ${complexStorySearch.data.length})`);
    complexStorySearch.data.forEach(story => {
      console.log(`  - ${story.name} (${story.story_type}) - ${story.description?.substring(0, 100)}...`);
    });

  } catch (error) {
    console.error('Error during search:', error);
  }
}

// Demonstrate the difference between typed and untyped search
async function compareSearchMethods() {
  console.log('\n🆚 Comparing typed vs untyped search methods...\n');

  try {
    // Old way: manual query string construction (error-prone)
    console.log('❌ Old way - manual query string (error-prone):');
    const manualQuery = 'type:bug state:done archived:false';
    const manualResult = await shortcut.searchStories({
      query: manualQuery,
      page_size: 3
    });
    console.log(`Query: "${manualQuery}"`);
    console.log(`Results: ${manualResult.data.total} stories found`);

    // New way: typed parameters (IntelliSense, type safety, less error-prone)
    console.log('\n✅ New way - typed parameters (type-safe):');
    const typedResult = await shortcut.searchStoriesTyped({
      story_type: 'bug',
      state: 'done', // This would cause a TypeScript error if you used invalid value
      archived: false,
    }, {
      page_size: 3
    });
    console.log('Parameters: { story_type: "bug", state: "done", archived: false }');
    console.log(`Results: ${typedResult.total} stories found`);

    console.log('\n🎯 Benefits of typed search:');
    console.log('  ✓ IntelliSense/autocomplete support');
    console.log('  ✓ Compile-time type checking');
    console.log('  ✓ No more "title" vs "name" confusion!');
    console.log('  ✓ Prevents typos in field names');
    console.log('  ✓ Better documentation with inline types');

  } catch (error) {
    console.error('Error during comparison:', error);
  }
}

// Run the demonstrations
async function main() {
  await demonstrateTypedSearch();
  await compareSearchMethods();
}

main().catch(console.error);