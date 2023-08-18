export interface Question {
  question: string;
  answer: string;
}

export interface Recommendations {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  supportVersion: boolean;
  image: string | StaticImport;
  description: string;
  questionAnswer: Question[];
  recommendations: Recommendations[];
  newPrice: string;
  oldPrice: string;
  discount: string;
  information?: {
    typeOfDelivery: string;
  };
}

export interface Instruction {
  id: number;
  image: string;
  title: string;
  content: React.ReactNode;
}

export interface Key {
  id: number;
  title: string;
  content: string;
  status: string;
}
