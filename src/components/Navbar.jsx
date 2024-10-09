import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <div className="text-xl font-bold">
                <Link to="/">
                    <img src="/logo512.png" alt="Logo" className="h-8 inline mr-2" />
                    Ridex Leather
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-x-4">
                <Link to="/auth/login" className="hover:bg-blue-700 px-3 py-2 rounded">
                    Login
                </Link>
                <Link to="/auth/signup" className="hover:bg-blue-700 px-3 py-2 rounded">
                    Signup
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
