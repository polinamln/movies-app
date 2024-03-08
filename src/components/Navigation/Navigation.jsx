import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { BiSolidCameraMovie } from "react-icons/bi";

export default function Navigation() {
  const activLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.list}>
      <BiSolidCameraMovie className={css.icon} />
      <NavLink className={activLink} to="/">
        Home
      </NavLink>
      <NavLink className={activLink} to="/movies_page">
        Movies
      </NavLink>
    </div>
  );
}
