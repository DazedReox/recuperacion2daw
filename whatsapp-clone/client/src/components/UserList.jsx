import React from "react";
function UserList({ users, onSelectUser }) {

  return (

    <div className="sidebar">
      <h3>Usuarios conectados</h3>
      <ul className="user-list">
        {users.map((user, index) => (
            <li key={user.id + index} onClick={() => onSelectUser(user)}>
            <img src={user.avatar}className="avatar"/>
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