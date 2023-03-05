import React from "react";
import { Stack, Timeline } from "@mantine/core";
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
      <TradeSummary {...propsMock} />
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<IconCurrencyDollar size={12} />} color={"blue"}>
          <TradeComment />
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitCommit size={12} />} color={"cyan"}>
          <TradeComment />
        </Timeline.Item>
        <Timeline.Item bullet={<IconGitCommit size={12} />}>
          <TradeComment />
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

Trade.displayName = "Trade";
