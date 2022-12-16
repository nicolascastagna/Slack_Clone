import React from 'react'
import styled from "styled-components";

interface Props {
    message?: string;
    timestamp?: any;
    user?: string;
    userImage?: string;
  }

function Message({message, timestamp, user, userImage}:Props) {
  return (
    <MessageContainer>
        <img src={userImage} alt="" />
        <MessageInfo>
            <h4>
                {user}{" "}
                <span>
                    {new Date(timestamp?.toDate()).toLocaleTimeString()}
                </span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 40px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;