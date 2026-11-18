// Optional adapter for an owner-controlled shared analytics aggregate.
// The upstream must return a real, persistent total-page-visit metric: { visits: number }.
// This route reads totals only. Existing Vercel Analytics remains responsible for collection.
export async function GET() {
  const endpoint = process.env.PORTFOLIO_VISITOR_METRIC_URL;
  if (!endpoint) return new Response(null, { status: 204 });
  try {
    const url = new URL(endpoint);
    if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Invalid metric URL');
    const response = await fetch(url, { redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(3000) });
    if (!response.ok) throw new Error('Metric unavailable');
    const data = await response.json();
    if (!Number.isSafeInteger(data.visits) || data.visits < 0) throw new Error('Invalid metric');
    return Response.json({ visits: data.visits }, { headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' } });
  } catch {
    return new Response(null, { status: 204 });
  }
}
