

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer" //this is for older browsers
      >
        <img src="../assets/linkedin.png" alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer" //this is for older browsers
      >
        <img src="../assets/twitter.png" alt="twitter" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer" //this is for older browsers
      >
        <img src="../assets/facebook.png" alt="facebook" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer" //this is for older browsers
      >
        <img src="../assets/instagram.png" alt="instagram" />
      </a>
    </div>
  )
}

export default SocialMediaIcons
