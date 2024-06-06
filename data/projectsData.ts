interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'AI-Powered Text Editor with Advanced Image and Conversation Integration',
    description: `A Figma prototype of an innovative text editor that integrates AI for text generation, image search and creation, and conversational interaction, streamlining content creation and enhancing user engagement.`,
    imgSrc: 'https://cdn.loom.com/sessions/thumbnails/6e7d7af9e72c45c39a13fe4110bfe801-with-play.gif',
    href: '/blog/ai-text-editor',
  },
]

export default projectsData
