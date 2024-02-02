import Person from './Person'
import PersonSide from './PersonSide'

const Sidepanel = () => {
  return (
    <ul class='list-group'>
      <li class='list-group-item'>Item List</li>
      <li class='list-group-item'>
        <Person
          data={{ empId: 1001, name: 'Satya1', empEmail: 'sk1001@gmail.com' }}
        />
      </li>
      <li class='list-group-item'>
        <Person
          data={{ empId: 1002, name: 'Satya2', empEmail: 'sk1002@gmail.com' }}
        />
      </li>
      <li class='list-group-item'>
        <Person
          data={{ empId: 1003, name: 'Satya3', empEmail: 'sk1003@gmail.com' }}
        />
      </li>
      <PersonSide />
    </ul>
  )
}
export default Sidepanel
