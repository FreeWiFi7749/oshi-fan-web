import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import AdminIntro from "@/components/AdminIntro";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <AdminIntro />
    </main>
  );
};

export default Index;