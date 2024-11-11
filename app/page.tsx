import { SocialMedia } from "@/components/SocialMedia";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import HomeTop from "@/components/HomeTop";

export default async function MainPage() {
  return (
    <SidebarProvider>
      <SocialMedia />
      <SidebarInset>
        <HomeTop />
        <About />
        <Experience />
        <FeaturedProject />
      </SidebarInset>
    </SidebarProvider>
  );
}
