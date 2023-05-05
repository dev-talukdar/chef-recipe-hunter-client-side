import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Pdf from "react-to-pdf";
import { Button } from 'react-bootstrap';

const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>



            <div ref={ref} className='text-center mt-5 mb-5 container'>

                <div className='mb-5'>
                    <h2 className='text-dark mb-5 mt-5'>Download Your PDF here </h2>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button variant="outline-dark"  size="lg" className='fw-bold' onClick={toPdf}>Generate PDF</Button>}
                    </Pdf>
                </div>



                <h2 className='text-primary mt-5'>Answer Of 4 Questions:</h2>
                <h4>1. Tell us the differences between uncontrolled and controlled components.</h4>
                <br />
                <p className='text-info'>Answer: Uncontrolled components are those where the form data is handled by the DOM itself, without any intervention by React. In other words, the form fields are controlled by the DOM rather than React. In uncontrolled components, we use the ref attribute to get the value of the form elements. The ref attribute is used to access the DOM element in the code.

                    On the other hand, controlled components are those where the form data is handled by React. The form fields are controlled by React itself, and not by the DOM. In controlled components, we use state to store the value of the form elements. We also use the onChange event to update the state whenever the value of the form element changes.

                    The main differences between controlled and uncontrolled components are:

                    State management: In controlled components, form data is managed by React state. In uncontrolled components, form data is managed by the DOM.

                    Event handling: In controlled components, form events are handled by React. In uncontrolled components, form events are handled by the DOM.

                    Data retrieval: In controlled components, the data can be retrieved from the state. In uncontrolled components, the data can be retrieved using the ref attribute.

                    Validation: In controlled components, validation can be done by handling the onSubmit event. In uncontrolled components, validation is done by using the checkValidity method of the DOM element.

                    In general, controlled components provide more control and flexibility over form data, but they require more code to be written. Uncontrolled components are simpler to implement, but they offer less control over form data.</p>

            </div>

            <div className='text-center mt-5 mb-5 container'>
                <h4>2. How to validate React props using PropTypes</h4>
                <br />
                <p className='text-info'>Answer:In React, you can validate props using PropTypes. PropTypes is a typechecking library that helps you to ensure that the props passed to a component are of the expected type.

                    To use PropTypes, you need to import the PropTypes library from the 'prop-types' module. Then, you can define the expected type for each prop of your component. Here's an example. In the example above, we define the expected type for the 'text' prop of the 'MyComponent' component. We use the 'isRequired' property to indicate that the prop is mandatory. If the 'text' prop is not a string or is missing, React will show a warning message in the console.

                    PropTypes supports several types, such as 'string', 'number', 'bool', 'array', 'object', and 'func'. You can also use 'oneOf' and 'oneOfType' to specify a limited set of values or a limited set of types for a prop.

                    It's good practice to validate the props of your components using PropTypes, as it helps you to catch errors early and improve the overall reliability of your code.</p>

            </div>

            <div className='text-center mt-5 mb-5 container'>
                <h4>3. Tell us the difference between nodejs and express js.</h4>
                <br />
                <p className='text-info'>Answer: Node.js and Express.js are both widely used technologies in the web development industry.

                    Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side applications using JavaScript. It provides an environment for running JavaScript code outside of a web browser. Node.js has an event-driven architecture, which makes it fast and scalable.

                    On the other hand, Express.js is a web application framework built on top of Node.js. It provides a set of tools and features for building web applications and APIs. Express.js simplifies the development of web applications by providing a set of pre-built features like routing, middleware, and template engines.

                    In summary, Node.js provides the runtime environment for executing JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides a set of features and tools for building web applications and APIs.</p>

            </div>

            <div className='text-center mt-5 mb-5 container'>
                <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                <br />
                <p className='text-info'>Answer: A custom hook in React is a JavaScript function that allows you to reuse stateful logic across different components. It is essentially a way to extract reusable logic from a component so that it can be used in other components.

                    A custom hook is created when you find yourself repeating the same code in multiple components, or when you want to share some stateful logic between multiple components. By creating a custom hook, you can encapsulate the reusable logic in a single place and reuse it in any component.

                    Some common use cases for creating custom hooks are:

                    Abstracting complex logic: If you have a complex piece of logic that is used in multiple components, you can create a custom hook to encapsulate that logic and make it reusable.

                    Sharing stateful logic: If you have some stateful logic that needs to be shared between multiple components, you can create a custom hook to manage that state and provide a way to access and update it.

                    Simplifying component code: If you have a component that has a lot of logic or state management, you can create a custom hook to simplify the code and make the component more readable and maintainable.

                    In summary, a custom hook is a way to reuse stateful logic across multiple components, and it is created to simplify code, abstract complex logic, and share stateful logic between components.</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;