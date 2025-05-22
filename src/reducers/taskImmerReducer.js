export default function taskImmerReducer(draft, action) {
  switch (action.type) {
    case "added":
      draft.push(action.payload);
      break;
    case "changed": {
      const index = draft.findIndex((task) => task.id === action.payload.id);
      draft[index] = action.payload;
      break;
    }
    case "deleted":
      return draft.filter((task) => task.id !== action.payload);
    default:
      throw Error("Unknown action: " + action.type);
  }
}
