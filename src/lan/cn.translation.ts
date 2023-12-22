import { Translation, transLabel } from "./translation.interface";

export const cn: Translation = {
  home: "主页",
  blog: "博客",
  menu: "目录",
  projects: "项目",
  contact: "联系我",
  about: "关于我",
  trans_label: transLabel.cn,
  landing: "像素亦有使命，产品更有效力.",
  landingName: "Kwaka",
  landing2: "Your web/mobile design partner.",
  dark_mode: "暗",
  light_mode: "亮",
  buildExperience: ["用户体验", "产品", "品牌形象", "技术支持"],
  better: "更优秀的",
  makeWebsite: "搭建以",
  makeWebsite1: "以用户为核心，",
  makeWebsite2: "无障碍，",
  makeWebsite3: "适用移动设备",
  makeWebsite4: "的网站",
  weloveMobile: "我们同样热爱开发移动APP",
  backToTop: "回到顶部",
  howHelp: "有什么可以帮助您？",
  contactUs: "联系我们",
  name: "姓名",
  email: "电子邮件",
  number: "联系电话",
  message: "留言",
  send: "发送",
  ourClients: "合作客户",
  designForU: "为用户而设计",
  everyone: "没有阻碍！",
  asGood: "在移动设备上依然好用",
  designBuild: "设计·创造",
  notFound: "这里什么都没有。",
  goBack: "返回",
  ourService: "我们专注于：",
  services: [
    "交互设计",
    "定制化软件开发",
    "软件测试和质量控制",
    "搜索引擎优化",
    "软件系统现代化",
    "软件集成和维护",
  ],
  servicesDetails: [
    "Create seamless and engaging user experiences that elevate your digital presence.",
    "Scalable, flexible, and adaptable solutions that streamline processes, enhance efficiency, and provide a competitive edge by addressing specific challenges unique to the organization. ",
    "By adhering to industry best practices and utilizing cutting-edge testing methodologies, our QA services play a pivotal role in delivering reliable, secure, and high-performance software products.",
  ],
  datav: ["从", "繁杂的", "数据中寻找", "成功"],
  datavDetails:
    "我们提供定制开发数据可视化工具。我们专注于构建数据可视化和定制化的自动报表工具，以简化您的业务流程，帮助应对快节奏的各种挑战。",
  a11y: [],
  mobile: ["我们一起", "移动化"],
  mobileDetails:
    "移动应用并不仅是简单延伸， 移动应用能提供更专注的用户体验和增强用户粘性。",
  mobileExtra: "拓展你的愿景, 激活无限潜能.",
  crossP: ["跨平台的", "魅力"],
  crossPDetails:
    "通过跨平台开发技术实现更高效地覆盖不同平台的用户，更提供流畅一致的用户体验",
  tech: "技术",
  ourtechs: [],
  control: {
    back: "上一页",
    continue: "下一页",
    magic: "更多",
    backToTop: "回到顶部",
    nowReading: "正在阅读：",
    success: "成功",
    error: "错误",
  },
  prompt: {
    messageError: "抱歉，本服务发生未知错误，请稍后重试。",
    messageSent: "您的消息已收到，我们将尽快与您联系。",
  },
  caseStudy: {
    background: "项目背景",
    challenge: "挑战",
    solution: "解决方案",
    result: "成果",
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
    logo: "本站所用注册商标之版权归版权所有人.",
    disclaim: "版权所有 © 2023. Kwaka Tech Inc.",
    caseStudy: "本文所用图片素材及注册商标之版权归版权所有人.",
  },
};
