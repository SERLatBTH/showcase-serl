import { projectSchema } from '@/types/project'
import { z } from 'zod'

export const availableProjects = z.array(projectSchema).parse([
  {
    title: 'Rejoinderoo',
    description:
      'Rejoinderoo creates a rejoinder (response to reviewers) LaTeX document based on a CSV file.',
    type: 'research software',
    tags: ['rejoinder', 'paper', 'review'],
    urlGitHub: 'https://github.com/andreas-bauer/rejoinderoo',
  },
  {
    title: 'CRediT Maker',
    description:
      'CRedit Maker helps you to create CRediT (Contributor Roles Taxonomy) statements for your research papers.',
    type: 'research software',
    tags: ['credit', 'paper', 'contributor'],
    urlGitHub: 'https://github.com/andreas-bauer/credit-maker',
  },
  {
    title: 'CiRA',
    description:
      'Causality in Requirements Artifacts (CiRA) is an initiative centered around the notion of causal requirements and causality extraction for automatic test case generation.',
    type: 'research software',
    tags: ['requirements', 'NLP', 'causality extraction'],
    urlGitHub: 'https://github.com/JulianFrattini/cira',
  },
])
