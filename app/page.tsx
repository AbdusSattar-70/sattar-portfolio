import { SocialMedia } from "@/components/SocialMedia";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import HomeTop from "@/components/HomeTop";
import { WorthyProjects } from "@/components/WorthyProjects";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

export default function MainPage() {
  return (
    <SidebarProvider>
      <ScrollProgressBar />
      <SocialMedia />
      <SidebarInset>
        <HomeTop />
        <About />
        <Experience />
        <FeaturedProject />
        <WorthyProjects />
      </SidebarInset>
    </SidebarProvider>
  );
}
