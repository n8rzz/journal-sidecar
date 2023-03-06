import { ITradeSummary } from "../../domain/trade/trade.types";

export interface IAddTradeForm extends Omit<ITradeSummary, "comments"> {}
