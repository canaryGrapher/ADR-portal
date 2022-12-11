type TemplateProps = {
  name: string;
  pageLink: string;
  isCompleted: boolean;
  children?: TemplateProps[],
};

type SidebarProps = {
  baseUrl: string;
  template: TemplateProps[];
};

type ListItemsProps = {
  formName: string;
  name: string;
  pageLink: string;
  isCompleted: boolean;
  children?: TemplateProps[],
  number: number;
  baseUrl?: string,
  currentPage: string;
}

type SidebarNumberingBullets = {
  isCurrentPage: boolean;
  isCompleted: boolean;
  bulletNumber: number;
}

export type { SidebarProps, TemplateProps, ListItemsProps, SidebarNumberingBullets };