import Link from "next/link";

export interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  link?: string;
  textSize?: string;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  rel?: string;
  onClick?: () => void;
}

const AppButton = ({
  icon = <></>,
  text = "",
  link = "",
  textSize = "text-sm",
  bgColor = "border-2 border-secondary bg-secondary hover:bg-primary  ",
  textColor = "text-yrt text-white hover:text-secondary",
  type = undefined,
  target = "_self",
  rel = undefined,
  onClick = () => {}, // Add this line
}: ButtonProps) => {
  return (
    <div>
      <Link onClick={onClick} href={link} target={target} rel={rel}>
        <button
          className={`${bgColor} ${textColor} ${textSize} flex flex-row gap-1 h-full justify-center items-center rounded px-1 font-yrt uppercase`}
          type={type}
        >
          {icon && <div>{icon}</div>}

          {text}
        </button>
      </Link>
    </div>
  );
};

export default AppButton;
