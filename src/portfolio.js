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
  title: "Hi all, I'm Dishant",
  subTitle: emoji(
    "Welcome! My name is Dishant and I am a React Native and Flutter Developer , and I have basic experience in Python , Javascript. I also seem to have a good expereince of HTML , CSS. 🕹 I have a deep interest in Machine Learning and Artificial Intelligence 🌎"),
  resumeLink:
    "https://drive.google.com/file/d/1Mp12pIpH2zRwqAG37eC6fPgoY2OZPt_d/view?usp=sharing", // Set to empty to hide the button
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
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡Integrate applications using Artificial Intelligence and Machine Learning"), 
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Node / Django"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
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
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
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
      schoolName: "Dwarkadas Jivanlal Sanghvi College of Engineering",
      logo: require("./assets/images/djscamvi.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "Feb 2020 - April 2024",
      desc: "CGPA - 9.57.",
      descBullets: [
        "Participated and won many hackathons.",
        "Published 2 Research Papers in IEEE Format.",
        "Co-Chairperson of  Artificial Intelligence and Machine Learning group of the Department of Computer Engineering at Dwarkadas J. Sanghvi College of Engineering.."
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
      role: "NLP Research Intern",
      company: "IIT Patna",
      companylogo: require("./assets/images/iitpatna.png"),
      date: "February 2022 - Present",
      desc: "Scrapped and annotated peer reviews from electric venues such as ICLR, Open Review , and NIPS.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Flutter + ML Developer",
      company: "Earnest Data Analytics Pvt Ltd",
      companylogo: require("./assets/images/earnestdata.jpeg"),
      date: "June 2023 - July 2023",
      desc: "Train and optimize ML models deployed on Amazon Sagemaker and develop the BachatCards and Benefitwise apps.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Full Stack App Developer",
      company: "Jobs Territory",
      companylogo: require("./assets/images/jobst.jpg"),
      date: "July 2022 - September 2022",
      desc: "Build a Job Marketing App from scratch with optimum code.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "React Native App Developer",
      company: "Trueno",
      companylogo: require("./assets/images/trueno.jpg"),
      date: "April 2022 - June 2022",
      desc: "Build a Mechanics App from scratch and debug the deployed Customer App."
    },
    {
      role: "Android Developer",
      company: "Orinova",
      companylogo: require("./assets/images/oriniva.png"),
      date: "March 2022 - May 2022",
      desc: "Debug and improve the play store Folktel App."
    },
    {
      role: "Associate Project Manager",
      company: "Sapio Analytics",
      companylogo: require("./assets/images/sapio.png"),
      date: "Jan 2022 - March 2022",
      desc: "Research paper published . Associate project manager of the entire project."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "JPMC External Engagement Program",
      company: "JP Morgan",
      companylogo: require("./assets/images/jpmc.png"),
      date: "Jan 2022 - Jan 2023",
      desc: "A crashcourse with various tech stack lectures and a prohject phase at the end."
    },
     {
      role: "Co-Chairperson",
      company: "DJS Synapse",
      companylogo: require("./assets/images/synapse.jpg"),
      date: "Aug 2022 - Present",
      desc: "Managing the entire club adn its events . Wrote to research papers in my second year under this club"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
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

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research Papers Published",
  subtitle: "Google Scholar Profile",
  projects: [
    {
      image: require("./assets/images/ieee.jpeg"),
      projectName: "Estimating GeoJSON Coordinates using Image Processing to Improve Census Credibility2",
      projectDesc: "2022 Smart Technologies, Communication and Robotics (STCR)",
      footerLink: [
        {
          name: "Visit Paper",
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
          name: "Visit Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/9989074"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done !",

  achievementsCards: [
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
      title: "Finalist UNESCO India Africa Hackathon '22.",
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
      title: "Top 50 - Samsung's Solve For Tomorrow 2022",
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
      title: "Participated in Rajasthan's IT Hackathon 2023",
      subtitle:
        "The event took place in Jaipur and was attend by Rajasthan's Chief Minister , Krish Naik , Kabir Khan and Ashneer Grover.",
      
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
      title: "Finalist Singapore-India Hackathon '23",
     // subtitle: "Selected for another international hackathon which is going to take place in 2023  organized by the University of Luxembourg Incubator & Entrepreneurship Program and the Ministry of Education (India)",
      image: require("./assets/images/sih.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://singaporeindiahackathon.com/shortlist-student.php"},
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
        {name: "Certification", url: "https://luxembourg-india.mic.gov.in/uia/assets/doc/LIST-OF-SELECTED-INDIAN-PARTICIPANTS-FOR-INDIA-LUXEMBOURG-HACKATHON.pdf"},
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
      title: "Second place at VJTI's 24 Hours Hackathon Technovanza 2022.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/vjti.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tZWgMKMazzGNNiVgFuJBghkiCuz6hwEx/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Second place at Thadomal's CSI Rubix Hackathon 2023",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/thadomal.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1To8I-bPPQS5LMaRBOCR-3kTZUnWKidzZ/view?usp=share_link"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Third place at TCET's Hackathon Hackanova 2022.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/hackanova.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OmTZ0wLREJ5yXvc3Z42RqohpR9ZDr7G9/view?usp=sharing"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Third place at DJ Sanghvi's Hackathon ClashOfCodes 2023.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/coc.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_nRQpPX3c7aZ8naQ7iRLr1hzeXYlpIhz/view?usp=share_link"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Hacktoberfest 2022.",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/hacktoberfest.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Nf_6j0nNzEKImUyIMfA9gZDLdqVd5dC3/view?usp=share_link"
        },
        // {
        //   name: "Event photo",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
      ]
    },
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
  number: "+91-9869551340",
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
