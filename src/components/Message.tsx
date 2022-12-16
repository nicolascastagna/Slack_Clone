import React from 'react'
import styled from "styled-components";

interface Props {
    message?: string;
    timestamp?: string;
    user?: string;
    userImage?: any;
  }

function Message({message, timestamp, user, userImage}:Props) {
  return (
    <MessageContainer>Message</MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`

`;