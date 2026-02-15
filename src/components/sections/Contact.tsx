import { socials } from "../../data/portfolioData";

const Contact = () => {
    return (
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
                        backgroundSize: "20px 20px",
                    }}
                ></div>
                <img
                    src="/icons/plus.svg"
                    alt="plus"
                    className="absolute w-5 -bottom-3 -right-3"
                />
                <div
                    onClick={() => window.open(socials.github)}
                    className="flex z-10 cursor-pointer flex-row gap-3"
                >
                    <img src="/icons/github.svg" alt="github" className="w-5" />
                    <p>bayustwn</p>
                </div>
                <div
                    onClick={() => window.open(socials.linkedin)}
                    className="flex z-10 cursor-pointer flex-row gap-3"
                >
                    <img src="/icons/linkedin.svg" alt="linkedin" className="w-5" />
                    <p>bayusetiawan04</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
