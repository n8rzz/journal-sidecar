import "./App.css";
import React from "react";
import { AddTradeForm } from "./components/add-trade-form/AddTradeForm";
import { AddCommentForm } from "./components/add-comment-form/AddCommentForm";
import { Trade } from "./components/trade/Trade";
import { Center, Container } from "@mantine/core";

interface IProps {}

export const App: React.FC<IProps> = () => {
  return (
    <div className={"App"}>
      <Container maw={500} p={"2rem 1rem"}>
        <AddTradeForm />
        <br />
        <hr />
        <br />
        <AddCommentForm />
        <br />
        <hr />
        <br />
        <Trade />
      </Container>
    </div>
  );
};
