import React, { useState, useEffect } from 'react';
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
import Testimonials from './components/Testimonials';
import PartnerSlider from './components/PartnerSlider';
import NewsEventsPreview from './components/NewsEventsPreview';
import Reveal from './components/Reveal';
import { ArrowLeft } from 'lucide-react';

// Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ProjectsPage from './components/ProjectsPage';
import ImpactPage from './components/ImpactPage';
import NationalImpactPage from './components/NationalImpactPage';
import ProgramsPage from './components/ProgramsPage';
import PublicationsPage from './components/PublicationsPage';
import PublicationDetailPage from './components/PublicationDetailPage';
import NewsEventsPage from './components/NewsEventsPage';
import NewsEventDetailPage from './components/NewsEventDetailPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

import PrivacyTermsPage from './components/StaticPage';

const GlobalBackButton: React.FC<{ onBack: () => void, isVisible: boolean }> = ({ onBack, isVisible }) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShow(true), 100);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  return (
    <button
      onClick={onBack}
      className={`fixed bottom-8 left-8 z-50 p-3 px-5 rounded-full bg-white text-teal-800 shadow-lg border border-teal-100 transition-all duration-500 transform hover:bg-teal-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center font-semibold text-sm print:hidden ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      Back
    </button>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>([]);
  const [projectCategory, setProjectCategory] = useState<string | undefined>(undefined);
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [publicationCategory, setPublicationCategory] = useState<string | undefined>(undefined);
  const [selectedPublicationTitle, setSelectedPublicationTitle] = useState<string | undefined>(undefined);

  const handleNavigation = (page: Page) => {
    if (page !== currentPage) {
      setHistory((prev) => [...prev, currentPage]);
    }
    setCurrentPage(page);
    setProjectCategory(undefined); // Reset filter when navigating normally
    setSelectedProjectId(undefined);
    setPublicationCategory(undefined);
    setSelectedPublicationTitle(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousPage = newHistory.pop();
      setHistory(newHistory);
      if (previousPage) {
        setCurrentPage(previousPage);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleNavigation('home');
    }
  };

  const handleFocusAreaClick = (category: string) => {
    if ('projects' !== currentPage) {
      setHistory((prev) => [...prev, currentPage]);
    }
    setProjectCategory(category);
    setSelectedProjectId(undefined);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (id: string) => {
    if ('projects' !== currentPage) {
      setHistory((prev) => [...prev, currentPage]);
    }
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
    if ('publications' !== currentPage) {
      setHistory((prev) => [...prev, currentPage]);
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
            <section className="py-16 bg-gray-50 border-b border-gray-200/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Our Partners</h2>
                  </div>
                  <PartnerSlider theme="light" />
                </Reveal>
              </div>
            </section>
            <FocusAreas onNavigateToCategory={handleFocusAreaClick} />
            <Projects onViewMore={() => handleNavigation('national-impact')} onContact={() => handleNavigation('contact')} />
            <Publications onViewMore={() => handleNavigation('publications')} onNavigateToCategory={handlePublicationClick} />
            <Careers onViewAll={() => handleNavigation('careers')} />
            <SocialMediaFeed />
            <Contact />
          </>
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigation} />;
      case 'impact':
        return <ImpactPage onNavigate={handleNavigation} />;
      case 'national-impact':
        return <NationalImpactPage onNavigate={handleNavigation} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigation} />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigation} />;
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
    <div className="min-h-screen bg-gray-50 relative z-0">
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-800/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-burgundy-800/5 blur-[120px]"></div>
      </div>
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigation} onNavigateToPublicationCategory={(cat) => handlePublicationClick(cat)} />
      <BackToTop />
      <GlobalBackButton onBack={handleGoBack} isVisible={currentPage !== 'home'} />
    </div>
  );
};

export default App;