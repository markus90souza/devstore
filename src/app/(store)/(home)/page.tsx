import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="grid-rows-6 grid max-h-[53.75rem] grid-cols-9 gap-6">
      <Link
        href={'/'}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-125"
          src={'/moletom-ai-side.png'}
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[17.5rem] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moleton AI Slate</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            RS:150,00
          </span>
        </div>
      </Link>

      <Link
        href={'/'}
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-125"
          src={'/moletom-java.png'}
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[17.5rem] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moleton AI Slate</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            RS:150,00
          </span>
        </div>
      </Link>

      <Link
        href={'/'}
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-125"
          src={'/moletom-ia-p-devs.png'}
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[17.5rem] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moleton AI Slate</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            RS:150,00
          </span>
        </div>
      </Link>
    </div>
  )
}

export default HomePage
