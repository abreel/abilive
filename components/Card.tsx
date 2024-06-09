import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="">
    <div className={`${imgSrc && 'h-full'}  overflow-hidden rounded-md`}>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <img
              alt={title}
              src={imgSrc}
              className="object-cover object-center"
              // width={544}
              // height="100%"
            />
          </Link>
        ) : (
          <img
            alt={title}
            src={imgSrc}
            className="object-cover object-center"
            // width={544}
            // height="100%"
          />
        ))}
      <div className="p-6">
        <p className="mb-3 leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </p>
        {/* <p className="prose mb-3 max-w-none text-justify text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )} */}
      </div>
    </div>
  </div>
)

export default Card
