import React from "react";
import { Link as RRLink, NavLink, LinkProps } from "react-router-dom";
import clsx from "clsx";

type Props = {
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isNavLink?: boolean;
};

export const Link: React.FC<Props & LinkProps> = ({
  className,
  children,
  icon,
  isNavLink = false,
  ...rest
}) => {
  return (
    <>
      {isNavLink ? (
        <NavLink
          className={({ isActive }) =>
            clsx(
              "text-center p-2 text-gray-500",
              isActive && "!text-black bg-gray-100",
              className
            )
          }
          {...rest}
        >
          {icon}

          {children}
        </NavLink>
      ) : (
        <RRLink className={clsx("text-center", className)} {...rest}>
          {icon}

          {children}
        </RRLink>
      )}
    </>
  );
};
