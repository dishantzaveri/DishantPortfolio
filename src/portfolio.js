/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";


import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dishant Zaveri",
  title: "Hi, Dishant here",
  subTitle: emoji(
    "My name is Dishant Parag Zaveri. I am currently pursuing a Master's degree in Computer Science at Texas A&M University, with a 4.0/4.0 CGPA and an expected graduation date of May 2026. I hold a B.Tech in Computer Science with a CGPA of 9.5/10. I have professional experience in Python, Javascript, C++. I have a deep interest in AI, ML, NLP, Data Analysis and Software Development. I have won multiple national and international hackathons and published 8 research papers. I have internship experience of 2+ years."),
  resumeLink:
    "https://drive.google.com/file/d/1r0AOUpCN3gmCxFQagM6BDOtSLWXaMndq/view?usp=sharing",
  cvLink:
    "https://drive.google.com/file/d/1v6vtZC3vDf7FflfUHiDDqyEaczJt_mn1/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dishantzaveri",
  linkedin: "https://www.linkedin.com/in/dishant-zaveri-4301471b9/",
  gmail: "zaveridishant@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/dishant.zaveri/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/dishant_zaveri/",
  kaggle: "https://www.kaggle.com/dishantzaveri",
  twitter: "https://twitter.com/DishantZaveri",
  youtube: "https://www.youtube.com/channel/UCCZUOvkx1UzZTw9o9nlzo4Q",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  // title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK !",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡Integrate applications using Artificial Intelligence and Machine Learning"),
    emoji(
      "⚡ Integration of 3rd party services like Firebase/ AWS / Node / Django"
    ),
    emoji( "⚡ Research and Development"),
    emoji( "⚡ Deploying the web app on cloud platforms like AWS and Heroku"),
    emoji( "⚡ Creating application backend in Node, Express & Flask"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    // {
    //   skillName: "Flutter",
    //   fontAwesomeClassname: "fab fa-flutter"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas A&M University",
      logo: require("./assets/images/tamusymbol.png"),
      subHeader: "Master’s in Computer Science ",
      duration: "Aug 2024 – May 2026",
      desc: "CGPA - 4.0/4.0",
      descBullets: [
        "Relevant Coursework- Operating Systems, Analysis of Algorithms, Machine Learning, Natural Language Processing, Information Storage and Retrieval, Network Security ",
        "Researcher at Texas A&M University under Dr. Yang Shen and Dr. Kuan-Hao Huang",
        "Grader for CSCE 313 Introduction to Computer Systems"
      ]
    },
    {
      schoolName: "Dwarkadas Jivanlal Sanghvi College of Engineering",
      logo: require("./assets/images/djscamvi.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Dec 2020 - Jun 2024",
      desc: "CGPA - 9.5/10.0",
      descBullets: [
        "Honours in Intelligent Computing.",
        "Participated and won many national and international hackathons.",
        "Published 8 Research Papers in IEEE Format.",
        "Ex Co-Chairperson of  Artificial Intelligence and Machine Learning group of the Department of Computer Engineering at Dwarkadas J. Sanghvi College of Engineering.."
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React Native", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "40%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Technical Associate Intern",
      company: "Jefferies LLC",
      companylogo: require("./assets/images/jefferies.jpeg"),
      date: "June 2025 - August 2025",
      descBullets: [
         "Designed backend in Java and Spring Batch to paginate over 100k+ payment executions, reducing response time by 90%",
         "Enhanced UI using Angular, Angular Material, and migrated to AG Grid for real-time sorting, filtering, and pagination; added lazy loading, virtual scrolling, and custom cell rendering, boosting dashboard interactivity and load speed by 70%",
         "Integrated with Oracle DB, ran 300+ Cypress tests, and deployed via CI/CD pipelines with dual-branch workflow."
       ]
    },
    {
      role: "Research Intern",
      company: "Ignitus",
      companylogo: require("./assets/images/ignitus.jpeg"),
      date: "July 2024 - May 2025",
      descBullets: [
         "Conducted advanced experimental ML research, significantly enhancing networked system functionalities across robotics and communications, positively impacting over 3 major projects.",
         "Optimized Python-based ML models for an LMS, incorporating NLP to boost content relevancy and user engagement.",
         "Customized srsRAN and OpenFlow in SDN solutions, enhancing network management for over 500 end-users.",
         "Implemented reinforcement learning algorithms to elevate decision-making efficiency in network systems by 20%.",
       ]
    },
    {
      role: "NLP Research Intern",
      company: "IIT Patna",
      companylogo: require("./assets/images/iitpatna.png"),
      date: "Jul 2023 - Jun 2024",
      //desc: "Scrapped and annotated peer reviews from electric venues such as ICLR, Open Review , and NIPS.",
      descBullets: [
        "Scraped and annotated peer reviews from electronic venues such as ICLR, OpenReview , and NIPS, curating our dataset of 20000+ reviews for research purposes. Performed citations in papers and got trained by an NLP expert.",
        "Developed multi-task models with 6 ablation variants, comprising SciBERT, BERT-Base, and Bi-LSTM, connected to multiple attention blocks to determine aspect categories and their sentiments for any given review.",
        "Pioneered RPoliteness library for feature extraction and politeness score predictor that helped in assessing crucial insights.",
        "Created POS, Scibert Embeds, BiLSTM, and FFNN (Multi Task Model) to predict levels of annotations."
      ]
    },
    {
      role: "Flutter + ML Developer",
      company: "Earnest Data Analytics Pvt Ltd",
      companylogo: require("./assets/images/earnestdata.jpeg"),
      date: "Jan 2023 - June 2023",
      //desc: "Train and optimize ML models deployed on Amazon Sagemaker and develop the BachatCards and Benefitwise apps.",
      descBullets: [
        "Devised segmentation algorithms boosting customer retention by 15% through personalized strategies.",
        "Implemented RFM, Churn, Cohort analysis, CLV, CLTV, RFM-D Models and clustering for Customer Segmentation.",
        "Deployed the UI and logical changes of existing for India’s No. 1 Savings Card, Bachat Cards, on the Play Store.",
        "Trained and optimized ML models on Amazon SageMaker, improving financial forecasting accuracy by 25%."
      ]
    },
    {
      role: "Software Developer",
      company: "Jobs Territory Private Limited",
      companylogo: require("./assets/images/jobst.jpg"),
      date: "July 2022 - Dec 2022",
      //desc: "Build a Job Marketing App from scratch with optimum code.",
      descBullets: [
        "Crafted a Jobs Marketing App using React Native and conducted extensive testing with Jenkins for debugging.",
        "Designed and constructed a responsive website, using JavaScript and TypeScript for front-end and Django for back-end, for job opportunities and easy recruitment for women in tech in order to promote women empowerment.",
        "Used JavaScript libraries, such as Redux, to make asynchronous API calls, enhancing the website’s loading speed by 10%.",
        "Deployed an app with pixel-perfect UI on Play Store, ensuring exact match to design specifications."
      ]
    },
    {
      role: "UI/UX and App Developer",
      company: "Trueno",
      companylogo: require("./assets/images/trueno.jpg"),
      date: "April 2022 - June 2022",
      //desc: "Build a Mechanics App from scratch and debug the deployed Customer App.",
      descBullets: [
        "Worked in core App Development team which included designing and understanding user experience for Application.",
        "Designed the entire UI for the Mechanics Application from scratch and integrated it with the backend.",
        "Worked with multi-dimensional duties and contributed in strategies and product development."
      ]
    },
    {
      role: "Android Developer",
      company: "Orinova",
      companylogo: require("./assets/images/oriniva.png"),
      date: "Jan 2022 - Mar 2022",
      //desc: "Debug and improve the play store Folktel App.",
      descBullets: [
         "Planned and designed comprehensive UI/UX for both a mobile app and website using Figma, enhancing user experience and interface consistency.",
         "Developed a blockchain-based marketplace platform, enabling over 500 local artisans to sell their products, increasing their sales opportunities by 40%.",
         "Successfully deployed a React Native app on the Play Store, achieving over 10,000 downloads and maintaining a 4.5-star rating within the first three months."
      ]
    },
    {
      role: "Associate Project Manager",
      company: "Sapio Analytica Private Limited",
      companylogo: require("./assets/images/sapio.png"),
      date: "Oct 2021 - June 2022",
      //desc: "Research paper published . Associate project manager of the entire project.",
      descBullets: [
        "Published a research paper and fostered a Python model, later industrialized for practical use.",
        "Enhanced Census Credibility through the Utilization of Image Processing to Estimate GeoJSON Coordinates.",
        "Led a developer team to code and deploy a Python model on Flask, enhancing project deliverability."
      ]
    },
    {
      role: "External Engagement Program",
      company: "JP Morgan Chase & Co.",
      companylogo: require("./assets/images/jpmc.png"),
      date: "Feb 2022 - Jan 2023",
      //desc: "A crashcourse with various tech stack lectures and a prohject phase at the end.",
      descBullets: [
        "Gained hands-on experience in Python, Django, and Linux through expert-led industrial training sessions.",
        "Employed a live backend project to JP Morgan experts, marking the successful completion of project phase.",
        "Recognized by JP Morgan for project excellence and received valuable feedback from industry experts."
      ]
    },
    // {
    //   role: "Co-Chairperson",
    //   company: "DJS Synapse",
    //   companylogo: require("./assets/images/synapse.jpg"),
    //   date: "Aug 2022 - Aug 2023",
    //   desc: "Managing and leading the entire club and its events . Wrote and guided many research papers during my tenure"
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
    // {
    //   role: "React Native Mentor",
    //   company: "DJ Unicode",
    //   companylogo: require("./assets/images/unicode.jpg"),
    //   date: "Aug 2021 - Present",
    //   desc: "Learnt React Native from my mentors in my second year and became a mentor later thus following the tradition."
    // },
    // {
    //   role: "Publicity Department",
    //   company: "DJ Codestars",
    //   companylogo: require("./assets/images/codestars.jpg"),
    //   date: "Sept 2021 - Sept 2022",
    //   desc: "Helped in getting a good reach at competitive coding events of the club. Became familiar with the non-tech side."
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
    // {
    //   role: "Flutter Developer",
    //   company: "DJSCE ACM",
    //   companylogo: require("./assets/images/acm.jpg"),
    //   date: "Oct 2021 - Oct 2022",
    //   desc: "Deployed an android app for the committee on playstore and participated in events."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSources = {
//   title: "Research Papers Published",
//   subtitle: "I have written and presented various research papers. ORCID - https://orcid.org/0009-0002-0317-4949",
//   projects: [
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Estimating GeoJSON Coordinates using Image Processing to Improve Census Credibility",
//       projectDesc: "2022 Smart Technologies, Communication and Robotics (STCR)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/abstract/document/10009508"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Aero Drums-Augmented Virtual Drums",
//       projectDesc: "2022 IEEE 4th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/abstract/document/9989074"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/springer.png"),
//       projectName: "PreciSplit: A Novel Approach to Predicting Polynomial Regression Data",
//       projectDesc: "17th International Conference on Information Technology and Applications (ICITA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://doi.org/10.1007/978-981-99-8324-7_21"
//         }
//       ]
//     },

//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Revolutionalizing Obstetric Care : IoT, AI-Enabled, and Data-Driven Partograph System",
//       projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10284951"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "A Device for Detection and Deterrence of Locust Threats",
//       projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10284949"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Time Quantum Optimization in Round Robin algorithm",
//       projectDesc: "International Conference on Network, Multimedia and Information Technology (NMITCON)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10276146"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/ieee.jpeg"),
//       projectName: "Transformation of text to decode Morse Code and its detection using eye blinks",
//       projectDesc: "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://ieeexplore.ieee.org/document/10392195"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/springer.png"),
//       projectName: "Utilizing LLM and Deep Learning Strategies to Amplify Algorithmic Proficiency in Detecting Complex Patterns of Insider Trading Fraud",
//       projectDesc: "3rd International Conference on Intelligent Vision and Computing (ICIVC 2023)",
//       footerLink: [
//         {
//           name: "DOI",
//           url: "https://doi.org/10.1007/978-3-031-71388-0_17
//         }
//       ]
//     },
    
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Research Papers Published",
  subtitle: "I have written and presented various research papers. ORCID - https://orcid.org/0009-0002-0317-4949",
  projects: [
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Estimating GeoJSON Coordinates using Image Processing to Improve Census Credibility",
      projectDesc: "2022 Smart Technologies, Communication and Robotics (STCR)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/abstract/document/10009508"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Aero Drums-Augmented Virtual Drums",
      projectDesc: "2022 IEEE 4th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/abstract/document/9989074"
        }
      ]
    },
    {
      image: require("./assets/images/springer.png"),
      projectName: "PreciSplit: A Novel Approach to Predicting Polynomial Regression Data",
      projectDesc: "17th International Conference on Information Technology and Applications (ICITA)",
      footerLink: [
        {
          name: "DOI",
          url: "https://doi.org/10.1007/978-981-99-8324-7_21"
        }
      ]
    },

    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Revolutionalizing Obstetric Care : IoT, AI-Enabled, and Data-Driven Partograph System",
      projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/document/10284951"
        }
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "A Device for Detection and Deterrence of Locust Threats",
      projectDesc: "3rd International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/document/10284949"
        }
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Time Quantum Optimization in Round Robin algorithm",
      projectDesc: "International Conference on Network, Multimedia and Information Technology (NMITCON)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/document/10276146"
        }
      ]
    },
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Transformation of text to decode Morse Code and its detection using eye blinks",
      projectDesc: "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
      footerLink: [
        {
          name: "DOI",
          url: "https://ieeexplore.ieee.org/document/10392195"
        }
      ]
    },
    {
      image: require("./assets/images/springer.png"),
      projectName: "Utilizing LLM and Deep Learning Strategies to Amplify Algorithmic Proficiency in Detecting Complex Patterns of Insider Trading Fraud",
      projectDesc: "3rd International Conference on Intelligent Vision and Computing (ICIVC 2023)",
      footerLink: [
        {
          name: "DOI",
          url: "https://doi.org/10.1007/978-3-031-71388-0_17"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
const githubProjects = {
  title: "Projects",
  subtitle: "I have made various industral projects. MY GITHUB - https://github.com/dishantzaveri",
  projects: [
    {
      image: require("./assets/images/docstructure.jpg"),
      projectName: "DocStruct",
      projectDesc: "File management system designed for professionals in the construction sector.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/DocStruct"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eco_eats.png"),
      projectName: "Eco Eats",
      projectDesc: "Sustainable Food Delivery Optimization using HERE Maps.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/HereHackathon"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/foxtrot.png"),
      projectName: "Foxtrot",
      projectDesc: "Revolutionary approach with generative AI and LLM to Insider Trading.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/SingaporeIndiaHackathon2023_TeamFoxtrot"
        }
      ]
    },
    {
      image: require("./assets/images/mentordots.jpg"),
      projectName: "MentorDots",
      projectDesc: "Software Platform for effective mentorship of startups and entrepreneurs.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/SIH-TeamEnemiesOfSyntaxx"
        }
      ]
    },

    {
      image: require("./assets/images/decorgpt.png"),
      projectName: "decorGPT",
      projectDesc: "One-stop shop for visualize, plan and get inspiration for all your home decor needs.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/djcsi_EnemiesOfSyntax"
        }
      ]
    },
    {
      image: require("./assets/images/cargpt.jpg"),
      projectName: "carGPT",
      projectDesc: "Predictive model that can accurately predict the price of used cars using ML techniques.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/EnemiesOfSyntax_Datahack"
        }
      ]
    },
    {
      image: require("./assets/images/meal.png"),
      projectName: "Meal Nutrition Analysis",
      projectDesc: "An effective solution for personalized nutrition and dietary monitoring.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/MealNutritionAnalysis"
        }
      ]
    },
    {
      image: require("./assets/images/schwabbot.png"),
      projectName: "Schwab Bot AI",
      projectDesc: "From balance sheet to cash flow, get the key indicators for the stock you know.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/Options-Trade"
        }
      ]
    },
    {
      image: require("./assets/images/matrix.jpeg_v03"),
      projectName: "m-Height and Generator Matrix Optimization",
      projectDesc: "m-Height Optimization in Analog ECCs.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/MheightandGeneratorMatrixofAnalogCode"
        }
      ]
    },
    {
      image: require("./assets/images/dwitter.png"),
      projectName: "Dwitter",
      projectDesc: "Decentralized Tweeting System using Ethereum Blockchain, Django and React.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/SPITHackathon2023_EnemiesOfSyntax"
        }
      ]
    },
    {
      image: require("./assets/images/sambharat.png"),
      projectName: "Samriddh Bharat",
      projectDesc: "Promoting financial inclusion and economic empowerment for Rajasthan Government.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/RajasthanITHackathon"
        }
      ]
    },
    {
      image: require("./assets/images/billionables.png"),
      projectName: "BillionAbles",
      projectDesc: "An Assistive tool for Differently Abled People to Help them in communication.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/BillionAbles"
        }
      ]
    },
    {
      image: require("./assets/images/sportify.jpeg"),
      projectName: "Sportify",
      projectDesc: "Personal Coach to learn various sports such as Cricket, Football, Yoga, Fitness.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/LOC4.0_EnemiesofSyntax"
        }
      ]
    },
    {
      image: require("./assets/images/buyonic.png"),
      projectName: "Buyonic",
      projectDesc: "Platform where multiple businesses can post their requirement anonym.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/Buyonic"
        }
      ]
    },
    {
      image: require("./assets/images/easydorms.webp"),
      projectName: "easyDorms",
      projectDesc: "A seamless hostel management experience for users.",
      footerLink: [
        {
          name: "Project Link",
          url: "https://github.com/dishantzaveri/hostelmanagementappflutter"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Winner of Singapore-India Hackathon '23",
      subtitle: "Winner of Singapore India Hackathon 2023 held at IIT Gandhinagar. Received prize from Education Minister of India and Deputy Prime Minister of Singapore.",
      image: require("./assets/images/dishantop.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1F-ipCMQEHgsvwAebczv8kAmQw_MxWCrf/view?usp=sharing" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Smart India Hackathon 2022 Winner",
      subtitle:
        "Won India's biggest hackathon which took place at IIT Guwahati and interacted with PM Modi. The cash prize was 1 lakh rupees.",
      image: require("./assets/images/sih.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1DEG865moDFUgJFRENFBQyeEGLVGgrGui/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Finalist UNESCO India Africa Hackathon '22",
      subtitle:
        "Was a part of the first ever international hackathon where Africans from different countries came to Noida, India and developed solutions on problem statements. The event was attended by Vice President of India.",
      image: require("./assets/images/uia.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1SpfRW2z5aYhsZeQ0UtKWzrUuj_BP8FfP/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },


    {
      title: "Top 50 - Samsung's Solve For Tomorrow '22 and '24",
      subtitle:
        "Was a part of top 50 of Samsung India's first ever SFT which took place at IIT Delhi. The event was attended by entire Samsung's Jury",
      image: require("./assets/images/sft.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lgpsRZTJRcjOTLYzHV2mrkPdguEfzHQE/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Winner of IIT Bombay Techfest's HERE Hackathon '23",
      // subtitle:
      //   "The event took place in Jaipur and was attend by Rajasthan's Chief Minister , Krish Naik , Kabir Khan and Ashneer Grover.",

      image: require("./assets/images/HereHack.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1g8OfOw7JvQW4U6D8dpY3HPNkRGND2e9-/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Participated in Rajasthan's IT Hackathon 2023",
      // subtitle:
      //   "The event took place in Jaipur and was attend by Rajasthan's Chief Minister , Krish Naik , Kabir Khan and Ashneer Grover.",

      image: require("./assets/images/rajasthan.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1g9woW9z_fvtveOAu5U8BGfexcSouC0e5/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Finalist Japan-India Hackathon '24",
      // subtitle: "Selected for another international hackathon which is going to take place in 2023  organized by the University of Luxembourg Incubator & Entrepreneurship Program and the Ministry of Education (India)",
      image: require("./assets/images/japanindia.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1vv2m7o_YnSVKO2HGr4v6mXaVgxjWf-gh/view?usp=sharing" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Finalist Luxembourg-India Hackathon '23",
      // subtitle: "Selected for another international hackathon which is going to take place in 2023  organized by the University of Luxembourg Incubator & Entrepreneurship Program and the Ministry of Education (India)",
      image: require("./assets/images/lux.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://luxembourg-india.mic.gov.in/uia/assets/doc/LIST-OF-SELECTED-INDIAN-PARTICIPANTS-FOR-INDIA-LUXEMBOURG-HACKATHON.pdf" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Winner of DJ CSI's Codeshastra 9.0",
      // subtitle:
      //   ".",
      image: require("./assets/images/csi.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1TWPqwZv2wj28Iug6lSHW83DY0xXfg_Ye/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "AIR 7 at National Cybersecurity competition Pentathon 2024",
      // subtitle:
      //   ".",
      image: require("./assets/images/pentathon.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lRPcH8eyQmJ2tl2dYHK9lHe8h5O_1vey/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },


    {
      title: "India Sustainability Startathon '23 Special Panel and Masterclass.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/panel.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tZWgMKMazzGNNiVgFuJBghkiCuz6hwEx/view?usp=v"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Judge and Mentor at TAMU",
      subtitle:
        "Invited Mentor at HowdyHack & Judge at TAMUhack one of the largest annual hackathons in Texas, hosted at Texas A&M University .",
      image: require("./assets/images/howdyhack.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://th25.tamuhack.org/"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },

    {
      title: "Chief Guest + Speaker at SFIT Techfest and HackX with Arsh Goyal",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/sfit.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1uOMpl-4n4CAJN2WJ3H41Vb5Z7BKI--Sb/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    // {
    //   title: "Second place at VJTI's 24 Hours Hackathon Technovanza 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/vjti.jpeg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1tZWgMKMazzGNNiVgFuJBghkiCuz6hwEx/view?usp=sharing"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // // {
    // //   title: "Second place at Thadomal's CSI Rubix Hackathon 2023",
    // //   // subtitle:
    // //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    // //   image: require("./assets/images/thadomal.png"),
    // //   imageAlt: "Google Code-In Logo",
    // //   footerLink: [
    // //     {
    // //       name: "Certification",
    // //       url: "https://drive.google.com/file/d/1To8I-bPPQS5LMaRBOCR-3kTZUnWKidzZ/view?usp=share_link"
    // //     },
    // //     // {
    // //     //   name: "Event photo",
    // //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    // //     // },
    // //   ]
    // // },
    // {
    //   title: "Third place at TCET's Hackathon Hackanova 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/hackanova.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1OmTZ0wLREJ5yXvc3Z42RqohpR9ZDr7G9/view?usp=sharing"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Third place at DJ Sanghvi's Hackathon ClashOfCodes 2023.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/coc.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1_nRQpPX3c7aZ8naQ7iRLr1hzeXYlpIhz/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },

    // {
    //   title: "Third place at DJ Sanghvi's Hackathon Synergy 2024.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/synergy.jpeg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1_nRQpPX3c7aZ8naQ7iRLr1hzeXYlpIhz/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Hacktoberfest 2022.",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/hacktoberfest.jpg"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1Nf_6j0nNzEKImUyIMfA9gZDLdqVd5dC3/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },
    // {
    //   title: "Reached third round of L&T Technology's Techgium 2022",
    //   // subtitle:
    //   //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/techgium.png"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1YwwjqBqCG7CFFEqnJOCupfAXqpzMUItE/view?usp=share_link"
    //     },
    //     // {
    //     //   name: "Event photo",
    //     //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     // },
    //   ]
    // },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Microsoft Imagine Cup Nomination",
      subtitle: "Team Uddharaka solving the problem of locusts at Microsoft Imagine cup.",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=lS5vYpOED4g"
    },
    {
      title: "Microsoft Ambassador Program",
      subtitle: "Application for Microsoft Ambassador Program.",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=i4AQXg4RO8Q"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9795993461",
  email_address: "zaveridishant@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "dishantzaveri", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  githubProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
