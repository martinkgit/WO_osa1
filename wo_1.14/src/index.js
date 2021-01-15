import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>(
  <button onClick={props.handleClick}>
{props.text}
  </button>
)




const App = (props) => {
  const random = () => {

    return(Math.floor(Math.random()*6))
  }


  const [selected, setSelected] = useState(random())
  const [points, setPoints] = useState(initialPoints) 
  const [mostVoted, setMostVoted] = useState(0)


  
  
  const parts = [
    {
    name: anecdotes[0] , 
    value: 0,
    id:1
    },
    {
      name: anecdotes[1] , 
      value: 0,
      id: 2
      },
      {
        name: anecdotes[2] , 
        value: 0,
        id : 3
        },
        {
          name: anecdotes[3] , 
          value: 0,
          id: 4
          },
          {
            name: anecdotes[4] ,
             value: 0,
             id: 5
            },
            {
              name: anecdotes[5] , 
              id: 6
              }
    ]
    

  const addVotes = () =>{ 
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setMostVoted(Math.max(...copy))
    
  }

const index = () => {

  return(
    points.indexOf(mostVoted)
  )
}

  return (
    <div>
    
    <div>
      <p>
      {parts[selected].name}
      </p> 
      {console.log(selected)}
      <p>Has {points[selected]} votes </p>
      <Button handleClick = {()=> addVotes()} text="vote"/>
      <Button handleClick = {()=> setSelected(random())} text="next anecdote"/>
    </div>
    <div>
  <p>Most voted:</p>
      <p>{parts[index()].name}</p>
    </div>
    </div>
  )
}


const initialPoints = Array(6).fill(0)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)