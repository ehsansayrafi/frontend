import { useRouter } from "next/router"
import Image from "next/image"
import { PlayIcon } from "@heroicons/react/solid";
import { ClockIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Icon from '../Icon'

function Card({anime}) {
  const router = useRouter()

  const changeRoute = () => {
    router.push(`/anime/${anime.id}`)
  }

  const solidImage = (color) => `
    <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="1" height="1" style="fill:${color};stroke-width:3;stroke:${color}" />
    </svg>
  `

  const toBase64 = (str) =>Buffer.from(str).toString('base64')

  return (
    <div className='w-52 sm:w-56 p-2 hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative w-40 sm:w-52 h-48 sm:h-64'>
        <Image
          src={anime.coverImage.large || anime.coverImage.medium}
          layout='fill'
          objectPosition='center'
          className='rounded-md'
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            solidImage(anime.coverImage.color)
          )}`}
        />
      </div>
    
      <div className='cursor-pointer' onClick={changeRoute}>
        <p className='h-12 text-sm mt-2 text-white'>{anime.title.romaji}</p>

        <div className='flex space-x-2 text-white text-xs'>
          <Icon icon={PlayIcon} text={anime.format} className='hidden sm:flex' />
          <Icon icon={ClockIcon} text={`${anime.duration} Min`} />
          <Icon icon={ThumbUpIcon} text={`${anime.meanScore}%`} />
        </div>

        <p className='text-gray-500 text-xs float-right'>Click to read more...</p>
      </div>
    </div>
  )
}
  
export default Card