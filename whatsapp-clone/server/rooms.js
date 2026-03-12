let rooms = {
  general: []
};

function joinRoom(room, userId) {
  if (!rooms[room]) {
    rooms[room] = [];
  }

  if (!rooms[room].includes(userId)) {
    rooms[room].push(userId);
  }
}

function leaveRoom(room, userId) {
  if (!rooms[room]) return;

  rooms[room] = rooms[room].filter(id => id !== userId);
}

function getRooms() {
  return rooms;
}

module.exports = {
  joinRoom,
  leaveRoom,
  getRooms
};