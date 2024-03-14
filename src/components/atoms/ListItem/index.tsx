import Link from "next/link";

type ListItemProps = {
  text: string;
  href?: string;
  icon?: React.ReactElement; // Assuming you are using React for SVG components
  title?: boolean;
  white?: boolean;
  topMargin?: boolean;
};
export const ListItem = ({
  text,
  icon,
  href,
  title,
  white,
  topMargin,
}: ListItemProps) => {
  return href ? (
    <Link
      href={href}
      className={`flex space-x-1 my-[2px] ${topMargin ? "mt-6" : "mt-0"}`}
    >
      {icon ? icon : null}
      <p className="text-sm text-whiteGray mb-2">{text}</p>
    </Link>
  ) : (
    <div className={`flex space-x-1 my-[2px] ${topMargin ? "mt-6" : "mt-0"}`}>
      {icon ? icon : null}
      <p className="text-sm text-whiteGray mb-2">{text}</p>
    </div>
  );
};
