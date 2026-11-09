import test from 'node:test'
import { URL } from 'node:url'
import assert from 'node:assert/strict'
import { buildContactMailto } from '../lib/contact.ts'

test('contact preserves accents, newlines and reserved characters in the email draft', () => {
 const url = new URL(buildContactMailto('contact@example.com', ' Léa & Co ', ' lea@example.com ', ' Bonjour !\nProjet data & IA ? Budget = à discuter. '))
 assert.equal(url.protocol, 'mailto:')
 assert.equal(url.pathname, 'contact@example.com')
 assert.equal(url.searchParams.get('subject'), 'Contact portfolio — Léa & Co')
 assert.equal(url.searchParams.get('body'), 'Bonjour Phanuel,\n\nBonjour !\nProjet data & IA ? Budget = à discuter.\n\nLéa & Co\nlea@example.com')
 assert.deepEqual([...url.searchParams.keys()], ['subject','body'])
})
