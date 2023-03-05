import React from "react";
import { Timeline } from "@mantine/core";
import { IconGitCommit, IconCurrencyDollar } from "@tabler/icons-react";
import { TradeComment } from "./trade-comment/TradeComment";

interface IProps {}

export const Trade: React.FC<IProps> = () => {
  return (
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
  );
};

Trade.displayName = "Trade";
