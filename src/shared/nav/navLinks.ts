import type { NavLink } from "../types/types";

export const MainNavLinks: NavLink[] = [
  {
    path: "/",
    labelKey: "nav.home",
    activeKey: "home",
  },
  {
    path: "/about",
    labelKey: "nav.about",
    activeKey: "about",
  },
] as const;
