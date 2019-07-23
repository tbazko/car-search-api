import { assert } from 'chai';
import { get } from '../helpers';

suite('GET /cars/brands', function () {
  test('should return JSON in body', async () => {
    const { body } = await get('/cars/brands', 200);
    assert.deepEqual(body, [
      { id: 'aston', name: 'Aston Martin' },
      { id: 'honda', name: 'Honda' },
      { id: 'merc', name: 'Mercedes' },
      { id: 'toyota', name: 'Toyota' }
    ]);
  });
});