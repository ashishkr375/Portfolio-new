import Link from "next/link";

const NavLink = ({ children, href, className = "", ...props }) => {
  const classes = `py-2.5 px-4 text-center rounded-lg duration-150 ${className}`;

  if (typeof href === 'string' && href.startsWith('#')) {
    return (
      <a href={href} {...props} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props} className={classes}>
      {children}
    </Link>
  );
};

export default NavLink;
