export default function turnReducer(state = 0, action) {
  if (action.type === "HumanChangeTurn") {
    return 1;
  }
  if (action.type === "ComputerChangeTurn") {
    return 0;
  }
  return state;
}
