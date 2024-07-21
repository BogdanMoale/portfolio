import React from "react";
import Link from "next/link";

function NavItem({ active, setActive, name, route }) {
  return active !== name ? (
    <Link href={route}>
      <span
        className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
        onClick={() => setActive(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
}

export default NavItem;
