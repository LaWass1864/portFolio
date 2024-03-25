import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = ({ currentPage }) => {
    const location = useLocation();
    return (
        <div className="navigation">
            <ul>
                {/* Exclure le lien vers la page Home */}
                <NavLink to="/Accueil" activeClassName="active">
                    <motion.li
                        whileHover={{ scale: 1.1 }} // Animation au survol
                        whileTap={{ scale: 0.9 }} // Animation au clic
                        className={location.pathname === '/Accueil' ? 'active' : ''}
                        style={{ color: currentPage === '/Apropos' ? 'blue' : '' }}
                    >
                        Accueil
                    </motion.li>
                </NavLink>

                <NavLink to="/Contact" activeClassName="active">
                    <motion.li
                        whileHover={{ scale: 1.1 }} // Animation au survol
                        whileTap={{ scale: 0.9 }} // Animation au clic
                        className={location.pathname === '/Contact' ? 'active' : ''}
                        style={{ color: currentPage === '/Apropos' ? 'blue' : '' }}
                    >
                        Contact
                    </motion.li>
                </NavLink>

                <NavLink to="/Projets" activeClassName="active">
                    <motion.li
                        whileHover={{ scale: 1.1 }} // Animation au survol
                        whileTap={{ scale: 0.9 }} // Animation au clic
                        className={location.pathname === '/Projets' ? 'active' : ''}
                        style={{ color: currentPage === '/Apropos' ? 'blue' : '' }}
                    >
                        Projets
                    </motion.li>
                </NavLink>

                <NavLink to="/Apropos" activeClassName="active">
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ color: currentPage === '/Apropos' ? 'orange' : '' }}
                        className={currentPage === '/Apropos' ? 'active' : ''}
                    >
                        A propos
                    </motion.li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
