
const data = () => {
    return (
        <div>
            <div>
                <h1>React</h1>
                <div>
                    <p>
                        React (also known as React.js or ReactJS) is a free and
                        open-source front-end JavaScript library[3][4] for building user
                        interfaces based on components. It is maintained by Meta (formerly
                        Facebook) and a community of individual developers and
                        companies.[5][6][7] React can be used to develop single-page,
                        mobile, or server-rendered applications with frameworks like
                        Next.js. Because React is only concerned with the user interface
                        and rendering components to the DOM, React applications often rely
                        on libraries for routing and other client-side functionality.
                    </p>
                </div>
            </div>
            <div>
                <h1>Virtual DOM</h1>
                <p>
                    Another notable feature is the use of a virtual Document Object
                    Model, or Virtual DOM. React creates an in-memory data-structure
                    cache, computes the resulting differences, and then updates the
                    browser's displayed DOM efficiently.[20] This process is called
                    reconciliation. This allows the programmer to write code as if the
                    entire page is rendered on each change, while React only renders the
                    components that actually change. This selective rendering provides a
                    major performance boost.[21]
                </p>
            </div>
            <div>
                <h2>Lifecycle methods</h2>
                Lifecycle methods for class-based components use a form of hooking
                that allows the execution of code at set points during a component's
                lifetime. ShouldComponentUpdate allows the developer to prevent
                unnecessary re-rendering of a component by returning false if a render
                is not required. componentDidMount is called once the component has
                "mounted" (the component has been created in the user interface, often
                by associating it with a DOM node). This is commonly used to trigger
                data loading from a remote source via an API. componentWillUnmount is
                called immediately before the component is torn down or "unmounted".
                This is commonly used to clear resource-demanding dependencies to the
                component that will not simply be removed with the unmounting of the
                component (e.g., removing any setInterval() instances that are related
                to the component, or an "eventListener" set on the "document" because
                of the presence of the component) render is the most important
                lifecycle method and the only required one in any component. It is
                usually called every time the component's state is updated, which
                should be reflected in the user interface.
                <h2>JSX</h2>
                JSX JSX, or JavaScript Syntax Extension, is an extension to the
                JavaScript language syntax.[24] Similar in appearance to HTML, JSX
                provides a way to structure component rendering using syntax familiar
                to many developers. React components are typically written using JSX,
                although they do not have to be (components may also be written in
                pure JavaScript). JSX is similar to another extension syntax created
                by Facebook for PHP called XHP. An example of JSX code:
            </div>
            <div>
                <h2>React Hooks</h2>
                On February 16, 2019, React 16.8 was released to the public,
                introducing React Hooks.[13] Hooks are functions that let developers
                "hook into" React state and lifecycle features from function
                components.[14] Notably, Hooks do not work inside classes — they let
                developers use more features of React without classes.[15] React
                provides several built-in Hooks such as useState, useContext
                useReducer, useMemo and useEffect. Others are documented in the Hooks
                API Reference. useState and useEffect, which are the most commonly
                used, are for controlling state and side effects respectively.
            </div>
            <div>
                <h3>Rules of hooks </h3>
                There are two rules of Hooks which describe the characteristic code
                patterns that Hooks rely on:
                <ol>
                    <li>
                        "Only Call Hooks at the Top Level" — Don't call hooks from inside
                        loops, conditions, or nested statements so that the hooks are
                        called in the same order each render. "Only Call Hooks from React
                        Functions" —
                    </li>
                    <li>
                        Don't call hooks from plain JavaScript functions so that stateful
                        logic stays with the component.
                    </li>
                </ol>
                Although these rules can't be enforced at runtime, code analysis tools
                such as linters can be configured to detect many mistakes during
                development. The rules apply to both usage of Hooks and the
                implementation of custom Hooks,[22] which may call other Hooks.
            </div>
        </div>
    )
}

export default data
