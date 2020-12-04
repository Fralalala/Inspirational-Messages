import axios from "axios";
import {
  GETTING_MESSAGE_FAIL,
  GETTING_MESSAGE_REQUEST,
  GETTING_MESSAGE_SUCCESS,
  SENDING_MESSAGE_FAIL,
  SENDING_MESSAGE_REQUEST,
  SENDING_MESSAGE_SUCCESS,
} from "../constants/messageConstants";

export const sendMessage = (name, message, image) => async (dispatch) => {
  try {
    dispatch({ type: SENDING_MESSAGE_REQUEST });

    const {
      data: { ip },
    } = await axios.get("https://ipapi.co/json/");

    const config = {
      headers: {
        ipOrigin : ip
      },
    };

    var data = new FormData();

    data.append("name", name);
    data.append("message", message);

    if (image) {
      data.append("image", image, image.name);
    }

    await axios.post("/api/message", data, config);

    dispatch({ type: SENDING_MESSAGE_SUCCESS });
  } catch (error) {
    dispatch({ type: SENDING_MESSAGE_FAIL, payload: error });
  }
};

export const getMessage = () => async (dispatch) => {
  try {
    dispatch({ type: GETTING_MESSAGE_REQUEST });

    const {
      data: { ip },
    } = await axios.get("https://ipapi.co/json/");

    const config = {
      headers: {
        "Content-Type": "applciation/json",
        ip,
      },
    };

    const { data } = await axios.get("/api/message", config);

    dispatch({
      type: GETTING_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GETTING_MESSAGE_FAIL, payload: error });
  }
};
