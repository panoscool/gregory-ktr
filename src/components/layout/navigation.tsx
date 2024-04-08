import { MENU_ITEMS } from "@/lib/config";
import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        {MENU_ITEMS.map((item) => (
          <li key={item.href} className="bg-background rounded-sm px-2">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
