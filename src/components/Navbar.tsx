import Link from "next/link";
import React from "react";
import { Moon } from "lucide-react";
import AvatarReplacement from "./AvatarReplacement";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <AvatarReplacement
          src="https://github.com/shadcn.png"
          alt="User Avatar"
          size={48}
        />
      </div>
    </nav>
  );
}
