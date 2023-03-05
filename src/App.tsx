import "./App.css";
import React from "react";
import { AddTradeForm } from "./add-trade-form/AddTradeForm";
import { AddCommentForm } from "./add-comment-form/AddCommentForm";
import { Trade } from "./trade/Trade";

interface IProps {}

export const App: React.FC<IProps> = () => {
  return (
    <div className={"App"}>
      <AddTradeForm />
      <br />
      <hr />
      <br />
      <AddCommentForm />
      <br />
      <hr />
      <br />
      <Trade />
    </div>
  );
};
