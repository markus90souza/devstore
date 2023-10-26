import { FC, ReactNode } from 'react'

type StoreLayoutProps = {
  children: ReactNode
}

const StoreLayout: FC<StoreLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>
}

export default StoreLayout
