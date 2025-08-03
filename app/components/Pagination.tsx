"use client";
import { useRouter, useSearchParams } from "next/navigation";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  totalCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({ totalCount, currentPage, pageSize }: Props) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (pageNo: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNo.toString());
    router.push("?" + params.toString());
  };

  if (totalPages === 1) return null;

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        onClick={() => changePage(totalPages)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
