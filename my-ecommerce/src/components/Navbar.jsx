import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import Logo from '../assets/logo1.png'; // Ensure this path is correct

export default function Navbar() {
  const location = useLocation(); // Get the current location object to highlight the active link

  // Define your navigation links with their respective paths
  const navLinks = [
    { name: 'Home', path: '/' }, // Assuming your Home page is at the root
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="bg-blue-30 text-blue-900 py-5 rounded-b-2xl shadow-md relative">
      <div className="flex items-center justify-end max-w-7xl mx-auto px-6">
        {/* Company Logo - positioned absolutely on the left */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-lg p-1 ">
          <Link to="/"> {/* Make the logo a link to the homepage */}
            <img
              src={Logo}
              alt="Company Logo"
              className="h-14 w-14 object-contain rounded-full border-2 border-white shadow-md bg-white"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-extrabold uppercase tracking-widest text-lg font-[Montserrat]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path} // Use 'to' prop for React Router navigation
                className={`
                  px-3 py-2 rounded transition-all duration-200
                  hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                  shadow-sm drop-shadow font-[Playfair Display] tracking-wider
                  ${location.pathname === link.path ? 'bg-blue-600 text-white shadow-lg' : ''}
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}