import { MENU_ITEMS, SOCIAL_LINKS } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-3 justify-items-center mb-6">
          <p>
            I’m visionary, innovative and generous with obsessive attention to detail. I strive for
            creating unique and powerful images for my clients. Having years of experience in
            creative collaboration with art directors and designers. I keep motivated by the thought
            of constantly challenging myself and bringing creative ideas to life.
          </p>

          <ul className="flex gap-2 flex-col">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-2 flex-col">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center">gregorykotrotsios &copy; {currentYear}</p>
      </div>
    </footer>
  );
}
