import { useState } from 'react'



const Display = () => {

}

const StatisticLine = (props) => {

return(
  <table>
    <tbody>
      <tr>
        <td style ={{width: "70px"}}>{props.text}</td>
        <td>{props.value}</td>
        <td>{props.optional}</td>
      </tr>
    </tbody>
  </table>
 
)
}

const Statistics = (props) => {
      if (props.bool === false){
        return (
          <div>
            <h1>Statistics</h1>
            <p>No stats given</p>
          </div>
        )
      }

      return (
        <div>
          <h1>Statistics</h1>
            <StatisticLine text = "good" value = {props.good} />
            <StatisticLine text = "neutral" value = {props.neutral} />
            <StatisticLine text = "bad" value = {props.bad} />
            <StatisticLine text = "all" value = {props.all} />
            <StatisticLine text = "avg" value = {props.avg} />
            <StatisticLine text = "positive" value = {props.positive} optional = "%"/>
        </div>
      )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const [bool, setBool] = useState(false)

    //Rumaa toistoa alla olevissa komponenteissa, fixataan modulaarisemmaksi myohemmin ajanpuuteen vuoksi
  const increaseGoodByOne = () => {
    setBool(true)
    const updatedGood = good + 1
    setGood(updatedGood)
    const avg = (updatedGood * 1 + neutral * 0 + bad * -1)/9
    setAvg(avg.toFixed(1))
    setAll(all+1)
    const positive = (updatedGood / (updatedGood + neutral + bad))*100
    setPositive(positive.toFixed(1))
  }

  const increaseNeutralByOne = () => {
    setBool(true)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const avg = (good * 1 + updatedNeutral * 0 + bad * -1)/9
    setAvg(avg.toFixed(1))
    setAll(all+1)
    const positive = (good / (good + updatedNeutral + bad))*100
    setPositive(positive.toFixed(1))
  }

  const increaseBadByOne = () => {
    setBool(true)
    const updatedBad = bad + 1
    setBad(updatedBad)
    const avg = (good * 1 + neutral * 0 + updatedBad * -1)/9
    setAvg(avg.toFixed(1))
    setAll(all+1)
    const positive = (good / (good + neutral + updatedBad))*100
    setPositive(positive.toFixed(1))
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={increaseGoodByOne}
        text='good'
        
        />
      <Button
        handleClick={increaseNeutralByOne}
        text='neutral'
        />
      <Button
        handleClick={increaseBadByOne}
        text='bad'
        />

      <Statistics
        bool={bool}
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positive={positive}
        />
    </div>
  )
}

export default App