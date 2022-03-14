export type DocumentProps = {
  title?: string;
  children: React.ReactNode;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type InputDescriptionProps = {
  isRequired: Boolean;
  description: String;
};

export type InputRadioComponentProps = {
  title: String;
  radioOptionFalse: String;
  radioOptionTrue: String;
}; 