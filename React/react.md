# React Interview Questions & Answers

### Table of Contents

| No.  | Questions                                                                                                                                                                        |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      | **Core React**                                                                                                                                                                   |
| 1    | [What is React?](#what-is-react)                                                                                                                                                 |
| 2    | [What are the major features of React?](#what-are-the-major-features-of-react)                                                                                                   |
| 3    | [What is JSX?](#what-is-jsx)                                                                                                                                                     |
| 3.1  | [Is it possible to use react without JSX?](#is-it-possible-to-use-react-without-jsx)                                                                                             |
| 4    | [What is the difference between Element and Component?](#what-is-the-difference-between-element-and-component)                                                                   |
| 5    | [How to create components in React?](#how-to-create-components-in-react)                                                                                                         |
| 6    | [When to use a Class Component over a Function Component?](#when-to-use-a-class-component-over-a-function-component)                                                             |
| 7    | [What are Pure Components?](#what-are-pure-components)                                                                                                                           |
| 7.1  | [If Pure Component is better from the optimization point of view, why don't we use it by default?](#)                                                                            |
| 8    | [What is state in React?](#what-is-state-in-react)                                                                                                                               |
| 9    | [What are props in React?](#what-are-props-in-react)                                                                                                                             |
| 10   | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props)                                                                               |
| 11   | [Why should we not update the state directly?](#why-should-we-not-update-the-state-directly)                                                                                     |
| 11.1 | [Is the state updated synchronously?](#)                                                                                                                                         |
| 12   | [What is the purpose of callback function as an argument of setState()?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)                                   |
| 13   | [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling)                                                   |
| 14   | [How to bind methods or event handlers in JSX callbacks?](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks)                                                               |
| 15   | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)                                                             |
| 16   | [What are synthetic events in React?](#what-are-synthetic-events-in-react)                                                                                                       |
| 17   | [What are inline conditional expressions?](#what-are-inline-conditional-expressions)                                                                                             |
| 18   | [What is "key" prop and what is the benefit of using it in arrays of elements?](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements)                     |
| 19   | [What is the use of refs?](#what-is-the-use-of-refs)                                                                                                                             |
| 20   | [How to create refs?](#how-to-create-refs)                                                                                                                                       |
| 20.1 | [Difference between "createRef" and "useRef"](#)                                                                                                                                 |
| 21   | [What are forward refs?](#what-are-forward-refs)                                                                                                                                 |
| 22   | [React.memo VS useMemo](#react.memo-vs-usememo)                                                                                                                                  |
| 23   | [How do you memoize a component?](#how-do-you-memoize-a-component)                                                                                                               |
| 24   | [What is Virtual DOM?](#what-is-virtual-dom)                                                                                                                                     |
| 25   | [How Virtual DOM works?](#how-virtual-dom-works)                                                                                                                                 |
| 26   | [What is the difference between Shadow DOM and Virtual DOM?](#what-is-the-difference-between-shadow-dom-and-virtual-dom)                                                         |
| 27   | [What is React Fiber?](#what-is-react-fiber)                                                                                                                                     |
| 28   | [What is the main goal of React Fiber?](#what-is-the-main-goal-of-react-fiber)                                                                                                   |
| 29   | [What are controlled components?](#what-are-controlled-components)                                                                                                               |
| 30   | [What are uncontrolled components?](#what-are-uncontrolled-components)                                                                                                           |
| 30.1 | [Controlled Uncontrolled VS Uncontrolled inputs.](#)                                                                                                                             |
| 31   | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement)                                                 |
| 32   | [What is Lifting State Up in React?](#what-is-lifting-state-up-in-react)                                                                                                         |
| 33   | [What are the different phases of component lifecycle?](#what-are-the-different-phases-of-component-lifecycle)                                                                   |
| 34   | [What are the lifecycle methods of React?](#what-are-the-lifecycle-methods-of-react)                                                                                             |
| 35   | [What are Higher-Order components?](#what-are-higher-order-components)                                                                                                           |
| 36   | [How to fetch data with React Hooks?](#how-to-fetch-data-with-react-hooks)                                                                                                       |
| 37   | [What is context?](#what-is-context)                                                                                                                                             |
| 38   | [What is children prop?](#what-is-children-prop)                                                                                                                                 |
| 39   | [What is prop drilling?](#what-is-prop-drilling)                                                                                                                                 |
| 40   | [What is the purpose of using super constructor with props argument?](#what-is-the-purpose-of-using-super-constructor-with-props-argument)                                       |
| 41   | [What is reconciliation?](#what-is-reconciliation)                                                                                                                               |
| 42   | [How do you conditionally render components?](#how-do-you-conditionally-render-components)                                                                                       |
| 43   | [What are error boundaries in React v16](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders)                                            |
| 44   | [What are hooks?](#what-are-hooks)                                                                                                                                               |
| 44.1 | [React hooks rules](#)                                                                                                                                                           |
| 45   | [Why React uses className over class attribute?](#why-react-uses-classname-over-class-attribute)                                                                                 |
| 46   | [What are fragments?](#what-are-fragments)                                                                                                                                       |
| 47   | [Why fragments are better than container divs?](#why-fragments-are-better-than-container-divs)                                                                                   |
| 48   | [What are portals in React?](#what-are-portals-in-react)                                                                                                                         |
| 49   | [What are stateless components?](#what-are-stateless-components)                                                                                                                 |
| 50   | [What are stateful components?](#what-are-stateful-components)                                                                                                                   |
|      | **React Redux**                                                                                                                                                                  |
| 51   | [What is Flux?](#what-is-flux)                                                                                                                                                   |
| 52   | [What is Redux?](#what-is-redux)                                                                                                                                                 |
| 52.1 | [What hooks does Redux have](#)                                                                                                                                                  |
| 53   | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux)                                                                                                 |
| 54   | [What are the downsides of Redux compared to Flux?](#what-are-the-downsides-of-redux-compared-to-flux)                                                                           |
| 56   | [What is the difference between mapStateToProps() and mapDispatchToProps()?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)                             |
| 57   | [Can I dispatch an action in reducer?](#can-i-dispatch-an-action-in-reducer)                                                                                                     |
| 58   | [How to access Redux store outside a component?](#how-to-access-redux-store-outside-a-component)                                                                                 |
| 59   | [What are the drawbacks of MVW pattern](#what-are-the-drawbacks-of-mvw-pattern)                                                                                                  |
| 60   | [Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs)                                                                         |
| 61   | [How to dispatch an action on load?](#how-to-dispatch-an-action-on-load)                                                                                                         |
| 62   | [How to use connect from React Redux?](#how-to-use-connect-from-react-redux)                                                                                                     |
| 63   | [How to reset state in Redux?](#how-to-reset-state-in-redux)                                                                                                                     |
| 64   | [Whats the purpose of at symbol in the redux connect decorator?](#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator)                                                 |
| 65   | [What is the difference between React context and React Redux?](#what-is-the-difference-between-react-context-and-react-redux)                                                   |
| 66   | [Why are Redux state functions called reducers?](#why-are-redux-state-functions-called-reducers)                                                                                 |
| 67   | [How to make AJAX request in Redux?](#how-to-make-ajax-request-in-redux)                                                                                                         |
| 68   | [Should I keep all component's state in Redux store?](#should-i-keep-all-components-state-in-redux-store)                                                                        |
| 69   | [What is the proper way to access Redux store?](#what-is-the-proper-way-to-access-redux-store)                                                                                   |
| 70   | [What is the difference between component and container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux)                                 |
| 71   | [What is the purpose of the constants in Redux? ](#what-is-the-purpose-of-the-constants-in-redux)                                                                                |
| 72   | [What are the different ways to write mapDispatchToProps()?](#what-are-the-different-ways-to-write-mapdispatchtoprops)                                                           |
| 73   | [What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?](#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops) |
| 74   | [How to structure Redux top level directories?](#how-to-structure-redux-top-level-directories)                                                                                   |
| 75   | [What is redux-saga?](#what-is-redux-saga)                                                                                                                                       |
| 76   | [What is the mental model of redux-saga?](#what-is-the-mental-model-of-redux-saga)                                                                                               |
| 77   | [What are the differences between call and put in redux-saga](#what-are-the-differences-between-call-and-put-in-redux-saga)                                                      |
| 78   | [What is Redux Thunk?](#what-is-redux-thunk)                                                                                                                                     |
| 79   | [What are the differences between redux-saga and redux-thunk](#what-are-the-differences-between-redux-saga-and-redux-thunk)                                                      |
| 80   | [What is Redux DevTools?](#what-is-redux-devtools)                                                                                                                               |
| 81   | [What are the features of Redux DevTools?](#what-are-the-features-of-redux-devtools)                                                                                             |
| 82   | [What are Redux selectors and Why to use them?](#what-are-redux-selectors-and-why-to-use-them)                                                                                   |
| 83   | [What is Redux Form?](#what-is-redux-form)                                                                                                                                       |
| 84   | [What are the main features of Redux Form?](#what-are-the-main-features-of-redux-form)                                                                                           |
| 85   | [How to add multiple middlewares to Redux?](#how-to-add-multiple-middlewares-to-redux)                                                                                           |
| 86   | [How to set initial state in Redux?](#how-to-set-initial-state-in-redux)                                                                                                         |
| 87   | [How Relay is different from Redux?](#how-relay-is-different-from-redux)                                                                                                         |
| 88   | [What is an action in Redux?](#what-is-an-action-in-redux)                                                                                                                       |
|      | **React Router**                                                                                                                                                                 |
| 89   | [What is React Router?](#what-is-react-router)                                                                                                                                   |
| 90   | [Why do we need to React Router?](#why-do-we-need-to-react-router)                                                                                                                                           |
| 91   | [What are the main benefits of using React Router?](#what-are-the-main-benefits-of-using-react-router)                                                                                                                                           |
| 92   | [How is React routing different from conventional routing?](#how-is-react-routing-different-from-conventional-routing)                                                                                                                                           |
| 93   | [How React Router is different from history library?](#how-react-router-is-different-from-history-library)                                                                       |
| 94   | [What is the purpose of push and replace methods of history?](#what-is-the-purpose-of-push-and-replace-methods-of-history)                                                       |
| 95   | [How do you implement React routing?](#how-do-you-implement-react-routing?)                                                       |
| 96   | [What is the purpose of Outlet component?](#what-is-the-purpose-of-outlet-component)                                                       |
| 97   | [What is nested routing?](#what-is-nested-routing)                                                       |
| 98   | [How to do nested routing?](#how-to-do-nested-routing)                                                       |
| 99   | [How to suspense routing with route splitting?](#how-to-suspense-routing-with-route-splitting)                                                       |
| 100  | [How to do redirect?](#how-to-do-redirect)                                                       |
| 101  | [How to navigate backward and forward?](#how-to-navigate-backward-and-forward)                                                       |
| 102  | [How to create a protected (private) route?](#how-to-create-a-protected-private-route?)                                                       |
| 103  | [What are some ways that you can share data among routes in React Router?](#what-are-some-ways-that-you-can-share-data-among-routes-in-react-router)                                                       |
| 104  | [What are the differences between types of routing: Hash, Browser, Memory?](#what-are-the-differences-between-types-of-routing-hash-Browser-Memory)                                                       |
| 105  | [How to get search params?](#how-to-get-search-params)                                                       |
| 106  | [How to implement default or NotFound page?](#how-to-implement-default-or-notfound-page)                                                                                         |
| 107  | [What are the differences between v5 and v6?](#what-are-the-differences-between-v5-and-v6)                                                                                    |
| 108  | [Have you ever upgraded the major version of router? If yes, what issues you faced?](#have-you-ever-upgraded-the-major-version-of-router-if-yes-what-issues-you-faced)                                                                                         |

## Core React

1. ### What is React?

    React is an **open-source front-end JavaScript library** that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by [Jordan Walke](https://github.com/jordwalke), a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

    **[⬆ Back to Top](#table-of-contents)**

2. ### What are the major features of React?

    The major features of React are:

    - It uses **VirtualDOM** instead of RealDOM considering that RealDOM manipulations are expensive.
    - Supports **server-side rendering**.
    - Follows **Unidirectional** data flow or data binding.
    - Uses **reusable/composable** UI components to develop the view.

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is JSX?

    _JSX_ is a XML-like syntax extension to ECMAScript (the acronym stands for _JavaScript XML_). Basically it just provides syntactic sugar for the `React.createElement()` function, giving us expressiveness of JavaScript along with HTML like template syntax.

    In the example below text inside `<h1>` tag is returned as JavaScript function to the render function.

    ```jsx harmony
    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>{"Welcome to React world!"}</h1>
          </div>
        );
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

4. ### Is it possible to use react without JSX?(#is-it-possible-to-use-react-without-jsx)

    Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, ...children)`.

    For example, let us take a greeting example with JSX,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return <div>Hello {this.props.message}</div>;
       }
     }

     ReactDOM.render(
       <Greeting message="World" />,
       document.getElementById('root')
     );
     ```

     You can write the same code without JSX as below,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return React.createElement('div', null, `Hello ${this.props.message}`);
       }
     }

     ReactDOM.render(
       React.createElement(Greeting, {message: 'World'}, null),
       document.getElementById('root')
     );
     ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the difference between Element and Component?

    An _Element_ is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. _Elements_ can contain other _Elements_ in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

    The object representation of React Element would be as follows:

    ```javascript
    const element = React.createElement("div", { id: "login-btn" }, "Login");
    ```

    The above `React.createElement()` function returns an object:

    ```
    {
      type: 'div',
      props: {
        children: 'Login',
        id: 'login-btn'
      }
    }
    ```

    And finally it renders to the DOM using `ReactDOM.render()`:

    ```html
    <div id="login-btn">Login</div>
    ```

    Whereas a **component** can be declared in several different ways. It can be a class with a `render()` method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

    ```javascript
    const Button = ({ onLogin }) => (
      <div id={"login-btn"} onClick={onLogin}>
        Login
      </div>
    );
    ```

    Then JSX gets transpiled to a `React.createElement()` function tree:

    ```javascript
    const Button = ({ onLogin }) =>
      React.createElement(
        "div",
        { id: "login-btn", onClick: onLogin },
        "Login"
      );
    ```

    **[⬆ Back to Top](#table-of-contents)**

6. ### How to create components in React?

    There are two possible ways to create a component.

    1. **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements:

       ```jsx harmony
       function Greeting({ message }) {
         return <h1>{`Hello, ${message}`}</h1>;
       }
       ```

    2. **Class Components:** You can also use ES6 class to define a component. The above function component can be written as:

       ```jsx harmony
       class Greeting extends React.Component {
         render() {
           return <h1>{`Hello, ${this.props.message}`}</h1>;
         }
       }
       ```

    **[⬆ Back to Top](#table-of-contents)**

7. ### When to use a Class Component over a Function Component?

    If the component needs _state or lifecycle methods_ then use class component otherwise use function component.
    _However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component._
    _So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries _

    **[⬆ Back to Top](#table-of-contents)**

8. ### What are Pure Components?

    _`React.PureComponent`_ is exactly the same as _`React.Component`_ except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, _PureComponent_ will do a shallow comparison on both props and state. _Component_ on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called.

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is state in React?

    _State_ of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

    Let's create a user component with message state,

    ```jsx harmony
    class User extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          message: "Welcome to React world",
        };
      }

      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        );
      }
    }
    ```

    ![state](../../images/state.jpg)

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are props in React?

     _Props_ are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

     The primary purpose of props in React is to provide following component functionality:

     1. Pass custom data to your component.
     2. Trigger state changes.
     3. Use via `this.props.reactProp` inside component's `render()` method.

     For example, let us create an element with `reactProp` property:

     ```jsx harmony
     <Element reactProp={"1"} />
     ```

     This `reactProp` (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

     ```
     props.reactProp
     ```

    Props should not be changed directly

     **[⬆ Back to Top](#table-of-contents)**

11. ### What is the difference between state and props?

    Both _props_ and _state_ are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

    **[⬆ Back to Top](#table-of-contents)**

12. ### Why should we not update the state directly?

    If you try to update the state directly then it won't re-render the component.

    ```javascript
    //Wrong
    this.state.message = "Hello world";
    ```

    Instead use `setState()` method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

    ```javascript
    //Correct
    this.setState({ message: "Hello World" });
    ```

    **Note:** You can directly assign to the state object either in _constructor_ or using latest javascript's class field declaration syntax.

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is the purpose of callback function as an argument of `setState()`?

    The callback function is invoked when setState finished and the component gets rendered. Since `setState()` is **asynchronous** the callback function is used for any post action.

    **Note:** It is recommended to use lifecycle method rather than this callback function.

    ```javascript
    setState({ name: "John" }, () =>
      console.log("The name has updated and component re-rendered")
    );
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is the difference between HTML and React event handling?

    Below are some of the main differences between HTML and React event handling,

    1. In HTML, the event name usually represents in _lowercase_ as a convention:

       ```html
       <button onclick="activateLasers()"></button>
       ```

       Whereas in React it follows _camelCase_ convention:

       ```jsx harmony
       <button onClick={activateLasers}>
       ```

    2. In HTML, you can return `false` to prevent default behavior:

       ```html
       <a
         href="#"
         onclick='console.log("The link was clicked."); return false;'
       />
       ```

       Whereas in React you must call `preventDefault()` explicitly:

       ```javascript
       function handleClick(event) {
         event.preventDefault();
         console.log("The link was clicked.");
       }
       ```

    3. In HTML, you need to invoke the function by appending `()`
       Whereas in react you should not append `()` with the function name. (refer "activateLasers" function in the first point for example)

    **[⬆ Back to Top](#table-of-contents)**

15. ### How to bind methods or event handlers in JSX callbacks?

    There are 3 possible ways to achieve this:

    1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

       ```javascript
       class Foo extends Component {
         constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this);
         }
         handleClick() {
           console.log("Click happened");
         }
         render() {
           return <button onClick={this.handleClick}>Click Me</button>;
         }
       }
       ```

    2. **Public class fields syntax:** If you don't like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks.

       ```jsx harmony
       handleClick = () => {
         console.log("this is:", this);
       };
       ```

       ```jsx harmony
       <button onClick={this.handleClick}>{"Click me"}</button>
       ```

    3. **Arrow functions in callbacks:** You can use _arrow functions_ directly in the callbacks.

       ```jsx harmony
       handleClick() {
           console.log('Click happened');
       }
       render() {
           return <button onClick={() => this.handleClick()}>Click Me</button>;
       }
       ```

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

    **[⬆ Back to Top](#table-of-contents)**

16. ### How to pass a parameter to an event handler or callback?

    You can use an _arrow function_ to wrap around an _event handler_ and pass parameters:

    ```jsx harmony
    <button onClick={() => this.handleClick(id)} />
    ```

    This is an equivalent to calling `.bind`:

    ```jsx harmony
    <button onClick={this.handleClick.bind(this, id)} />
    ```

    Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

    ```jsx harmony
    <button onClick={this.handleClick(id)} />;
    handleClick = (id) => () => {
      console.log("Hello, your ticket number is", id);
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

17. ### What are synthetic events in React?

    `SyntheticEvent` is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

    **[⬆ Back to Top](#table-of-contents)**

18. ### What are inline conditional expressions?

    You can use either _if statements_ or _ternary expressions_ which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator `&&`.

    ```jsx harmony
    <h1>Hello!</h1>;
    {
      messages.length > 0 && !isLogin ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You don't have unread messages.</h2>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is "key" prop and what is the benefit of using it in arrays of elements?

    A `key` is a special string attribute you **should** include when creating arrays of elements. _Key_ prop helps React identify which items have changed, are added, or are removed.

    Most often we use ID from our data as _key_:

    ```jsx harmony
    const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
    ```

    When you don't have stable IDs for rendered items, you may use the item _index_ as a _key_ as a last resort:

    ```jsx harmony
    const todoItems = todos.map((todo, index) => (
      <li key={index}>{todo.text}</li>
    ));
    ```

    **Note:**

    1. Using _indexes_ for _keys_ is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
    2. If you extract list item as separate component then apply _keys_ on list component instead of `li` tag.
    3. There will be a warning message in the console if the `key` prop is not present on list items.

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the use of refs?

    The _ref_ is used to return a reference to the element. They _should be avoided_ in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

    **[⬆ Back to Top](#table-of-contents)**

21. ### How to create refs?

    There are two approaches

    1. This is a recently added approach. _Refs_ are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.

       ```jsx harmony
       class MyComponent extends React.Component {
         constructor(props) {
           super(props);
           this.myRef = React.createRef();
         }
         render() {
           return <div ref={this.myRef} />;
         }
       }
       ```

    2. You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,
       ```jsx harmony
       class SearchBar extends Component {
         constructor(props) {
           super(props);
           this.txtSearch = null;
           this.state = { term: "" };
           this.setInputSearchRef = (e) => {
             this.txtSearch = e;
           };
         }
         onInputChange(event) {
           this.setState({ term: this.txtSearch.value });
         }
         render() {
           return (
             <input
               value={this.state.term}
               onChange={this.onInputChange.bind(this)}
               ref={this.setInputSearchRef}
             />
           );
         }
       }
       ```

    You can also use _refs_ in function components using **closures**.
    **Note**: You can also use inline ref callbacks even though it is not a recommended approach.

    **[⬆ Back to Top](#table-of-contents)**

22. ### React.memo VS useMemo

    React.memo is a higher-order component (or HOC for short) 
    which accepts a react component and an optional function that uses props to conditionally update the component using memoization, whereas useMemo is a react hook that will accept a function and a dependency array and then memoize the value returned from the function passed into it.

    React.memo example
    ```jsx harmony
    export function MyReactComponent({ myNumber }) {
      return <p>{myNumber * 5}</p>
    }

    export default React.memo(MyReactComponent, function areEqual(
      prevProps,
      nextProps
    ) {
    if (prevProps.myNumber !== nextProps.myNumber) {
      return false
    }
      return true
    })
    ```
    useMemo example:
    ```jsx harmony
    const ButtonElement = React.forwardRef((props, ref) => (
      <button ref={ref} className="CustomButton">
        {props.children}
      </button>
    ));

    // Create ref to the DOM button:
    export function MyReactComponent({ myNumber }) {
    const result = useMemo(() => myNumber * 5, [myNumber])
      return <p>{result}</p>
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### Which is preferred option with in callback refs and findDOMNode()?

    It is preferred to use _callback refs_ over `findDOMNode()` API. Because `findDOMNode()` prevents certain improvements in React in the future.

    The **legacy** approach of using `findDOMNode`:

    ```javascript
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView();
      }

      render() {
        return <div />;
      }
    }
    ```

    The recommended approach is:

    ```javascript
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.node = createRef();
      }
      componentDidMount() {
        this.node.current.scrollIntoView();
      }

      render() {
        return <div ref={this.node} />;
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

24. ### How do you memoize a component?

    There are memoize libraries available which can be used on function components.

    For example `moize` library can memoize the component in another component.

    ```jsx harmony
    import moize from "moize";
    import Component from "./components/Component"; // this module exports a non-memoized component

    const MemoizedFoo = moize.react(Component);

    const Consumer = () => {
      <div>
        {"I will memoize the following entry:"}
        <MemoizedFoo />
      </div>;
    };
    ```

    **Update:** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

    ```js
    const MemoComponent = React.memo(function MemoComponent(props) {
      /* render using props */
    });
    OR;
    export default React.memo(MyFunctionComponent);
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What is Virtual DOM?

    The _Virtual DOM_ (VDOM) is an in-memory representation of _Real DOM_. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called _reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

26. ### How Virtual DOM works?

    The _Virtual DOM_ works in three simple steps.

    1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

       ![vdom](../../images/vdom1.png)

    2. Then the difference between the previous DOM representation and the new one is calculated.

       ![vdom2](../../images/vdom2.png)

    3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

       ![vdom3](../../images/vdom3.png)

    **[⬆ Back to Top](#table-of-contents)**

27. ### What is the difference between Shadow DOM and Virtual DOM?

    The _Shadow DOM_ is a browser technology designed primarily for scoping variables and CSS in _web components_. The _Virtual DOM_ is a concept implemented by libraries in JavaScript on top of browser APIs.

    **[⬆ Back to Top](#table-of-contents)**

28. ### What is React Fiber?

    Fiber is the new _reconciliation_ engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

    **[⬆ Back to Top](#table-of-contents)**

29. ### What is the main goal of React Fiber?

    The goal of _React Fiber_ is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

    _from documentation_

    Its main goals are:

    1. Ability to split interruptible work in chunks.
    2. Ability to prioritize, rebase and reuse work in progress.
    3. Ability to yield back and forth between parents and children to support layout in React.
    4. Ability to return multiple elements from render().
    5. Better support for error boundaries.

    **[⬆ Back to Top](#table-of-contents)**

30. ### What are controlled components?

    A component that controls the input elements within the forms on subsequent user input is called **Controlled Component**, i.e, every state mutation will have an associated handler function.

    For example, to write all the names in uppercase letters, we use handleChange as below,

    ```javascript
    handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

31. ### What are uncontrolled components?

    The **Uncontrolled Components** are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

    In the below UserProfile component, the `name` input is accessed using ref.

    ```jsx harmony
    class UserProfile extends React.Component {
      constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }

      handleSubmit(event) {
        alert("A name was submitted: " + this.input.current.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              {"Name:"}
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ```

    In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

    **[⬆ Back to Top](#table-of-contents)**

32. ### What is the difference between createElement and cloneElement?

    JSX elements will be transpiled to `React.createElement()` functions to create React elements which are going to be used for the object representation of UI. Whereas `cloneElement` is used to clone an element and pass it new props.

    **[⬆ Back to Top](#table-of-contents)**

33. ### What is Lifting State Up in React?

    When several components need to share the same changing data then it is recommended to _lift the shared state up_ to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

    **[⬆ Back to Top](#table-of-contents)**

34. ### What are the different phases of component lifecycle?

    The component lifecycle has three distinct lifecycle phases:

    1. **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from `constructor()`, `getDerivedStateFromProps()`, `render()`, and `componentDidMount()` lifecycle methods.

    2. **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from `setState()` or `forceUpdate()`. This phase covers `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.

    3. **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.

    It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

    1. **Render** The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

    2. **Pre-commit** Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the `getSnapshotBeforeUpdate()`.

    3. **Commit** React works with the DOM and executes the final lifecycles respectively `componentDidMount()` for mounting, `componentDidUpdate()` for updating, and `componentWillUnmount()` for unmounting.

    React 16.3+ Phases (or an [interactive version](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

    ![phases 16.4+](../../images/phases16.4.png)

    Before React 16.3

    ![phases 16.2](../../images/phases.png)

    **[⬆ Back to Top](#table-of-contents)**

35. ### What are the lifecycle methods of React?

    Before React 16.3

    - **componentWillMount:** Executed before rendering and is used for App level configuration in your root component.
    - **componentDidMount:** Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **componentWillReceiveProps:** Executed when particular prop updates to trigger state transitions.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns `true`. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    - **componentWillUpdate:** Executed before re-rendering the component when there are props & state changes confirmed by `shouldComponentUpdate()` which returns true.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
    - **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    React 16.3+

    - **getDerivedStateFromProps:** Invoked right before calling `render()` and is invoked on _every_ render. This exists for rare use cases where you need a derived state. Worth reading [if you need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default, it returns `true`. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
    - **getSnapshotBeforeUpdate:** Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into `componentDidUpdate()`. This is useful to capture information from the DOM i.e. scroll position.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes. This will not fire if `shouldComponentUpdate()` returns `false`.
    - **componentWillUnmount** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    **[⬆ Back to Top](#table-of-contents)**

36. ### What are Higher-Order Components?

    A _higher-order component_ (_HOC_) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

    We call them **pure components** because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

    ```javascript
    const EnhancedComponent = higherOrderComponent(WrappedComponent);
    ```

    HOC can be used for many use cases:

    1. Code reuse, logic and bootstrap abstraction.
    2. Render hijacking.
    3. State abstraction and manipulation.
    4. Props manipulation.

    **[⬆ Back to Top](#table-of-contents)**

37. ### How to fetch data with React Hooks?
     The effect hook called `useEffect` is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook’s update function.

     Let's take an example in which it fetches list of react articles from the API

     ```javascript
     import React, { useState, useEffect } from 'react';
     import axios from 'axios';

     function App() {
       const [data, setData] = useState({ hits: [] });

       useEffect(() => {
         (async () => {
           const result = await axios(
             'http://hn.algolia.com/api/v1/search?query=react',
           );

           setData(result.data);
         })()
       }, []);

       return (
         <ul>
           {data.hits.map(item => (
             <li key={item.objectID}>
               <a href={item.url}>{item.title}</a>
             </li>
           ))}
         </ul>
       );
     }

     export default App;
     ```

     Remember we provided an empty array as second argument to the effect hook to avoid activating it on component updates but only on mounting of the component. i.e, It fetches only on component mount.

   **[⬆ Back to Top](#table-of-contents)**

38. ### What is context?

    _Context_ provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

    ```javascript
    const { Provider, Consumer } = React.createContext(defaultValue);
    ```

    **[⬆ Back to Top](#table-of-contents)**

39. ### What is children prop?

    _Children_ is a prop (`this.props.children`) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as `children` prop.

    There are several methods available in the React API to work with this prop. These include `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only`, `React.Children.toArray`.

    A simple usage of children prop looks as below,

    ```jsx harmony
    const MyDiv = React.createClass({
      render: function () {
        return <div>{this.props.children}</div>;
      },
    });

    ReactDOM.render(
      <MyDiv>
        <span>{"Hello"}</span>
        <span>{"World"}</span>
      </MyDiv>,
      node
    );
    ```

    **[⬆ Back to Top](#table-of-contents)**

40. ### What is prop drilling?
    Prop Drilling is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.

**[⬆ Back to Top](#table-of-contents)**

40. ### What is the purpose of using super constructor with props argument?

    A child class constructor cannot make use of `this` reference until the `super()` method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to `super()` call is to access `this.props` in your child constructors.

    **Passing props:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        console.log(this.props); // prints { name: 'John', age: 42 }
      }
    }
    ```

    **Not passing props:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super();

        console.log(this.props); // prints undefined

        // but props parameter is still available
        console.log(props); // prints { name: 'John', age: 42 }
      }

      render() {
        // no difference outside constructor
        console.log(this.props); // prints { name: 'John', age: 42 }
      }
    }
    ```

    The above code snippets reveals that `this.props` is different only within the constructor. It would be the same outside the constructor.

    **[⬆ Back to Top](#table-of-contents)**

41. ### What is reconciliation?

    When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called _reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

42. ### How do you conditionally render components?

    In some cases you want to render different components depending on some state. JSX does not render `false` or `undefined`, so you can use conditional *short-circuiting* to render a given part of your component only if a certain condition is true.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address &&
          <p>{address}</p>
        }
      </div>
    )
    ```

    If you need an `if-else` condition then use *ternary operator*.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address
          ? <p>{address}</p>
          : <p>{'Address is not available'}</p>
        }
      </div>
    )
    ```


   **[⬆ Back to Top](#table-of-contents)**

43. ### What are error boundaries in React v16?

    *Error boundaries* are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)` or `static getDerivedStateFromError() `:

    ```jsx harmony
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = { hasError: false }
      }

      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info)
      }

      static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>{'Something went wrong.'}</h1>
        }
        return this.props.children
      }
    }
    ```

    After that use it as a regular component:

    ```jsx harmony
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
    ```


   **[⬆ Back to Top](#table-of-contents)**

44. ### What are hooks?

    that lets you use state and other React features without writing a class.

    Let's see an example of useState hook:

    ```jsx
    import { useState } from "react";

    function Example() {
      // Declare a new state variable, which we'll call "count"
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### Why React uses `className` over `class` attribute?

    `class` is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses `className` instead of `class`. Pass a string as the `className` prop.

    ```jsx harmony
    render() {
      return <span className={'menu navigation-menu'}>{'Menu'}</span>
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

46. ### What are fragments?

    It's a common pattern in React which is used for a component to return multiple elements. _Fragments_ let you group a list of children without adding extra nodes to the DOM.

    ```jsx harmony
    render() {
      return (
        <React.Fragment>
          <ChildA />
          <ChildB />
          <ChildC />
        </React.Fragment>
      )
    }
    ```

    There is also a _shorter syntax_, but it's not supported in many tools:

    ```jsx harmony
    render() {
      return (
        <>
          <ChildA />
          <ChildB />
          <ChildC />
        </>
      )
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

47. ### Why fragments are better than container divs?

    Below are the list of reasons,

    1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    2. Some CSS mechanisms like _Flexbox_ and _CSS Grid_ have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    3. The DOM Inspector is less cluttered.

    **[⬆ Back to Top](#table-of-contents)**

48. ### What are portals in React?

    _Portal_ is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

    ```javascript
    ReactDOM.createPortal(child, container);
    ```

    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

    **[⬆ Back to Top](#table-of-contents)**

49. ### What are stateless components?

    If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether.

    **[⬆ Back to Top](#table-of-contents)**

50. ### What are stateful components?

    If the behaviour of a component is dependent on the _state_ of the component then it can be termed as stateful component. These _stateful components_ are always _class components_ and have a state that gets initialized in the `constructor`.

    ```javascript
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        // ...
      }
    }
    ```

    **React 16.8 Update:**

    Hooks let you use state and other React features without writing classes.

    _The Equivalent Functional Component_

        ```javascript
         import React, {useState} from 'react';

         const App = (props) => {
           const [count, setCount] = useState(0);

           return (
             // JSX
           )
         }
        ```

    **[⬆ Back to Top](#table-of-contents)**

## React Redux

**[⬆ Back to Top](#table-of-contents)**

51. ### What is flux?

     _Flux_ is an _application design paradigm_ used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

     ![flux](../../images/flux.png)

**[⬆ Back to Top](#table-of-contents)**

52. ### What is Redux?

     _Redux_ is a predictable state container for JavaScript apps based on the _Flux design pattern_. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

**[⬆ Back to Top](#table-of-contents)**

53. ### What are the core principles of Redux?

     Redux follows three fundamental principles:

     1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
     2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
     3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

**[⬆ Back to Top](#table-of-contents)**

54. ### What are the downsides of Redux compared to Flux?

     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

     1. **You will need to learn to avoid mutations:** Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like `redux-immutable-state-invariant`, Immutable.js, or instructing your team to write non-mutating code.
     2. **You're going to have to carefully pick your packages:** While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
     3. **There is no nice Flow integration yet:** Flux currently lets you do very impressive static type checks which Redux doesn't support yet.

**[⬆ Back to Top](#table-of-contents)**

55. ### What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?

     `mapStateToProps()` is a utility which helps your component get updated state (which is updated by some other components):

     ```javascript
     const mapStateToProps = (state) => {
       return {
         todos: getVisibleTodos(state.todos, state.visibilityFilter),
       };
     };
     ```

     `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

     ```javascript
     const mapDispatchToProps = (dispatch) => {
       return {
         onTodoClick: (id) => {
           dispatch(toggleTodo(id));
         },
       };
     };
     ```

     It is recommended to always use the “object shorthand” form for the `mapDispatchToProps`.

     Redux wraps it in another function that looks like (…args) => dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

     ```javascript
     const mapDispatchToProps = {
       onTodoClick,
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

56. ### Can I dispatch an action in reducer?

     Dispatching an action within a reducer is an **anti-pattern**. Your reducer should be _without side effects_, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

**[⬆ Back to Top](#table-of-contents)**

57. ### How to access Redux store outside a component?

     You just need to export the store from the module where it created with `createStore()`. Also, it shouldn't pollute the global window object.

     ```javascript
     store = createStore(myReducer);

     export default store;
     ```

**[⬆ Back to Top](#table-of-contents)**

58. ### What are the drawbacks of MVW pattern?

     1. DOM manipulation is very expensive which causes applications to behave slow and inefficient.
     2. Due to circular dependencies, a complicated model was created around models and views.
     3. Lot of data changes happens for collaborative applications(like Google Docs).
     4. No way to do undo (travel back in time) easily without adding so much extra code.

**[⬆ Back to Top](#table-of-contents)**

59. ### Are there any similarities between Redux and RxJS?

     These libraries are very different for very different purposes, but there are some vague similarities.

     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.

**[⬆ Back to Top](#table-of-contents)**

60. ### How to dispatch an action on load?

     You can dispatch an action in `componentDidMount()` method and in `render()` method you can verify the data.

     ```javascript
     class App extends Component {
       componentDidMount() {
         this.props.fetchData();
       }

       render() {
         return this.props.isLoaded ? (
           <div>{"Loaded"}</div>
         ) : (
           <div>{"Not Loaded"}</div>
         );
       }
     }

     const mapStateToProps = (state) => ({
       isLoaded: state.isLoaded,
     });

     const mapDispatchToProps = { fetchData };

     export default connect(mapStateToProps, mapDispatchToProps)(App);
     ```

**[⬆ Back to Top](#table-of-contents)**

61. ### How to use `connect()` from React Redux?

     You need to follow two steps to use your store in your container:

     1. **Use `mapStateToProps()`:** It maps the state variables from your store to the props that you specify.
     2. **Connect the above props to your container:** The object returned by the `mapStateToProps` function is connected to the container. You can import `connect()` from `react-redux`.

        ```jsx harmony
        import React from "react";
        import { connect } from "react-redux";

        class App extends React.Component {
          render() {
            return <div>{this.props.containerData}</div>;
          }
        }

        function mapStateToProps(state) {
          return { containerData: state.data };
        }

        export default connect(mapStateToProps)(App);
        ```

**[⬆ Back to Top](#table-of-contents)**

62. ### How to reset state in Redux?

     You need to write a _root reducer_ in your application which delegate handling the action to the reducer generated by `combineReducers()`.

     For example, let us take `rootReducer()` to return the initial state after `USER_LOGOUT` action. As we know, reducers are supposed to return the initial state when they are called with `undefined` as the first argument, no matter the action.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     });

     const rootReducer = (state, action) => {
       if (action.type === "USER_LOGOUT") {
         state = undefined;
       }

       return appReducer(state, action);
     };
     ```

     In case of using `redux-persist`, you may also need to clean your storage. `redux-persist` keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

     ```javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     });

     const rootReducer = (state, action) => {
       if (action.type === "USER_LOGOUT") {
         Object.keys(state).forEach((key) => {
           storage.removeItem(`persist:${key}`);
         });

         state = undefined;
       }

       return appReducer(state, action);
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

63. ### Whats the purpose of `at` symbol in the Redux connect decorator?

     The **@** symbol is in fact a JavaScript expression used to signify decorators. _Decorators_ make it possible to annotate and modify classes and properties at design time.

     Let's take an example setting up Redux without and with a decorator.

     - **Without decorator:**

       ```javascript
       import React from "react";
       import * as actionCreators from "./actionCreators";
       import { bindActionCreators } from "redux";
       import { connect } from "react-redux";

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       class MyApp extends React.Component {
         // ...define your main app here
       }

       export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
       ```

     - **With decorator:**

       ```javascript
       import React from "react";
       import * as actionCreators from "./actionCreators";
       import { bindActionCreators } from "redux";
       import { connect } from "react-redux";

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       @connect(mapStateToProps, mapDispatchToProps)
       export default class MyApp extends React.Component {
         // ...define your main app here
       }
       ```

     The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.

**[⬆ Back to Top](#table-of-contents)**

64. ### What is the difference between React context and React Redux?

     You can use **Context** in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

     Whereas **Redux** is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.

**[⬆ Back to Top](#table-of-contents)**

65. ### Why are Redux state functions called reducers?

     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could _reduce_ a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.

**[⬆ Back to Top](#table-of-contents)**

66. ### How to make AJAX request in Redux?

     You can use `redux-thunk` middleware which allows you to define async actions.

     Let's take an example of fetching specific account as an AJAX call using _fetch API_:

     ```javascript
     export function fetchAccount(id) {
       return (dispatch) => {
         dispatch(setLoadingAccountState()); // Show a loading spinner
         fetch(`/account/${id}`, (response) => {
           dispatch(doneFetchingAccount()); // Hide loading spinner
           if (response.status === 200) {
             dispatch(setAccount(response.json)); // Use a normal function to set the received state
           } else {
             dispatch(someError);
           }
         });
       };
     }

     function setAccount(data) {
       return { type: "SET_Account", data: data };
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

67. ### Should I keep all component's state in Redux store?

     Keep your data in the Redux store, and the UI related state internally in the component.

**[⬆ Back to Top](#table-of-contents)**

68. ### What is the proper way to access Redux store?

     The best way to access your store in a component is to use the `connect()` function, that creates a new component that wraps around your existing one. This pattern is called _Higher-Order Components_, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let's take an example of `<FilterLink>` component using connect:

     ```javascript
     import { connect } from "react-redux";
     import { setVisibilityFilter } from "../actions";
     import Link from "../components/Link";

     const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.visibilityFilter,
     });

     const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
     });

     const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

     export default FilterLink;
     ```

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using `connect()` over accessing the store directly (using context API).

     ```javascript
     class MyComponent {
       someMethod() {
         doSomethingWith(this.context.store);
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

69. ### What is the difference between component and container in React Redux?

     **Component** is a class or function component that describes the presentational part of your application.

     **Container** is an informal term for a component that is connected to a Redux store. Containers _subscribe_ to Redux state updates and _dispatch_ actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.

**[⬆ Back to Top](#table-of-contents)**

70. ### What is the purpose of the constants in Redux?

     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a `ReferenceError` immediately.

     Normally we will save them in a single file (`constants.js` or `actionTypes.js`).

     ```javascript
     export const ADD_TODO = "ADD_TODO";
     export const DELETE_TODO = "DELETE_TODO";
     export const EDIT_TODO = "EDIT_TODO";
     export const COMPLETE_TODO = "COMPLETE_TODO";
     export const COMPLETE_ALL = "COMPLETE_ALL";
     export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
     ```

     In Redux, you use them in two places:

     1. **During action creation:**

        Let's take `actions.js`:

        ```javascript
        import { ADD_TODO } from "./actionTypes";

        export function addTodo(text) {
          return { type: ADD_TODO, text };
        }
        ```

     2. **In reducers:**

        Let's create `reducer.js`:

        ```javascript
        import { ADD_TODO } from "./actionTypes";

        export default (state = [], action) => {
          switch (action.type) {
            case ADD_TODO:
              return [
                ...state,
                {
                  text: action.text,
                  completed: false,
                },
              ];
            default:
              return state;
          }
        };
        ```

**[⬆ Back to Top](#table-of-contents)**

71. ### What are the different ways to write `mapDispatchToProps()`?

     There are a few ways of binding _action creators_ to `dispatch()` in `mapDispatchToProps()`.

     Below are the possible options:

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: () => dispatch(action()),
     });
     ```

     ```javascript
     const mapDispatchToProps = (dispatch) => ({
       action: bindActionCreators(action, dispatch),
     });
     ```

     ```javascript
     const mapDispatchToProps = { action };
     ```

     The third option is just a shorthand for the first one.

**[⬆ Back to Top](#table-of-contents)**

72. ### What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?

     If the `ownProps` parameter is specified, React Redux will pass the props that were passed to the component into your _connect_ functions. So, if you use a connected component:

     ```jsx harmony
     import ConnectedComponent from "./containers/ConnectedComponent";

     <ConnectedComponent user={"john"} />;
     ```

     The `ownProps` inside your `mapStateToProps()` and `mapDispatchToProps()` functions will be an object:

     ```javascript
     {
       user: "john";
     }
     ```

     You can use this object to decide what to return from those functions.

**[⬆ Back to Top](#table-of-contents)**

73. ### How to structure Redux top level directories?

     Most of the applications has several top-level directories as below:

     1. **Components**: Used for _dumb_ components unaware of Redux.
     2. **Containers**: Used for _smart_ components connected to Redux.
     3. **Actions**: Used for all action creators, where file names correspond to part of the app.
     4. **Reducers**: Used for all reducers, where files name correspond to state key.
     5. **Store**: Used for store initialization.

     This structure works well for small and medium size apps.

**[⬆ Back to Top](#table-of-contents)**

74. ### What is redux-saga?

     `redux-saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

     It is available in NPM:

     ```console
     $ npm install --save redux-saga
     ```

**[⬆ Back to Top](#table-of-contents)**

75. ### What is the mental model of redux-saga?

     _Saga_ is like a separate thread in your application, that's solely responsible for side effects. `redux-saga` is a redux _middleware_, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

**[⬆ Back to Top](#table-of-contents)**

76. ### What are the differences between `call()` and `put()` in redux-saga?

     Both `call()` and `put()` are effect creator functions. `call()` function is used to create effect description, which instructs middleware to call the promise. `put()` function creates an effect, which instructs middleware to dispatch an action to the store.

     Let's take example of how these effects work for fetching particular user data.

     ```javascript
     function* fetchUserSaga(action) {
       // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
       // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
       const userData = yield call(api.fetchUser, action.userId);

       // Instructing middleware to dispatch corresponding action.
       yield put({
         type: "FETCH_USER_SUCCESS",
         userData,
       });
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

77. ### What is Redux Thunk?

     _Redux Thunk_ middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch()` and `getState()` as parameters.

**[⬆ Back to Top](#table-of-contents)**

78. ### What are the differences between `redux-saga` and `redux-thunk`?

     Both _Redux Thunk_ and _Redux Saga_ take care of dealing with side effects. In most of the scenarios, Thunk uses _Promises_ to deal with them, whereas Saga uses _Generators_. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

**[⬆ Back to Top](#table-of-contents)**

79. ### What is Redux DevTools?

     _Redux DevTools_ is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.

**[⬆ Back to Top](#table-of-contents)**

80. ### What are the features of Redux DevTools?

     Some of the main features of Redux DevTools are below,

     1. Lets you inspect every state and action payload.
     2. Lets you go back in time by _cancelling_ actions.
     3. If you change the reducer code, each _staged_ action will be re-evaluated.
     4. If the reducers throw, you will see during which action this happened, and what the error was.
     5. With `persistState()` store enhancer, you can persist debug sessions across page reloads.

**[⬆ Back to Top](#table-of-contents)**

81. ### What are Redux selectors and why to use them?

     _Selectors_ are functions that take Redux state as an argument and return some data to pass to the component.

     For example, to get user details from the state:

     ```javascript
     const getUserData = (state) => state.user.data;
     ```

     These selectors have two main benefits,

     1. The selector can compute derived data, allowing Redux to store the minimal possible state
     2. The selector is not recomputed unless one of its arguments changes

**[⬆ Back to Top](#table-of-contents)**

82. ### What is Redux Form?

     _Redux Form_ works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.

**[⬆ Back to Top](#table-of-contents)**

83. ### What are the main features of Redux Form?

     Some of the main features of Redux Form are:

     1. Field values persistence via Redux store.
     2. Validation (sync/async) and submission.
     3. Formatting, parsing and normalization of field values.

**[⬆ Back to Top](#table-of-contents)**

84. ### How to add multiple middlewares to Redux?

     You can use `applyMiddleware()`.

     For example, you can add `redux-thunk` and `logger` passing them as arguments to `applyMiddleware()`:

     ```javascript
     import { createStore, applyMiddleware } from "redux";
     const createStoreWithMiddleware = applyMiddleware(
       ReduxThunk,
       logger
     )(createStore);
     ```

**[⬆ Back to Top](#table-of-contents)**

85. ### How to set initial state in Redux?

     You need to pass initial state as second argument to createStore:

     ```javascript
     const rootReducer = combineReducers({
       todos: todos,
       visibilityFilter: visibilityFilter,
     });

     const initialState = {
       todos: [{ id: 123, name: "example", completed: false }],
     };

     const store = createStore(rootReducer, initialState);
     ```

**[⬆ Back to Top](#table-of-contents)**

86. ### How Relay is different from Redux?

     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via _GraphQL_ queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

87. ### What is an action in Redux?

     _Actions_ are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

     For example, let's take an action which represents adding a new todo item:

     ```
     {
       type: ADD_TODO,
       text: 'Add todo item'
     }
     ```

**[⬆ Back to Top](#table-of-contents)**


## React Router

89. ### What is React Router?

    React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

    **[⬆ Back to Top](#table-of-contents)**

90. ### Why do we need to React Router?

  - It maintains consistent structure and behavior and is used to develop single-page web applications.
  - Enables multiple views in a single application by defining multiple routes in the React application.

    **[⬆ Back to Top](#table-of-contents)**

91. ### What are the main benefits of using React Router?

  - It offers a simple, declarative API that makes it easy to specify routes and map them to components.
  - It is designed to work with React’s component-based architecture, making it a natural fit for React applications.
  - React Router is highly configurable and can be extended to meet the needs of any application.

    **[⬆ Back to Top](#table-of-contents)**

92. ### How is React routing different from conventional routing?

| React Routing | Conventional routing |
| --- | --- |
| Single HTML page | Each view is a new HTML file |
| The user navigates multiple views in the same file | The user navigates multiple files for each view |
| The page does not refresh since it is a single file | The page refreshes every time user navigates |
| Improved performance | Slower performance |

    **[⬆ Back to Top](#table-of-contents)**

93. ### How React Router is different from history library?

    React Router is a wrapper around the `history` library which handles interaction with the browser's `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.

    **[⬆ Back to Top](#table-of-contents)**

94. ### What is the purpose of `push()` and `replace()` methods of `history`?

    A history instance has two methods for navigation purpose.

    1. `push()`
    2. `replace()`

    If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one.

    **[⬆ Back to Top](#table-of-contents)**

95. ### How do you implement React routing?

    [Basic example](https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx)

    **[⬆ Back to Top](#table-of-contents)**

96. ### What is the purpose of `<Outlet>` component?

    An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

    **[⬆ Back to Top](#table-of-contents)**

97. ### What is nested routing?

    Nested routing is when you have routes within other routes. This can be useful if you want to create a hierarchy of pages, for example if you have a blog with different categories and you want each category to have its own page with a list of posts. To do this, you would create a route for each category, and then nest the route for the posts within that.

    **[⬆ Back to Top](#table-of-contents)**

98. ### How to do nested routing?

    We need to create a structure with nested routes and use `<Outlet>` component from the `react-router-dom`.

    ```jsx
    import { Routes, Route, Link, Outlet } from 'react-router-dom';

    const App = () => {
      return (
        <>
          <h1>React Router</h1>

          <nav>
            <Link to="/home">Home</Link>
            <Link to="/user">User</Link>
          </nav>

          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      );
    };

    ...

    const User = () => {
      return (
        <>
          <h1>User</h1>

          <nav>
            <Link to="profile">Profile</Link>
            <Link to="account">Account</Link>
          </nav>

          <Outlet />
        </>
      );
    };
    ```

    Resource: [React Router 6: Nested Routes](https://www.robinwieruch.de/react-router-nested-routes/)

    **[⬆ Back to Top](#table-of-contents)**

99. ### How to suspense routing with route splitting?

    We can implement it with React Router v6, React Lazy and Suspense.

    `React.Lazy` lets you render a dynamic import as a regular component. It takes a function that calls a dynamic import() and returns a Promise which resolves to a module with a default export containing a React Component.

    This lazy component must also be rendered in a `Suspense` component; which provides fallback content (a React element) to show while the lazy component is loading.

    ```jsx
    // import dynamically
    const UserCourses = React.lazy(() => import("./pages/UserCourses"));
    const UserResults = React.lazy(() => import("./pages/UserResults"));

    // add a Suspense component with a fallback:
    <Suspense
      fallback={<RollingLoader />}
    >
      <UserCourses />
    </Suspense>

    ...

    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="/courses"
          element={
            <Suspense
              fallback={<RollingLoader />}
            >
              <UserCourses />
            </Suspense>
          }
        />
        <Route
          path="/results"
          element={
            <Suspense
              fallback={<RollingLoader />}
            >
              <UserResults />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={<NoMatch />}
      />
    </Routes>
    ```

    This means on initial paint, the browser will not load those pages until a user clicks the link. The user will only see a loading icon while the page is being loaded, this is our fallback content. Upon completion the page's content will display. This only occurs on initial paint and will not occur again.

    **[⬆ Back to Top](#table-of-contents)**

100. ### How to do redirect?

      **Declarative redirect on component level**

      We can perform a declarative redirect by using React Router's `Navigate` component. In the following example, whenever a user navigates to the about page, the Navigate component will perform a redirect declaratively:

      ```jsx
      import {
        Routes,
        Route,
        Link,
        Navigate,
      } from 'react-router-dom';

      ...

      const About = () => {
        const shouldRedirect = true;

        return (
          <>
            <h2>About</h2>
            {shouldRedirect && <Navigate replace to="/home" />}
          </>
        );
      };
      ```

      **Declarative redirect on route level**

      If we would want to manage this on a Route level, we could use this alternative solution as well:

      ```jsx
      const App = () => {
        const shouldRedirect = true;

        return (
          <>
            <h1>React Router</h1>

            <nav>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
            </nav>

            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route
                path="about"
                element={
                  shouldRedirect ? (
                    <Navigate replace to="/home" />
                  ) : (
                    <About />
                  )
                }
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </>
        );
      };

      const About = () => {
        return (
          <>
            <h2>About</h2>
          </>
        );
      };
      ```

      **A programmatic redirect using React Router's `useNavigate` Hook**

      ```jsx
      import {
        Routes,
        Route,
        Link,
        useNavigate,
      } from 'react-router-dom';

      ...

      const About = () => {
        const shouldRedirect = true;

        const navigate = useNavigate();

        React.useEffect(() => {
          if (shouldRedirect) {
            navigate('/home');
          }
        });

        return (
          <>
            <h2>About</h2>
          </>
        );
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

101. ### How to navigate backward and forward?

      These can be achieved by navigate api. We just need to mention the number of steps we want to move forward or backward ('+' for forward and '-' for backward). So we can code these features we can consider this:

      ```jsx
      import { useNavigate } from "react-router-dom";

      function Exchanges() {
        const navigate = useNavigate();

        return (
          <>
            <button onClick={() => navigate(-2)}>
              2 steps back
            </button>
            <button onClick={() => navigate(-1)}>1 step back</button>
            <button onClick={() => navigate(1)}>
              1 step forward
            </button>
            <button onClick={() => navigate(2)}>
              2 steps forward
            </button>
          </>
        );
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

102. ### How to create a protected (private) route?

      We need to add a check to a component whether the authentication token is present. If it is present, the component will render its children. However, if it is absent, the user gets a conditional redirect with React Router's declarative Navigate component to the login page (here: Home page):

      ```jsx
      import {
        Routes,
        Route,
        NavLink,
        Navigate,
        useNavigate,
      } from 'react-router-dom';

      const ProtectedRoute = ({ children }) => {
        const { token } = useAuth();

        if (!token) {
          return <Navigate to="/home" replace />;
        }

        return children;
      };

      ...

      const App = () => {
        return (
          <AuthProvider>
            <h1>React Router</h1>

            <Navigation />

            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </AuthProvider>
        );
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

103. ### What are some ways that you can share data among routes in React Router?

      There are several ways that you can share data among routes in React Router.

      1. One way is to use the browser’s built-in sessionStorage or localStorage API.
      2. Another way is to use a library like React Router Redux, which provides a Redux store that can be used to share data among routes.
      3. Finally, you can also use React’s context feature to share data among routes.

      **[⬆ Back to Top](#table-of-contents)**

104. ### What are the differences between types of routing: Hash, Browser, Memory?

      `<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

      `<HashRouter>` is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, `<HashRouter>` makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

      A `<MemoryRouter>` stores its locations internally in an array. Unlike `<BrowserHistory>` and `<HashHistory>`, it isn't tied to an external source, like the history stack in a browser. This makes it ideal for scenarios where you need complete control over the history stack, like testing.

      `<MemoryRouter initialEntries>` defaults to ["/"] (a single entry at the root / URL).
      `<MemoryRouter initialIndex>` defaults to the last index of initialEntries.

      **[⬆ Back to Top](#table-of-contents)**

105. ### How to get search params?

    The `useSearchParams` hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them.

    You can also use `URLSearchParams` if you want something native:

    ```javascript
    const params = new URLSearchParams(props.location.search)
    const foo = params.get('name')
    ```

    You should use a *polyfill* for IE11.

    **[⬆ Back to Top](#table-of-contents)**

106. ### How to implement *default* or *NotFound* page?

      A `<Routes>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below:

      ```jsx harmony
      <Routes>
        <Route index element={<Home />} />
        <Route path="/user" component={<User />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      ```

      **[⬆ Back to Top](#table-of-contents)**

107. ### What are the differences between v5 and v6?

      1. **`Switch` Replaced With `Routes`**

          In v6, Switch in not exported from react-router-dom. In the earlier version we could use Switch to wrap our routes. Now we use Routes to do the same thing instead of Switch.

      2. **Changes In The Way We Define Our `Route`**

          The component that should be rendered on matching a route can not be written as children of the Route component, but it takes a prop called element where we have to pass a JSX component for that to be rendered.

      3. **The `exact` Prop Is Not Needed Anymore**

          With version 6, React Router has just become alot more awesome. The now better, path matching algorithm, enables us to match a particular route match without the exact prop. Earlier, without exact, any URL starting with the concerned keyword would be loaded, as the matching process was done from top to down the route definitions. But now, we do not have to worry about that, as React Router has a better algorithm for loading the best route for a particular URL, the order of defining does not really matters now.

      So, to sum up these three points we can consider this code snippet.

      In v5
      ```jsx harmony
      import { Switch, Route } from "react-router-dom";
      .
      .
      .
      <Switch>
          <Route path="/">
              <Home/>
          </Route>
          <Route exact path="/cryptocurrencies">
              <Cryptocurrencies/>
          </Route>
          <Route exact path="/crypto/:coinId">
              <CryptoDetails/>
          </Route>
          <Route exact path="/exchanges">
              <Exchanges />
          </Route>
      </Switch>
      ```

      In v6
      ```jsx harmony
      import { Routes, Route } from "react-router-dom";
      .
      .
      .
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
      ```

      4. **No Need To Install `react-router-config` Seperately**

          `react-router-config` allowed us to define our routes as javascript objects, instead of React elements, and all it's functionalities have to moved in the core react router v6.**

      ```jsx harmony
      //V5
      import { renderRoutes } from "react-router-config";

      const routes = [
        {
          path: "/",
          exact: true,
          component: Home
        },
        {
          path: "/cryptocurrencies",
          exact: true,
          component: Cryptocurrencies
        },
        {
          path: "/exchanges",
          exact: true,
          component: Exchanges
        }
      ];

      export default function App() {
        return (
          <div>
            <Router>{renderRoutes(routes)}</Router>
          </div>
        );
      }


      //V6
      function App() {
        let element = useRoutes([
          // These are the same as the props you provide to <Route>
          { path: "/", element: <Home /> },
          { path: "/cryptocurrencies", element: <Cryptocurrencies />,
            // Nested routes use a children property
            children: [
              { path: ":coinId", element: <CryptoDetails /> },
            ] 
          },
          {
            path: "/exchanges",
            element: <Exchanges />
          },
        ]);

        // The returned element will render the entire element
        // hierarchy with all the appropriate context it needs
        return element;
      }
      ```

      5. **`useHistory` Is Now `useNavigate`**

          React Router v6 now has the navigate api, which most of the times would mean replacing useHistory to useNavigate.

      ```jsx harmony
      //V5
      import { useHistory } from "react-router-dom";

      function News() {
        let history = useHistory();
        function handleClick() {
          history.push("/home");
        }
        return (
          <div>
            <button onClick={()=>{
                history.push("/home");
            }}>Home</button>
          </div>
        );
      }


      //V6
      import { useNavigate } from "react-router-dom";

      function News() {
        let navigate = useNavigate();

        return (
          <div>
            <button onClick={()=>{
                navigate("/home");
            }}>go home</button>
          </div>
        );
      }
      ```

          Some more common features of useHistory were go, goBack and goForward. These can also be achieved by navigate api too, we just need to mention the number of steps we want to move forward or backward ('+' for forward and '-' for backward). So we can code these features we can consider this.

      ```jsx harmony
      //V5
      import { useHistory } from "react-router-dom";

      function Exchanges() {
        const { go, goBack, goForward } = useHistory();

        return (
          <>
            <button onClick={() => go(-2)}>
              2 steps back
            </button>
            <button onClick={goBack}>1 step back</button>
            <button onClick={goForward}>1 step forward</button>
            <button onClick={() => go(2)}>
              2 steps forward
            </button>
          </>
        );
      }


      //V6
      import { useNavigate } from "react-router-dom";

      function Exchanges() {
        const navigate = useNavigate();

        return (
          <>
            <button onClick={() => navigate(-2)}>
              2 steps back
            </button>
            <button onClick={() => navigate(-1)}>1 step back</button>
            <button onClick={() => navigate(1)}>
              1 step forward
            </button>
            <button onClick={() => navigate(2)}>
              2 steps forward
            </button>
          </>
        );
      }
      ```

      5. **`activeStyle` and `activeClassName` Props Removed From `<NavLink />`**

          In the previous version we could set a seperate class or a style object for the time when the `<NavLink/>` would be active. In V6, these two props are removed, instead in case of Nav Links className and style props, work a bit differently. They take a function which in turn gives up some information about the link, for us to better control the styles.

          ```jsx harmony
          //V5
          <NavLink
            to="/news"
            style={{ color: 'black' }}
            activeStyle={{ color: 'blue' }}>
            Exchanges
          </NavLink>

          <NavLink
            to="/news"
            className="nav-link"
            activeClassName="active">
            Exchanges
          </NavLink>

          //V6
          <NavLink
            to="/news"
            style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>
            Exchanges
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) => "nav-link" + (isActive ? "active" : "")}>
            Exchanges
          </NavLink>
          ```

      6. **Replace `Redirect` with `Navigate`**

          `Redirect` is no longer exported from `react-router-dom`, instead we use can `Navigate` to achieve the same features.

          ```jsx harmony
          //V5
          import { Redirect } from "react-router-dom";

          <Route exact path="/latest-news">
              <Redirect to="/news">
          </Route>
          <Route exact path="/news">
              <News />
          </Route>


          //V6
          import { Navigate } from "react-router-dom";

          <Route path="/latest-news" element={<Navigate replace to="/news">} />
          <Route path="/news" element={<Home />} />
          ```

          Please note the `replace` prop passed inside the `element` of the `Route`. This signifies we are replacing the current navigation stack. Without `replace` it would mean we are just pushing the component in the existing navigation stack.

          Resource: [React Router V5 vs V6](https://dev.to/arunavamodak/react-router-v5-vs-v6-dp0)

      **[⬆ Back to Top](#table-of-contents)**

108. ### Have you ever upgraded the major version of router? If yes, what issues you faced?

      In general, the process looks like this:

  - Upgrade to React v16.8 or greater
  - Upgrade to React Router v5.1
    - Remove <Redirect>s inside <Switch>
    - Refactor custom <Route>s
  - Upgrade to React Router v6

    Resource: [Upgrading from v5](https://reactrouter.com/en/v6.3.0/upgrading/v5)

    **[⬆ Back to Top](#table-of-contents)**
