import Navbar from "./components/ui/navbar";
import ImageModal from "./components/modals/ImageModal";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Certification from "./components/sections/Certification";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ProjectPreviewModal from "./components/modals/ProjectPreviewModal";
import { useState } from "react";
import type { Project } from "./data/portfolioData";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Project | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePreviewClick = (porto: Project) => {
    setSelectedPortfolio(porto);
    setIsPreviewModalOpen(true);
  };

  const handleClosePreviewModal = () => {
    setIsPreviewModalOpen(false);
    setSelectedPortfolio(null);
  };

  return (
    <main className="relative overflow-x-hidden flex flex-col items-center px-5 md:px-15 pb-3 pt-10">
      <Navbar />
      <img
        className="absolute z-1 w-[80%] top-0"
        src="/images/grid.svg"
        alt="grid"
      />
      <Hero />
      <About />
      <section className="grid grid-cols-1 md:grid-cols-[2fr_6fr] w-full md:justify-between mt-5 gap-5">
        <Skills />
        <Certification handleImageClick={handleImageClick} />
      </section>
      <Projects handlePreviewClick={handlePreviewClick} />
      <Contact />
      <section className="w-full mt-10 text-center text-light-gray">
        <p>© 2025 Bayu Setiawan.</p>
      </section>
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage || ""}
        onClose={handleCloseModal}
      />
      <ProjectPreviewModal
        isOpen={isPreviewModalOpen}
        portfolio={selectedPortfolio}
        onClose={handleClosePreviewModal}
      />
    </main>
  );
}

export default App;
