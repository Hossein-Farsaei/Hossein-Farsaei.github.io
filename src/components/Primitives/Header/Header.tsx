import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { MenuItems } from "../../../data/StaticData";
import { MobileSizeMenu } from "../MobileSizeMenu/MobileSizeMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
export const Header = (props: {
  pageId: number;
  updatePage: (pageId: number) => void;
  theme: string;
  onChangeTheme: () => void;
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  //const defaultId = props.pageId;

  function updatePage(pageId: number) {
    setIsMenuVisible(false);
    props.updatePage(pageId);
  }

  return (
    <div className="navigation">
      <ul className="flex">
        {window.innerWidth >= 380 &&
          MenuItems.map((menuItem) => {
            let navClass =
              menuItem.id === props.pageId ? "list active" : "list";
            return (
              <li
                key={menuItem.id}
                className={navClass}
                onClick={() => {
                  props.updatePage(menuItem.id);
                }}
              >
                <div>
                  <span className="text">{menuItem.title}</span>
                  <span className="icon">{menuItem.icon}</span>
                </div>
              </li>
            );
          })}
        {window.innerWidth < 380 && (
          <>
            <li className="list active">
              <div>
                <span className="text">Menu</span>
                <span
                  className="icon"
                  onClick={() => {
                    setIsMenuVisible(!isMenuVisible);
                  }}
                >
                  <FaAlignJustify />
                </span>
              </div>
            </li>
            <div
              className={
                isMenuVisible === true ? "menu visible" : "menu invisible"
              }
            >
              <MobileSizeMenu
                items={MenuItems}
                onSelect={(pageId: number) => updatePage(pageId)}
              />
            </div>
          </>
        )}

        <div className="indecator"></div>
        <ThemeToggle theme={props.theme} onChangeTheme={props.onChangeTheme} />
      </ul>
    </div>
  );
};
