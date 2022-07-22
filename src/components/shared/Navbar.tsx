import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <a href="/" className="font-semibold text-xl tracking-tight">
          SPŠT Knižnica
        </a>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <a
            href="/"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Domov
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/about"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            O stránke
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/books"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Knihy
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/categories"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Kategórie
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/student/login"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Žiak Prihlásenie
          </a>
        </li>

        <li className="border-t md:border-none">
          <a
            href="/teacher/login"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Učitel Prihlásenie
          </a>
        </li>
      </ul>
    </nav>
  );
}
