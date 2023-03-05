import dayjs from "dayjs";
import { IAddCommentFormInitialValues } from "./AddCommentForm.types";

export const buildAddCommentFormInitialValues = (): IAddCommentFormInitialValues => {
  return {
    chartLink: "",
    noteDate: dayjs().format("H:m"),
    notes: "",
  };
};
