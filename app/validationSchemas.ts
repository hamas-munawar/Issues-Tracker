import { z } from 'zod';

export const IssueSchema = z.object({
  title: z.string().min(1, "Title is Required").max(255),
  description: z
    .string("Description is Required")
    .min(1, "Description is Required"),
});
