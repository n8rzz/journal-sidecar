import React from "react";
import dayjs from "dayjs";
import { Anchor, Center, Flex, Stack, Text } from "@mantine/core";

interface IProps {
  chartLink?: string;
  longOrShort: string;
  notes?: string;
  price: number;
  qty: number;
  stopLoss: number;
  symbol: string;
  takeProfit: number;
  timeframe: string;
  tradeDate: Date;
  tradeTime: string;
}

export const TradeSummary: React.FC<IProps> = (props) => {
  const formattedTradeDate = dayjs(props.tradeDate).format("ddd MMM D, YYYY");
  const longOrSHortSymbol = props.longOrShort === "long" ? "L" : "S";

  return (
    <Stack>
      <Flex align={"center"} justify={"space-between"}>
        <Text color={"dimmed"}>{props.tradeTime}</Text>
        <Text>{formattedTradeDate}</Text>
      </Flex>
      <Flex align={"center"} justify={"space-between"}>
        <Text>
          {longOrSHortSymbol} {props.timeframe}/{props.qty} {props.takeProfit}/{props.stopLoss} @
          {props.price}
        </Text>
        <Text>
          <Anchor href={props.chartLink} target={"_blank"}>
            {props.chartLink}
          </Anchor>
        </Text>
      </Flex>
      <Text color={"dimmed"}>{props.notes}</Text>
    </Stack>
  );
};

TradeSummary.displayName = "TradeSummary";
