

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-[#0f172a]/80
        border-b border-[#646cff]/30
        shadow-[0_0_25px_#646cff55]
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="
            text-xl font-bold
            text-[#646cff]
            drop-shadow-[0_0_0.8em_#646cffaa]
          "
        >
          Search
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              href={`/${item.toLowerCase()}`}
              key={item}
              className="
                relative font-medium
                text-gray-300
                transition-colors duration-300
                hover:text-[#646cff]
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#646cff]
                after:shadow-[0_0_10px_#646cffaa]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
