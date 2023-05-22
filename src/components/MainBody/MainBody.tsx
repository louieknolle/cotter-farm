import { ReactNode } from 'react'
import { useOutletContext } from 'react-router-dom'

const MainBody = () => {
  const outlet = useOutletContext() as ReactNode
  return <div className="flex flex-col bg-white m-auto p-4">{outlet}</div>
}

export default MainBody
