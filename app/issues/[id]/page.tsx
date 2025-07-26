import { notFound } from 'next/navigation';

import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';

import EditIssueButton from './EditIssueButton';
import IssueDetail from './IssueDetail';

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      <IssueDetail issue={issue} />
      <Box>
        <EditIssueButton id={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
