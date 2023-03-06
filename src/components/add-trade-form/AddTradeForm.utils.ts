import dayjs from "dayjs";
import { ITradeSummary } from "../../domain/trade/trade.types";

export const buildAddTradeFormInitialValues = (): ITradeSummary => {
  return {
    chartLink: "",
    longOrShort: "long",
    notes: "",
    price: 0,
    qty: 1,
    stopLoss: 0,
    symbol: "MESH2023",
    takeProfit: 0,
    timeframe: "",
    tradeDate: new Date(),
    tradeTime: dayjs().format("HH:mm"),
  };
};
