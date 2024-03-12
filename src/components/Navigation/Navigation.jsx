import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";

export default function Navigation() {
  const activLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.header}>
      <h1 className={css.title}>
        YOUR M<RiMovie2Fill />
        VIE
      </h1>
      <p className={css.slogan}>"Discover Your Favorite Movie"</p>
      <div className={css.list}>
        <BiSolidCameraMovie className={css.icon} />
        <NavLink className={activLink} to="/">
          HOME
        </NavLink>
        <NavLink className={activLink} to="/movies">
          MOVIES
        </NavLink>
      </div>
    </div>
  );
}
