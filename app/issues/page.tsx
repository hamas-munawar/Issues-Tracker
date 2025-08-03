import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";

import Pagination from "../components/Pagination";
import { Status } from "../generated/prisma";
import IssueActions from "./IssueActions";
import IssuesTable, { columnNames, IssuesQuery } from "./IssuesTable";

const IssuesPage = async ({ searchParams }: { searchParams: IssuesQuery }) => {
  searchParams = await searchParams;

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
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
      <IssuesTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
