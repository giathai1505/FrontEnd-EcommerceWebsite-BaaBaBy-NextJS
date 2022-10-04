export interface IBreadcrumb {
  name: string | undefined;
  link?: string;
  params?: {};
  onClick?: () => void;
}
