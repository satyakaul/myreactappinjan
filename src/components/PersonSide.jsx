const PersonSide = props => {
  const names = ['satya', 'max', 'kai']
  return (
    <div>
      <h1>This is JSX Component</h1>
      <ul>
        <li class='list-group-item'>{names[0]}</li>
        <li class='list-group-item'>{names[1]}</li>
        <li class='list-group-item'>{names[2]}</li>
      </ul>
      <h1>Automatic Mapping</h1>
      <ul>
        {names.map(names => (
          <li class='list-group-item'>{names}</li>
        ))}
      </ul>
    </div>
  )
}
export default PersonSide
