import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const SharedLayout = () => {
  return (
    <div className="m-auto h-screen bg-off-white flex flex-col overflow-auto relative">
      <nav className="sticky top-0 w-full z-10 border-b-light-orange border-b-8">
        <Header />
      </nav>
      <main className="flex flex-col flex-grow items-center w-full mx-auto text-dark-nav-grey absolute">
        <Outlet />
      </main>
    </div>
  )
}
export default SharedLayout
