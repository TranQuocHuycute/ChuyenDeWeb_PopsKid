// eslint-disable-next-line no-unused-vars
import { Link, useLocation } from "react-router-dom";

export function NavLink({ to, children }) {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={location.pathname === to ? 'text-indigo-700' : 'hover:text-indigo-700 text-gray-600'}
    >
      {children}
    </Link>
  );
}