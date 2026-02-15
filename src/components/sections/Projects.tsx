import { projects } from "../../data/portfolioData";
import type { Project } from "../../data/portfolioData";

interface ProjectsProps {
    handlePreviewClick: (porto: Project) => void;
}

const Projects = ({ handlePreviewClick }: ProjectsProps) => {
    return (
        <section
            id="project"
            className="relative border w-full h-fit mt-5 border-light-gray/40"
        >
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
                    backgroundSize: "50px 50px",
                }}
            ></div>
            <div className="bg-white mb-5 text-black font-semibold text-xl flex justify-center items-center w-fit h-fit">
                <p>Portofolio.</p>
            </div>
            <div className="grid p-5 mb-5 grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
                {projects.map((porto: Project, index: number) => {
                    return (
                        <div key={index} className="flex z-10 flex-col gap-3">
                            <div className="relative">
                                <img
                                    src={`/porto/${porto.image}`}
                                    className="w-full h-60 object-cover rounded-lg"
                                    alt="porto-image"
                                />
                                <div
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                                    }}
                                ></div>
                                <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg">
                                    {porto.title}
                                </h3>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-xs text-light-gray">Tech Stack:</p>
                                <div className="flex flex-row gap-2 items-center">
                                    {porto.stack.map((stack: string, index: number) => {
                                        return (
                                            <img
                                                key={index}
                                                src={`/icons/${stack}`}
                                                className={`${stack == "android.svg" ? "w-5" : "w-3"}`}
                                                alt={stack}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="text-justify">{porto.description}</p>
                            <div className="flex flex-row text-black gap-2 items-center">
                                <button
                                    onClick={() =>
                                        porto.link.github && porto.link.github !== "null"
                                            ? window.open(porto.link.github)
                                            : null
                                    }
                                    className={`px-2 py-1 cursor-pointer ${porto.link.github && porto.link.github !== "null"
                                        ? "bg-white"
                                        : "bg-light-gray/90 cursor-not-allowed"
                                        }`}
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
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
