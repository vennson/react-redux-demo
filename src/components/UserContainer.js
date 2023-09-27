import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h2>users</h2>
      <div>
        {userData.loading ? <h2>loading</h2> : userData.error ? <h2>{userData.error}</h2> : null}
      </div>
      <div>
        {userData.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userData: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
