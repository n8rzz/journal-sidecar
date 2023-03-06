import React from "react";
import { Container, Stack, Timeline } from "@mantine/core";
import { IconGitCommit, IconCurrencyDollar } from "@tabler/icons-react";
import { TradeComment } from "./trade-comment/TradeComment";
import { TradeSummary } from "./trade-summary/TradeSummary";

const propsMock = {
  chartLink: "https://exampe.com/chart",
  longOrShort: "long",
  notes: "This is a trade note",
  price: 4000.25,
  qty: 1,
  stopLoss: 12,
  symbol: "MESH2023",
  takeProfit: 30,
  timeframe: "M1",
  tradeDate: new Date("2023-03-05T19:11:41.529Z"),
  tradeTime: "13:11",
};

interface IProps {}

export const Trade: React.FC<IProps> = () => {
  return (
    <Stack>
      <div style={{ marginBottom: "10px" }}>
        <TradeSummary {...propsMock} />
      </div>

      <Timeline bulletSize={24} lineWidth={2}>
        <Timeline.Item>
          <TradeComment />
        </Timeline.Item>
        <Timeline.Item>
          <TradeComment />
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

Trade.displayName = "Trade";
