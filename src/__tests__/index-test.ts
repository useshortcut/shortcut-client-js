import { describe, expect, it } from 'vitest';
import { ShortcutClient } from '../index';

describe('index', () => {
  it('exposes ShortcutClient', () => {
    expect(ShortcutClient).toBeDefined();
  });
});
