import {
  Button,
  Flex,
  Group,
  NativeSelect,
  NumberInput,
  SegmentedControl,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import React, { useState } from "react";
import { useInputState } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { IAddTradeFormValues } from "./AddTradeForm.types";
import { buildAddTradeFormInitialValues } from "./AddTradeForm.utils";

interface IProps {}

export const AddTradeForm: React.FC<IProps> = (props) => {
  const form = useForm({
    initialValues: buildAddTradeFormInitialValues(),
  });

  const onSubmit = (formValues: IAddTradeFormValues) => {
    console.log("---", formValues);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <Text align="left" fz={"lg"}>
          Add Tade
        </Text>

        <Flex align={"center"} justify={"space-between"} gap={2}>
          <Group>
            <DatePickerInput
              icon={<IconCalendar size="1rem" stroke={1.5} />}
              maw={300}
              mx={"auto"}
              name={"tradeDate"}
              required={true}
              placeholder={"Date"}
              withAsterisk={true}
              {...form.getInputProps("tradeDate")}
            />

            <TimeInput
              icon={<IconClock size="1rem" stroke={1.5} />}
              mx={"auto"}
              name={"tradeTime"}
              required={true}
              withAsterisk={true}
              withSeconds={false}
              {...form.getInputProps("tradeTime")}
            />
          </Group>

          <TextInput
            name={"symbol"}
            placeholder={"Symbol"}
            required={true}
            withAsterisk={true}
            {...form.getInputProps("symbol")}
          />
        </Flex>

        <SimpleGrid cols={3}>
          <NumberInput
            formatter={(value: string) => `${value}`}
            hideControls={true}
            name={"price"}
            placeholder={"Price"}
            required={true}
            {...form.getInputProps("price")}
          />

          <SegmentedControl
            color={"cyan"}
            data={[
              { label: "Long", value: "long" },
              { label: "Short", value: "short" },
            ]}
            name={"longOrShort"}
            transitionTimingFunction={"linear"}
            {...form.getInputProps("longOrShort")}
          />

          <NativeSelect
            data={["M1", "M2", "M5", "M10", "M15"]}
            name={"timeframe"}
            required={true}
            withAsterisk={true}
            {...form.getInputProps("timeframe")}
          />
        </SimpleGrid>

        <SimpleGrid cols={3}>
          <NumberInput
            name={"qty"}
            placeholder={"Qty"}
            required={true}
            {...form.getInputProps("qty")}
          />

          <NumberInput
            hideControls={true}
            name={"takeProfit"}
            placeholder={"TP"}
            required={true}
            {...form.getInputProps("takeProfit")}
          />

          <NumberInput
            hideControls={true}
            name={"stopLoss"}
            placeholder={"SL"}
            required={true}
            {...form.getInputProps("stopLoss")}
          />
        </SimpleGrid>

        <Stack align={"flex-end"} spacing={"xs"}>
          <Text c={"dimmed"} fz={"small"} fs={"italic"}>
            TP = Take Profit, SL = Stop Loss
          </Text>
        </Stack>

        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          placeholder="Notes"
          {...form.getInputProps("notes")}
        />

        <TextInput
          name={"chartLink"}
          placeholder={"Chart Link"}
          {...form.getInputProps("chartLink")}
        />

        <Space h={"sm"} />

        <Button color={"cyan"} type={"submit"}>
          Add
        </Button>
      </Stack>
    </form>
  );
};

AddTradeForm.displayName = "AddTradeForm";
