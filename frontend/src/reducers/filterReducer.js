import { FILTER_MESSAGE_FAIL, FILTER_MESSAGE_REQUEST, FILTER_MESSAGE_SUCCESS } from "../constants/filterConstants.js"

export const filterReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case FILTER_MESSAGE_REQUEST:
        return {
            loading: true
        }

    case FILTER_MESSAGE_SUCCESS:
        return {
            loading: false,
            result: action.payload
        }

    case FILTER_MESSAGE_FAIL:
        return {
            loading: false,
            error: action.payload
        }

    default:
      return state;
  }
};
