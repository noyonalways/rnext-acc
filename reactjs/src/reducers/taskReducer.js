export default function taskReducer(state, action) {
  switch (action.type) {
    case "added":
      return [...state, action.payload];
    case "changed":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    case "deleted":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}
