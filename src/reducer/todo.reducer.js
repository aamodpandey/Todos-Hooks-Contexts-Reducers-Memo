import { v4 as uuid } from "uuid";

export default function (state, action) {
  const { id, task, type } = action;
  switch (type) {
    case "TOGGLE":
      return state.map((i) =>
        i.id === id ? { ...i, checked: !i.checked } : i
      );
    case "ADD":
      return [...state, { id: uuid(), task: task, checked: false }];
    case "EDIT":
      return state.map((i) => (i.id === id ? { ...i, task: task } : i));
    case "DELETE":
      return state.filter((i) => i.id !== id);
    case "DELETEALL":
      return [];
    default:
      return state;
  }
}
