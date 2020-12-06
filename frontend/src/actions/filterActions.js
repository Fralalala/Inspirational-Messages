import axios from "axios";
import qs from "qs"

import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
} from "../constants/messageConstants";

export const filterMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: GETTING_MESSAGE_REQUEST });

    let config = {
      headers : {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-id": "Fralalala",
        "api-key": "MeDnEwmPrhkL2VlXl3dRcr5ixNpLNNlCGTWRoD2anervipqV",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST"
      }
    }

    

    let body = qs.stringify({
      "content": "this is some words with a bad word ass"
    })

    var options = {
      method: "POST",
      url: "https://neutrinoapi.net/bad-word-filter",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-id": "28a6bae319mshd63d3b83104500ep1da93cjsned9cd4f46c2f",
        "api-key": "MeDnEwmPrhkL2VlXl3dRcr5ixNpLNNlCGTWRoD2anervipqV",
      },
      data: {
        "censor-character": "*",
        content: "This text does not actually contain any bad words!",
      },
    };

    const { data } = await axios.post("https://neutrinoapi.net/bad-word-filter", body, config)

    console.log(data);
  } catch (error) {
    dispatch({ type: GETTING_MESSAGE_FAIL, payload: error });
  }
};
