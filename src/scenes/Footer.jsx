import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playFair font-semibold text-2xl text-white">MÁTÉ KÁNTOR</p>
                <p className="font-playFair text-md text-white">©2023 KÁNTOR. All Rigths Reserved.</p>
            </div>

        </div>
      
    </footer>
  )
}

export default Footer
