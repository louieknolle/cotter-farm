import Feed from 'components/MainBody/FbFeed'

const Contact = () => {
  return (
    <div className="mt-48 p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly">
        <div className="flex flex-col items-center justify-center w-full m-auto">
          <h4 className="text-2xl font-semibold text-gray-800 p-2">
            See life at the farm:
          </h4>
          <div className="fb-plugin mx-auto">
            <Feed />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5337366134013!2d-84.2072316!3d39.117084299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88410165bfc00d4d%3A0x663d14eac29d1282!2sCotter%20Farm!5e0!3m2!1sen!2sus!4v1685907766776!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: '1rem' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
