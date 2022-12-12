import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

function Home() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </div>
  );
}

export default Home;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
