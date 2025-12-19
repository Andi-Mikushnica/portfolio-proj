import {z} from 'zod';

export const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.email(),
  message: z.string().min(15, "Message must be at least 15 characters long."),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the collection and storage of your personal information.",
  }),
})

export type TmessageSchema= z.infer<typeof messageSchema>;

export type FormStateType = 'success' | 'error' | 'incomplete'