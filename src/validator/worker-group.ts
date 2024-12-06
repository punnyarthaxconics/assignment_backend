import { z } from "zod";

export const workergroupAddSchema = z.object({
  groupName: z.string({ message: "group name should be string" }),
  groupId: z.string({ message: "group id should be string" }),
  clientName: z.string({ message: "client name should be string" }),
  clientId: z.string({ message: "client name should be string" }),
});

export type workergroupAddType = z.infer<typeof workergroupAddSchema>;

export const workerGroupIdSchema = z
  .string({ message: "Id should be string" })
  .uuid({ message: "Id is not an uuid" });
