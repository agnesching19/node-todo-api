const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// const newTodo = new Todo({
//   text: 'Prepare for Monday'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

const otherTodo = new Todo({
  text: 'Feeding Bob',
  completed: true,
  completedAt: -1
});

otherTodo.save().then((doc) => {
  console.log(JSON.strigify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save todo', err);
});
