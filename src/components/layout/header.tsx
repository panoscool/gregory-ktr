import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { Navigation } from "./navigation";

const styles = "sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-90";

export function Header() {
  return (
    <header
      className={cn("flex h-14 items-center justify-between gap-4 px-4 lg:h-[60px] lg:px-6", {
        [styles]: false,
      })}
    >
      <div>logo</div>
      <div className="flex items-center gap-4">
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
}
