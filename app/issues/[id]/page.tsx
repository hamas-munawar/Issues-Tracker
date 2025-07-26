import { notFound } from 'next/navigation';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

import IssueStatusBadge from '../../components/IssueStatusBadge';

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <Flex direction="column" gapY="2">
      <Heading>{issue.title}</Heading>
      <Flex gap="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Flex>
  );
};

export default IssueDetailPage;
