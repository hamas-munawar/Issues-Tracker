import React from "react";
import ReactMarkdown from "react-markdown";

import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@/app/generated/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
    <Flex direction="column" gapY="2">
      <Heading>{issue.title}</Heading>
      <Flex gap="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Flex>
  );
};

export default IssueDetail;
