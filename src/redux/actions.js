export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id: id,
})