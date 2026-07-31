/* Header partial - the markup below is injected into
   index.html by js/include.js (works from file:// and over HTTP). */
window.__PARTIALS = window.__PARTIALS || {};
window.__PARTIALS.header = `
<!-- ============================= HEADER ============================= -->
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a class="header-logo" href="#" aria-label="CloudConverge — home">
      <img class="logo-light" src="assets/images/cc_logo_white.webp" alt="CloudConverge" width="176" height="47">
      <img class="logo-dark" src="assets/images/cc_logo_color.webp" alt="CloudConverge" width="176" height="47">
    </a>

    <nav class="main-nav" id="main-nav" aria-label="Primary">
      <ul class="nav-menu">
        <li class="menu-item has-mega" data-mega="about">
          <a href="#">About<svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        </li>
        <li class="menu-item has-mega" data-mega="services">
          <a href="#">Services<svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        </li>
        <li class="menu-item has-mega" data-mega="products">
          <a href="#">Products<svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        </li>
        <li class="menu-item"><a href="#portfolio">Portfolio</a></li>
        <li class="menu-item"><a href="#blog">Blog</a></li>
        <li class="menu-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div class="header-cta">
      <a class="btn btn-primary btn-header" href="#contact">Get A Quote</a>
    </div>

    <button class="mobile-toggle" id="mobile-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mega menu: About -->
  <div class="mega-panel" id="mega-about" aria-hidden="true">
    <div class="mega-inner mega-about-grid">
      <div class="mega-intro">
        <p>CloudConverge enables businesses across the globe by developing scalable, high-performance applications with the latest cloud-native frameworks. As a reliable offshore IT partner, we provide end-to-end solutions, from cloud migration to AI/ML - customized to drive growth for startups, SMBs, and enterprises alike.</p>
      </div>
      <a class="mega-card" href="/about.html">
        <span class="mega-card-img"><img src="assets/images/about-thum.avif" alt="About us" loading="lazy" width="300" height="180"></span>
        <span class="mega-card-title">About Us</span>
        <span class="mega-card-text">At Cloud Converge, we are committed to driving growth by empowering our customers with innovative solutions that modernize their digital ecosystem and accelerate their journey to the next phase of success.</span>
        <span class="mega-card-more">Discover More</span>
      </a>
      <a class="mega-card" href="/workculture.html">
        <span class="mega-card-img"><img src="assets/images/work-culture-thum1.avif" alt="Work culture" loading="lazy" width="300" height="180"></span>
        <span class="mega-card-title">Work Culture</span>
        <span class="mega-card-text">We nurture an inclusive, growth-focused workplace where learning, collaboration, and innovation flourish-empowering our people to excel while keeping work enjoyable.</span>
        <span class="mega-card-more">Discover More</span>
      </a>
      <a class="mega-card" href="#careers">
        <span class="mega-card-img"><img src="assets/images/careers-thum-1.avif" alt="Careers" loading="lazy" width="300" height="180"></span>
        <span class="mega-card-title">Careers</span>
        <span class="mega-card-text">Join CloudConverge to work on cutting-edge projects, grow your skills, and make an impact-while being part of a supportive, innovative, and fun-loving team.</span>
        <span class="mega-card-more">Discover More</span>
      </a>
    </div>
  </div>

  <!-- Mega menu: Services (tabbed) -->
  <div class="mega-panel" id="mega-services" aria-hidden="true">
    <div class="mega-inner mega-services-grid">
      <div class="mega-tabs" role="tablist" aria-label="Service categories">
        <button class="mega-tab is-active" role="tab" aria-selected="true" data-tab="tab-product-eng">Product Engineering &amp; Solution Development
          <svg class="tab-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>
        <button class="mega-tab" role="tab" aria-selected="false" data-tab="tab-ecommerce">Ecommerce Solutions
          <svg class="tab-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>
        <button class="mega-tab" role="tab" aria-selected="false" data-tab="tab-cloud">Cloud Engineering Services
          <svg class="tab-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>
        <button class="mega-tab" role="tab" aria-selected="false" data-tab="tab-marketing">Internet Marketing Services
          <svg class="tab-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>
        <button class="mega-tab" role="tab" aria-selected="false" data-tab="tab-ai">AI / ML &amp; Business Intelligence
          <svg class="tab-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>
      </div>

      <div class="mega-tab-panels">
        <div class="mega-tab-panel is-active" id="tab-product-eng" role="tabpanel">
          <div class="mega-cat"><div class="mega-cat-title">Product Engineering &amp; Solution Development</div><p class="mega-cat-sub">Building intelligent, user experience driven, and cloud-native solutions at scale.</p>
          <ul class="mega-links">
            <li><a href="./web-app-development-services.html">Web Application Development</a></li>
            <li><a href="./custom-web-development.html">Custom Web Development</a></li>
            <li><a href="mobile-app-development.html">Mobile App Development</a></li>
            <li><a href="iphone-app-development.html">iPhone / iOS App Development</a></li>
            <li><a href="umbraco-development-services.html">Umbraco Implementation Services</a></li>
            <li><a href="erpnext-service-provider.html">ERPNext Services</a></li>
            <li><a href="hire-erpnext-developer.html">Hire ERPNext Developer</a></li>
            <li><a href="hire-erpnext-consultant.html">Hire ERPNext Consultant</a></li>
          </ul></div>
          <div class="mega-cases">
            <a class="mega-card" href="#case-ozone">
              <span class="mega-card-img"><img src="assets/images/ozone-thum.png" alt="Ozone.in project" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Ozone.in – Comprehensive Project Planning &amp; Quotation Platform &amp; Website Development</span>
              <span class="mega-card-text">Ozone is a global distributor of architectural hardware and high-end security solutions.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
            <a class="mega-card" href="#case-hirebrain">
              <span class="mega-card-img"><img src="assets/images/hirebrain-pic.avif" alt="HireBrain platform" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Hiring Enablement Platform Specifically</span>
              <span class="mega-card-text">HireBrain is a unique hiring enablement platform designed specifically for managers, leaders</span>
              <span class="mega-card-more">Discover More</span>
            </a>
          </div>
        </div>

        <div class="mega-tab-panel" id="tab-ecommerce" role="tabpanel" hidden>
          <div class="mega-cat"><div class="mega-cat-title">Ecommerce Solutions</div><p class="mega-cat-sub">Building e-commerce platforms that convert, retain, and grow.</p>
          <ul class="mega-links">
            <li><a href="ecommerce-development-services.html">Ecommerce Web &amp; App Development</a></li>
            <li><a href="shopify-development-services.html">Shopify Development Services</a></li>
            <li><a href="shopify-integration-services.html">Shopify Integration Services</a></li>
            <li><a href="shopify-migration-services.html">Shopify Migration Services</a></li>
            <li><a href="shopify-support-and-maintenance-services.html">Shopify Support &amp; Maintenance Services</a></li>
          </ul></div>
          <div class="mega-cases">
            <a class="mega-card" href="#case-helm-boots">
              <span class="mega-card-img"><img src="assets/images/hb-pic.avif" alt="Helm Boots migration" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Migration of Helm Boots to Shopify Plus</span>
              <span class="mega-card-text">The client manufacturer makes shoes, and primarily handmade boots.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
            <a class="mega-card" href="#case-pharmacy">
              <span class="mega-card-img"><img src="assets/images/hombhob-pic5.avif" alt="Healthcare ecommerce website" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Ecommerce Website For Healthcare Products</span>
              <span class="mega-card-text">The client wanted to develop an online platform which will cater to all Client health needs.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
          </div>
        </div>

        <div class="mega-tab-panel" id="tab-cloud" role="tabpanel" hidden>
          <div class="mega-cat"><div class="mega-cat-title">Cloud Engineering Services</div><p class="mega-cat-sub">Delivering cloud-native architectures that scale with your ambition.</p>
          <ul class="mega-links">
            <li><a href="cloud-services.html">Cloud Engineering Services</a></li>
            <li><a href="#infrastructure-management-services">Infrastructure Management &amp; Monitoring</a></li>
            <li><a href="#aws-consulting-services">AWS Consulting Services</a></li>
            <li><a href="#microsoft-365-consulting-services">M365 Consulting &amp; Implementation</a></li>
            <li><a href="#azure-consulting-services">Microsoft Azure Consulting</a></li>
          </ul></div>
          <div class="mega-cases">
            <a class="mega-card" href="#case-encardio">
              <span class="mega-card-img"><img src="assets/images/thum-encardio1.avif" alt="Encardio Rite enterprise IT" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Enterprise IT Optimization &amp; Cybersecurity for Market Leader</span>
              <span class="mega-card-text">Encardio Rite, a leader in geotechnical solutions, has made headlines using advanced technology</span>
              <span class="mega-card-more">Discover More</span>
            </a>
            <a class="mega-card" href="#case-verve">
              <span class="mega-card-img"><img src="assets/images/verve-thum.avif" alt="Verve Portrait photoshoot platform" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Verve Portrait - Photoshoot Session</span>
              <span class="mega-card-text">The client wanted to create a simple online integration platform for Verve Portraits, a company that offers photo sessions for families, couples, and newborns.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
          </div>
        </div>

        <div class="mega-tab-panel" id="tab-marketing" role="tabpanel" hidden>
          <div class="mega-cat"><div class="mega-cat-title">Internet Marketing Services</div><p class="mega-cat-sub">Drive traffic, increase leads, and grow business with digital marketing.</p>
          <ul class="mega-links">
            <li><a href="#seo-services">Search Engine Optimization</a></li>
            <li><a href="#social-media-marketing">Social Media Marketing</a></li>
            <li><a href="#google-ads-services">Google Ads Services</a></li>
          </ul></div>
          <div class="mega-cases">
            <a class="mega-card" href="#case-encardio">
              <span class="mega-card-img"><img src="assets/images/thum-encardio1.avif" alt="Encardio Rite enterprise IT" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Enterprise IT Optimization &amp; Cybersecurity for Market Leader</span>
              <span class="mega-card-text">Encardio Rite, a leader in geotechnical solutions, has made headlines using advanced technology</span>
              <span class="mega-card-more">Discover More</span>
            </a>
            <a class="mega-card" href="#case-verve">
              <span class="mega-card-img"><img src="assets/images/verve-thum.avif" alt="Verve Portrait photoshoot platform" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Verve Portrait - Photoshoot Session</span>
              <span class="mega-card-text">The client wanted to create a simple online integration platform for Verve Portraits, a company that offers photo sessions for families, couples, and newborns.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
          </div>
        </div>

        <div class="mega-tab-panel" id="tab-ai" role="tabpanel" hidden>
          <div class="mega-cat"><div class="mega-cat-title">AI / ML &amp; Business Intelligence</div><p class="mega-cat-sub">Harnessing AI and BI to fuel innovation, efficiency, and strategic foresight.</p>
          <ul class="mega-links">
            <li><a href="#business-intelligence-services">Business Intelligence Implementation</a></li>
            <li><a href="#ai-and-ml-development-services">AI / ML Product Development</a></li>
            <li><a href="#chatgpt-integration-services">ChatGPT Integration</a></li>
            <li><a href="#chatbot-integration-services">ChatBot Integration</a></li>
            <li><a href="#ai-chatbot-development-services">AI Chatbot Development Company</a></li>
          </ul></div>
          <div class="mega-cases">
            <a class="mega-card" href="#case-hirebrain">
              <span class="mega-card-img"><img src="assets/images/hirebrain-pic.avif" alt="HireBrain platform" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Hiring Enablement Platform Specifically</span>
              <span class="mega-card-text">HireBrain is a unique hiring enablement platform designed specifically for managers, leaders</span>
              <span class="mega-card-more">Discover More</span>
            </a>
            <a class="mega-card" href="#case-fnb-chatbot">
              <span class="mega-card-img"><img src="assets/images/ai-chat-thum.avif" alt="AI powered multilingual chatbot" loading="lazy" width="300" height="180"></span>
              <span class="mega-card-title">Food &amp; Beverage – AI Powered Multilingual Chatbot</span>
              <span class="mega-card-text">The Food &amp; Beverage industry is rapidly evolving with AI-driven personalization, real-time engagement, and data security needs.</span>
              <span class="mega-card-more">Discover More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mega menu: Products -->
  <div class="mega-panel" id="mega-products" aria-hidden="true">
    <div class="mega-inner mega-products-grid">
      <div class="mega-intro">
        <p>CloudConverge has created powerful, user-friendly software products - Advanced CRM and Project Management Software and Marketplace apps - both software have been designed to streamline operations and boost productivity. These solutions are designed with scalability, cloud-native technology, and business growth in mind, helping organizations work smarter and achieve more.</p>
        </div>
      <a class="mega-card" href="#crm-project-management-software">
        <span class="mega-card-img"><img src="assets/images/crm-pms-thum.avif" alt="CRM and project management software" loading="lazy" width="300" height="180"></span>
        <span class="mega-card-title">CRM &amp; Project Management Software</span>
        <span class="mega-card-text">Our CRM &amp; Project Management platform streamlines client interactions, team collaboration, and everyday operations in one powerful system. Built for flexibility, it adapts to any business model-driving efficiency, productivity, and growth.</span>
        <span class="mega-card-more">Discover More</span>
      </a>
      <a class="mega-card" href="#marketplace-development-services">
        <span class="mega-card-img"><img src="assets/images/crm-thum-2.avif" alt="Marketplace app" loading="lazy" width="300" height="180"></span>
        <span class="mega-card-title">Marketplace App</span>
        <span class="mega-card-text">Our marketplace app is a smart, all-in-one food ordering and delivery platform that helps food businesses &amp; customers to order fast. From multi-vendor management to live order tracking, it streamlines menus, orders, and payments for a seamless user experience.</span>
        <span class="mega-card-more">Discover More</span>
      </a>
    </div>
  </div>
</header>

<!-- Mobile menu -->
<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <div class="mobile-menu-header">
    <img src="assets/images/cc_logo_color.webp" alt="CloudConverge" width="90" height="24">
    <button class="mobile-close" id="mobile-close" aria-label="Close menu">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>
    </button>
  </div>
  <nav aria-label="Mobile">
    <ul class="mobile-nav">
      <li class="m-item has-sub">
        <a href="#">About</a><button class="m-sub-toggle" aria-label="Toggle About submenu" aria-expanded="false"></button>
        <ul class="m-sub">
          <li><a href="/about.html">About Us</a></li>
          <li><a href="#workculture">Work Culture</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </li>
      <li class="m-item has-sub">
        <a href="#">Services</a><button class="m-sub-toggle" aria-label="Toggle Services submenu" aria-expanded="false"></button>
        <ul class="m-sub">
          <li class="m-group">
            <a href="#">Product Engineering &amp; Solution Development</a>
            <ul class="m-sub">
              <li><a href="web-app-development-services.html">Web &amp; Mobile App Development</a></li>
              <li><a href="#custom-web-development">Custom Web Development</a></li>
              <li><a href="#mobile-app-development">Mobile App Development</a></li>
              <li><a href="#iphone-app-development">iPhone App Development</a></li>
              <li><a href="umbraco-development-services.html">Umbraco Implementation Services</a></li>
              <li><a href="erpnext-service-provider.html">ERPNext Services</a></li>
              <li><a href="hire-erpnext-developer.html">Hire ERPNext Developer</a></li>
              <li><a href="hire-erpnext-consultant.html">Hire ERPNext Consultant</a></li>
            </ul>
          </li>
          <li class="m-group">
            <a href="#">Ecommerce Solutions</a>
            <ul class="m-sub">
              <li><a href="ecommerce-development-services.html">Ecommerce Web &amp; App Development</a></li>
              <li><a href="shopify-development-services.html">Shopify Development Services</a></li>
              <li><a href="shopify-integration-services.html">Shopify Integration Services</a></li>
              <li><a href="shopify-migration-services.html">Shopify Migration Services</a></li>
              <li><a href="shopify-support-and-maintenance-services.html">Shopify Support &amp; Maintenance Services</a></li>
            </ul>
          </li>
          <li class="m-group">
            <a href="#">Cloud Engineering Services</a>
            <ul class="m-sub">
              <li><a href="cloud-services.html">Cloud Engineering Services</a></li>
              <li><a href="#infrastructure-management-services">Infrastructure Management &amp; Monitoring</a></li>
              <li><a href="#aws-consulting-services">AWS Consulting Services</a></li>
              <li><a href="#google-cloud-consulting-services">Google Cloud Consulting Services</a></li>
              <li><a href="#microsoft-365-consulting-services">M365 Consulting &amp; Implementation Services</a></li>
              <li><a href="#azure-consulting-services">Azure Consulting Services</a></li>
            </ul>
          </li>
          <li class="m-group">
            <a href="#">Internet Marketing Services</a>
            <ul class="m-sub">
              <li><a href="#seo-services">Search Engine Optimization</a></li>
              <li><a href="#social-media-marketing">Social Media Marketing</a></li>
              <li><a href="#google-ads-services">Google Ads Services</a></li>
            </ul>
          </li>
          <li class="m-group">
            <a href="#">AI / ML &amp; Business Intelligence</a>
            <ul class="m-sub">
              <li><a href="#business-intelligence-services">Business Intelligence Implementation</a></li>
              <li><a href="#ai-and-ml-development-services">AI / ML Product Development</a></li>
              <li><a href="#chatgpt-integration-services">ChatGPT Integration</a></li>
              <li><a href="#ai-chatbot-development-services">AI Chatbot Development Company</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="m-item has-sub">
        <a href="#">Products</a><button class="m-sub-toggle" aria-label="Toggle Products submenu" aria-expanded="false"></button>
        <ul class="m-sub">
          <li><a href="#marketplace-development-services">MarketPlace App</a></li>
          <li><a href="#crm-project-management-software">CRM &amp; Project Management Software</a></li>
        </ul>
      </li>
      <li class="m-item"><a href="#portfolio">Portfolio</a></li>
      <li class="m-item"><a href="#blog">Blog</a></li>
      <li class="m-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</div>
<div class="mobile-overlay" id="mobile-overlay" hidden></div>
`;
