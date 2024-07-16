// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Amit Sharma",
    message: `I'm a Software Developer with industry-tested technical skills. Specializing in Frontend Development, I have a deep understanding of web technologies and a good working proﬁciency in Backend development, enabling me to collaborate across the full stack development eﬀectively.`,
    basedLocation: "Hamirpur, Himachal Pradesh HP",
    resumeLink: "https://docs.google.com/document/d/1Sa_sK3RMusoezzgzxu8LkV16i2Jra2qd/edit?usp=sharing&ouid=113657039181859132688&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/Alogo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/MainImage.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/feifyKike",
    linkedin: "https://www.linkedin.com/in/maxim-shelepov1",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Amit Sharma and I'm in love with Computer Science. I've done B. Tech in Computer Science with a 8.4 CGPA. I'm a Computer CS specialist based in Career Point University. I have a passion for coding in languages such as Javascript, C++ & Python. Work in web development and have experience with Node.js and frameworks like React, Express.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have 4 years of experience in Frontend Development. Currently working as a Frontend Lead @Nurturelabs."
    ], // Separated items are paragraphs
    techStack: [
        "React",
        "JS/TS",
        "HTML/CSS",
        "Python",
        "DBMS",
        "Node.js",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Dev Intern",
        company: {
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Present",
        bulletPoints: [
            "Resolved issues and developed new tools within several university web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
            "Achieved 100+ github code contributions as an intern on the team.",
            "Currently rebuilding and modernizing the university digital sign manager and system."
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "HTML",
            "Tailwind"
        ]
    },
    {
        position: "Math Tutor",
        company: {
            name: "Mathnasium",
            link: "https://www.mathnasium.com"
        },
        duration: "Jan 2022 - Aug 2022",
        bulletPoints: [
            "Taught math to students elementary through high school covering topics from basic algebra to college-level calculus.",
            "Directed the trajectory of the student's learning plan and math topic evaluation to facilitate success in their school math class.",
            "Requested by many students and parents for routine weekly tutoring sessions in a system with a standard random weekly rotation."
        ],
        hashtags: [
            "Calc 1-2",
            "Algebra 1-3",
            "Discrete Math",
            "Statistics"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "useGState",
        yearCompleted: "2022",
        description: `useGstate is an Atomic State Management library for React that lets you create global states in most intuitive way
        possible ,that too with performance. It utilises core React Concepts to achieve simplicity with performance.`,
        techStack: "Javascript, React",
        links: [
            {
                label: "",
                type: "Medium",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "NPM",
                url: "https://www.npmjs.com/package/usegstate"
            }
        ],
        imageLink: "images/usegstate.jpeg",
        alignLeft: false
    },
    {
        projectName: "Dynamic Portfolio Website",
        yearCompleted: "2021",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "SPS game with Live Scores",
        yearCompleted: "2021",
        description: "Stone Paper Scisor Lizard Spock game with live scores. The game is played between the user and the computer. The user can select their choice and the computer will randomly select its choice and score will be updated real-time.",
        techStack: "Javascript, MaterialUI, Sass",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/sudokusolver"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/lXOjOrjf5hU"
            }
        ],
        imageLink: "images/gamels.png",
        alignLeft: false
    },
    {
        projectName: "Trivia Quiz",
        yearCompleted: "2020",
        description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/JS-API-Quiz"
            },
            {
                label: "",
                type: "external",
                url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
            }
        ],
        imageLink: "images/trivia_pic.png",
        alignLeft: true
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python",
        links: [
            {
                label: "",
                type: "git",
                url: "https://youtu.be/gw5kb1QKVp0"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/feifyKike/Covid-Cases-Visual"
            }
        ],
        imageLink: "images/covid_pic.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}