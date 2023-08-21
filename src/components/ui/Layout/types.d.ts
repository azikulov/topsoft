export interface LayoutProps {
  children: React.ReactNode;
  hidden?: boolean;
}

export interface LayoutModalProps {
  hidden: boolean;
  onClose: () => void;
}
