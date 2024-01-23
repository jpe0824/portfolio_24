import * as React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as PiIcons from "react-icons/pi";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi2";
import * as AiIcons from "react-icons/ai";

interface IconProps {
  name: string;
}

interface IconSet {
  [key: string]: React.ElementType;
}

const ICONS: IconSet = {
  ...FaIcons,
  ...BiIcons,
  ...PiIcons,
  ...SiIcons,
  ...GrIcons,
  ...HiIcons,
  ...AiIcons,
};

const DynamicIcon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = ICONS[name];
  return <IconComponent />;
};

export default DynamicIcon;
