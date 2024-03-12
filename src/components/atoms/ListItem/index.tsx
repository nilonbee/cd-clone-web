import Link from "next/link";

type ListItemProps = {
  text: string;
  href?: string | any;
  icon?: React.ReactElement | any; // Assuming you are using React for SVG components
  title?: boolean | any;
  white?: boolean | any;
  topMargin?: boolean | any;
};
export const ListItem = ({
  text,
  icon,
  href,
  title,
  white,
  topMargin,
}: ListItemProps) => {
  return (
    <Link
      href={href}
      className={`flex space-x-1 my-[2px] ${topMargin ? "mt-6" : "mt-0"}`}
    >
      {icon ? icon : null}
      {title ? (
        <p
          className={`text-lg ${
            white ? "text-white mb-4" : "text-whiteGray"
          } font-semibold`}
        >
          {text}
        </p>
      ) : (
        <p className="text-base text-whiteGray mb-[2px]">{text}</p>
      )}
    </Link>
  );
};
