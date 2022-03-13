type TemplateProps = {
  name: string;
  isActive: boolean;
  isCompleted: boolean;
  children?: TemplateProps[],
};

type SidebarProps = {
  baseUrl: string;
  template: TemplateProps[];
};

type ListItemsProps = {
  name: string;
  isActive: boolean;
  isCompleted: boolean;
  children?: TemplateProps[],
  number: number;
  clicker: (name: string) => void;
}

type SidebarNumberingBullets = {
  isCompleted: boolean;
  isActive: boolean;
  bulletNumber: number;
}

export type { SidebarProps, TemplateProps, ListItemsProps, SidebarNumberingBullets };