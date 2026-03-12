function UserList({ users, onSelectUser }) {

  return (

    <div className="sidebar">

      <h3>Usuarios conectados</h3>

      <ul className="user-list">

        {users.map((user) => (

          <li
            key={user.id}
            className="user-item"
            onClick={() => onSelectUser(user)}
          >

            <img
              src={user.avatar}
              alt="avatar"
              className="avatar"
            />

            <div>
              <strong>{user.name}</strong>
              <div className="status">{user.status}</div>
            </div>

          </li>

        ))}

      </ul>

    </div>

  );

}

export default UserList;