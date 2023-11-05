/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ramraj Sekar",
  title: "Hello, I'm Ramraj",
  subTitle: emoji(
    "A passionate Software Tester 🚀 with good experience in both Functional and Regression Automation testing of Web applications and Salesforce using Provar,Selenium Python,Robot Framework,TOSCA, Playwright"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WQJYX1cYO26X25XakmJaRhaGrmfYokfN/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RamrajSekar",
  linkedin: "https://www.linkedin.com/in/ramraj-sekar/",
  gmail: "sekar.ramraj@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE AUTOMATION DEVELOPER WHO WANT TO EXPLORE EVERY ATUOMATION TOOLS/FRAMEWORK",
  skills: [
    emoji("⚡ Analyse the Business Requirement."),
    emoji("⚡ Prepare Test Plan And Test Stratergy Document."),
    emoji("⚡ Involved In POC and Automation Tool analysis."),
    emoji("⚡ Allocate resources, including budget and tools, to support QA activities."),
    emoji("⚡ Develop reusable test automation framework for your web applications and API."),
    emoji("⚡ Develop and maintain your automation test cases."),
    emoji("⚡ Involve in automation code reviews and sign-off."),
    emoji("⚡ Execute test cases."),
    emoji("⚡ Report defects and retest the same."),
    emoji("⚡ Review Regression Test Results and Sign off release."),
    emoji(
      "⚡ Integration of Automated Test Case With Continuous Testing Tools like Jenkins/Teamcity."
    )],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pondicherry University",
      logo: require("./assets/images/pu.png").default,
      subHeader: "Master of Business Administration in Human Resource Management",
      duration: "June 2010 - June 2012",
    },
    {
      schoolName: "Anna University",
      logo: require("./assets/images/au.png").default,
      subHeader: "Bachelor of Engineering in Electronics And Communication",
      duration: "April 2003 - April 2007",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Requirement Analysis & Planning", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Test Design - Manual/Automation", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Test Execution", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Defect Reporting/Management", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Test Closure", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Selenium",
      progressPercentage: "50%"
    },
    {
      Stack: "Provar",
      progressPercentage: "50%"
    }
    ,
    {
      Stack: "Salesforce Testing",
      progressPercentage: "70%"
    },
    {
      Stack: "Robotframework",
      progressPercentage: "80%"
    },
    {
      Stack: "Playwright",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager",
      company: "Cognizant",
      companylogo: require("./assets/images/cts.png").default,
      date: "September 2019 – Present",
      desc:
        "Develop Automation Framework and Scripts.",
      descBullets: [
        "Analyze business requirement specification, involved in Scrum meetings, and provided estimations",
        "Develop and present automation proof of concepts",
        "Developing or modifying automation test cases with Selenium Python (Robot framework) And Provar",
        "Submit Pull Request to review the code and merging it to master branch",
        "Allocate resources, including budget and tools, to support QA activities.",
        "Promote a culture of continuous learning and skill development within the QA team",
        "Reporting bugs and retesting. Reporting the daily status of automation testing to Client/Manager",
        "Successfully developed API automation script to generate test data, which speedup the manual team test execution efforts and completed testing in 10 days that was appreciated by the client."
      ]
    },
    {
      role: "Lead Engineer",
      company: "Msys Technologies",
      companylogo: require("./assets/images/msys.png").default,
      date: "March 2018 – April 2019",
      descBullets:
      [
        "Designed, reviewed and executed test cases based on requirements specification",
        "Developed or modified selenium automation scripts for regression scenarios",
        "Scheduled the regression automation tests in Jenkins and Monitor the same",
        "Triaged, analysed, reported and fixed the failure and track the same in JIRA",
        "Developed automation scripts to handle Network Storage in Linux environment."
      ]
    },
    {
      role: "Lead Testing",
      company: "Cigniti Technologies",
      companylogo: require("./assets/images/cigniti.png").default,
      date: "Nov 2015 – March 2018",
      descBullets:
      [
        "Trained and mentored a team of 10 employees in Software Functional and Automation testing",
        "Responsible for researching, consulting, analysing and evaluating system program needs",
        "Estimated testing efforts and assigned tasks to the team",
        "Presentation of Pilot/Demo for the Plan and initial stages",
        "Involved in testing Mobile and Web applications",
        "In charge of authoring and executing the Test Cases",
        "Developed or modified or executed Selenium[Java & Python] automation scripts for regression",
        "Logged Defects, Tracking & Closure of Bugs in Jira, HP ALM",
        "Chaired the Defect Triage meeting of the project "
      ]
    },
    {
      role: "Professional 1 - Product Test ",
      company: "CSC",
      companylogo: require("./assets/images/csc.png").default,
      date: "Jun 2010 – Nov 2015",
      descBullets:
      [
        "Trained and mentored a team of 10 employees in Software Functional and Automation testing",
        "Responsible for researching, consulting, analysing and evaluating system program needs",
        "Estimated testing efforts and assigned tasks to the team",
        "Presentation of Pilot/Demo for the Plan and initial stages",
        "Involved in testing Mobile and Web applications",
        "In charge of authoring and executing the Test Cases",
        "Developed or modified or executed Selenium[Java & Python] automation scripts for regression",
        "Logged Defects, Tracking & Closure of Bugs in Jira, HP ALM",
        "Chaired the Defect Triage meeting of the project "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "RamrajSekar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Aflac",
  subtitle: "A Leading Group Insurance Service Provider",
  projects: [
    {
      image: require("./assets/images/aflac.jpg").default,
      projectName: "Disability/Absence Coverage",
      projectDesc: "Scope is to perform test automation of claim creation process",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aflac.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  title: "Unum",
  subtitle: "Unum helps millions of people gain affordable access to disability, life, accident, critical illness, dental and vision benefits through the workplace",
  projects: [
    {
      image: require("./assets/images/unum.png").default,
      projectName: "E2E Insurance Processing",
      projectDesc: "Scope is to perform testing of new coverage or change in coverage",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.unum.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+1) 7828825845",
  whatsapp: "(+91) 9962530086",
  email_address: "sekar.ramraj@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ramrajsekar", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
