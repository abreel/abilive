import { returnVideo, returnImg } from './utilities/returnImgOrVideo'

const Card = ({ title, description, previewSrc, href, previewType }) => (
  <div className="">
    <div className={`${previewSrc && 'h-full'} overflow-hidden rounded-md shadow`}>
      {previewType === 'video'
        ? returnVideo(title, previewSrc, href)
        : returnImg(title, previewSrc, href)}
    </div>
  </div>
)

export default Card
