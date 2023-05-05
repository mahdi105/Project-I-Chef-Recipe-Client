import { Button } from 'flowbite-react';
import React from 'react';
const Blog = () => {
    return (
        // This Blog Page
        <main className='container mx-auto px-2 md:px-0 lg:px-10 pb-20'>
            <nav className='flex justify-center items-center gap-5 py-6 mb-10'>
                {/* PDF Download button */}
                <Button 
                    color="gray"
                    pill={true}
                >
                    Download PDF
                </Button>
                <h2 className='text-[48px] font-extrabold'>Answers to the questions below.</h2>
            </nav>
            <article>
                <h2 className='text-3xl font-semibold mb-2'>The questions are - </h2>
                <ul className='list-decimal ml-5 mb-3'>
                    <li>Tell us the differences between uncontrolled and controlled components?</li>
                    <li>How to validate React props using PropTypes?</li>
                    <li>Tell us the difference between nodejs and express js?</li>
                    <li>What is a custom hook, and why will you create a custom hook?</li>
                </ul>

                <h2 className='text-3xl font-semibold mb-2'>Let's unfold the answers</h2>
                <h2 className='text-xl mb-2 font-semibold'>1. Tell us the difference between uncontrolled and controlled components?</h2>
                <div className='ml-6 mb-4'>
                    <p>Most of the time, we need to easily manage the state and the behaviour of react functional component and made the debugging easier. Handling this situation we would work with "Controlled" or "Uncontrolled" components.</p>
                    <div>
                        <p className='underline font-semibold text-md mb-1'>Controlled Component:</p>
                        <p className='mb-2'>Controlled component allows us to easily manage  the state and the behavior of react element. This component actually controlled by the parent. Parent updates the state of the child components. It makes our code more predictable, easier to debug and it's efficient for managing state in lerger project. React form component is an example of controlled component. Whereas, 'form' component controlls the state of 'input' components and updates the 'input' or other child elements state from the 'from' component. On the other hand,</p>
                    </div>
                    <div>
                        <p className='underline font-semibold text-md mb-1'>Uncontrolled Component:</p>
                        <p >Uncontrolled components rely on managing their own state internally. Using uncontrolled component, It can lead to confustion and defficulty in tracking changes. Overall, managing state, tracking behavior and debugging is sometime difficult in uncontrolled components.</p>
                    </div>
                </div>

                <h2 className='text-xl mb-2 font-semibold'>2. How to validate React props using PropTypes?</h2>
                <div className='ml-6 mb-4'>
                    <p className='mb-3'>
                        Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                        We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in our react application.
                    </p>
                    <p><strong>Validation Methods:</strong></p>
                    <ul className='list-disc ml-5'>
                        <li>React PropTypes (An special react component property)</li>
                        <li>React prop-types library</li>
                        <li>React PropTypes validators exported from PropTypes (e.g. PropTypes.any)</li>
                        <li>Custom Validator (props, propsName, componentName)</li>
                        <li>Validating PercentageStat</li>
                    </ul>

                </div>
                <h2 className='text-xl mb-2 font-semibold'>3. Tell us the difference between nodejs and express js?</h2>
                <div className='ml-6 mb-3'>
                    <p className='mb-2'><strong>Express</strong> is a minimal and flexible node.js web application framework. It provides a set of features for building single, multi-page and hybrid web applications.Developers describe ExpressJS as "Sinatra inspired web development framework for node.js -- insanely fast, flexible, and simple".. On the other hand,</p>
                    <p>
                        <strong>Node.js</strong> is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications". Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
                    </p>
                </div>
                <h2 className='text-xl mb-2 font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h2>
                <p className='ml-6'>
                    <strong>React Custom Hook</strong> is a special function. Creating a function like this, it has some method provided by React. Some time we have to work with reusable unique functionality in our application, at this stage may be the react built in hooks aren't enough to add the functionality. React.js gives us some methods to create the functionality. This function is called React Custom Hook. We can create multiple Custom Hooks and use multiple times as we want.
                </p>
            </article>
        </main>
    );
};

export default Blog;