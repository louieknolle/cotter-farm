import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import MainBody from './MainBody/MainBody'

const SharedLayout = () => {
  return (
    <div className="m-auto h-screen bg-lighter-blue flex flex-col overflow-auto relative">
      <nav className="sticky top-0 w-full z-10 border-b-golden-yellow border-b-8">
        <Header />
      </nav>
      <main className="flex flex-col flex-grow items-center w-full mx-auto text-dark-nav-grey absolute">
        <Outlet />
      </main>
    </div>
  )
}
export default SharedLayout
