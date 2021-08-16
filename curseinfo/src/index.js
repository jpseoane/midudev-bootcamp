import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 
 *  const Title =({props}) => <h1>{course</h1>
 */
const Title = (props) => {
  <h1>{props.course}</h1>
}

const Header =(param) =>{
  return(
    <h1>{param.course}</h1>
  );
}
const Content = (para) =>{
  return(        
      <p>
        {para.part} {para.exercise}
      </p>        
  );
}

const Total=(params) =>{
  return(
    <p>
     Number of exercises {params.cant1 + params.cant2 + params.cant3}
    </p>    
);
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />            
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total cant1={exercises1} cant2={exercises2} cant3={exercises3} />      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))