import axios from "axios";
import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
} from "../constants/messageConstants";

export const filterMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: GETTING_MESSAGE_REQUEST });

    let params = {
      "Content-Type": "application/x-www-form-urlencoded",
      "user-id": "Fralalala",
      "api-key": "MeDnEwmPrhkL2VlXl3dRcr5ixNpLNNlCGTWRoD2anervipqV",
    };

    let body = {
      content: "This text does not actually contain any bad words! ",
    };

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

    const { data } = await axios.post(
      "https://neutrinoapi.net/bad-word-filter",
      { content: "this text does not have any bad wordzxc" },
      {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-id": "Fralalala",
        "api-key": "MeDnEwmPrhkL2VlXl3dRcr5ixNpLNNlCGTWRoD2anervipqV",
      }
    );

    console.log(data);
  } catch (error) {
    dispatch({ type: GETTING_MESSAGE_FAIL, payload: error });
  }
};
