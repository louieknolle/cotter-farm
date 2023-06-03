import Banner from 'components/Banner/Banner'
import bioPhoto from './media/mike-yams.jpg'
import Feed from './FbFeed'

const AboutBio = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center w-3/4 mx-auto p-4">
        <h3 className="text-3xl font-semibold text-gray-800 p-2">About Us</h3>
        {/* <h6 className="text-xl font-semibold text-gray-800 p-2">
          Pasture-raised pork available seasonally.
        </h6> */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 max-w-3xl">
          <img
            src={bioPhoto}
            alt="farmer Mike holding yams fresh from the soil"
            className="w-2/3 sm:w-1/2 md:w-1/4 h-auto object-cover rounded-md pb-4"
          />
          <p className="ml-4 text-xl">
            Cotter Farm is a Community Supported Agriculture (CSA) project
            serving Hamilton and Clermont Counties. CSA members visit the farm
            in Batavia, OH on the banks of the East Fork of the Little Miami
            River throughout the growing season to pick up their share of
            seasonally available produce. Entering our 4th year of direct to
            consumer produce sales, we are excited to offer pasture-raised pork
            for the first time.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full m-auto">
          <h4 className="text-2xl font-semibold text-gray-800 p-2">
            See life at the farm:
          </h4>
          <div className="fb-plugin mx-auto">
            <Feed />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutBio
