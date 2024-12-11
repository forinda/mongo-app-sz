const db = require("./../");

const todoSchema = new db.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = db.model("Todo", todoSchema);

module.exports = Todo;
