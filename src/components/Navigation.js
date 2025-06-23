'use client';

import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detect active section
      const sections = ['home', 'gaming', 'menu', 'music', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'menu', label: 'Food & Drinks' },
    { id: 'music', label: 'Music' },
    { id: 'contact', label: 'Contact' }
  ];
  const mobileNavItems = [
    { id: 'home', label: '🏠 Home' },
    { id: 'gaming', label: '🎮 Gaming' },
    { id: 'menu', label: '🍔 Food & Drinks' },
    { id: 'music', label: '🎵 Music' },
    { id: 'contact', label: '📞 Contact' }
  ];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : 'unscrolled'}`}> 
      <div className="navigation-inner">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('home')}>
          ⚔️ Zoro_Lounge
        </div>
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Book Now Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="book-now-btn"
        >
          ⚔️ Book Now
        </button>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="menu-btn"
          aria-label="Toggle menu"
        >
          <span className={`menu-bar${isOpen ? ' open1' : ''}`}></span>
          <span className={`menu-bar${isOpen ? ' open2' : ''}`}></span>
          <span className={`menu-bar${isOpen ? ' open3' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-menu${isOpen ? '' : ' closed'}`}>
        {mobileNavItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('contact')}
          className="mobile-book-btn"
        >
          ⚔️ Book Now
        </button>
      </div>
    </nav>
  );
}
