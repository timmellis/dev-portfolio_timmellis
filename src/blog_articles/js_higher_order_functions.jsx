import React from 'react';
import {Alert} from 'react-bootstrap'

function js_higher_order_functions(props) {

  return (
    <article>
      <h2>JavaScript Tutorial: Array Methods and Higher-Order Functions</h2>
      <h4>Explanations and visualizations</h4>

      <p>In JavaScript, arrays are a powerhouse of storing and organizing data. Reading and manipulating that data quickly and efficiently is one of the things that makes them so useful. Fortunately, JavaScript has a number of built-in methods and functions that allow us to do just that. Some of these methods are straightfoward, but others can be a bit confusing, and I found it helpful to not only see examples but also to create visualizations that help explain what exactly is going on behind the scenes.</p>

      <p>What is a "higher-order function"? A higher-order function is one that takes another function as a parameter. (Compare this to a "callback function", which is a function passed into another function as an argument). So many of these array methods are considered higher-order functions because they accept -- and often expect -- another function to be included as a parameter. While these can be written separately and passed into the array method using its variable name, it's also common practice to simply write the function directly into the method when you call it.</p>


      <h4>some()</h4>
      <a href='www.w3.come/arraySome' target='_blank'>Mozilla link</a>
      <p><b>myArray.some()</b> checks to see if any item meets the true/false conditions. If so, it returns a Boolean value of <i>true</i>.</p>
      <p><b>Syntax:</b> <br /> 
      <code>myArray.some(item {`=>`} [true/false condition to be met])</code>
      <br /> or: <br />
      <code>myArray.some((item) {`=>`} {`{`}return [true/false condition]{`}`})</code>
      </p>
      <p><b>Example:</b></p>
      <pre><code>
        const myArray = [1, 2, 3]<br />
        const containsEvenNums = myArray.some(item {`=>`} item % 2 === 0)
      </code></pre>
      

      
      <Alert variant='warning'>
        <b>A note for syntax variations throughout:</b> You will notice that sometimes, the internal function is wrapped in curly braces, and sometimes it is not. If the function is simple enough to be kept to a single line, the curly braces are not required, and the <i>return</i> call is implied so you don't have to write it explicitly. However, if you do include curly braces, you <i>must</i> explicitly write in the <i>return</i> call.     
      </Alert>

    </article>
  );
}

export default js_higher_order_functions;