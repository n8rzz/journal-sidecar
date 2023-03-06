import dayjs from "dayjs";
import { ITradeComment } from "../../domain/trade-comment/TradeComment.types";

export const buildAddCommentFormInitialValues = (): ITradeComment => {
  return {
    chartLink: "",
    noteDate: dayjs().format("HH:mm"),
    note: "",
  };
};

export const addCommentFormValidations = () => ({
  note: (value: string) => value.length === 0,
  noteDate: (value: string) => typeof value === undefined,
});
