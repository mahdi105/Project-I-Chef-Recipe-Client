import { Button } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <main className='container mx-auto px-2 md:px-0 lg:px-10'>
            <nav className='flex justify-center items-center gap-5 py-6 mb-10'>
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
            </article>
        </main>
    );
};

export default Blog;