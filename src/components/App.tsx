import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Faqs from './FAQs/Faqs'
import SharedLayout from './SharedLayout'
import AboutBio from './MainBody/AboutBio'
import CsaJoin from './CsaJoin/CsaJoin'
import Pork from './Pork/Pork'
import Contact from './Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AboutBio />} />
          <Route path="csa" element={<CsaJoin />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="our-pork" element={<Pork />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
