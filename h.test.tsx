import { h } from "./h";

// This is a workaround for https://github.com/facebook/jest/issues/2549
Object.defineProperty(Object, Symbol.hasInstance, {
  value: (target: object) => target != null && typeof target === "object",
});

it("assign properties", () => {
  const button = <button className="is-primary" type="button" />;
  expect(button).toBeInstanceOf(HTMLButtonElement);
  expect(button.className).toBe("is-primary");
});

it("add event handlers", () => {
  const handler = jest.fn<unknown, [MouseEvent]>();
  const button = (
    <button onblur={(event): void => event.preventDefault()} onclick={handler} type="button" />
  );
  button.dispatchEvent(new Event("click"));
  expect(handler).toHaveBeenCalledTimes(1);
});

it("shallow merge object properties", () => {
  const div = <div style={{ color: "red", backgroundColor: "blue" }} />;
  expect(div.style.color).toBe("red");
  expect(div.style.backgroundColor).toBe("blue");
});

it("set unknown properties as attributes", () => {
  const div = <div aria-busy />;
  expect(div.getAttribute("aria-busy")).toBe("true");
});

it("render element children", () => {
  const div = (
    <div>
      <figure>
        <img />
      </figure>
      <span />
    </div>
  );
  expect(div.outerHTML).toBe("<div><figure><img></figure><span></span></div>");
});

it("render string children", () => {
  const div = <div>Hello world!</div>;
  expect(div.outerHTML).toBe("<div>Hello world!</div>");
});

it("render number children", () => {
  const div = <div>{42}</div>;
  expect(div.outerHTML).toBe("<div>42</div>");
});

it("ignore boolean or null children", () => {
  const div = (
    <div>
      {true}
      {false}
      {null}
      {undefined}
    </div>
  );
  expect(div.outerHTML).toBe("<div></div>");
});

it("ref", () => {
  let actual: HTMLUListElement | undefined;
  const expected = (
    <ul
      ref={(node): void => {
        actual = node;
      }}
    />
  );
  expect(actual).toBe(expected);
});

it("without JSX or props", () => {
  const li = h("li");
  expect(li).toBeInstanceOf(HTMLLIElement);
});
