import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Features } from "@/components/Features";
import Highlight from "@/components/Highlight";
import Form from "@/components/Form";
export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Highlight />
      <Form />
    </>
  );
}
