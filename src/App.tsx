import ActionBar from "./components/actionBar";
import Navbar from "./components/navbar";
import ImageModal from "./components/ImageModal";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePreviewClick = (porto: any) => {
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
      <section id="project" className="relative border w-full h-fit mt-5 border-light-gray/40">
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
          className="absolute z-1 inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        <div className="bg-white mb-5 text-black font-semibold text-xl flex justify-center items-center w-fit h-fit">
          <p>Portofolio.</p>
        </div>
        <div className="grid p-5 mb-5 grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
          {Array.from([{
            image: "ifishy.jpg",
            stack: ["android.svg", "figma.svg", "kotlin.svg"],
            title: "Ifishy",
            description: "A mobile app integrated with AI to predict fish diseases.",
            link: {
              github: "https://github.com/SandyAryadika/Ifishy-C242-PS164",
            },
            preview: {
              figma : "https://www.figma.com/design/qwZgiefJnmTZntrgBwM6yT/Bangkit-2024?node-id=5-5&t=4weAjAmaXEksbe4Q-1",
              website : "",
              app : "",
            }
          },{
            image: "alquran.jpg",
            stack: ["android.svg", "figma.svg", "kotlin.svg"],
            title: "AlQur'an Mobile",
            description: "An offline Quran application that allows users to read the Holy Quran without an internet connection.",
            link: {
              github: "https://github.com/bayustwn/Al-Quran_Apps",
            },
            preview: {
              figma : "",
              website : "",
              app : "https://drive.google.com/drive/folders/1l7DNcVkkn1UaLdmAtveIVwkvB67Ga02O?usp=sharing",
            }
          },{
            image: "bizhub.jpg",
            stack: ["js.svg", "figma.svg"],
            title: "Bizhub Monitor",
            description: "A task management website for employees of PT Bizhub Digital Indonesia.",
            link: {
              github: "https://github.com/bayustwn/bizhub",
            },
            preview: {
              figma : "https://www.figma.com/design/nW8RwSMB6rs7ouySpDP5FW/MONITORING-TUGAS?node-id=105-2&t=ug319fYTnQMY3Bh0-1",
              website : "",
              app : "",
              backend : "https://github.com/bayustwn/bizhub-api",
            }
          },{
            image: "umkm.png",
            stack: ["js.svg"],
            title: "UMKM Manwet",
            description: "A website for organizing UMKM in Manukan Wetan.",
            link: {
              github: "https://github.com/bayustwn/umkm-kkn110",
            },
            preview: {
              figma : "",
              website : "https://umkmanukanwetan.com",
              app : "",
              backend : "https://github.com/bayustwn/umkm-backend-kkn110",
            }
          }]).map((porto: any, index: number) => {
            return (
              <div key={index} className="flex z-10 flex-col gap-3">
                <div className="relative">
                  <img src={`/porto/${porto.image}`} className="w-full h-60 object-cover rounded-lg" alt="porto-image" />
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                    }}
                  ></div>
                  <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg">
                    {porto.title}
                  </h3>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-xs text-light-gray">Tech Stack:</p>
                  <div className="flex flex-row gap-2 items-center">
                    {porto.stack.map((stack: any, index: number) => {
                      return (
                        <img key={index} src={`/icons/${stack}`} className={`${stack == "android.svg" ? "w-5" : "w-3"}`} alt={stack} />
                      )
                    })}
                  </div>
                </div>
                <p className="text-justify">{porto.description}</p>
                <div className="flex flex-row text-black gap-2 items-center">
                  <button
                    onClick={() => porto.link.github && porto.link.github !== "null" ? window.open(porto.link.github) : null}
                    className={`px-2 py-1 cursor-pointer ${porto.link.github && porto.link.github !== "null" ? 'bg-white' : 'bg-light-gray/90 cursor-not-allowed'}`}
                    disabled={!porto.link.github || porto.link.github === "null"}
                  >
                    <div className="flex text-sm flex-row gap-2">
                      <p>Github</p>
                      <img src="/icons/right.svg" className="w-4" alt="go" />
                    </div>
                  </button>
                  <button
                    onClick={() => handlePreviewClick(porto)}
                    className={`px-2 py-1 cursor-pointer bg-white`}
                  >
                    <div className="flex text-sm flex-row gap-2">
                      <p>Preview</p>
                      <img src="/icons/right.svg" className="w-4" alt="go" />
                    </div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="flex items-center w-full md:w-fit mt-10 flex-col gap-3">
        <h1 className="font-semibold text-3xl">Contact</h1>
        <div className="relative flex flex-row border border-light-gray/40 p-3 bg-light-gray/8 gap-5">
          <div
            className="absolute z-1 inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
              backgroundSize: '20px 20px',
            }}
          ></div>
          <img src="/icons/plus.svg" alt="plus" className="absolute w-5 -bottom-3 -right-3" />
          <div className="flex z-10 cursor-pointer flex-row gap-3">
            <img src="/icons/github.svg" alt="github" className="w-5" />
            <p>bayustwn</p>
          </div>
          <div className="flex z-10 cursor-pointer flex-row gap-3">
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
      
      {isPreviewModalOpen && selectedPortfolio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-dark-gray rounded-lg p-6 w-full max-w-sm mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">{selectedPortfolio.title}</h3>
              <button 
                onClick={handleClosePreviewModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              {selectedPortfolio.preview.figma && (
                <button 
                  onClick={() => window.open(selectedPortfolio.preview.figma)}
                  className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                >
                  Figma
                </button>
              )}
              
              {selectedPortfolio.preview.website && (
                <button 
                  onClick={() => window.open(selectedPortfolio.preview.website)}
                  className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                >
                 Website
                </button>
              )}
              
              {selectedPortfolio.preview.app && (
                <button 
                  onClick={() => window.open(selectedPortfolio.preview.app)}
                  className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
                >
                  App
                </button>
              )}

              {selectedPortfolio.preview.backend && (
                <button 
                onClick={() => window.open(selectedPortfolio.preview.backend)}
                className="w-full rounded-full border border-light-gray text-white cursor-pointer bg-light-gray/8 transition-all hover:bg-light-gray/5 py-2 px-4 flex items-center justify-center gap-2"
              >
                Source Code Backend
              </button>
              )}
              
              {!selectedPortfolio.preview.figma && !selectedPortfolio.preview.website && !selectedPortfolio.preview.app && (
                <p className="text-light-gray text-center py-4">No preview links available for this project.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
