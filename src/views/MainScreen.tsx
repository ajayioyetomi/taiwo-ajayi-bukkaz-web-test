import type React from "react";

import { Header } from "../components";

type MainType = {
    children: React.ReactNode | null
}
const MainScreen = ({children}:MainType) => {
  return (
    <main className='fixed left-0 top-0 w-screen h-screen flex flex-col'>
        <header className='w-full sticky top-0'>
            <Header />
        </header>
        <section className='main-scroll flex-1 max-h-[calc(100% - 71px)] overflow-x-clip overflow-y-auto'>
            {children}
        </section>
    </main>
  )
}

export default MainScreen