export interface IMenuBar {
  label: string;
  link?: string;
  active?: boolean;
  height?: number;
  number?:number;
  id?: number;
  selectionHeight?: { [count: string]: number }[];
  count?:number;
  submenu?: IMenuBar[] | undefined;
}



export interface ImmigrationService {
  title: string;
  delay: number;
  icon: string;
  bgColor: string;
  description: string;
  link: string;
  popular: boolean;
  view: ServiceView;
}

// view object
export interface ServiceView {
  slider: SliderData;
  about: AboutData;
  requirements?: Requirement[]; 
  process?: ProcessStep[];
  documents?: DocumentGroup[];
  questions?: FAQItem[];
}

export interface SliderData {
  name: string;
  heading: string;
  paragraph: string;
}

export interface AboutData {
  title: string;
  p1: string;
  p2: string;
  image?: string;
  storiess?: StoryItem[];        
}

export interface StoryItem {
  icon: string;
  heading: string;
}

export interface Requirement {
  delay: number;
  heading: string;
  paragraph: string[]; 
}

export interface ProcessStep {
  number: string;    
  delay: number;
  bgColor:string;
  heading: string;
  p: string;
}

export interface DocumentGroup {
  aos:string;
  colorVar:string;
  icon:string;
  name: string;
  list: string[];    
}

export interface FAQItem {
  heading: string;
  p: string;
  open:boolean;
}


// country 
// MAIN COUNTRY INTERFACE
export interface CountryList {
  title: string;
  delay: number;
  emoji: string; // CA, AU, US etc.
  description: string;
  link: string;
  cta: string;
  view: CountryView;
}

// MAIN VIEW
export interface CountryView {
  slider: SliderData;
  visaPrograms: VisaProgram[];
  opportunities: Opportunities;
  education: Education;
  visaTabs: VisaTab[];
  documentsList: DocumentSection[];
}

// VISA PROGRAMS
export interface VisaProgram {
  title: string;
  description: string;
  delay: number;
  points: VisaPoint[];
}

export interface VisaPoint {
  text: string;
  icon: string;
  color: string;
}

// OPPORTUNITIES SECTION
export interface Opportunities {
  image: string;
  heading: string;
  p: string;
  jobCategories: JobCategory[];
}

export interface JobCategory {
  icon: string;
  color: string;
  title: string;
  text: string;
}

// EDUCATION SECTION
export interface Education {
  heading: string;
  p: string;
  studyBenefits: StudyBenefit[];
}

export interface StudyBenefit {
  emoji: string;
  title: string;
  text: string;
  delay: number;
}

// VISA TABS
export interface VisaTab {
  id: string;
  label: string;
  active: boolean;
  items: VisaTabItem[];
}

export interface VisaTabItem {
  title: string;
  text: string;
}

// DOCUMENTS SECTION
export interface DocumentSection {
  title: string;
  items: string[];
}



export interface BlogItem {
  title: string;
  delay: number;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  description: string;
  link: string;
  paragraph:string
}