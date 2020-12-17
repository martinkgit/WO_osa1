import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Stats = (props) => {
  const all = props.good+props.bad+props.neutral
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const stats ={
    parts: [
    {
    name: "good" , value: good
    },
    {
      name: "neutral" , value: neutral
      },
      {
        name: "bad" , value: bad
        },
        {
          name: "all" , value: all
          },
          {
            name: "average" , value: (1*good + 0*neutral+ -1 * bad)/all
            },
            {
              name: "positive %" , value: good/all*100
              }

    ]
  }
  const [first, second, third, fourth , fifth, sixth] = stats.parts

  if(all > 0){
  return(
  <div>
    <tr>
    <td> Good </td> <td> {good} </td>
    </tr>
    <tr>
    <td> Neutral </td> <td> {neutral} </td>
    </tr>
    <tr>
    <td> Bad </td><td> {bad} </td>
    </tr>
    <tr>
    <td> All </td> <td> {all} </td>
    </tr>
    <tr>
    <td> Average </td><td> {(1*good + 0*neutral + -1*bad)/all} </td>
    </tr>
    <tr>
    <td> Positive </td> <td> {good/all*100}% </td>
    </tr>
  
  </div>
      )
  }
  
  return(
    <p>No feedback given</p>
    )
  
}

const StatsLine = (props)=>{
return(
  <p>{props.text} {props.value}</p>
)
}


const Button = (props) =>(
  <button onClick={props.handleClick}>
{props.text}
  </button>
)





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h2>
        give feedback
      </h2>
      <Button handleClick={()=> setGood(good + 1)} text="Good"/>
      <Button handleClick={()=> setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={()=> setBad(bad + 1)} text="Bad"/>
      <h2>
        statistics
      </h2>
      <Stats good={good} neutral = {neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)