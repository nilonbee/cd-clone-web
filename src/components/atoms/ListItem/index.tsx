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
      className={`flex space-x-1 ${topMargin ? "mt-6" : "mt-0"} items-center w-fit`}
    >
      {icon ? icon : null}

      <p className="text-sm text-whiteGray">{text}</p>
    </Link>
  ) : (
    <div className={`flex gap-1 ${topMargin ? "mt-6" : "mt-0"} items-center`}>
      {icon ? icon : null}
      <p className="text-sm text-whiteGray">{text}</p>
    </div>
  );
};
