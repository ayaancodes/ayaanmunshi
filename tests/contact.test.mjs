import test from 'node:test';
import assert from 'node:assert/strict';
import { contactDraft, CONTACT_EMAIL } from '../src/lib/contact.ts';

test('contact draft preserves Unicode and reserved characters in encoded body', () => {
  const result = contactDraft('Business ideas', 'A & B', 'Hi Ayaan,\nLet’s build C++ & AI?');
  const url = new URL(result.href);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, CONTACT_EMAIL);
  assert.equal(url.searchParams.get('body'), 'Hi Ayaan,\nLet’s build C++ & AI?\n\nA & B');
  assert.equal(url.searchParams.get('subject'), 'Let’s chat: Business ideas');
  assert.equal([...url.searchParams.keys()].join(','), 'subject,body');
});

test('contact topic is allowlisted and name cannot introduce mail headers', () => {
  const result = contactDraft('Soccer\r\nbcc:someone@example.com', 'Name\r\nbcc: other@example.com', 'Message');
  const url = new URL(result.href);
  assert.equal(url.searchParams.get('subject'), 'Let’s chat: Say hello');
  assert.equal(url.searchParams.has('bcc'), false);
  assert.equal(result.body, 'Message\n\nName  bcc: other@example.com');
});

test('contact draft bounds user input and supports an omitted name', () => {
  assert.equal(contactDraft('Soccer', '', ' Hello ').body, 'Hello');
  const result = contactDraft('Opportunities', 'n'.repeat(100), 'm'.repeat(2000));
  assert.equal(result.body, `${'m'.repeat(1500)}\n\n${'n'.repeat(80)}`);
});
