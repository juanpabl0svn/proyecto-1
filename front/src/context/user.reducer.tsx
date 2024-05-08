import { INITIAL_STATE } from "./user.context";

export default function UserReducer(
  state: any,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "LOG_IN":
      return {
        ...state,
        user : action.payload,
        isLoggedIn: true,
      };
    case "LOG_OUT":
      return INITIAL_STATE;
    
    case "CREATE_FAMILY":{
      return {
        ...state,
        user: {
          ...state.user,
          family: action.payload
        }
      }
    }
    default:
      return state;
  }
}
