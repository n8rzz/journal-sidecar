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

interface IProps {}

export const AddTradeForm: React.FC<IProps> = (props) => {
  const now = new Date();
  const [dateValue, setDateValue] = useState<Date | null>(now);
  const [timeValue, setTimeValue] = useInputState<string>(
    `${now.getHours()}${now.getMinutes()}`
  );

  return (
    <Stack>
      <Text align="left" fz={"lg"}>
        Add Tade
      </Text>

      <Flex align={"center"} justify={"space-between"} gap={2}>
        <Group>
          <DatePickerInput
            icon={<IconCalendar size="1rem" stroke={1.5} />}
            maw={300}
            mx="auto"
            onChange={setDateValue}
            placeholder="Date"
            value={dateValue}
            withAsterisk={true}
          />

          <TimeInput
            icon={<IconClock size="1rem" stroke={1.5} />}
            mx="auto"
            required={true}
            onChange={setTimeValue}
            value={timeValue}
            withAsterisk={true}
            withSeconds={false}
          />
        </Group>

        <TextInput
          name="symbol"
          placeholder={"Symbol"}
          value={"MESH2023"}
          withAsterisk={true}
        />
      </Flex>

      <SimpleGrid cols={3}>
        <NumberInput
          formatter={(value: string) => `${value}`}
          hideControls={true}
          name={"price"}
          placeholder={"Price"}
        />

        <SegmentedControl
          color={"cyan"}
          data={[
            { label: "Long", value: "long" },
            { label: "Short", value: "short" },
          ]}
          transitionTimingFunction={"linear"}
        />

        <NativeSelect
          data={["M1", "M2", "M5", "M10", "M15"]}
          withAsterisk={true}
        />
      </SimpleGrid>

      <SimpleGrid cols={3}>
        <NumberInput name={"qty"} placeholder={"Qty"} required={true} />

        <NumberInput
          hideControls={true}
          name={"takeProfit"}
          placeholder={"TP"}
          required={true}
        />

        <NumberInput
          hideControls={true}
          name={"stopLoss"}
          placeholder={"SL"}
          required={true}
        />
      </SimpleGrid>

      <Stack align={"flex-end"} spacing={"xs"}>
        <Text c={"dimmed"} fz={"small"} fs={"italic"}>
          TP = Take Profit, SL = Stop Loss
        </Text>
      </Stack>

      <Textarea autosize={true} maxRows={6} minRows={2} placeholder="Notes" />

      <TextInput name={"chartLink"} placeholder={"Chart Link"} />

      <Space h={"sm"} />

      <Button color={"cyan"} type={"submit"}>
        Add
      </Button>
    </Stack>
  );
};

AddTradeForm.displayName = "AddTradeForm";
