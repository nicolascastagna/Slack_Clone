import { Button } from '@mui/material';
import React, { useRef } from 'react'
import styled from "styled-components";
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    channelName?: string;
    channelId?: string;
    chatRef?: any;
  }

function ChatInput({channelName, channelId, chatRef}:Props) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [user] = useAuthState(auth as any)

    const sendMessage = (e:any) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: inputRef?.current?.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName as string,
            userImage: user?.photoURL as string,
        });
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
         });
        (document.getElementById("inputMessage") as HTMLInputElement).value = "";
    }

  return (
    <ChatInputContainer>
        <form>
            {channelId && (
                <input ref={inputRef} id="inputMessage" placeholder={`Send a message #${channelName}`}/>
            )}
            <Button hidden type='submit' onClick={sendMessage}>
                Send
            </Button>
        </form>
    </ChatInputContainer>    
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 40%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none;
    }
`;