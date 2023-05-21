import AboutBio from './AboutBio'
import Faqs from './Faqs'

const MainBody = () => {
  return (
    <div className="flex flex-col w-3/4 bg-white m-auto p-4">
      <AboutBio />
      <Faqs />
    </div>
  )
}

export default MainBody
