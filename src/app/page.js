import Navigation from '../components/Navigation';
import Image from 'next/image';
import './Home.css';

export default function Home() {
  return (
    <div className="home-root">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-img"></div>
        {/* Floating gaming icons */}
        <div className="floating-icons">
          <div className="floating-icon floating-icon-1">⚔️</div>
          <div className="floating-icon floating-icon-2">🎮</div>
          <div className="floating-icon floating-icon-3">🏆</div>
          <div className="floating-icon floating-icon-4">⚡</div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">ZORO_LOUNGE</h1>
          <p className="hero-desc">
            ⚔️ The Ultimate Gaming Experience with PS5 Cabinets, Delicious Food & Epic Music 🎵
          </p>
          <div className="hero-btns">
            <button className="hero-btn-primary">⚔️ Start Gaming Now</button>
            <button className="hero-btn-secondary">🍔 View Menu</button>
          </div>
        </div>
      </section>      {/* PS5 Gaming Section */}
      <section id="gaming" className="gaming-section">        
        <div className="gaming-container">          <h2 className="gaming-title" style={{ background: 'linear-gradient(to right, rgb(74, 222, 128), rgb(16, 185, 129))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            ⚔️ Premium PS5 Gaming Cabinets
          </h2>
          
          {/* Pricing Section */}
          <div className="pricing-grid">            <div className="pricing-card pricing-card-basic animate-fadeInUp">
              <div className="pricing-icon">⚡</div>
              <h3 className="pricing-title text-green-400">Quick Play</h3>              <div className="pricing-price">₹1,245</div>
              <div className="pricing-period">per hour</div>
              <ul className="pricing-features">
                <li>✓ 1 Hour Gaming</li>
                <li>✓ Premium PS5 Access</li>
                <li>✓ Free Snacks</li>
                <li>✓ Soft Drinks</li>
              </ul>
              <button className="pricing-btn pricing-btn-basic">
                Choose Plan
              </button>
            </div>
              <div className="pricing-card pricing-card-popular animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="popular-badge">
                🔥 POPULAR
              </div>
              <div className="pricing-icon">🏆</div>
              <h3 className="pricing-title text-emerald-400">Gaming Session</h3>              <div className="pricing-price">₹2,905</div>
              <div className="pricing-period" style={{color: '#d1d5db'}}>3 hours</div>
              <ul className="pricing-features" style={{color: '#e5e7eb'}}>
                <li>✓ 3 Hours Gaming</li>
                <li>✓ Premium PS5 Access</li>
                <li>✓ Meal Included</li>
                <li>✓ Unlimited Drinks</li>
                <li>✓ Tournament Entry</li>
              </ul>
              <button className="pricing-btn pricing-btn-popular">
                Choose Plan
              </button>
            </div>
              <div className="pricing-card pricing-card-premium animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="pricing-icon">👑</div>
              <h3 className="pricing-title text-yellow-400">All Day Pass</h3>              <div className="pricing-price">₹6,225</div>
              <div className="pricing-period">unlimited</div>
              <ul className="pricing-features">
                <li>✓ Unlimited Gaming</li>
                <li>✓ Premium PS5 Access</li>
                <li>✓ All Meals Included</li>
                <li>✓ Premium Drinks</li>
                <li>✓ VIP Tournament Access</li>
                <li>✓ Gaming Coaching</li>
              </ul>
              <button className="pricing-btn pricing-btn-premium">
                Choose Plan
              </button>
            </div>          </div>          
          <div className="gaming-content-grid">
            <div className="gaming-features">
              <h3 className="gaming-features-title">⚡ Next-Gen Gaming Experience</h3>
              <ul className="gaming-features-list">
                <li className="gaming-features-item">
                  <span className="gaming-features-icon">🏠</span>
                  <span>Private PS5 gaming cabinets with premium sound isolation</span>
                </li>                <li className="gaming-features-item" style={{animationDelay: '0.1s'}}>
                  <span className="gaming-features-icon">📺</span>
                  <span>4K gaming on 55&quot; OLED displays for crystal-clear visuals</span>
                </li>
                <li className="gaming-features-item" style={{animationDelay: '0.2s'}}>
                  <span className="gaming-features-icon">🎯</span>
                  <span>Latest AAA games: Spider-Man, God of War, FIFA 24, Call of Duty</span>
                </li>
                <li className="gaming-features-item" style={{animationDelay: '0.3s'}}>
                  <span className="gaming-features-icon">🪑</span>
                  <span>Professional gaming chairs for maximum comfort</span>
                </li>
                <li className="gaming-features-item" style={{animationDelay: '0.4s'}}>
                  <span className="gaming-features-icon">🏆</span>
                  <span>Multiplayer tournaments and competitive gaming</span>
                </li>
                <li className="gaming-features-item" style={{animationDelay: '0.5s'}}>
                  <span className="gaming-features-icon">🎮</span>
                  <span>DualSense controllers with haptic feedback</span>
                </li>
              </ul>              <div className="text-center">
                <button className="gaming-reserve-btn">
                  ⚔️ Reserve Cabinet - Starting at ₹1,245/hr
                </button>
              </div>
            </div>            <div className="gaming-image-container">
              <div className="gaming-image-wrapper">
                <div className="gaming-image-inner">
                  <Image 
                    src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="PS5 Gaming Setup" 
                    className="gaming-main-image"
                    width={1000}
                    height={600}
                  />
                  <div className="gaming-small-images">
                    <Image 
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Gaming Controller" 
                      className="gaming-small-image"
                      width={500}
                      height={300}
                    />
                    <Image 
                      src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Gaming Setup" 
                      className="gaming-small-image"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              </div><div className="pricing-badge">
                🔥 STARTING ₹1,245/HR
              </div>
            </div>          </div>          {/* Gaming Stats */}
          <div className="gaming-stats">
            <div className="gaming-stat-card animate-fadeInUp">
              <div className="gaming-stat-number text-green-400">20+</div>
              <div className="gaming-stat-label">Gaming Cabinets</div>
              <div className="gaming-stat-subtitle text-green-400">Premium Setup</div>
            </div>
            <div className="gaming-stat-card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="gaming-stat-number text-emerald-400">100+</div>
              <div className="gaming-stat-label">PS5 Games</div>
              <div className="gaming-stat-subtitle text-emerald-400">Latest Titles</div>
            </div>
            <div className="gaming-stat-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="gaming-stat-number text-teal-400">24/7</div>
              <div className="gaming-stat-label">Gaming Support</div>
              <div className="gaming-stat-subtitle text-teal-400">Always Open</div>
            </div>
            <div className="gaming-stat-card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="gaming-stat-number text-cyan-400">5000+</div>
              <div className="gaming-stat-label">Happy Gamers</div>
              <div className="gaming-stat-subtitle text-cyan-400">Join The Community</div>
            </div>
          </div>
        </div>
      </section>      {/* Food & Menu Section */}
      <section id="menu" className="menu-section">
        <div className="menu-container">          <h2 className="menu-title" style={{ background: 'linear-gradient(to right, rgb(251,146,60), rgb(248,113,113))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            🍔 Gaming Fuel Menu
          </h2>
          
          <div className="menu-grid">            {/* Snacks */}
            <div className="menu-card menu-card-snacks animate-fadeInUp">
              <div className="menu-icon">🍟</div>
              <h3 className="menu-card-title text-orange-400">Power Snacks</h3>              <div className="menu-items">
                <div className="menu-item">
                  <span>Gaming Nachos</span>
                  <span className="menu-item-price text-orange-400">₹665</span>
                </div>
                <div className="menu-item">
                  <span>Energy Fries</span>
                  <span className="menu-item-price text-orange-400">₹500</span>
                </div>
                <div className="menu-item">
                  <span>Victory Wings</span>
                  <span className="menu-item-price text-orange-400">₹995</span>
                </div>
                <div className="menu-item">
                  <span>Champion Chips</span>
                  <span className="menu-item-price text-orange-400">₹415</span>
                </div>
              </div>
            </div>            {/* Main Meals */}
            <div className="menu-card menu-card-meals animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="menu-icon">🍔</div>
              <h3 className="menu-card-title text-red-400">Epic Meals</h3>              <div className="menu-items">
                <div className="menu-item">
                  <span>Boss Battle Burger</span>
                  <span className="menu-item-price text-red-400">₹1,245</span>
                </div>
                <div className="menu-item">
                  <span>Legendary Pizza</span>
                  <span className="menu-item-price text-red-400">₹1,495</span>
                </div>
                <div className="menu-item">
                  <span>Hero Sandwich</span>
                  <span className="menu-item-price text-red-400">₹995</span>
                </div>
                <div className="menu-item">
                  <span>Quest Quesadilla</span>
                  <span className="menu-item-price text-red-400">₹830</span>
                </div>
              </div>
            </div>            {/* Drinks */}
            <div className="menu-card menu-card-drinks animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="menu-icon">🥤</div>
              <h3 className="menu-card-title text-blue-400">Power Drinks</h3>              <div className="menu-items">
                <div className="menu-item">
                  <span>Energy Boost</span>
                  <span className="menu-item-price text-blue-400">₹330</span>
                </div>
                <div className="menu-item">
                  <span>Gamer Fuel</span>
                  <span className="menu-item-price text-blue-400">₹415</span>
                </div>
                <div className="menu-item">
                  <span>Victory Smoothie</span>
                  <span className="menu-item-price text-blue-400">₹580</span>
                </div>
                <div className="menu-item">
                  <span>Legendary Latte</span>
                  <span className="menu-item-price text-blue-400">₹500</span>
                </div>
              </div>
            </div>
          </div>          {/* Combo Deals */}
          <div className="combo-section">
            <h3 className="combo-title">⚡ Combo Deals</h3>
            <div className="combo-grid">              <div className="combo-card combo-card-champion animate-fadeInUp">
                <h4 className="combo-card-title text-yellow-400">🏆 Champion Combo</h4>
                <p className="combo-description">3 Hours Gaming + Boss Battle Burger + Energy Boost</p>
                <div className="combo-price">₹3,735</div>
                <div className="combo-savings text-yellow-400">Save ₹415!</div>
              </div>
              <div className="combo-card combo-card-ultimate animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <h4 className="combo-card-title text-purple-400">👑 Ultimate Package</h4>
                <p className="combo-description">All Day Gaming + Epic Meal + Unlimited Drinks</p>
                <div className="combo-price">₹7,055</div>
                <div className="combo-savings text-purple-400">Save ₹1,245!</div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">          <h2 className="contact-title" style={{ background: 'linear-gradient(to right, rgb(45,212,191), rgb(168,85,247))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            📍 Visit Zoro_Lounge
          </h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">Get In Touch</h3>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-icon">📍</span>
                  <span>123 Gaming Street, Tech District, City 12345</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-ZORO</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">✉️</span>
                  <span>info@zoro-lounge.com</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Thu: 2PM-12AM | Fri-Sun: 12PM-2AM</span>
                </div>
              </div>
              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link social-link-instagram">📱 Instagram</a>
                  <a href="#" className="social-link social-link-facebook">📘 Facebook</a>
                  <a href="#" className="social-link social-link-twitch">🎮 Twitch</a>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h3 className="contact-form-title">⚔️ Reserve Your Gaming Session</h3>
              <form className="contact-form">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="contact-input"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="contact-input"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="contact-input"
                />                <select className="contact-select">
                  <option>Select Package</option>
                  <option>Quick Play - ₹1,245/hour</option>
                  <option>Gaming Session - ₹2,905/3 hours</option>
                  <option>All Day Pass - ₹6,225/unlimited</option>
                </select>
                <textarea 
                  placeholder="Special Requests" 
                  rows="4"
                  className="contact-textarea"
                ></textarea>
                <button className="contact-submit-btn">
                  ⚔️ Book Your Session Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">          <div className="footer-logo" style={{ background: 'linear-gradient(to right, rgb(74,222,128), rgb(16,185,129))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            ⚔️ Zoro_Lounge
          </div>
          <p className="footer-tagline">The Ultimate Gaming Experience Awaits You</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Support</a>
          </div>
          <div className="footer-copyright">
            © 2025 Zoro_Lounge. All rights reserved. Level up your gaming experience!
          </div>
        </div>
      </footer>
    </div>
  );
}
