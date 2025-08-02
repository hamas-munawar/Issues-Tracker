import {
    ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon
} from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';

interface Props {
  totalCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({ totalCount, currentPage, pageSize }: Props) => {
  const totalPages = totalCount / pageSize;

  if (totalPages === 1) return null;

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {totalPages}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === totalPages}>
        <ChevronRightIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={currentPage === totalPages}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
