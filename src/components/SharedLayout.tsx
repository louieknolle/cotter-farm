import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import MainBody from './MainBody/MainBody'

const SharedLayout = () => {
  return (
    <div className="m-auto bg-slate-200 h-screen">
      <nav className="sticky top-0 w-full bg-slate-200">
        <Header />
      </nav>
      <Banner />
      <Outlet />
    </div>
  )
}
export default SharedLayout
