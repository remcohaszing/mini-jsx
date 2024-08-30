import { expect, test } from 'vitest'

test('assign properties', () => {
  const button = <button className="is-primary" type="button" />
  expect(button.tagName).toBe('BUTTON')
  expect(button.className).toBe('is-primary')
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
  expect(clickCount).toBe(1)
})

test('shallow merge object properties', () => {
  const div = <div style={{ color: 'red', backgroundColor: 'blue' }} />
  expect(div.style.color).toBe('red')
  expect(div.style.backgroundColor).toBe('blue')
})

test('set unknown properties as attributes', () => {
  const div = <div aria-busy />
  expect(div.getAttribute('aria-busy')).toBe('true')
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
  expect(div.outerHTML).toBe('<div><section><p></p></section><span></span></div>')
})

test('render string children', () => {
  const div = <div>Hello world!</div>
  expect(div.outerHTML).toBe('<div>Hello world!</div>')
})

test('render number children', () => {
  const div = <div>{42}</div>
  expect(div.outerHTML).toBe('<div>42</div>')
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
  expect(div.outerHTML).toBe('<div></div>')
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
  expect(actual).toBe(expected)
})
