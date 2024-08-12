import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#e0f7fa', padding: '20px', textAlign: 'center' , overflow:'hidden' }}>
      <h3 style={{ color: '#00796b' }}>"Bringing smiles with every toy!"</h3>
      <div id="shopify-section-template--17884943024344__tru_quick_nav_X6GATM" className="shopify-section">
        <div className="page-width">
          <div className="tru-quick-nav">
            <div className="tru-quick-nav-title">
              Shop By Age
            </div>
            <div className="tru-quick-nav-items">
              <a href="/collections/0-2-years" className="tru-quick-nav-link">0-2</a>
              <a href="/collections/3-4-years" className="tru-quick-nav-link">3-4</a>
              <a href="/collections/5-7-years" className="tru-quick-nav-link">5-7</a>
              <a href="/collections/8-10-years" className="tru-quick-nav-link">8-10</a>
              <a href="/collections/11-12-years" className="tru-quick-nav-link">11-12</a>
              <a href="/collections/13-years" className="tru-quick-nav-link">13+</a>
            </div>
          </div>
        </div>
      </div>
      <div className="tru-section">
        <div className="tru-grid">
          <div className="tru-content">
            <div className="tru-text">
             {/* <span className="tru-subhead">CREATE YOUR OWN</span>
              <span className="tru-title">BACKYARD OLYMPICS</span>
            </div>
            <div className="tru-description">
              Play as Team USA in the backyard with outdoor toys! */}
            </div> 
      
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
