/* Footer partial - the markup below is injected into
   index.html by js/include.js (works from file:// and over HTTP). */
window.__PARTIALS = window.__PARTIALS || {};
window.__PARTIALS.footer = `
<!-- ============================= FOOTER ============================= -->
<footer class="site-footer">

  <!-- Contact / form section -->
  <section class="footer-contact" id="contact">
    <div class="footer-contact-overlay"></div>
    <div class="container footer-contact-grid">
      <div class="fc-info">
        <h2 class="fc-heading">Contact Us</h2>
        <div class="fc-box">
          <span class="fc-icon" aria-hidden="true">
            <svg viewBox="0 0 384 512" width="32" height="32"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          </span>
          <div class="fc-box-content">
            <h3 class="fc-box-title">USA</h3>
            <p class="fc-box-text">565, Plandome RD, Unit 107, Manhasset New York – 11030</p>
          </div>
        </div>
        <div class="fc-box">
          <span class="fc-icon" aria-hidden="true">
            <svg viewBox="0 0 384 512" width="32" height="32"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          </span>
          <div class="fc-box-content">
            <h3 class="fc-box-title">INDIA</h3>
            <p class="fc-box-text"><strong>Delhi :</strong> E 44/2, Pocket B, Okhla Phase II, Okhla Industrial Estate, New Delhi – 110020<span class="f-addr-block"><strong>Noida :</strong> Smartworks Corporate Park, Tower A, First Floor Sector 125, Noida – 201313</span></p>
          </div>
        </div>
        <div class="fc-box">
          <span class="fc-icon" aria-hidden="true">
            <svg viewBox="0 0 512 512" width="30" height="30"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          </span>
          <div class="fc-box-content">
            <h3 class="fc-box-title">Call Us</h3>
            <p class="fc-box-text"><a href="tel:+917827902509">+91 7827902509</a></p>
          </div>
        </div>
        <div class="fc-box">
          <span class="fc-icon" aria-hidden="true">
            <svg viewBox="0 0 512 512" width="30" height="30"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
          </span>
          <div class="fc-box-content">
            <h3 class="fc-box-title">Email Us</h3>
            <p class="fc-box-text"><a href="mailto:info@cloudconverge.io">info@cloudconverge.io</a></p>
          </div>
        </div>
      </div>

      <div class="fc-form-card">
        <p class="fc-eyebrow">Free Consultation</p>
        <h2 class="fc-form-heading">Contact Us</h2>
        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-field">
            <label class="visually-hidden" for="cf-name">Name *</label>
            <input type="text" id="cf-name" name="name" placeholder="Name*" required>
            <span class="field-error" aria-live="polite"></span>
          </div>
          <div class="form-field">
            <label class="visually-hidden" for="cf-email">Email *</label>
            <input type="email" id="cf-email" name="email" placeholder="Email*" required>
            <span class="field-error" aria-live="polite"></span>
          </div>
          <div class="form-field">
            <label class="visually-hidden" for="cf-phone">Numbers *</label>
            <input type="number" id="cf-phone" name="phone" placeholder="Phone*" required>
            <span class="field-error" aria-live="polite"></span>
          </div>
          <div class="form-field">
            <label class="visually-hidden" for="cf-message">Message *</label>
            <textarea id="cf-message" name="message" placeholder="Message*" rows="4" required></textarea>
            <span class="field-error" aria-live="polite"></span>
          </div>
          <div class="form-submit">
            <button type="submit" class="btn btn-primary btn-submit">Submit Now</button>
          </div>
          <p class="form-success" id="form-success" hidden>Thank you for contacting us! We will get in touch with you shortly.</p>
        </form>
      </div>
    </div>
  </section>

  <!-- Main footer -->
  <section class="footer-main">
    <div class="container footer-columns">
      <div class="f-col f-col-brand">
        <a class="f-logo" href="#" aria-label="CloudConverge — home">
          <img src="assets/images/CloudConvergeLogoCCSmallWhiteV2.webp" alt="CloudConverge" width="173" height="46" loading="lazy">
        </a>
        <p class="f-about">Helping Businesses to attract, differentiate, optimize and grown in their crowded niche through scalable, innovative and stable digital solutions for web &amp; mobile, cloud migration, application modernization.</p>
        <h3 class="f-heading f-heading-iso">ISO Certificate &amp; Our Partners</h3>
        <div class="f-partners">
          <img src="assets/images/pic-logo-1.png" alt="ISO Certificate" width="92" height="30" loading="lazy">
          <img src="assets/images/pic-logo-2.png" alt="ISO Certificate" width="60" height="30" loading="lazy">
          <a href="#designrush"><img src="assets/images/pic-logo-7.png" alt="Our Partners" width="64" height="31" loading="lazy"></a>
          <img src="assets/images/erpnext-partners-logo.avif" alt="ERPNext partners" width="106" height="40" loading="lazy">
          <img src="assets/images/pic-logo-6.png" alt="Our Partners" width="50" height="30" loading="lazy">
          <img src="assets/images/pic-logo-5.png" alt="Our Partners" width="104" height="30" loading="lazy">
          <img src="assets/images/pic-logo-8.png" alt="Our Partners" width="123" height="60" loading="lazy">
          <img src="assets/images/pic-logo-9.png" alt="Our Partners" width="112" height="60" loading="lazy">
          <img src="assets/images/pic-logo-3.png" alt="Our Partners" width="129" height="30" loading="lazy">
        </div>
      </div>

      <div class="f-col">
        <h3 class="f-heading">Services</h3>
        <div class="f-group">
          <p class="f-group-title">Product Engineering &amp; Solution Development</p>
          <ul class="f-links">
            <li><a href="web-app-development-services.html">Web Application Development</a></li>
            <li><a href="custom-web-development.html">Custom Web Development</a></li>
            <li><a href="mobile-app-development.html">Mobile App Development</a></li>
            <li><a href="iphone-app-development.html">iPhone / iOS App Development</a></li>
            <li><a href="umbraco-development-services.html">Umbraco Implementation Services</a></li>
            <li><a href="erpnext-service-provider.html">ERPNext Services</a></li>
            <li><a href="hire-erpnext-developer.html">Hire ERPNext Developer</a></li>
            <li><a href="hire-erpnext-consultant.html">Hire ERPNext Consultant</a></li>
          </ul>
        </div>
        <div class="f-group">
          <p class="f-group-title">Ecommerce Solutions</p>
          <ul class="f-links">
            <li><a href="ecommerce-development-services.html">Ecommerce Web &amp; App Development</a></li>
            <li><a href="shopify-development-services.html">Shopify Development Services</a></li>
            <li><a href="shopify-integration-services.html">Shopify Integration Services</a></li>
            <li><a href="shopify-migration-services.html">Shopify Migration Services</a></li>
            <li><a href="shopify-support-and-maintenance-services.html">Shopify Support &amp; Maintenance Services</a></li>
          </ul>
        </div>
        <div class="f-group">
          <p class="f-group-title">Cloud Engineering Services</p>
          <ul class="f-links">
            <li><a href="cloud-services.html">Cloud Engineering Services</a></li>
            <li><a href="infrastructure-management-services.html">Infrastructure Management &amp; Monitoring</a></li>
            <li><a href="#devops-consulting-services">DevOps Consulting &amp; Implementation</a></li>
            <li><a href="aws-consulting-services.html">AWS Consulting Services</a></li>
            <li><a href="google-cloud-consulting-services.html">Google Cloud Consulting Services</a></li>
            <li><a href="microsoft-365-consulting-services.html">M365 Consulting &amp; Implementation Services</a></li>
            <li><a href="azure-consulting-services.html">Microsoft Azure Consulting</a></li>
          </ul>
        </div>
      </div>

      <div class="f-col">
        <div class="f-group">
          <p class="f-group-title">Internet Marketing Services</p>
          <ul class="f-links">
            <li><a href="#seo-services">Search Engine Optimization</a></li>
            <li><a href="#social-media-marketing">Social Media Marketing</a></li>
            <li><a href="#google-ads-services">Google Ads Services</a></li>
          </ul>
        </div>
        <div class="f-group">
          <p class="f-group-title">AI / ML &amp; Business Intelligence</p>
          <ul class="f-links">
            <li><a href="#business-intelligence-services">Business Intelligence Implementation</a></li>
            <li><a href="#ai-and-ml-development-services">AI / ML Product Development</a></li>
            <li><a href="#chatgpt-integration-services">ChatGPT Integration</a></li>
            <li><a href="#chatbot-integration-services">ChatBot Integration</a></li>
            <li><a href="#ai-chatbot-development-services">AI Chatbot Development Company</a></li>
          </ul>
        </div>
        <h3 class="f-heading">Products</h3>
        <ul class="f-links">
          <li><a href="#marketplace-development-services">MarketPlace App</a></li>
          <li><a href="#crm-project-management-software">CRM &amp; Project Management Software</a></li>
        </ul>
        <h3 class="f-heading">Company</h3>
        <ul class="f-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="workculture.html">Work Culture</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="f-col">
        <h3 class="f-heading">Get In Touch</h3>
        <p class="f-address f-address-usa"><strong class="f-country">USA</strong><br>565, Plandome RD, Unit 107, Manhasset New York – 11030</p>
        <p class="f-address"><strong class="f-country">INDIA</strong><br><strong>Delhi :</strong> E 44/2, Pocket B, Okhla Phase II, Okhla Industrial Estate, New Delhi – 110020<span class="f-addr-block"><strong>Noida :</strong> Smartworks Corporate Park, Tower A, First Floor Sector 125, Noida – 201313</span></p>
        <p class="f-contact-links"><strong>Phone :</strong> <a href="tel:+917827902509">+91 7827902509</a><br><strong>Email :</strong> <a href="mailto:info@cloudconverge.io">info@cloudconverge.io</a></p>
        <h3 class="f-heading f-heading-follow">Follow Us</h3>
        <div class="f-social">
          <a class="f-social-link" href="#facebook" aria-label="Facebook">
            <svg viewBox="0 0 320 512" width="20" height="20"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          </a>
          <a class="f-social-link" href="#twitter" aria-label="Twitter">
            <svg viewBox="0 0 512 512" width="20" height="20"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          </a>
          <a class="f-social-link" href="#linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 448 512" width="20" height="20"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          </a>
          <a class="f-social-link" href="#instagram" aria-label="Instagram">
            <svg viewBox="0 0 448 512" width="20" height="20"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Bottom bar -->
  <section class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p class="copyright">© 2026 CLOUD CONVERGE TECHNOLOGIES PRIVATE LIMITED, All Rights Reserved.</p>
      <ul class="legal-links">
        <li><a href="#privacy-policy">Privacy Policy</a></li>
        <li><a href="#terms-and-conditions">Terms and Conditions</a></li>
        <li><a href="#refund-and-cancellation-policy">Refund and Cancellation Policy</a></li>
        <li><a href="#sitemap">Sitemap</a></li>
      </ul>
    </div>
  </section>
</footer>
`;
