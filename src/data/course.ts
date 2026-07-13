export const COURSE_NAME = 'AI Tools and Impact'

export interface CurriculumPhase {
  phase: number
  title: string
  sessions: string
  description: string
  topics: string[]
}

export const curriculumPhases: CurriculumPhase[] = [
  {
    phase: 1,
    title: 'Shared Foundations',
    sessions: 'Sessions 1-6',
    description: 'The text envelope: context engineering, prompting, reasoning, workflow design, external data, and evaluation without code.',
    topics: [
      'Context engineering and effective prompting',
      'AI reasoning and how models work',
      'Designing repeatable AI workflows',
      'Working with external data sources',
      'Evaluating outputs without writing code',
      'Responsible and ethical AI use',
    ],
  },
  {
    phase: 2,
    title: 'Code Scaffolding',
    sessions: 'Sessions 7-12',
    description: 'The technical envelope: API calls, tool use, AI-assisted development, agent safety, orchestration, and rigorous evaluation.',
    topics: [
      'API calls and integrations',
      'Tool use and function calling',
      'AI-assisted development workflows',
      'Agent safety and failure modes',
      'Orchestration and multi-step pipelines',
      'Rigorous output evaluation',
    ],
  },
  {
    phase: 3,
    title: 'Synthesis and Spring Readiness',
    sessions: 'Sessions 13-14',
    description: 'Project proposals, peer critique, show-and-tell, and spring launch.',
    topics: [
      'Final project proposals',
      'Peer critique and feedback',
      'Show-and-tell presentations',
      'Spring AI Impact Lab orientation',
    ],
  },
]

export const learningObjectives = [
  'Build functional AI applications using current tools and techniques, including prompting, model selection, basic integration, and output evaluation.',
  'Apply the THRIVE framework to assessing AI tools\' human impact, risks, and trustworthiness.',
  'Judge whether an AI solution should be built and used, not only whether it works.',
  'Critically evaluate AI outputs for accuracy, bias, and failure modes and articulate the technical limits of a given system.',
  'Collaborate effectively in interdisciplinary teams, integrating technical, business, and liberal arts perspectives.',
]
