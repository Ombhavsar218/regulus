import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </MotionConfig>
  );
}
