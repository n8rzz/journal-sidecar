import { Button, Text, Textarea, Space, SimpleGrid, Stack, TextInput, Grid } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import React from "react";
import { useForm } from "@mantine/form";
import { IAddCommentFormInitialValues } from "./AddCommentForm.types";
import { buildAddCommentFormInitialValues } from "./AddCommentForm.utils";

interface IProps {}

export const AddCommentForm: React.FC<IProps> = () => {
  const form = useForm({
    initialValues: buildAddCommentFormInitialValues(),

    validate: {
      notes: (value: string) => value.length === 0,
      noteDate: (value: string) => typeof value === undefined,
    },
  });

  const onSubmit = (formValues: IAddCommentFormInitialValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Text align="left" fz={"lg"}>
        Comment
      </Text>

      <Space h={"sm"} />

      <Stack>
        <TextInput
          name={"chartLink"}
          placeholder={"Chart Link"}
          {...form.getInputProps("chartLink")}
        />

        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          name={"notes"}
          placeholder="Notes"
          required={true}
          {...form.getInputProps("notes")}
        />

        <Grid>
          <Grid.Col span={4}>
            <TimeInput
              icon={<IconClock size="1rem" stroke={1.5} />}
              mx="auto"
              name={"noteDate"}
              required={true}
              withSeconds={false}
              withAsterisk={true}
              {...form.getInputProps("noteDate")}
            />
          </Grid.Col>
          <Grid.Col span={5} />
          <Grid.Col span={3}>
            <Button color={"cyan"} type={"submit"}>
              Comment
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </form>
  );
};

AddCommentForm.displayName = "AddCommentForm";
