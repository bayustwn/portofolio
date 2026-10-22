export interface Project {
    image: string;
    stack: string[];
    title: string;
    description: string;
    link: {
        github: string;
    };
    preview: {
        figma: string;
        website: string;
        app: string;
        backend?: string;
    };
}

export interface Experience {
    role: string;
    organization: string;
    type: "project" | "contract" | "internship" | "program" | "community";
    period: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
    tools: string[];
}

export const socials = {
    github: "https://github.com/bayustwn",
    linkedin: "https://www.linkedin.com/in/bayusetiawan04",
};

export const skills = [
    {
        name: "JavaScript & Framework",
        icons: "js.svg",
    },
    {
        name: "Kotlin",
        icons: "kotlin.svg",
    },
    {
        name: "Figma",
        icons: "figma.svg",
    },
    {
        name: "Android Architecture",
        icons: "android.svg",
    },
];

export const certifications = [
    "bangkit.jpg",
    "digital_hero.jpg",
    "dca.jpg",
    "exprt.jpg",
    "intermediate.jpg",
    "fundamental.jpg",
];

export const experiences: Experience[] = [
    {
        role: "Full-Stack Web Developer",
        organization: "PT Mentari Okka Sukses Utama",
        type: "project",
        period: "Oct 2025 - Feb 2026",
        startDate: "2025-10-01",
        endDate: "2026-02-28",
        summary:
            "Built a live CRM web application for umrah agents and customers with package ordering and flight ticket booking workflows.",
        highlights: [
            "Developed responsive CRM pages and admin dashboard interfaces using React and Tailwind CSS.",
            "Built NestJS REST APIs for agent, customer, order, booking, and report/export workflows.",
            "Implemented authentication, database structure, booking flow logic, and production-ready feature iterations in a small team.",
        ],
        tools: ["React", "Tailwind CSS", "NestJS", "REST API", "CRM"],
    },
    {
        role: "Web Developer Intern",
        organization: "Digital Hero",
        type: "internship",
        period: "Sep 2025 - Dec 2025",
        startDate: "2025-09-15",
        endDate: "2025-12-15",
        summary:
            "Completed a three-month internship building an AI learning LMS with responsive UI and API-connected features.",
        highlights: [
            "Built responsive learning pages and interface components using React and Tailwind CSS.",
            "Integrated frontend screens with API data to support LMS learning flows.",
            "Fixed UI bugs and improved page behavior across development iterations.",
        ],
        tools: ["React", "Tailwind CSS", "API Integration", "LMS"],
    },
    {
        role: "Video Editor",
        organization: "PT. Bizhub Digital Indonesia",
        type: "contract",
        period: "Dec 2024 - Aug 2025",
        startDate: "2024-12-01",
        endDate: "2025-08-31",
        summary:
            "Produced Instagram Reels and ad content for multiple clients with consistent visual direction and fast delivery.",
        highlights: [
            "Created short-form content using CapCut and Canva based on client requirements.",
            "Maintained visual consistency across multiple client deliverables.",
            "Balanced creative execution with deadline-driven production workflows.",
        ],
        tools: ["CapCut", "Canva", "Visual Direction", "Content"],
    },
    {
        role: "Independent Study - Android Learning Path",
        organization: "Bangkit Academy",
        type: "program",
        period: "Sep 2024 - Dec 2024",
        startDate: "2024-09-01",
        endDate: "2024-12-31",
        summary:
            "Completed Android Development Learning Path and collaborated on a capstone mobile application solution.",
        highlights: [
            "Learned Kotlin, MVVM, Room, and machine learning integration for Android apps.",
            "Collaborated with a multidisciplinary team to ship a capstone project.",
            "Strengthened product thinking through real problem definition and app delivery.",
        ],
        tools: ["Kotlin", "MVVM", "Room", "ML Integration"],
    },
    {
        role: "Video Editor",
        organization: "Tribelio Creative",
        type: "contract",
        period: "Aug 2024 - Nov 2024",
        startDate: "2024-08-01",
        endDate: "2024-11-30",
        summary:
            "Edited Instagram Reels and ad content from creative briefs with focus on clear, compelling visuals.",
        highlights: [
            "Translated creative briefs into social media video content.",
            "Delivered edits under tight deadlines while keeping the output visually consistent.",
            "Improved storytelling rhythm through pacing, cuts, and visual emphasis.",
        ],
        tools: ["Video Editing", "Reels", "Ads", "Storytelling"],
    },
    {
        role: "Android & Web Developer",
        organization: "PT. Hisar Global Indonesia",
        type: "project",
        period: "Aug 2023 - Dec 2024",
        startDate: "2023-08-01",
        endDate: "2024-12-31",
        summary:
            "Developed web and Android applications for agent control, sales monitoring, and operational reporting.",
        highlights: [
            "Built sales entry, activity report, and performance summary modules.",
            "Connected Android features to RESTful APIs using Kotlin and Retrofit.",
            "Worked across mobile and web surfaces to support internal monitoring workflows.",
        ],
        tools: ["Kotlin", "Retrofit", "REST API", "Android"],
    },
    {
        role: "Lead & Mentor",
        organization: "Mobile Developer Community",
        type: "community",
        period: "Jul 2023 - Jul 2024",
        startDate: "2023-07-01",
        endDate: "2024-07-31",
        summary:
            "Led and mentored 30+ students through Android fundamentals and hands-on project practice.",
        highlights: [
            "Structured learning sessions for Kotlin and Android development basics.",
            "Guided members from concept to implementation through practical projects.",
            "Built communication and mentoring habits while staying close to technical execution.",
        ],
        tools: ["Mentoring", "Android", "Kotlin", "Community"],
    },
];

