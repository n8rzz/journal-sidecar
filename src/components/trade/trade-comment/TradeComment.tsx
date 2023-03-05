import { Anchor, Flex, Text } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import React from "react";

interface IProps {}

export const TradeComment: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <Text color="dimmed" size="sm">
        This is a space for a comment. It doesn't need to be a long comment. heck, there doesn't
        even need to be a comment, provided there is a chart link. cool huh?
      </Text>
      <Flex align={"center"} justify={"space-between"}>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
        <Text color={"dimmed"} size="xs" mt={4}>
          <Anchor href={"http//example.com/chart"}>http//example.com/chart</Anchor>
        </Text>
      </Flex>
    </React.Fragment>
  );
};

TradeComment.displayName = "TradeComment";
