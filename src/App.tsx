import "./App.css";
import React from "react";
import { AddTradeForm } from "./components/add-trade-form/AddTradeForm";
import { AddCommentForm } from "./components/add-comment-form/AddCommentForm";
import { Trade } from "./components/trade/Trade";
import { Container, Stack } from "@mantine/core";
import { tradeListMock } from "./components/trade/__mock__/trade.mocks";
import { ITradeSummary } from "./domain/trade/trade.types";

interface IProps {}

export const App: React.FC<IProps> = () => {
  return (
    <div className={"App"}>
      <Container maw={500} p={"2rem 1rem"}>
        <AddTradeForm />
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <AddCommentForm />
        <br />
        <br />
        <hr />
        <hr />
        <br />
        <br />
        <Stack spacing={"xl"}>
          {tradeListMock.map((trade: ITradeSummary) => (
            <Trade key={trade.id} tradeSummary={trade} />
          ))}
        </Stack>
      </Container>
    </div>
  );
};
