import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) =>{
  return(
    <div>
      <p>Part: {props.part}, exercises: {props.exercises}</p>
    </div>
  )
}

const Header = (props) =>{
  return(
  <div>
    <p>
      Course name is {props}
    </p>
  </div>
  )
}

const Content = (props) => {
  return(
  <div>
    <Part part= {props.part1} exercises= {props.exercises1} ></Part>
    <Part part= {props.part2} exercises= {props.exercises2} ></Part>
    <Part part= {props.part3} exercises= {props.exercises3}></Part>
  </div>
  )
}

const Total = (props) => {
  <div>

  </div>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [first, second, third] = course.parts
  
 // <Header course = {course}></Header>

  return (
    <div>
     
      <h1>{course.name}</h1>
    
      <Content part1= {first.name} part2 ={second.name} part3 ={third.name} exercises1= {first.exercises} exercises2= {second.exercises} exercises3= {third.exercises}/>
    
      
      <p>Number of exercises {first.exercises +  second.exercises + third.exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))