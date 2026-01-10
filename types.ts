
export interface AppItem {
  id: string;
  name: string;
  url: string;
  subtitle?: string;
  icon?: string;
  isNew?: boolean;
  updateDate?: string;
}

export interface Category {
  id: string;
  title: string;
  apps: AppItem[];
}
