import Banner from './Banner/Banner'
import Header from './Header/Header'
import React from 'react'
import MainBody from './MainBody/MainBody'
function App() {
  return (
    <div className="m-auto bg-slate-200">
      <nav className="sticky top-0 w-full bg-slate-200">
        <Header />
      </nav>
      <Banner />
      <MainBody />
    </div>
  )
}

export default App