export const projects = [
    {
        image: "ifishy.jpg",
        stack: ["android.svg", "figma.svg", "kotlin.svg"],
        title: "Ifishy",
        description: "A mobile app integrated with AI to predict fish diseases.",
        link: {
            github: "https://github.com/bayustwn/Ifishy-C242-PS164",
        },
        preview: {
            figma: "https://www.figma.com/design/qwZgiefJnmTZntrgBwM6yT/Bangkit-2024?node-id=5-5&t=4weAjAmaXEksbe4Q-1",
            website: "",
            app: "",
        }
    },
    {
        image: "alquran.jpg",
        stack: ["android.svg", "figma.svg", "kotlin.svg"],
        title: "AlQur'an Mobile",
        description: "An offline Quran application that allows users to read the Holy Quran without an internet connection.",
        link: {
            github: "https://github.com/bayustwn/Al-Quran_Apps",
        },
        preview: {
            figma: "",
            website: "",
            app: "https://drive.google.com/drive/folders/1l7DNcVkkn1UaLdmAtveIVwkvB67Ga02O?usp=sharing",
        }
    },
    {
        image: "bizhub.jpg",
        stack: ["js.svg", "figma.svg"],
        title: "Bizhub Monitor",
        description: "A task management website for employees of PT Bizhub Digital Indonesia.",
        link: {
            github: "https://github.com/bayustwn/bizhub",
        },
        preview: {
            figma: "https://www.figma.com/design/nW8RwSMB6rs7ouySpDP5FW/MONITORING-TUGAS?node-id=105-2&t=ug319fYTnQMY3Bh0-1",
            website: "",
            app: "",
            backend: "https://github.com/bayustwn/bizhub-api",
        }
    },
    {
        image: "umkm.png",
        stack: ["js.svg"],
        title: "UMKM Manwet",
        description: "A website for organizing UMKM in Manukan Wetan.",
        link: {
            github: "https://github.com/bayustwn/umkm-kkn110",
        },
        preview: {
            figma: "",
            website: "https://umkmanukanwetan.com",
            app: "",
            backend: "https://github.com/bayustwn/umkm-backend-kkn110",
        }
    }
];
