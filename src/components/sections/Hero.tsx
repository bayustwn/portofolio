import { socials } from "../../data/portfolioData";

const Hero = () => {
    return (
        <section className="relative w-full z-10 flex border mt-5 border-light-gray/40 flex-col items-center">
            <div className="absolute grid grid-cols-[1fr_3fr] gap-2 bottom-0 md:bottom-auto md:top-0 md:left-0 m-3">
                <div className="border flex flex-row justify-between items-center gap-2 md:gap-3 border-light-gray/40 p-3">
                    <img
                        onClick={() => window.open(socials.github)}
                        src="/icons/github.svg"
                        alt="github"
                        className="w-5 cursor-pointer"
                    />
                    <img
                        onClick={() => window.open(socials.linkedin)}
                        src="/icons/linkedin.svg"
                        alt="linkedin"
                        className="w-5 cursor-pointer"
                    />
                </div>
                <a
                    download
                    href="/cv/curiculum-vitae.pdf"
                    className="flex cursor-pointer gap-2 md:w-fit hover:bg-light-gray/15 flex-row p-3 border border-light-gray/40"
                >
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
                <p className="text-light-gray md:text-md text-sm">
                    ~$ fullstack developer
                </p>
                <img src="/images/me.png" alt="me" className="w-80 md:w-100 mt-20" />
            </div>
        </section>
    );
};

export default Hero;
