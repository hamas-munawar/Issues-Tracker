import { notFound } from 'next/navigation';
import React from 'react';

import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

import IssueStatusBadge from '../../components/IssueStatusBadge';

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
