/**
 * Element children supported by Mini JSX.
 */
export type Children = Children[] | Node | boolean | number | string | null | undefined;

/**
 * A function that will be called with an HTML element.
 *
 * @param node - The referenced HTML element.
 */
export type Ref<T extends keyof HTMLElementTagNameMap> = (node: HTMLElementTagNameMap[T]) => void;

/**
 * Global HTML element attributes.
 *
 * This may be extended to support new props.
 *
 * @example
 * declare module "mini-jsx" {
 *   interface Attributes<T extends keyof HTMLElementTagNameMap> {
 *     // Set the HTML class as an attribute instead of using `className`.
 *     "class"?: string;
 *   }
 * }
 */
export interface Attributes<T extends keyof HTMLElementTagNameMap> {
  /**
   * Identifies the currently active element when DOM focus is on a `composite` widget, `textbox`,
   * `group`, or `application`.
   */
  "aria-activedescendant"?: string;

  /**
   * Indicates whether assistive technologies will present all, or only parts of, the changed
   * region based on the change notifications defined by the `aria-relevant` attribute.
   */
  "aria-atomic"?: boolean;

  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the
   * user's intended value for an input and specifies how predictions would be presented if they are
   * made.
   */
  "aria-autocomplete"?: "both" | "inline" | "list" | "none";

  /**
   * Indicates an element is being modified and that assistive technologies **MAY** want to wait
   * until the modifications are complete before exposing them to the user.
   */
  "aria-busy"?: boolean;

  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   *
   * @see aria-pressed
   * @see aria-selected
   */
  "aria-checked"?: boolean | "mixed";

  /**
   * Defines the total number of columns in a `table`, `grid`, or `treegrid`.
   *
   * @see aria-colindex
   */
  "aria-colcount"?: number;

  /**
   * Defines an element's column index or position with respect to the total number of columns
   * within a `table`, `grid`, or `treegrid`.
   *
   * @see aria-colcount
   * @see aria-colspan
   */
  "aria-colindex"?: number;

  /**
   * Defines the number of columns spanned by a cell or gridcell within a `table`, `grid`, or
   * `treegrid`.
   *
   * @see aria-colindex
   * @see aria-rowspan
   *
   */
  "aria-colspan"?: number;

  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current
   * element.
   *
   * @see aria-owns
   */
  "aria-controls"?: string;

  /**
   * Indicates the element that represents the current item within a container or set of related
   * elements.
   */
  "aria-current"?: boolean | "date" | "location" | "page" | "step" | "time";

  /**
   * Identifies the element (or elements) that describes the object.
   *
   * @see aria-labelledby
   */
  "aria-describedby"?: string;

  /**
   * Identifies the element that provides a detailed, extended description for the object.
   *
   * @see aria-describedby.
   */
  "aria-details"?: string;

  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
   * operable.
   *
   * @see aria-hidden
   * @see aria-readonly
   */
  "aria-disabled"?: boolean;

  /**
   * Identifies the element that provides an error message for the object.
   *
   * @see aria-invalid
   * @see aria-describedby
   */
  "aria-errormessage"?: string;

  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded
   * or collapsed.
   */
  "aria-expanded"?: boolean;

  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at
   * the user's discretion, allows assistive technology to override the general default of reading
   * in document source order.
   */
  "aria-flowto"?: string;

  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog, that
   * can be triggered by an element.
   */
  "aria-haspopup"?: string;

  /**
   * Indicates whether the element is exposed to an accessibility API.
   *
   * @see aria-disabled
   */
  "aria-hidden"?: boolean;

  /**
   * Indicates the entered value does not conform to the format expected by the application.
   *
   * @see aria-errormessage
   */
  "aria-invalid"?: boolean | "grammar" | "spelling";

  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
   * element.
   */
  "aria-keyshortcuts"?: string;

  /**
   * Defines a string value that labels the current element.
   *
   * @see aria-labelledby
   */
  "aria-label"?: string;

  /**
   * Identifies the element (or elements) that labels the current element.
   *
   * @see aria-describedby
   */
  "aria-labelledby"?: string;

  /**
   * Defines the hierarchical level of an element within a structure.
   */
  "aria-level"?: number;

  /**
   * Indicates that an element will be updated, and describes the types of updates the user agents,
   * assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "assertive" | "off" | "polite";

  /**
   * Indicates whether an element is modal when displayed.
   */
  "aria-modal"?: boolean;

  /**
   * Indicates whether a text box accepts multiple lines of input or only a single line.
   */
  "aria-multiline"?: boolean;

  /**
   * Indicates that the user may select more than one item from the current selectable descendants.
   */
  "aria-multiselectable"?: boolean;

  /**
   * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   */
  "aria-orientation"?: "horizontal" | "vertical";

  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual
   * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
   * represent the relationship.
   *
   * @see aria-controls.
   */
  "aria-owns"?: string;

  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
   * the control has no value. A hint could be a sample value or a brief description of the expected
   * format.
   */
  "aria-placeholder"?: string;

  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not
   * required if all elements in the set are present in the DOM.
   *
   * @see aria-setsize
   */
  "aria-posinset"?: number;

  /**
   * Indicates the current "pressed" state of toggle buttons.
   *
   * @see aria-checked
   * @see aria-selected
   */
  "aria-pressed"?: boolean | "mixed";

