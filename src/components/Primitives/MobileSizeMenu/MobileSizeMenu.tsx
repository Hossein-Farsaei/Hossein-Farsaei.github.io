import IMenuItems from "../../../interfaces/IMenuItems";
import "./MobileSizeMenu.css"

export const MobileSizeMenu = (props: {
  items: IMenuItems[];
  onSelect: (pageId: number) => void;
}) => {
  return (
    <ul className="mobile-screen-menu-list flex flex-column">
      {props.items.map((menuItem) => {
        return (
          <li
            key={menuItem.id}
            onClick={() => {
              props.onSelect(menuItem.id);
            }}
          >
              <p><span>{menuItem.icon}</span><span>{menuItem.title}</span></p>
          </li>
        );
      })}
    </ul>
  );
};
