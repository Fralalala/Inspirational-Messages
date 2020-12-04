import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
  GETTING_MESSAGE_SUCCESS,
  SENDING_MESSAGE_FAIL,
  SENDING_MESSAGE_REQUEST,
  SENDING_MESSAGE_SUCCESS,
} from "../constants/messageConstants";

export const messageReducer = (state = { loading: false }, action) => {
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
        loading: true,
      };

    case SENDING_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SENDING_MESSAGE_FAIL:
    case GETTING_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
