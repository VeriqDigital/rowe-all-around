import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const Button = ({
  children,
  variant = "primary",
  href,
  newTab,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex min-h-12 cursor-pointer items-center justify-center border-2 px-6 py-3 font-heading text-sm font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-current";

  const variantClasses = {
    primary:
      "border-(--accent) bg-(--accent) text-white hover:border-(--accent-hover) hover:bg-(--accent-hover)",
    secondary:
      "border-current bg-transparent text-current hover:border-(--accent) hover:bg-(--accent) hover:text-white",
    light:
      "border-white bg-white text-[#1b211b] hover:border-[#dfe7dc] hover:bg-[#dfe7dc]",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
