import { Button } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { auth, provider } from '../firebase';

function Login() {
    const signIn = (e:any) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="icon-slack" />
            <h3>Sign in to Slack 2.0</h3>
           <Button onClick={signIn}>Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;  

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: cover;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 30px;
        text-transform: inherit;
        background-color: #0a8d48;
        color: white;
        :hover {
            background-color: #18965a;
        }
    }
`;