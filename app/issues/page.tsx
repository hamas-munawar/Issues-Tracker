import NextLink from "next/link";

import { IssueStatusBadge, Link } from "@/app/components";
import prisma from "@/prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Flex, Table } from "@radix-ui/themes";

import Pagination from "../components/Pagination";
import { Issue, Status } from "../generated/prisma";
import IssueActions from "./IssueActions";

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issues", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}) => {
  searchParams = await searchParams;

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const orderBy = columns.map((col) => col.value).includes(searchParams.orderBy)
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
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <Flex gapX="1" align="center">
                  <NextLink
                    href={{ query: { ...searchParams, orderBy: column.value } }}
                  >
                    {column.label}
                  </NextLink>
                  {column.value === searchParams.orderBy && <ArrowUpIcon />}
                </Flex>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
