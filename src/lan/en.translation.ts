import { transLabel, Translation } from "./translation.interface";

export const en: Translation = {
  home: "Home",
  blog: "Blog",
  menu: "Menu",
  projects: "Projects",
  contact: "Contact",
  about: "About",
  trans_label: transLabel.en,
  landing: "Pixels with purpose, products with impact.",
  landingName: "Kwaka",
  landing2: "Your web/mobile design partner.",
  dark_mode: "Dark",
  light_mode: "Light",
  better: "Better",
  buildExperience: ["experience", "products", "branding", "support"],
  makeWebsite: "We design and build",
  makeWebsite1: " user-centered,",
  makeWebsite2: " accessible,",
  makeWebsite3: " responsive",
  makeWebsite4: " websites.",
  weloveMobile: "We also have a lot of love for building mobile applications.",
  backToTop: "Back to Top",
  howHelp: "How can we help?",
  contactUs: "Contact Us",
  name: "Name",
  email: "Email",
  number: "Number",
  message: "Message",
  send: "Send",
  ourClients: "Our Clients",
  designForU: "Designed for you",
  everyone: "There should be no hurdle！",
  asGood: "Work just as good on your phone :)",
  designBuild: "design·build",
  notFound: "Hmm, we found nothing here.",
  goBack: "Go back",
  ourService: "Our Services：",

  services: [
    "UI/UX design and research",
    "Custom software development",
    "Quality assurance",
    "Search Engine Optimization",
    "Software Modernization",
    "Software integration and maintenance",
  ],
  servicesDetails: [
    "Create seamless and engaging user experiences that elevate your digital presence.",
    "Scalable, flexible, and adaptable solutions that streamline processes, enhance efficiency, and provide a competitive edge by addressing specific challenges unique to the organization. ",
    "By adhering to industry best practices and utilizing cutting-edge testing methodologies, our QA services play a pivotal role in delivering reliable, secure, and high-performance software products.",
  ],
  datav: ["Turn ", "complexity ", "to ", "simplicity"],
  datavDetails:
    "We offer custom development for data-visualization tools that streamline your focus on solutions by automating the reporting process. Translate your data into dynamic graphs and charts, exportable in any format you desire.",
  a11y: {},
  mobile: ["We help business ", "go ", "mobile"],
  mobileExtra: "Empower your vision, mobilize your potential.",
  mobileDetails:
    "Having a mobile app is not just a plus, it keeps your customers engaged with elevated user experience.",
  crossP: ["Cross-Platform ", "Magic"],
  crossPDetails:
    "Reach both iOS and Android users without breaking the bank! Our cross-platform development ensures a consistent and delightful user experience across devices.",
  tech: "Technologies",
  ourtechs: [],
  control: {
    back: "back",
    continue: "continue",
    magic: "more",
    backToTop: "back to top",
    nowReading: "Now Reading",
    success: "Success",
    error: "Error",
  },
  prompt: {
    messageError: "Sorry, there was an error sending the message.",
    messageSent: "Message received, we will contact you soon!",
  },
  caseStudy: {
    background: "Background",
    challenge: "Challenge",
    solution: "Solution",
    result: "Result",
  },
  trucklog: {
    title: "Case study: Truck-log management dashboard",
    background: [
      "Our client is a construction company that provides a wide range of services including site excavation, material transportation and management. To align with regulatory standards and enhance operational efficiency, the client sought the development of a web-based control panel. This system aims to meticulously record and manage their day-to-day operations, providing a streamlined solution to meet regulatory requirements.",
    ],
    challenge: [
      {
        title: "Time sensitive.",
        content:
          "The application needs to be up and running in a few months to meet the regulatory mandate.",
      },
      {
        title: "Complexity of requirements.",
        content:
          "The intricate nature of our client's services and the diverse range of materials they track pose a considerable challenge to the accuracy of the initial assessment. Furthermore, the dynamic nature of their daily operations necessitates adaptability to changes in requirements.",
      },
      {
        title: "Syncing with the client application.",
        content:
          "The administrative portal is designed not only to ensure timely synchronization of all data but also to facilitate prompt communication with end-users. This ensures that the operational activities conducted on the admin portal are swiftly communicated to and reflected in the client's mobile applications, fostering a cohesive and responsive system.",
      },
    ],
    solution: [
      {
        title: "Dashboard:",
        content:
          "Allow users to view current job progress, create a new job or update the job details. ",
      },
      {
        title: "Asset management:",
        content:
          "User and manage all information for their assets: trucks, drivers, work sites and truck loads. User is able to add custom types, notes or special requirements to all assets. ",
      },
      {
        title: "Data visualization:",
        content:
          "The application provides a variety of charts and graphs. Tables are interactive and easy to filter and sort. ",
      },
      {
        title: "User role management: ",
        content:
          "The application manages 5 different user types with distinctive user permissions and access.",
      },
      {
        title: "Data export:",
        content:
          "All tables are able to export into csv files or pdf files, so users can take advantage of the feature for further reporting.",
      },
      {
        title: "Activity Monitor:",
        content:
          "For user with adequate access, the application can help monitoring all user activity and perform user management actions (create, disable, update) when needed.",
      },
    ],
    result: [
      "The Kwaka Tech team successfully delivered a React-based application featuring tailored and reusable UI components within a tight timeframe. To expedite the development process, the application leverages cloud functions for algorithms, backend processing, and user permission management. Robust NoSQL solutions are employed for data storage and management.",
      "Notably, the application seamlessly met all initially specified requirements and accommodated any changes seamlessly integrated during the development process. This comprehensive solution empowers our client with an all-encompassing perspective on their daily operations, resulting in a substantial enhancement of overall efficiency.",
    ],
  },
  compass: {
    title: "Case study: Compass integrated survey tool",
    background: [
      "Our client specializes in providing employee engagement survey services, dealing with high volumes of intricately customized survey data that require efficient processing, analysis, and visualization. Given the unique nature of this application, there is a substantial demand for client-side processing, presenting a significant challenge in the implementation of a user interface that meets the demanding requirements of the users.",
    ],
    challenge: [
      {
        title: "Sophisticated frontend structure.",
        content:
          "The frontend of the application is composed of two major parts, one of which was imported from another React project. The challenge lay in upholding consistency in user experience and state management while integrating two substantial client-side applications. Navigating this complexity required adept handling of user experience presentation, data structures, and API development to ensure a seamless and cohesive integration of the disparate components.",
      },
      {
        title: "Complexed charts and graphs.",
        content:
          "To maximize the application's key advantage, a comprehensive array of graphs and charts encompassing nearly all possible types were incorporated.",
      },
      {
        title: "High performance requirement for loading large dataset.",
        content:
          "In addition to requiring a diverse array of graphs and charts, the application also demands meticulous consideration of performance due to the handling of large datasets during their implementation.",
      },
      {
        title: "Requirements complexity.",
        content:
          "Surveys within this application are highly customizable and can involve considerable complexity. Moreover, end users hailing from diverse industries add an extra layer of intricacy. Consequently, the design of the application must strike a balance, being generic enough to accommodate various needs while remaining inherently extendable to address specific requirements.",
      },
      {
        title: "Smart data export.",
        content:
          "The application empowers end users with the capability to export data into various formats, including CSV, DOCX, PDF, and even PowerPoint slides, ensuring seamless preparation for presentations.",
      },
    ],
    solution: [],
    result: [
      "The successful implementation of the application featured a sophisticated data grid, incorporating elements such as heat maps, diagrams, charts, and nested list views. The transition from the legacy application to a modern component provided users with enhanced capabilities, enabling not only viewing but also the execution of actions for efficient data management. Notably, the application exhibits excellent performance, effortlessly handling the import and export of substantial amounts of data.",
    ],
  },
  camh: {
    title: "Case study: camh online tool for youth depression",
    background: [
      "In the complex landscape of mental health care, our client, a publicly funded mental health organization, faced the formidable challenge of developing a web application tailored for physicians and social workers. This ambitious endeavor aimed to streamline the intricate task of tracking treatment pathways, offering crucial support in the diagnosis and management of depression in youth. Notably, the application set out to be a beacon of inclusive design and accessibility.",
      "Undertaking this challenging mission, the Kwaka team engaged closely with a diverse multi-disciplinary team of specialists and doctors. The collaborative effort was marked by the relentless pursuit of high quality and pinpoint accuracy, navigating the intricate intersections of technology and mental health to deliver a robust tool for healthcare professionals dedicated to the well-being of youth.",
    ],
    solution: [],
    challenge: [
      {
        title: "Inclusive design.",
        content:
          "It’s challenging when creating products that are accessible and usable by a diverse range of individuals, including those with different abilities, disabilities, and needs.",
      },
      {
        title: "Managing a multidisciplinary team.",
        content:
          "Ensuring seamless coordination between team members with different expertise can be challenging but is crucial for a cohesive end product.",
      },
      {
        title: "Meticulous Precision.",
        content:
          "The accuracy of the content is of paramount importance. A well-established testing system was required.",
      },
    ],
    result: [
      "Kwaka Tech successfully designed and implemented a React based web tool within the scheduled timeframe. The project effectively incorporated insights from over 20 psychologists and instructional designers. Deployed on the client's corporate server, this online tool has gained extensive usage among physicians and social workers across multiple provinces in Canada. Since its initial launch in 2020, the Kwaka Tech team has diligently maintained and supported the tool, facilitating content updates and design changes. Notably, an optimized mobile version was introduced in 2022, enhancing accessibility and user experience.",
    ],
  },
  cr: {
    logo: "All logos and registered trademarks are the property of their respective owners.",
    disclaim: "Copyright © 2023. Kwaka Tech Inc. Company",
    caseStudy:
      "*All images, logos and registered trademarks in this case study are the property of their respective owners.",
  },
};
