import React from "react";

import { Button, Text, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl px-4 space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
