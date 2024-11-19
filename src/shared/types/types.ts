import type { defaultLang, ui } from "../i18n/ui";

export type NavLink = {
  path: string;
  labelKey: keyof (typeof ui)[typeof defaultLang];
  activeKey?: string;
};
