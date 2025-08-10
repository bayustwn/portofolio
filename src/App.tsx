import ActionBar from "./components/actionBar";
import Navbar from "./components/navbar";
import ImageModal from "./components/ImageModal";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className="relative overflow-x-hidden flex flex-col items-center px-5 md:px-15 pb-3 pt-10">
      <Navbar />
      <img
        className="absolute z-1 w-[80%] top-0"
        src="/images/grid.svg"
        alt="grid"
      />
      <section className="relative w-full z-10 flex border mt-5 border-light-gray/40 flex-col items-center">
        <div className="absolute grid grid-cols-[1fr_3fr] gap-2 bottom-0 md:bottom-auto md:top-0 md:left-0 m-3">
          <div className="border flex flex-row justify-between items-center gap-2 md:gap-3 border-light-gray/40 p-3">
            <img onClick={() => window.open("https://github.com/bayustwn")} src="/icons/github.svg" alt="github" className="w-5 cursor-pointer" />
            <img onClick={() => window.open("https://www.linkedin.com/in/bayusetiawan04")} src="/icons/linkedin.svg" alt="linkedin" className="w-5 cursor-pointer" />
          </div>
          <a download href="/cv/curiculum-vitae.pdf" className="flex cursor-pointer gap-2 md:w-fit hover:bg-light-gray/15 flex-row p-3 border border-light-gray/40">
            <img src="/icons/download.svg" className="w-5" alt="download" />
            <p>Download Resume</p>
          </a>
        </div>
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -top-3 -right-3"
        />
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -bottom-3 -left-3"
        />
        <div className="text-center pt-10">
          <h1 className="font-semibold text-5xl md:text-6xl">Bayu Setiawan.</h1>
          <p className="text-light-gray md:text-md text-sm">~$ fullstack developer</p>
          <img src="/images/me.png" alt="me" className="w-80 md:w-100 mt-20" />
        </div>
      </section>
      <section className="mt-10 w-full">
        <div className="relative border border-light-gray/40 rounded-lg p-5">
          <div
            className="absolute w-100 h-50 -top-0 -right-40 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 70%)`,
            }}
          ></div>
          <div
            className="absolute w-150 h-50 -bottom-20 -left-40 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.0) 70%)`,
            }}
          ></div>
          <ActionBar />
          <div className="text-light-gray">
            <h1 id="about" className="mt-5">
              ~$ Bayu Setiawan/ <span className="text-light-blue">About</span>
            </h1>
            <p className="mt-5 md:text-lg text-justify">
              <span className="text-white">Hello i'm Bayu Setiawan,</span> a
              6th-semester Computer Science student at Universitas Pembangunan
              Nasional "Veteran" Jawa Timur. Passionate about Android Developer,
              I actively engage in projects to enhance my skills. I participated
              in the <span className="text-white">Bangkit Academy</span>{" "}
              Independent Study Program, where I gained valuable experience in{" "}
              <span className="text-white">Android development.</span>{" "}
              Additionally, I joined the Mobile Development Community at my
              university, where I contributed to various front-end and
              full-stack development projects while mentoring fellow students.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-[2fr_6fr] w-full md:justify-between mt-5 gap-5">
        <div className="relative border border-light-gray/40 md:h-full h-fit flex-1 p-5 rounded-lg">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
              backgroundSize: '40px 40px',
            }}
          ></div>
          <ActionBar />
          <h1 className="text-light-gray mt-5">
            ~$ Bayu Setiawan/ <span className="text-light-blue">Skills</span>
          </h1>
          <div className="flex mt-5 gap-5 flex-col">
            {Array.from([{
              "name": "JavaScript & Framework",
              "icons": "js.svg",
            }, {
              "name": "Kotlin",
              "icons": "kotlin.svg",
            }, {
              "name": "Figma",
              "icons": "figma.svg",
            }, {
              "name": "Android Architecture",
              "icons": "android.svg",
            }]).map((item, index) => {
              return (
                <div key={index} className="flex hover:ml-2 transition-all flex-row gap-2 items-center">
                  <img src={`/icons/` + item.icons} className={item.name == "Android Architecture" ? `w-6` : `w-5`} alt="icon" />
                  <p>{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="border border-light-gray/40 h-fit p-5 rounded-lg">
          <ActionBar />
          <h1 className="text-light-gray mt-5">
            ~$ Bayu Setiawan/{" "}
            <span className="text-light-blue">Certification</span>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {Array.from(["bangkit.jpg", "dca.jpg", "exprt.jpg", "intermediate.jpg", "fundamental.jpg"]).map((cert, index) => {
                return (
                  <img
                    className="object-cover rounded-lg hover:scale-95 transform transition-all cursor-pointer"
                    key={index}
                    src={`/cert/${cert}`}
                    alt="cert"
                    onClick={() => handleImageClick(`/cert/${cert}`)}
                  />
                )
              })}
            </div>
          </h1>
        </div>
      </section>
      <section id="project" className="relative border w-full h-100 mt-5 border-light-gray/40">
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -top-3 -left-3"
        />
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -bottom-3 -right-3"
        />
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -top-3 -right-3"
        />
        <img
          src="/icons/plus.svg"
          alt="plus"
          className="absolute w-6 -bottom-3 -left-3"
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        <div className="bg-white text-black font-semibold text-xl flex justify-center items-center w-fit h-fit">
          <p>Portofolio.</p>
        </div>
      </section>
      <section className="flex items-center w-full md:w-fit mt-10 flex-col gap-3">
        <h1 className="font-semibold text-3xl">Contact</h1>
        <div className="relative flex flex-row border border-light-gray/40 p-3 bg-light-gray/8 gap-5">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
              backgroundSize: '20px 20px',
            }}
          ></div>
          <img src="/icons/plus.svg" alt="plus" className="absolute w-5 -bottom-3 -right-3" />
          <div className="flex flex-row gap-3">
            <img src="/icons/github.svg" alt="github" className="w-5" />
            <p>bayustwn</p>
          </div>
          <div className="flex flex-row gap-3">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-5" />
            <p>bayusetiawan04</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 text-center text-light-gray">
        <p>© 2025 Bayu Setiawan.</p>
      </section>
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage || ""}
        onClose={handleCloseModal}
      />
    </main>
  );
}

export default App;
