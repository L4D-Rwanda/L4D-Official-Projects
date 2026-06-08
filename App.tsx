import React, { useState } from 'react';
import Navbar, { Page } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ProjectsPage from './components/ProjectsPage';
import PublicationsPage from './components/PublicationsPage';
import PublicationDetailPage from './components/PublicationDetailPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

import PrivacyTermsPage from './components/StaticPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [projectCategory, setProjectCategory] = useState<string | undefined>(undefined);
  const [publicationCategory, setPublicationCategory] = useState<string | undefined>(undefined);
  const [selectedPublicationTitle, setSelectedPublicationTitle] = useState<string | undefined>(undefined);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setProjectCategory(undefined); // Reset filter when navigating normally
    setPublicationCategory(undefined);
    setSelectedPublicationTitle(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFocusAreaClick = (category: string) => {
    setProjectCategory(category);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublicationClick = (category: string, title?: string) => {
    if (title) {
       handleNavigation(`publication-detail/${encodeURIComponent(title)}`); 
       return;
    }
    setPublicationCategory(category);
    setSelectedPublicationTitle(undefined);
    setCurrentPage('publications');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPage.startsWith('service/')) {
      const serviceId = currentPage.split('/')[1];
      return <ServiceDetailPage serviceId={serviceId} onBack={() => handleNavigation('services')} />;
    }

    if (currentPage.startsWith('publication-detail/')) {
      const pubTitle = decodeURIComponent(currentPage.replace('publication-detail/', ''));
      return <PublicationDetailPage title={pubTitle} onBack={() => handleNavigation('publications')} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <About onViewMore={() => handleNavigation('about')} />
            <Services onViewMore={() => handleNavigation('services')} onServiceClick={(id) => handleNavigation(`service/${id}`)} />
            <FocusAreas onNavigateToCategory={handleFocusAreaClick} />
            <Projects onViewMore={() => handleNavigation('projects')} onContact={() => handleNavigation('contact')} />
            <Publications onViewMore={() => handleNavigation('publications')} onNavigateToCategory={handlePublicationClick} />
            <Careers onViewAll={() => handleNavigation('careers')} />
            <Contact />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigateToService={(id) => handleNavigation(`service/${id}`)} />;
      case 'projects':
        return <ProjectsPage initialCategory={projectCategory} onNavigateToPublicationCategory={handlePublicationClick} />;
      case 'publications':
        return <PublicationsPage initialCategory={publicationCategory} initialPublicationTitle={selectedPublicationTitle} onNavigateToPublication={(title) => handlePublicationClick(publicationCategory || 'All', title)} />;
      case 'careers':
        return <CareersPage onBack={() => handleNavigation('home')} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyTermsPage title="Privacy Policy" />;
      case 'terms':
        return <PrivacyTermsPage title="Terms of Service" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigation} onNavigateToPublicationCategory={(cat) => handlePublicationClick(cat)} />
      <BackToTop />
    </div>
  );
};

export default App;