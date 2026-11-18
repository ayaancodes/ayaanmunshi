import test from 'node:test';
import assert from 'node:assert/strict';
import { GET } from '../src/app/api/visitors/route.ts';

test('visitor adapter exposes only a real valid shared aggregate and hides failures', async () => {
  const previous = process.env.PORTFOLIO_VISITOR_METRIC_URL;
  const originalFetch = globalThis.fetch;
  try {
    delete process.env.PORTFOLIO_VISITOR_METRIC_URL;
    assert.equal((await GET()).status, 204);
    process.env.PORTFOLIO_VISITOR_METRIC_URL = 'http://counter.example/total';
    let called = false;
    globalThis.fetch = async () => { called = true; return Response.json({ visits: 53 }); };
    assert.equal((await GET()).status, 204);
    assert.equal(called, false);
    process.env.PORTFOLIO_VISITOR_METRIC_URL = 'https://counter.example/total';
    const response = await GET();
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { visits: 53 });
    for (const visits of [-1, 1.2, '53', null, Number.MAX_SAFE_INTEGER + 1]) {
      globalThis.fetch = async () => Response.json({ visits });
      assert.equal((await GET()).status, 204);
    }
    globalThis.fetch = async () => Response.json({ visits: 53 }, { status: 500 });
    assert.equal((await GET()).status, 204);
    globalThis.fetch = async () => { throw new Error('Offline'); };
    assert.equal((await GET()).status, 204);
  } finally {
    globalThis.fetch = originalFetch;
    if (previous === undefined) delete process.env.PORTFOLIO_VISITOR_METRIC_URL;
    else process.env.PORTFOLIO_VISITOR_METRIC_URL = previous;
  }
});
