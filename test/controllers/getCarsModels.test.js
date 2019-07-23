import { assert } from 'chai';
import { get } from '../helpers';

suite('GET /cars/models', function () {
  test('should return JSON in body', async () => {
    const { body } = await get('/cars/models?brand=aston', 200);
    assert.deepEqual(body, [
      { id: '1', name: 'Aston Rapid S' },
      { id: '2', name: 'Vantage' },
      { id: '3', name: 'DB9' }
    ]);
  });

  test('should return JSON in body', async () => {
    const { body } = await get('/cars/models?brand=error', 200);
    assert.deepEqual(body, []);
  });
});