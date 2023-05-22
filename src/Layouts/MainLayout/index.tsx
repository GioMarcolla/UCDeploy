import { NavBar } from 'Components'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* Footer TODO */}
    </div>
  )
}

export default MainLayout