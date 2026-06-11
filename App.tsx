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
import SocialMediaFeed from './components/SocialMediaFeed';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ProjectsPage from './components/ProjectsPage';
import ImpactPage from './components/ImpactPage';
import ProgramsPage from './components/ProgramsPage';
import PublicationsPage from './components/PublicationsPage';
import PublicationDetailPage from './components/PublicationDetailPage';
import NewsEventsPage from './components/NewsEventsPage';
import NewsEventDetailPage from './components/NewsEventDetailPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

import PrivacyTermsPage from './components/StaticPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [projectCategory, setProjectCategory] = useState<string | undefined>(undefined);
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [publicationCategory, setPublicationCategory] = useState<string | undefined>(undefined);
  const [selectedPublicationTitle, setSelectedPublicationTitle] = useState<string | undefined>(undefined);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setProjectCategory(undefined); // Reset filter when navigating normally
    setSelectedProjectId(undefined);
    setPublicationCategory(undefined);
    setSelectedPublicationTitle(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFocusAreaClick = (category: string) => {
    setProjectCategory(category);
    setSelectedProjectId(undefined);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    setProjectCategory(undefined);
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
      return <PublicationDetailPage title={pubTitle} onBack={() => handleNavigation('publications')} onNavigateToProject={handleProjectClick} />;
    }

    if (currentPage.startsWith('news-event/')) {
      const eventId = currentPage.split('/')[1];
      return <NewsEventDetailPage id={eventId} onBack={() => handleNavigation('news-events')} onNavigateToProject={handleProjectClick} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <About onViewMore={() => handleNavigation('about')} />
            <Services onViewMore={() => handleNavigation('services')} onServiceClick={(id) => handleNavigation(`service/${id}`)} />
            <FocusAreas onNavigateToCategory={handleFocusAreaClick} />
            <Projects onViewMore={() => handleNavigation('impact')} onContact={() => handleNavigation('contact')} />
            <Publications onViewMore={() => handleNavigation('publications')} onNavigateToCategory={handlePublicationClick} />
            <Careers onViewAll={() => handleNavigation('careers')} />
            <SocialMediaFeed />
            <Contact />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigateToService={(id) => handleNavigation(`service/${id}`)} />;
      case 'impact':
        return <ImpactPage onNavigate={handleNavigation} />;
      case 'projects':
        return <ProjectsPage initialCategory={projectCategory} initialProjectId={selectedProjectId} onNavigateToPublicationCategory={handlePublicationClick} onNavigateToNewsEvent={(id) => handleNavigation(`news-event/${id}`)} onBack={() => handleNavigation('impact')} />;
      case 'programs':
        return <ProgramsPage onBack={() => handleNavigation('impact')} onContact={() => handleNavigation('contact')} />;
      case 'publications':
        return <PublicationsPage initialCategory={publicationCategory} initialPublicationTitle={selectedPublicationTitle} onNavigateToPublication={(title) => handlePublicationClick(publicationCategory || 'All', title)} />;
      case 'news-events':
        return <NewsEventsPage onNavigateToNewsEvent={(id) => handleNavigation(`news-event/${id}`)} />;
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