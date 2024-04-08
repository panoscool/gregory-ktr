import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow px-2 md:px-4">{children}</main>
      <Footer />
    </div>
  );
}
