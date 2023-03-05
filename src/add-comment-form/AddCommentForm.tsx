import {
  Button,
  Text,
  Textarea,
  Space,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import React from "react";

interface IProps {}

export const AddCommentForm: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <Text align="left" fz={"lg"}>
        Comment
      </Text>

      <Space h={"sm"} />

      <Stack>
        <Textarea
          autosize={true}
          maxRows={6}
          minRows={2}
          placeholder="Notes"
          required={true}
        />

        <TextInput name={"chartLink"} placeholder={"Chart Link"} />

        <SimpleGrid cols={2}>
          <TimeInput
            icon={<IconClock size="1rem" stroke={1.5} />}
            mx="auto"
            required={true}
            withAsterisk={true}
          />

          <Button color={"cyan"}>Comment</Button>
        </SimpleGrid>
      </Stack>
    </React.Fragment>
  );
};

AddCommentForm.displayName = "AddCommentForm";
