import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-regulus-bg text-regulus-text theme-transition">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
