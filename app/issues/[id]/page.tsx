import { notFound } from "next/navigation";

import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";

import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";

const IssueDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="4">
      <Box className="md:col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      <Flex direction="column" gap="4">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </Flex>
    </Grid>
  );
};

export default IssueDetailPage;
