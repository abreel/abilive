import React from 'react'

const BlogLayout = ({ frontMatter, children }) => {
  const { title, date, tags, summary, prototypeLink, previewSrc, clientReview } = frontMatter

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <p>{summary}</p>

      <a href={prototypeLink} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={previewSrc} alt={title} />
      </a>

      <a href={prototypeLink} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary mt-4">View Figma Prototype</button>
      </a>

      <blockquote>
        <p>***{clientReview}***</p>
      </blockquote>
      <p>
        <strong>Client Review</strong>
      </p>

      {children}

      <a href={prototypeLink} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary mt-4">View Figma Prototype</button>
      </a>

      <p>
        Are you ready to transform your ideas into reality? Join us in pushing the boundaries of
        what's possible. Let's create something extraordinary together.
      </p>

      <p>Ready to embark on your journey of innovation and transformation? Get in touch.</p>
    </div>
  )
}

export default BlogLayout
