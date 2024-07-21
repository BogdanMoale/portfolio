import React from "react";
import Link from "next/link";
import usePreserveScroll from "@/hooks/usePreserveScroll";

function NavItem({ active, setActive, name, route }) {
  usePreserveScroll();
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
