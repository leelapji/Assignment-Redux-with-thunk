import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/userActions';
import User from './User';

const UserList = ({ users, loading, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.user.loading
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
