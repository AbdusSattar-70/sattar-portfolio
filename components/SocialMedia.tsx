// components/SocialMedia.tsx

import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import TooltipWrapper from "./ui/TooltipWrapper";

const socialMediaLinks = [
  {
    href: "https://web.facebook.com/abdus.sattar.70/",
    tooltip: "Say Hello On Facebook",
    ariaLabel: "Visit my Facebook profile",
    icon: <FaFacebookF size={24} />,
    hoverColor: "hover:text-blue-600",
  },
  {
    href: "https://www.linkedin.com/in/abdus-sattar70/",
    tooltip: "Say Hello On LinkedIn",
    ariaLabel: "Visit my LinkedIn profile",
    icon: <FaLinkedinIn size={24} />,
    hoverColor: "hover:text-blue-700",
  },
  {
    href: "https://twitter.com/Abdus_Sattar70",
    tooltip: "Say Hello On Twitter",
    ariaLabel: "Visit my Twitter profile",
    icon: <FaTwitter size={24} />,
    hoverColor: "hover:text-blue-400",
  },
  {
    href: "https://github.com/AbdusSattar-70/",
    tooltip: "Find Me On GitHub",
    ariaLabel: "Visit my GitHub profile",
    icon: <FaGithub size={24} />,
    hoverColor: "hover:text-gray-800",
  },
  {
    href: "mailto:a.sattar@outlinerz.com",
    tooltip: "a.sattar@outlinerz.com",
    ariaLabel: "Send me an email",
    icon: <FaRegEnvelope size={24} />,
    hoverColor: "hover:text-gray-800",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {socialMediaLinks.map((link, index) => (
        <TooltipWrapper key={index} content={link.tooltip}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className={`text-blue-600 ${link.hoverColor} transition-colors`}
          >
            {link.icon}
          </a>
        </TooltipWrapper>
      ))}
    </div>
  );
};

export default SocialMedia;
