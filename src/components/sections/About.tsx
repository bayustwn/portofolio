import ActionBar from "../ui/actionBar";

const About = () => {
    return (
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
                        <span className="text-white">Hello, I'm Bayu Setiawan,</span> an
                        8th-semester Computer Science student at Universitas Pembangunan
                        Nasional "Veteran" Jawa Timur. I focus on{" "}
                        <span className="text-white">Android and full-stack web development</span>,
                        building practical applications with clean interfaces, reliable APIs,
                        and user-focused flows. Through{" "}
                        <span className="text-white">Bangkit Academy</span>, internships, and
                        the Mobile Developer Community, I've grown by shipping real projects,
                        collaborating with teams, and mentoring fellow students in mobile
                        development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
