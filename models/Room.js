const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoomSchema = Schema({
  userId: { type: String, ref: "User", required: true },
  textId: String,
  roomName: String,
  content: Array,
});

module.exports = mongoose.model("Room", RoomSchema);
