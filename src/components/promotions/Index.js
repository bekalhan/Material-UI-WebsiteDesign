import React from 'react';
import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme/theme";


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe :)",
  ];

function Index() {

    const [messageIndex,setMessageIndex] = useState(0);
    const [show,setShow] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
            setShow(false);
        },3000);

        const interValid = setInterval(()=>{
            setMessageIndex(i => (i+1) % messages.length);

            setShow(true);
            setTimeout(()=>{
                setShow(false);
            },3000)
        },4000)

        return () =>{
            clearInterval(interValid);
        }
    })
    

  return (
    <PromotionsContainer>
        <Slide direction={show ? 'left' : 'right'} in={show}>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
        </Slide>
    </PromotionsContainer>
  )
}

export default Index