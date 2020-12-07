import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { filterMessage } from '../actions/filterActions'
import axios from "axios"

const SendScreen = () => {

    const dispatch = useDispatch()

    return (
        <Container>
            
            <Button 
                onClick={() => {
                    dispatch(filterMessage("this is some words with a bad word FUCK"))
                }}
            >
                filter msg
            </Button>

        </Container>
    )
}

export default SendScreen
