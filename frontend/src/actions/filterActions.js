import axios from "axios";
import qs from "qs";

import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
} from "../constants/messageConstants";

export const filterMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: GETTING_MESSAGE_REQUEST });

    

  } catch (error) {
    dispatch({ type: GETTING_MESSAGE_FAIL, payload: error });
  }
};
