// components/AppSidebar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import { SiAwwwards } from "react-icons/si";
import TooltipWrapper from "./ui/TooltipWrapper";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define social media links here
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
    href: "https://outlinerz.com",
    tooltip: "Take a tour on my website",
    ariaLabel: "Visit my website",
    icon: <SiAwwwards size={24} />,
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

export function SocialMedia({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-none"
      style={{ border: "none" }}
    >
      <SidebarContent className="h-full flex flex-col justify-center items-center bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Centered Social Media Icons and  Toggle Theme*/}
              <div className="flex flex-col space-y-4 mt-4 text-blue-500">
                <ModeToggle />
                {socialMediaLinks.map((link, index) => (
                  <SidebarMenuItem key={index}>
                    <TooltipWrapper content={link.tooltip}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          aria-label={link.ariaLabel}
                          className={`text-blue-600 ${link.hoverColor} transition-colors`}
                        >
                          {link.icon}
                        </Link>
                      </SidebarMenuButton>
                    </TooltipWrapper>
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
