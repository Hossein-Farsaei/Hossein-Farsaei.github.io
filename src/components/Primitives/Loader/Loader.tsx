import "./Loader.css";

export const Loader = (props: { text: string, fontSize?: string }) => {
  return (
    <h1 className="loader-text" data-text={props.text}
    style={{fontSize: props.fontSize}}>
      {props.text}
    </h1>
  );
};
