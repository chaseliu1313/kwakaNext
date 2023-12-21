export enum langKey {
  en = "en",
  cn = "cn",
  fr = "fr",
}

export type CaseStudy = {
  title: string;
  background: string[];
  challenge: { title: string; content: string }[];
  solution: { title: string; content: string }[];
  result: string[];
};

export type Translation = {
  [key: string]: string | string[] | object;

  home: string;
  blog: string;
  menu: string;
  landing: string;
  landing2: string;
  projects: string;
  contact: string;
  about: string;
  trans_label: string;
  dark_mode: string;
  light_mode: string;
  buildExperience: string[];
  makeWebsite: string;
  makeWebsite1: string;
  makeWebsite2: string;
  makeWebsite3: string;
  makeWebsite4: string;
  weloveMobile: string;
  backToTop: string;
  howHelp: string;
  contactUs: string;
  name: string;
  email: string;
  number: string;
  message: string;
  send: string;
  ourClients: string;
  designForU: string;
  everyone: string;
  asGood: string;
  designBuild: string;
  better: string;
  landingName: string;
  notFound: string;
  goBack: string;
  ourService: string;
  services: string[];
  servicesDetails: string[];
  datav: string[];
  datavDetails: string;
  a11y: {};
  mobile: string[];
  mobileDetails: string;
  mobileExtra: string;
  crossP: string[];
  crossPDetails: string;
  tech: string;
  ourtechs: string[];
  caseStudy: {
    background: string;
    challenge: string;
    solution: string;
    result: string;
  };
  trucklog: CaseStudy;
  compass: CaseStudy;
  camh: CaseStudy;
  control: {
    back: string;
    continue: string;
    magic: string;
    backToTop: string;
    nowReading: string;
    success: string;
    error: string;
  };
  prompt: {
    messageSent: string;
    messageError: string;
  };
  cr: {
    logo: string;
    disclaim: string;
    caseStudy: string;
  };
};
export enum transLabel {
  en = "En",
  cn = "中",
  fr = "Fr",
}
