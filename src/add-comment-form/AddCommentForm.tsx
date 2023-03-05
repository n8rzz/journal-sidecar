import { Button, Text, Textarea, Space, SimpleGrid, Stack, TextInput } from "@mantine/core";
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
        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          name={"notes"}
          placeholder="Notes"
          required={true}
          {...form.getInputProps("notes")}
        />

        <TextInput
          name={"chartLink"}
          placeholder={"Chart Link"}
          {...form.getInputProps("chartLink")}
        />

        <SimpleGrid cols={2}>
          <TimeInput
            icon={<IconClock size="1rem" stroke={1.5} />}
            mx="auto"
            name={"noteDate"}
            required={true}
            withSeconds={false}
            withAsterisk={true}
            {...form.getInputProps("noteDate")}
          />

          <Button color={"cyan"} type={"submit"}>
            Comment
          </Button>
        </SimpleGrid>
      </Stack>
    </form>
  );
};

AddCommentForm.displayName = "AddCommentForm";
