export default function UserReducer(
  state: any,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
