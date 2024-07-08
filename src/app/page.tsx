import AmbientEffectDesktop from "@/components/DesktopUI/AmbientEffectDesktop";
import BannerDesktop from "@/components/DesktopUI/BannerDesktop";
import CarouselDesktop from "@/components/DesktopUI/CarouselDesktop";
import Footer from "@/components/DesktopUI/Footer";
import NavDesktop from "@/components/DesktopUI/NavDesktop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavDesktop />
      <AmbientEffectDesktop />
      <div className="mt-20 gap-5 flex flex-col items-center">
        <BannerDesktop />
        <CarouselDesktop />
        <Footer />
      </div>
    </main>
  );
}
