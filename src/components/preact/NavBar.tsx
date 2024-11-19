import type { ui } from "../../shared/i18n/ui";
import { useTranslation } from "../../shared/i18n/utils";
import { MainNavLinks } from "../../shared/nav/navLinks";
import styles from "./NavBar.module.css";

type NavBarProps = {
  /** Language code to render the component with */
  lang: keyof typeof ui;
};

export function NavBar({ lang }: NavBarProps) {
  const t = useTranslation(lang);
  return (
    <nav>
      <ul className={styles.navList}>
        {MainNavLinks.map((link) => (
          <li>
            <a href={link.path}>{t(link.labelKey)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