  /**
   * Indicates that the element is not editable, but is otherwise operable.
   *
   * @see aria-disabled
   */
  "aria-readonly"?: boolean;

  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a
   * live region is modified.
   *
   * @see aria-atomic
   */
  "aria-relevant"?: "additions text" | "additions" | "all" | "removals" | "text";

  /**
   * Indicates that user input is required on the element before a form may be submitted.
   */
  "aria-required"?: boolean;

  /**
   * Defines a human-readable, author-localized description for the role of an element.
   */
  "aria-roledescription"?: string;

  /**
   * Defines the total number of rows in a `table`, `grid`, or `treegrid`.
   *
   * @see aria-rowindex
   */
  "aria-rowcount"?: number;

  /**
   * Defines an element's row index or position with respect to the total number of rows within a
   * `table`, `grid`, or `treegrid`.
   *
   * @see aria-rowcount
   * @see aria-rowspan
   */
  "aria-rowindex"?: number;

  /**
   * Defines the number of rows spanned by a cell or gridcell within a `table`, `grid`, or
   * `treegrid`.
   *
   * @see aria-rowindex
   * @see aria-colspan
   */
  "aria-rowspan"?: number;

  /**
   * Indicates the current "selected" state of various widgets.
   *
   * @see aria-checked
   * @see aria-pressed
   */
  "aria-selected"?: boolean;

  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all
   * elements in the set are present in the DOM.
   *
   * @see aria-posinset
   */
  "aria-setsize"?: number;

  /**
   * Indicates if items in a table or grid are sorted in ascending or descending order.
   */
  "aria-sort"?: "ascending" | "descending" | "none" | "other";

  /**
   * Defines the maximum allowed value for a range widget.
   */
  "aria-valuemax"?: number;

  /**
   * Defines the minimum allowed value for a range widget.
   */
  "aria-valuemin"?: number;

  /**
   * Defines the current value for a range widget.
   *
   * @see aria-valuetext
   */
  "aria-valuenow"?: number;

  /**
   * Defines the human readable text alternative of aria-valuenow for a range widget.
   */
  "aria-valuetext"?: string;

  /**
   * If defined, this function will be called with the created HTML node.
   *
   * This will be called after properties have been assigned and children have been added.
   */
  ref?: Ref<T>;

  /**
   * To support the current user scenario, this specification categorizes roles that define user
   * interface widgets (sliders, tree controls, etc.) and those that define page structure
   * (sections, navigation, etc.). Note that some assistive technologies provide special modes of
   * interaction for regions marked with role application or document.
   */
  role?:
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "navigation"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "tab"
    | "tablist"
    | "tabpanel"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem";

  /**
   * Child nodes to append to the HTML element.
   */
  children?: Children;
}

/**
 * Props that may be passed to a Mini JSX element for the specified HTML tag name.
 */
type Props<T extends keyof HTMLElementTagNameMap> = Attributes<T> &
  {
    [K in keyof Omit<
      HTMLElementTagNameMap[T],
      "children"
    >]?: HTMLElementTagNameMap[T][K] extends Function
      ? HTMLElementTagNameMap[T][K]
      : Partial<HTMLElementTagNameMap[T][K]>;
  };

/**
 * Create a DOM node.
 *
 * @param tag - The HTML tag name of the DOM node to create, or a function that returns a DOM node.
 * @param props - Properties to assign to the DOM node or props to pass to the tag function.
 *
 * @returns The created DOM node.
 */
export const jsx = <T extends keyof HTMLElementTagNameMap>(
  tag: T,
  { children, ref, ...props }: Props<T> = {}
): HTMLElementTagNameMap[T] => {
  const node = document.createElement(tag);
  const appendChildren = (child: Children): void => {
    if (Array.isArray(child)) {
      child.forEach(appendChildren);
    } else if (child != null && child !== true && child !== false) {
      node.append(child as Node);
    }
  };
  Object.entries(props).forEach(([key, value]) => {
    if (key in node) {
      type Key = keyof typeof node;
      if (node[key as Key] instanceof Object && value instanceof Object) {
        Object.assign(node[key as Key], value);
      } else {
        node[key as Key] = value as typeof node[Key];
      }
    } else {
      node.setAttribute(key, value as string);
    }
  });
  appendChildren(children);
  if (ref) {
    ref(node);
  }
  return node;
};

/**
 * This is used to support JSX with multiple children.
 *
 * @internal
 */
export const jsxs = jsx;

/**
 * This is used to support JSX in dev mode.
 *
 * @internal
 */
export const jsxDEV = jsx;

/**
 * Create a new document fragment.
 */
export function Fragment(): DocumentFragment {
  return new DocumentFragment();
}

export namespace JSX {
  /**
   * An HTML element defined using JSX.
   */
  export type Element = HTMLElement;

  /**
   * These properties can be passed to the JSX element.
   */
  export type IntrinsicElements = {
    [K in keyof HTMLElementTagNameMap]: Props<K> & {
      /**
       * This is defined to validate children defined using JSX syntax.
       */
      "{children}"?: Children;
    };
  };

  /**
   * This disallows the use of a function as JSX component.
   */
  export interface IntrinsicAttributes {}

  /**
   * This provides type checking for children and gives a better error message when specifying
   * unknown props.
   */
  export interface ElementChildrenAttribute {
    /**
     *
     */
    "{children}": never;
  }
}
