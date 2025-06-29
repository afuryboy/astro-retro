import { useState } from "react";
import SideNav from "./SideNav";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./retroui/Button";

export default function HamburgerMenu({url, locale}) {
  const [isOpen, setIsOpen] = useState(false);
  const setMenuOpen = () => {
    setIsOpen((prev) => !prev)
    const body = document.body;
    body.classList.toggle("fixed");
    body.classList.toggle("overflow-hidden");
  }
  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        className="p-2"
        onClick={setMenuOpen}
        aria-label="sidebar button"
      >
        {isOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <AlignJustify className="h-3 w-3" />
        )}
      </Button>

      {isOpen && (
        <div
          className="absolute top-0 left-0 right-0 w-full h-screen bg-black opacity-50"
          onClick={setMenuOpen}
        />
      )}

      {isOpen && (
        <div className="absolute top-0 left-0 z-40">
          <SideNav url={url} locale={locale} />
        </div>
      )}
    </div>
  );
}
