import Image from './Image'
import Link from './Link'

const returnImg = (title, description, imgSrc, href) =>
  imgSrc &&
  (href ? (
    <Link href={href} aria-label={`Link to ${title}`}>
      <Image
        alt={title}
        src={imgSrc}
        className="object-cover object-center"
        width={500}
        height={500}
      />
    </Link>
  ) : (
    <Image
      alt={title}
      src={imgSrc}
      className="object-cover object-center"
      width={500}
      height={500}
    />
  ))

const returnVideo = (title, description, imgSrc, href) =>
  imgSrc &&
  (href ? (
    <Link href={href} aria-label={`Link to ${title}`}>
      <video autoPlay loop muted playsInline>
        <source src={imgSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Link>
  ) : (
    <video autoPlay loop muted playsInline>
      <source src={imgSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ))

const Card = ({ title, description, imgSrc, href, imgType }) => (
  <div className="">
    <div className={`${imgSrc && 'h-full'} overflow-hidden rounded-md`}>
      {imgType === 'video'
        ? returnVideo(title, description, imgSrc, href)
        : returnImg(title, description, imgSrc, href)}
    </div>
  </div>
)

export default Card
