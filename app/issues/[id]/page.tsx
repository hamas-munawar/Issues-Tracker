import { notFound } from 'next/navigation';
import React from 'react';

import prisma from '@/prisma/client';

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
    </div>
  );
};

export default IssueDetailPage;
