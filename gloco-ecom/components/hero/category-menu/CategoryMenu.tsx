import { featuredCategory } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import React, { Fragment } from "react";
import "remixicon/fonts/remixicon.css";
import styles from "./category-menu.module.css";

export default function CategoryMenu() {
  return (
    <ul className={` relative border-l border-t bg-background min-w-[240px]`}>
      {featuredCategory.map((item) => (
        <Fragment key={item.id}>
          <li
            className={`w-full relative border-r border-b py-2 px-5 flex items-center gap-5 hover:text-primary transition-colors duration-300 cursor-pointer ${styles.menuItem}`}
          >
            <span className={`ri-${item.icon}`}></span>
            <span className="text-xs">{item.name}</span>
            {item.menu && (
              <span className="ml-auto">
                <ChevronRight className="size-4" />
              </span>
            )}
          </li>
          {item.menu && <SubCategory menu={item.menu} />}
        </Fragment>
      ))}
    </ul>
  );
}

const SubCategory = (menu: any) => {
  return (
    <ul
      className={`${styles.subItem} absolute group-hover:block top-0 left-[100%] z-10 w-full border border-l-0 bg-gradient-to-r from-background to-[200%] min-h-[100%]`}
    >
      {menu.menu &&
        menu.menu.map((submenu: any) => (
          <Fragment key={submenu.id}>
            <li className="text-xs h-full min-w-[240px] w-full relative py-2 px-5 
            flex items-center gap-5 hover:bg-primary hover:text-background transition-colors duration-300
             cursor-pointer">
              <span>{submenu.name}</span>
              {submenu.menu && (
                <span className="ml-auto">
                  <ChevronRight className="size-4" />
                </span>
              )}
            </li>
            {submenu.menu && <SubCategory menu={submenu.menu} />}
          </Fragment>
        ))}
    </ul>
  );
};
