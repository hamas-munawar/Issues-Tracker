import { Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId: id }: { issueId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
