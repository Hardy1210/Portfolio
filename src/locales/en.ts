// locales/en.ts

export default {
  landing: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    introduction: {
      hi: 'Hi !',
      myNameIs: 'My name is',
      name: '{name}',
      dev: 'Front-end developer.',
      welcome:
        'Welcome to my portfolio, showcasing my experience and growth as a front-end developer.',
      read: 'Read.',
    },
    content: {
      about: 'About',
      aboutText:
        'Store manager and former classical guitar teacher passionate about teaching, I transitioned into <strong>front-end development</strong>, a field that has always fascinated me.',
      aboutText2:
        'My diverse background in <strong>management</strong>, <strong>music</strong>, and <strong>teaching</strong> has provided me with discipline, creativity, and problem-solving skills. This <strong>artistic</strong> experience enhances my technical vision and facilitates <strong>collaboration</strong> on various projects. Curious and eager for new challenges, I am ready to put my passion at the service of your ideas.',
      projects: 'Projects',
      projectsText:
        'Through my various projects, I have explored different technologies. Each project has helped me enhance my skills in web development, app design, and solving real-world problems. My portfolio showcases my learning journey and my passion for creating effective solutions.',
      contact: 'Contact',
      seeMore: 'See more',
    },
    projectCardsArgent: {
      description:
        'Argent Bank is a web application that allows users to easily manage their personal information once logged in.',
      modalDescription:
        'The project design is based on React, integrating reusable components, along with the implementation of a login system that allows users to log in, view their profile information, and change their username if they wish. The use of Redux was necessary to manage the global state of the application.',
    },
    projectcardsKasa: {
      description:
        'Kasa is a web application for peer-to-peer apartment rentals, developed with React.',
      modalDescription:
        "Kasa is a web application for peer-to-peer apartment rentals, designed with React. The project's architecture relies on reusable components optimized to reduce code duplication and facilitate maintenance. The styles are organized with Sass, enabling a clear and modular structuring of style sheets, which improves the maintainability of the project. The application offers smooth navigation between pages using React Router and features an interactive image carousel along with polished animations to enhance the user experience. It is fully responsive, adapting perfectly to different screen sizes to provide an optimal experience on mobile, tablet, and desktop. Performance optimization and resource management ensure smooth usage across all types of devices.",
    },
    projectCardsOhMyFood: {
      description:
        'OhMyFood is a restaurant menu website designed with a mobile-first approach and a responsive design. I used Sass to structure and optimize the styles.',
      modalDescription:
        "OhMyFood is a project completed as part of my training, aimed at developing a web application to list gourmet restaurant menus. The site was designed with a mobile-first approach to ensure an optimal user experience on smartphones, tablets, and desktops. The development focused on the site's responsiveness, ensuring a seamless adaptation to all screen sizes. I used Sass to effectively structure the CSS styles, leveraging its modularity to create maintainable and organized code. This project allowed me to work on refined CSS animations and rigorously follow the mockups provided via Figma, adhering to the specified behaviors and transitions.",
    },
    projectcards724: {
      description:
        'Debugging and optimization project for the 724-events website developed with React, including the implementation and completion of unit and integration tests.',
      modalDescription:
        "Debugging project for an event website developed with React, supported by Node.js to run and debug JavaScript code on the server side, facilitating local environment testing. I was able to complete the missing unit and integration tests in the project to ensure the reliability and performance of the site's key features. A comprehensive test plan was created to rigorously validate each expected functionality, ensuring a smooth and stable user experience. Through a methodical approach, all anomalies were resolved, fully contributing to the completion of this event project.",
    },
    projectcardsNina: {
      description:
        'SEO optimization for a photography website, with image dimension adjustments and semantic code restructuring for better search engine ranking.',
      modalDescription:
        "SEO optimization for a photography website. I enhanced the site's performance by optimizing images, reducing their file size, and adjusting their format and dimensions to match the viewport, ensuring faster loading times and a better user experience. The code structure was revised for a semantic approach, facilitating proper indexing by search engines. I also created an optimization report to compare the performance before and after the improvements, using various audits such as Lighthouse for performance and WAVE for accessibility.",
    },
    projectCardsSophi: {
      description:
        'Sophie Bluel is an architecture website that includes dynamic photo filtering and an admin interface to manage projects.',
      modalDescription:
        "Sophie Bluel is an architecture website for which I integrated a dynamic photo filtering system for the architect's completed projects. I also developed a login page with an interactive form, including alerts that appear in case of errors with the password or email. An admin page was implemented to enable adding and deleting project photos via a modal. For backend communication, I used Swagger to review and test the available endpoints, ensuring a smooth and reliable integration.",
    },
    projectcardsBooki: {
      description:
        'Booki is one of my first projects where I integrated the homepage of a travel website.',
      modalDescription:
        'Booki is one of my first integrations. My mission in this project during my training was to integrate the homepage of this travel agency website. This is how I learned HTML and CSS more in-depth. The homepage is responsive and adapts to mobile phones.',
    },
    skills: {
      skill: 'My skills',
      like: 'I love working with...',
      worked:
        'I have had the opportunity to work with these tools and technologies.',
    },
    work: {
      idea: 'Got a project in mind ?',
      workTogether: "Let's collaborate",
      collaboration: 'Collaboration starts here.',
      speak: "Let's talk !.",
    },
    footer: {
      contact: 'Contact me',
      copyright: 'All rights reserved.',
      WorkedWith: 'Developed with Next.js and hosted on Vercel',
    },
  },
} as const
