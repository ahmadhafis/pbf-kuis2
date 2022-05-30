import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({handleLogout}) => {
  return (
    <div class="navbar bg-sky-600">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-sky-600"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/booklist">Book List</a>
            </li>
            <li>
              <a href="/peminjaman">Peminjaman</a>
            </li>
            <li>
              <a href="/kategori">Kategori Buku</a>
            </li>
            <li>
              <a href="/denda">Denda Buku</a>
            </li>
            <li>
              <a href="/users">Pengguna</a>
            </li>
            <li>
              <a href="/profil">Profil</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end">
        <a class="btn btn-ghost normal-case text-xl">Perpus Online</a>
      </div>
    </div>
  );
};

export default Navbar;
