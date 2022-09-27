interface PageItem {
  groupTitle: string;
  pages: Array<{
    title: string;
    id?: string | number;
    href: string;
    target?: string;
  }>;
}
interface GrantApplication {
  organization: string;
  website: string;
  founded: string;
  budget: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  directorName: string;
  directorEmail: string;
  directorPhone: string;
  contactName: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  projectName: string;
  projectGoals: string;
  projectRequestedAmount: string;
  projectTotalCost: string;
  projectDates: string;
  projectArea: string;
}
