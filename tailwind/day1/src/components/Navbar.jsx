import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Resources",
    dropdown: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Company home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
            A
          </div>

          <span className="text-lg font-bold tracking-tight text-gray-900">
            Acme
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setResourcesOpen((prev) => !prev)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {resourcesOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                    role="menu"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => setResourcesOpen(false)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  item.label === "Home"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Search */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            <span
              className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"
              aria-hidden="true"
            />
          </button>

          {/* Profile */}
          <div className="relative ml-1">
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2.5 py-1.5 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={profileOpen}
              aria-haspopup="menu"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                <User className="h-4 w-4 text-gray-600" />
              </div>

              <span className="text-sm font-medium text-gray-700">
                Awanish
              </span>

              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                role="menu"
              >
                <a
                  href="/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <User className="h-4 w-4" />
                  Profile
                </a>

                <a
                  href="/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </a>

                <div className="my-1 border-t border-gray-100" />

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                  role="menuitem"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <a
            href="/get-started"
            className="ml-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setResourcesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}

                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        resourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {resourcesOpen && (
                    <div className="ml-3 space-y-1 border-l border-gray-200 pl-3">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                </a>
              )
            )}

            <div className="my-3 border-t border-gray-200" />

            <div className="grid grid-cols-2 gap-2">
              <a
                href="/login"
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Sign In
              </a>

              <a
                href="/get-started"
                className="rounded-lg bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-800"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}