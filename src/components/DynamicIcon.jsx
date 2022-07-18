import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export default function DynamicIcon(props) {
  let iconName;
  let Icon;

  if (props.iconData != null) {
    iconName = props.iconData.name;

    if (props.iconData.provider === "fa") {
      Icon = FaIcons[iconName];
    }
    if (props.iconData.provider === "mdi") {
      Icon = MdIcons[iconName];
    }
  }

  if (!Icon) {
    Icon = MdIcons["MdMusicNote"];
  }

  return (
    <>
      <Icon />
    </>
  );
}
