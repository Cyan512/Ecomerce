// src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
    const base =
        "text-gray-300 hover:text-white transition-colors duration-200";
    const active =
        "font-semibold border-b-2 border-sky-400 text-white";
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-zinc-900">
            <h1 className="text-lg md:text-xl font-bold text-white">Mi Sitio</h1>

            <nav className="flex gap-6 text-sm md:text-base">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? `${base} ${active}` : base
                    }
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? `${base} ${active}` : base
                    }
                >
                    Shop
                </NavLink>
            </nav>
        </header>
    );
}
