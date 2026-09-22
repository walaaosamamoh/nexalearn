import CTASection from "../../components/home/CTASection";
import HeroSection from "../../components/home/HeroSection";
import HowItWorks from "../../components/home/HowItWorks";
import PopularCourses from "../../components/home/PopularCourses";


export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.2),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(6,182,212,0.12),transparent_28%)]" />
      <HeroSection />
      <PopularCourses />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
