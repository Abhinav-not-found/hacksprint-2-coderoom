import { Code2 } from "lucide-react";

const Navbar = ({ onGetStarted }) => {
  return (
<header className="relative z-50">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <Code2 size={22} className="text-white" />
          </div>

          <h1 className="text-xl font-bold text-white">
            CodeRoom
          </h1>
        </div>

        {/* Right Button */}
        <button
          onClick={onGetStarted}
          className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-2 font-medium text-white transition hover:border-blue-500 hover:bg-gray-800"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
