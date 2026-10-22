import { experiences } from "../../data/portfolioData";
import ActionBar from "../ui/actionBar";

const typeLabels: Record<string, string> = {
    project: "Project-based",
    internship: "Internship",
    program: "Learning Program",
    community: "Community",
};

const Experience = () => {
    const sortedExperiences = [...experiences].sort((a, b) => {
        const startDateDiff = Date.parse(b.startDate) - Date.parse(a.startDate);

        return startDateDiff || Date.parse(b.endDate) - Date.parse(a.endDate);
    });

    return (
        <section
            id="experience"
            className="relative mt-5 w-full rounded-lg border border-light-gray/40 p-5 md:p-6"
        >
            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "52px 52px",
                    }}
                />
                <div
                    className="absolute -right-28 top-10 h-72 w-72 rounded-full blur-3xl"
                    style={{ background: "rgba(134, 187, 215, 0.14)" }}
                />
                <div
                    className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full blur-3xl"
                    style={{ background: "rgba(255, 255, 255, 0.06)" }}
                />
            </div>
            <img
                src="/icons/plus.svg"
                alt=""
                aria-hidden="true"
                className="absolute -left-3 -top-3 z-20 w-6"
            />
            <img
                src="/icons/plus.svg"
                alt=""
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 z-20 w-6"
            />

            <div className="relative z-10">
                <ActionBar />
                <div className="mt-5 grid gap-8 md:grid-cols-[1.05fr_2fr]">
                    <div className="self-start md:sticky md:top-8">
                        <p className="text-light-gray">
                            ~$ Bayu Setiawan/ <span className="text-light-blue">Experience</span>
                        </p>
                        <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Hands-on experience building Android apps, web tools, and mentoring developers.
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-light-gray md:text-base">
                            I combine technical execution with clear communication, from shipping
                            production features to guiding students through practical projects.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "Mobile Apps",
                                "Web Tools",
                                "API Integration",
                                "Developer Mentoring",
                            ].map((label) => (
                                <span
                                    key={label}
                                    className="rounded-full border border-light-gray/30 bg-black/50 px-3 py-1 text-xs text-light-gray"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-2 left-[10px] top-2 w-px bg-light-gray/25 md:left-3" />
                        <div className="space-y-4">
                            {sortedExperiences.map((experience) => (
                                <article
                                    key={`${experience.organization}-${experience.role}`}
                                    className="group relative pl-8 md:pl-10"
                                >
                                    <div className="absolute left-0 top-3 h-5 w-5 rounded-full border border-light-blue/70 bg-black shadow-[0_0_0_6px_rgba(134,187,215,0.08)] transition-colors group-hover:bg-light-blue/20 md:left-0.5" />
                                    <div className="rounded-lg border border-light-gray/30 bg-black/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/50 hover:bg-light-gray/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-5">
                                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                            <div>
                                                <p className="text-sm text-light-blue">
                                                    {experience.organization}
                                                </p>
                                                <h3 className="mt-1 text-xl font-semibold text-white">
                                                    {experience.role}
                                                </h3>
                                            </div>
                                            {typeLabels[experience.type] && (
                                                <span className="w-fit rounded-full border border-light-blue/40 bg-light-blue/10 px-3 py-1 text-xs text-light-blue">
                                                    {typeLabels[experience.type]}
                                                </span>
                                            )}
                                        </div>

                                        <p className="mt-3 text-sm leading-6 text-light-gray md:text-base">
                                            {experience.summary}
                                        </p>

                                        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/85">
                                            {experience.highlights.map((highlight) => (
                                                <li key={highlight} className="flex gap-3">
                                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-blue" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {experience.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="rounded-full bg-white px-2.5 py-1 text-xs text-black"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
