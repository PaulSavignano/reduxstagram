// Reducer takes in action and a copy of state.

function comments(state = [], action) {
  console.log('The comment will change');
  console.log(state, action);
  return state;
}

export default comments;
