/* ==========================================================
   HUDA SAED - PERSONAL PORTFOLIO
   ICT Student | Frantz Fanon University
   ========================================================== */

const SITE = {
  name: "Huda Saed",
  title: "ICT Student",

  photo: "images/IM.jpeg",

  intro:
    "Information and Communication Technology student passionate about technology, software development, networking, and creating useful digital solutions.",

  about: [
    "I am Huda Saed, an Information and Communication Technology (ICT) student at Frantz Fanon University.",
    "I am interested in technology, programming, database management, networking, and web development. I enjoy learning new technologies, developing projects, and improving my technical skills."
  ],

  interests: [
    "Information Technology",
    "Software Development",
    "Web Development",
    "Networking",
    "Database Management",
    "Innovation",
    "Continuous Learning"
  ],

  /* Education (oldest first). "school" and "period" are optional:
     they only appear on the page when you fill them in. */
  education: [
    {
      level: "Primary Education",
      school: "",
      period: "",
      details: "The first stage of my education."
    },
    {
      level: "Secondary Education",
      school: "",
      period: "",
      details: "The stage that prepared me for university studies."
    },
    {
      level: "University",
      school: "Frantz Fanon University",
      degree: "Information and Communication Technology (ICT)",
      period: "Currently Studying",
      current: true,
      details:
        "Studying Information and Communication Technology and developing knowledge in programming, databases, networking, and computer systems."
    }
  ],

  skills: [
    {
      group: "Core areas",
      name: "Programming",
      text: "Writing structured code and developing software solutions."
    },
    {
      group: "Core areas",
      name: "Database Management",
      text: "Understanding database design, management, and queries."
    },
    {
      group: "Core areas",
      name: "Networking",
      text: "Understanding computer networks and communication systems."
    },
    {
      group: "Core areas",
      name: "Computer Skills",
      text: "Using computer systems and technical applications."
    },
    {
      group: "Technologies",
      name: "HTML",
      text: "Creating structured web pages."
    },
    {
      group: "Technologies",
      name: "CSS",
      text: "Designing responsive and attractive websites."
    },
    {
      group: "Technologies",
      name: "Python",
      text: "Using Python for programming and application development."
    },
    {
      group: "Technologies",
      name: "Django",
      text: "Developing web applications using the Django framework."
    }
  ],

  projects: [
    {
      title: "BiyoRaad - Smart Water Finder",
      text:
        "A water-finding project focused on helping users discover water resources through a digital platform.",
      tags: ["Python", "Django", "Web Development"],
      image: "",
      github:
        "https://github.com/huda-saed/BiyoRaad-Smart-Water-Finder",
      demo: ""
    },

    {
      title: "Library System",
      text:
        "A library management project designed to support the organization and management of library resources.",
      tags: ["Python", "Database"],
      image: "",
      github:
        "https://github.com/huda-saed/library_system",
      demo: ""
    },

    {
      title: "Clinic Management System",
      text:
        "A clinic management website project focused on organizing clinic-related information and services.",
      tags: ["HTML", "Web Development"],
      image: "",
      github:
        "https://github.com/huda-saed/nasiyclinic-django-project11",
      demo: ""
    },

    {
      title: "Yoga Website",
      text:
        "A website project created around yoga and wellness-related content.",
      tags: ["Web Development"],
      image: "",
      github:
        "https://github.com/huda-saed/yoga-website",
      demo: ""
    }
  ],

  certificates: [
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google, offered through Coursera",
      date: "14 September 2026",
      image: "images/certificate-google-data-foundations.jpg",
      link: ""
    }
  ],

  contact: {
    email: "mssdahabozaeth@gmail.com",

    github: "https://github.com/huda-saed",

    linkedin: "",

    formEndpoint: ""
  }
};