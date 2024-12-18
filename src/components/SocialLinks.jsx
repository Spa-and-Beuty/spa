import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

export const SocialLinks = ({ size, className, outline = true }) => {
  return (
    <div className={`flex  gap-4 mt-4 ${className}`}>
      <Link
        href="#"
        aria-label="Facebook"
        className={`p-4 rounded-full text-black hover:bg-link-color-hover hover:text-white transition-colors duration-200 ${outline && "bg-white"}`}
      >
        <BsFacebook size={size ? size : 20} />
      </Link>
      <Link
        href="#"
        aria-label="Twitter"
        className={`p-4 rounded-full text-black hover:bg-link-color-hover hover:text-white transition-colors duration-200 ${outline && "bg-white"}`}
      >
        <BsTwitterX size={size ? size : 20} />
      </Link>
      <Link
        href="#"
        aria-label="LinkedIn"
        className={`p-4 rounded-full text-black hover:bg-link-color-hover hover:text-white transition-colors duration-200 ${outline && "bg-white"}`}
      >
        <BsLinkedin size={size ? size : 20} />
      </Link>
      <Link
        href="https://www.instagram.com/rejuvaglow_beauty"
        aria-label="Instagram"
        className={`p-4 rounded-full text-black hover:bg-link-color-hover hover:text-white transition-colors duration-200 ${outline && "bg-white"}`}
      >
        <BsInstagram size={size ? size : 20} />
      </Link>
    </div>
  );
};
