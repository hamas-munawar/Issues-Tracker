import { Skeleton } from '@/app/components';
import { Card, Flex } from '@radix-ui/themes';

const LoadingIssueDetailPage = () => {
  return (
    <Flex direction="column" gapY="2" className="max-w-xl">
      <Skeleton />
      <Flex gap="3">
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      <Card className="prose">
        <Skeleton height={"20rem"} />
      </Card>
    </Flex>
  );
};

export default LoadingIssueDetailPage;
