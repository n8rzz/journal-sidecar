import { Text } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import React from "react";

interface IProps {}

export const TradeComment: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <Text color="dimmed" size="sm">
        You&apos;ve created new branch{" "}
        <Text variant="link" component="span" inherit>
          fix-notifications
        </Text>{" "}
        from master
      </Text>
      <Text size="xs" mt={4}>
        2 hours ago
      </Text>
    </React.Fragment>
  );
};

TradeComment.displayName = "TradeComment";
