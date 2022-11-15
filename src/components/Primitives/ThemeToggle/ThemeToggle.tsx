import "./ThemeToggle.css";

export default function ThemeToggle(props: {
  theme: string;
  onChangeTheme: () => void;
}) {
  return (
    <div className={"toggle"} onClick={props.onChangeTheme}>
      <div className={"toggle-button theme-" + props.theme}></div>
    </div>
  )
}