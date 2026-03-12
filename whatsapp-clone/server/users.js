let users = [];

function addUser(user) {
  users.push(user);
}

function removeUser(id) {
  users = users.filter(u => u.id !== id);
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