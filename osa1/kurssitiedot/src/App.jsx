const Header = (props) => {
  //console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {  
 console.log(props)

  return (
    <div>
      <Part1 part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises} />
      <Part2 part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises} />
      <Part3 part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises} />
    </div>
  )
}

const Part1 = (props) => {
  //console.log(props)
  return (
    <p>{props.part1} {props.exercises1}</p>
  )
}

const Part2 = (props) => {
  //console.log(props)
  return (
    <p>{props.part2} {props.exercises2}</p>
  )
}

const Part3 = (props) => {
  //console.log(props)
  return (
    <p>{props.part3} {props.exercises3}</p>
  )
}

const Total = (props) => {
  //console.log(props)
  const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
    <p>Number of exercises {total}</p>
  )
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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App