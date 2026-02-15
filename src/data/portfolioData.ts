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
    "dca.jpg",
    "exprt.jpg",
    "intermediate.jpg",
    "fundamental.jpg",
];

export const projects = [
    {
        image: "ifishy.jpg",
        stack: ["android.svg", "figma.svg", "kotlin.svg"],
        title: "Ifishy",
        description: "A mobile app integrated with AI to predict fish diseases.",
        link: {
            github: "https://github.com/SandyAryadika/Ifishy-C242-PS164",
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
