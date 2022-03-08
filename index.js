import React from 'react';
import ReactDom from 'react-dom';

//stateless functional component
//always return JSX

import './index.css';
  
function BookList(){
  return (
    <section class='booklist'>
      <Book/>
      
      
      
    </section> 
  );
}
 
const Book = () => {
  return <article>
    <Image></Image>
 <Title/>
  <Author/>
  </article>
};

const Image =() => <img src ="https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg" alt =""/>

const Title  =() => <h1>subtle art</h1>;
const Author =() => <h4>nishtha</h4>
    
 

ReactDom.render(<BookList/>,document.getElementById('root'));

 