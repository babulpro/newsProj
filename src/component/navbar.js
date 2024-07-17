import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div>

        <div className="navbar bg-base-100">

            <div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <li>
                            <Link href="/profile">profile</Link>
                        </li>
                        <li>
                            <Link href="/comments">comments</Link>
                        </li>
                        <li><Link href="/api/user/login">Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Navbar;