const Person = props => {
  const { empId, name, empEmail } = props.data
  return (
    <div>
      Name : {name}, Id : {empId}, Email : {empEmail}
    </div>
  )
}
export default Person
