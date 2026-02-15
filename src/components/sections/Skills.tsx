import ActionBar from "../ui/actionBar";
import { skills } from "../../data/portfolioData";

const Skills = () => {
    return (
        <div className="relative border border-light-gray/40 md:h-full h-fit flex-1 p-5 rounded-lg">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
                    backgroundSize: "40px 40px",
                }}
            ></div>
            <ActionBar />
            <h1 className="text-light-gray mt-5">
                ~$ Bayu Setiawan/ <span className="text-light-blue">Skills</span>
            </h1>
            <div className="flex mt-5 gap-5 flex-col">
                {skills.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex hover:ml-2 transition-all flex-row gap-2 items-center"
                        >
                            <img
                                src={`/icons/` + item.icons}
                                className={item.name == "Android Architecture" ? `w-6` : `w-5`}
                                alt="icon"
                            />
                            <p>{item.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
