import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            SHAHID SHAIKH
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2025 SHAIKH. All Rights Reserved.
          </p>
        </div>
        
        {/* Professional Tagline */}
        <div className="text-center mt-4">
          <p className="font-opensans text-sm text-yellow opacity-90">
            Full Stack Developer & Property Consultant | Goa, India
          </p>
          <p className="font-opensans text-xs text-yellow opacity-70 mt-2">
            Building digital solutions for property markets across North & South Goa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
