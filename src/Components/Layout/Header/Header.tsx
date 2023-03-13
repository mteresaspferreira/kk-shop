import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { Menu } from "../../Menu/Menu";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import kkStoreLogo from "../../../assets/kk-store-logo.svg";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

// NOTA: SEPARAR EM COMPONENTS E TER CUIDADO COM O MENU DESKTOP E MOBILE

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //context
  const { cartItems } = useContext(CartContext);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-4 w-auto" src={kkStoreLogo} alt="kk-store logo" />
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link to="/shoppingCart" className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-500 transition">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
