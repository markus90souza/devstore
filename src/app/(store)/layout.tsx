import { Header } from '@/components/header'
import { FC, ReactNode } from 'react'

type StoreLayoutProps = {
  children: ReactNode
}

const StoreLayout: FC<StoreLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[100rem] grid-rows-app gap-5 p-8  ">
      <Header />
      {children}
    </div>
  )
}

export default StoreLayout
