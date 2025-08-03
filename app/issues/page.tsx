import { Metadata } from "next";

import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";

import Pagination from "../components/Pagination";
import { Status } from "../generated/prisma";
import IssueActions from "./IssueActions";
import IssuesTable, { columnNames, IssuesQuery } from "./IssuesTable";

const IssuesPage = async ({ searchParams }: { searchParams: Promise<IssuesQuery> }) => {
  const resolvedSearchParams = await searchParams;

  const statuses = Object.values(Status);
  const status = resolvedSearchParams.status && statuses.includes(resolvedSearchParams.status)
    ? resolvedSearchParams.status
    : undefined;
  const where = { status };

  const orderBy = resolvedSearchParams.orderBy && columnNames.includes(resolvedSearchParams.orderBy)
    ? { [resolvedSearchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(resolvedSearchParams.page || "1") || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssuesTable issues={issues} searchParams={resolvedSearchParams} />
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker - Issues List",
  description: "View all Issues of Project",
};

export default IssuesPage;
