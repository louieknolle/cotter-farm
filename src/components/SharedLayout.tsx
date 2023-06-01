import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import MainBody from './MainBody/MainBody'

const SharedLayout = () => {
  return (
    <div className="m-auto h-screen bg-light-green flex flex-col overflow-auto">
      <nav className="sticky top-0 w-full">
        <Header />
      </nav>
      <main className="flex flex-col flex-grow items-center w-full mx-auto text-light-orange">
        <Outlet />
      </main>
    </div>
  )
}
export default SharedLayout
