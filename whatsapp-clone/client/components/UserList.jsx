function UserList({ users }) {

  return (
    <div className="sidebar">

      <h3>Usuarios conectados</h3>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">

            <img
              src={user.avatar}
              alt="avatar"
              className="avatar"
            />

            <div className="user-info">
              <strong>{user.name}</strong>
              <span className="status">{user.status}</span>
            </div>

          </li>
        ))}
      </ul>

    </div>
  );

}

export default UserList;