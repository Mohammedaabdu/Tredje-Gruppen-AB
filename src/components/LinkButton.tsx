import { Link } from "react-router-dom";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  bgColor?: string;
  textcolor?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
const LinkButton = ({
  children,
  className,
  to,
  bgColor = "green-600",
  textcolor = "white",
  onClick,
}: LinkButtonProps) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`rounded-md bg-${bgColor} px-4 py-2 font-medium text-${textcolor} hover:opacity-90 ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
