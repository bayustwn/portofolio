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
                        <span className="text-white">Hello i'm Bayu Setiawan,</span> a
                        6th-semester Computer Science student at Universitas Pembangunan
                        Nasional "Veteran" Jawa Timur. Passionate about Android Developer, I
                        actively engage in projects to enhance my skills. I participated in
                        the <span className="text-white">Bangkit Academy</span> Independent
                        Study Program, where I gained valuable experience in{" "}
                        <span className="text-white">Android development.</span>{" "}
                        Additionally, I joined the Mobile Development Community at my
                        university, where I contributed to various front-end and full-stack
                        development projects while mentoring fellow students.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
