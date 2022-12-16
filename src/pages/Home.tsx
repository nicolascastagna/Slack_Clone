import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase";
import Login from '../components/Login';

function Home() {
  const [user, loading] = useAuthState(auth as any)

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
