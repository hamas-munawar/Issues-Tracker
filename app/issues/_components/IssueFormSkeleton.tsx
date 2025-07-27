import Skeleton from '@/app/components/Skeleton';
import { Box } from '@radix-ui/themes';

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height={"25rem"} />
      <Skeleton width="10rem" height="2rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
