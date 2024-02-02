import Emp from './Emp'

const Employee = () => {
  const empData = [
    { empId: 1001, name: 'satya1', email: 'satya11001@gmail.com', desc: 'dev' },
    { empId: 1002, name: 'satya2', email: 'satya21002@gmail.com', desc: 'dev' },
    { empId: 1003, name: 'satya3', email: 'satya31003@gmail.com', desc: 'qa' },
    { empId: 1004, name: 'satya4', email: 'satya41004@gmail.com', desc: 'qa' }
  ]

  return (
    <div className='text-center'>
      <h4>All Employee Details : List Of Objects with React UI on JSX Page using Solid Principle </h4>
      <table className='table table-bordered table-sm table-hover table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>EmpId</th>
            <th>EmpName</th>
            <th>EmpEmail</th>
            <th>EmpDesc</th>
          </tr>
        </thead>
        <tbody>
          {empData.map(employee => (
            <Emp data={employee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employee
