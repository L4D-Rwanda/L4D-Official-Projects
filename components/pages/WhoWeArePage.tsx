import React from 'react';
import AboutPage from '../AboutPage';

interface WhoWeArePageProps {
  onNavigate?: (page: string) => void;
}

const WhoWeArePage: React.FC<WhoWeArePageProps> = ({ onNavigate }) => {
  return <AboutPage onNavigate={onNavigate} />;
};

export default WhoWeArePage;
