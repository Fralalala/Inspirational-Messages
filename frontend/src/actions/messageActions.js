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
        ipOrigin : ip,
        //fetch on filter api accepets a urlencoded type, so message in body cant be taken, (if I understood correctly)
        message
      },
    };

    var formData = new FormData();

    formData.append("name", name);
    formData.append("message", message);

    if (image) {
      formData.append("image", image[0], image[0].name);
    }

    const {data} = await axios.post("/api/message", formData, config);

    if(data.error !== undefined) {
      throw new Error(data.error)
    }

    dispatch({ type: SENDING_MESSAGE_SUCCESS }); 
  } catch (error) {
    dispatch({ type: SENDING_MESSAGE_FAIL, payload: error.message });
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
