import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
  GETTING_MESSAGE_SUCCESS,
  SENDING_MESSAGE_FAIL,
  SENDING_MESSAGE_REQUEST,
  SENDING_MESSAGE_SUCCESS,
} from "../constants/messageConstants";

export const messageReducer = (state = { loading: false, message: {} }, action) => {
  switch (action.type) {
    case SENDING_MESSAGE_REQUEST:
    case GETTING_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GETTING_MESSAGE_SUCCESS:
      return {
        message: action.payload,
        loading: false,
      };

    case SENDING_MESSAGE_SUCCESS:
      return {
        
        loading: false,
        message: {msg: "sendSuccess"}
      };

    case SENDING_MESSAGE_FAIL:
      
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: {msg: "sendFailed"}
      };

    case GETTING_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: {msg: "getFailed"}
      };

    default:
      return state;
  }
};
