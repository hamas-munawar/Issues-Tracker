import Link from "next/link";
import React from "react";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const EditIssueButton = ({ issueId: id }: { issueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${id}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
