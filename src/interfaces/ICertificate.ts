export default interface ICertificate {
  level?: string;
  title: string;
  producer: string | JSX.Element;
  start: string;
  end: string;
  additionalData?: string | JSX.Element;
  icons: JSX.Element[];
}