import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { sendMessage } from "../actions/messageActions";

const HomeScreen = () => {

  const dispatch = useDispatch()

    const [image, setImage] = useState()
    const [name, setName] = useState('Sedna')
    const [message, setMessage] = useState(" Hey there, go kill urself")
    // const [target, setTarget] = useState('anyone')
    
    const submitHandler = () => {
        dispatch(sendMessage(name, message, image))
    }

  return (
    <div>
      <input type="file" 
      onChange={(e) => {
          setImage(e.target.files[0])

      }} />

      <button onClick={() => submitHandler()} >print img</button>

    </div>
  );
};

export default HomeScreen;
