export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InsightState {
  loading: boolean;
  content: string | null;
  error: string | null;
}

export enum InsightTopic {
  BANKING = 'Banking Transformation',
  INSURANCE = 'Insurance Digitalization',
  WEALTH = 'Wealth Management',
  REGULATORY = 'Regulatory Reporting'
}