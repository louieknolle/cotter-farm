import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import MainBody from './MainBody/MainBody'

const SharedLayout = () => {
  return (
    <div className="m-auto h-full bg-light-green">
      <nav className="sticky top-0 w-full bg-nav-grey">
        <Header />
      </nav>
      <main className="flex flex-col items-center w-3/4 bg-off-white m-auto">
        <Outlet />
      </main>
    </div>
  )
}
export default SharedLayout
