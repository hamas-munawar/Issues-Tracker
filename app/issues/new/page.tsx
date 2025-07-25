"use client";

import 'easymde/dist/easymde.min.css';

import SimpleMDE from 'react-simplemde-editor';

import { Button, TextField } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className="max-w-xl px-4 space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
