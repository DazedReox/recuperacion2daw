const users = [];

function addUser(user) {
  const exists = users.find(u => u.id === user.id);
  if (!exists) {
    users.push(user);
  }
}

function removeUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

function getUsers() {
  return users;
}

function getUser(id) {
  return users.find(u => u.id === id);
}

module.exports = {
  addUser,
  removeUser,
  getUsers,
  getUser
};