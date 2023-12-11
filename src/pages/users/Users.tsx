import DataTabel from '../../components/Datatabel/DataTabel'
import './users.scss'

const Users=()=> {
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTabel/>
    </div>
  )
}

export default Users