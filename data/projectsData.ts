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
    imgSrc: '/static/images/time-machine',
    href: '/blog/the-time-machine',  
  },
]

export default projectsData
