import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./components/Global.styled";
import Card from "./components/Card";

const Container = styled.div`
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Card />
      </Container>
    </>
  );
}

export default App;
