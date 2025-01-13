import { z } from 'zod'

const project = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  type: z.string(),
  tags: z.string().array(),
  urlGitHub: z.string().url(),
  urlHomepage: z.string().url(),
  urlScreenshots: z.string().array(),
})

export type Project = z.infer<typeof project>
