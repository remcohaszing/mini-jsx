import assert from 'node:assert/strict'
import { test } from 'node:test'

import { JSDOM } from 'jsdom'

const { window } = new JSDOM('', { url: 'https://example.com' })

Object.assign(globalThis, window)

test('assign properties', () => {
  const button = <button className="is-primary" type="button" />
  assert.equal(button.tagName, 'BUTTON')
  assert.equal(button.className, 'is-primary')
})

test('add event handlers', () => {
  let clickCount = 0
  const button = (
    <button
      onclick={(event) => {
        event.preventDefault()
        clickCount += 1
      }}
      type="button"
    />
  )
  button.click()
  assert.equal(clickCount, 1)
})

test('shallow merge object properties', () => {
  const div = <div style={{ color: 'red', backgroundColor: 'blue' }} />
  assert.equal(div.style.color, 'red')
  assert.equal(div.style.backgroundColor, 'blue')
})

test('set unknown properties as attributes', () => {
  const div = <div aria-busy />
  assert.equal(div.getAttribute('aria-busy'), 'true')
})

test('render element children', () => {
  const div = (
    <div>
      <section>
        <p />
      </section>
      <span />
    </div>
  )
  assert.equal(div.outerHTML, '<div><section><p></p></section><span></span></div>')
})

test('render string children', () => {
  const div = <div>Hello world!</div>
  assert.equal(div.outerHTML, '<div>Hello world!</div>')
})

test('render number children', () => {
  const div = <div>{42}</div>
  assert.equal(div.outerHTML, '<div>42</div>')
})

test('ignore boolean or null children', () => {
  const div = (
    <div>
      {true}
      {false}
      {null}
      {undefined}
    </div>
  )
  assert.equal(div.outerHTML, '<div></div>')
})

test('ref', () => {
  let actual: HTMLUListElement | undefined
  const expected = (
    <ul
      ref={(node): void => {
        actual = node
      }}
    />
  )
  assert.equal(actual, expected)
})
