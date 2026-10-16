/**
 * Validates Swagger/OpenAPI documents against their specification.
 *
 * Replaces the abandoned `swagger-cli validate` command, which wrapped the
 * same `SwaggerParser.validate` call.
 *
 * Usage: node scripts/validate-schema.mts <schema.json>...
 */
import SwaggerParser from '@apidevtools/swagger-parser';

const paths = process.argv.slice(2);

if (paths.length === 0) {
  console.error('Usage: node scripts/validate-schema.mts <schema.json>...');
  process.exit(1);
}

let failed = false;

for (const path of paths) {
  try {
    await SwaggerParser.validate(path);
    console.log(`${path} is valid`);
  } catch (error) {
    failed = true;
    console.error(
      `${path} is invalid: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

if (failed) process.exit(1);
