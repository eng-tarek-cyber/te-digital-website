export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  client?: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  fullDetails: string;
  fullDetailsEn: string;
  liveUrl: string;
  tags: string[];
  imageUrl?: string;
  altText: string;
  results?: {
    label: string;
    value: string;
    subtext: string;
  }[];
  challenge?: string;
  solution?: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  businessType: string;
  service: string;
  message: string;
}
