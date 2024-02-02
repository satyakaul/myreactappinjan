const Emp = props => {
  const { empId, name, email, desc } = props.data

  return (
    <tr>
      <td>{empId}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{desc}</td>
    </tr>
  )
}
export default Emp
