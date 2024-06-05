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
    imgSrc: '/static/images/google.png',
    href: '/blog/the-time-machine',  
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
