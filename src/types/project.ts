import { z } from 'zod'

export const projectSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  type: z.enum(['research software', 'student project']),
  tags: z.string().toLowerCase().array(),
  urlGitHub: z.string().url(),
  urlHomepage: z.string().url().optional(),
  urlScreenshots: z.string().array().optional(),
})

export type Project = z.infer<typeof projectSchema>
