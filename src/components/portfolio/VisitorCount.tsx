'use client';
import { useEffect, useState } from 'react';

// Never synthesize a visitor number. The endpoint is disabled until a real metric is connected.
export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/visitors', { signal: controller.signal }).then(r => r.ok ? r.json() : null).then(data => {
      if (data && Number.isSafeInteger(data.visits) && data.visits >= 0) setCount(data.visits);
    }).catch(() => {});
    return () => controller.abort();
  }, []);
  return count === null ? null : <span className="visitor-count">{count.toLocaleString('en-CA')} visits</span>;
}
