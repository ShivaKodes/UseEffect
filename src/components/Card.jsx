import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

export default function Card() {
  const [posts, setPosts] = useState({});
  const [postNumber, setPostNumber] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postNumber]);

  function handleClick(nextPrev) {
    nextPrev === "next"
      ? setPostNumber((postNumber) => postNumber + 1)
      : setPostNumber((postNumber) => postNumber - 1);
  }
  return (
    <CardContainer>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <div>
        <Button nextPrev="prev" handleClick={handleClick} />
        <Button nextPrev="next" handleClick={handleClick} />
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;
