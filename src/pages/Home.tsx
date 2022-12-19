import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase";
import Login from '../components/Login';
import Spinner from "react-spinkit";

function Home() {
  const [user, loading] = useAuthState(auth as any)

  if (loading) {
    return (
    <AppLoading>
      <AppLoadingContents>
        <Spinner 
        name="ball-spin-fade-loader" 
        color="purple"
        fadeIn="none"
        />
      </AppLoadingContents>
    </AppLoading>
    )
  }

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
      </>
      )}
    </div>
  );
}

export default Home;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
`;