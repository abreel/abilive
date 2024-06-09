import Image from '../Image'
import Link from '../Link'

export const returnImg = (title, previewSrc, href) =>
  previewSrc &&
  (href ? (
    <Link href={href} aria-label={`Link to ${title}`}>
      <Image
        alt={title}
        src={previewSrc}
        className="object-cover object-center"
        width={500}
        height={500}
      />
    </Link>
  ) : (
    <Image
      alt={title}
      src={previewSrc}
      className="object-cover object-center"
      width={500}
      height={500}
    />
  ))

export const returnVideo = (title, previewSrc, href) =>
  previewSrc &&
  (href ? (
    <Link href={href} aria-label={`Link to ${title}`}>
      <video autoPlay loop muted playsInline>
        <source src={previewSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Link>
  ) : (
    <video autoPlay loop muted playsInline>
      <source src={previewSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ))
