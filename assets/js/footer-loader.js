// Dynamically load the shared footer partial into pages
(function () {
    'use strict';

    const FOOTER_PARTIAL_URL = 'includes/footer.html';
    const FALLBACK_FOOTER_HTML = `
<div class="rs-footer-bg-thumb-wrapper has-theme-orange">
    <div class="rs-footer-bg-thumb" data-background="assets/images/bg/footer-bg-02.png"></div>

    <!-- footer area start -->
    <footer>
        <div class="rs-footer-area rs-footer-two has-space has-theme-orange has-bg-thumb">
            <div class="rs-footer-top">
                <div class="container">
                    <div class="row g-5">
                        <div class="rs-footer-widget-stroke-text">
                            <img src="assets/images/logo/growth-roots-logo.svg" alt="Growth Roots Logo">
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="rs-footer-widget footer-2-col-1">
                                <h5 class="rs-footer-widget-title" data-i18n="footer.aboutTitle">About Growth Roots</h5>
                                <div class="rs-footer-widget-content">
                                    <p class="rs-footer-widget-description" data-i18n="footer.aboutDescription">
                                        Egypt's leading provider of comprehensive food manufacturing solutions, specializing in meat and poultry production facilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="rs-footer-widget footer-2-col-2">
                                <h5 class="rs-footer-widget-title" data-i18n="footer.linksTitle">Useful Links</h5>
                                <div class="rs-footer-widget-content">
                                    <div class="rs-footer-widget-links">
                                        <ul>
                                            <li><a href="about.html" data-i18n="footer.linkAbout">About Us</a></li>
                                            <li><a href="services.html" data-i18n="footer.linkServices">Our Services</a></li>
                                            <li><a href="faq.html" data-i18n="footer.linkFaq">FAQ</a></li>
                                            <li><a href="contact.html" data-i18n="footer.linkContact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="rs-footer-widget footer-2-col-3">
                                <h5 class="rs-footer-widget-title" data-i18n="footer.addressTitle">Office Address</h5>
                                <div class="rs-footer-widget-content">
                                    <div class="rs-footer-widget-meta">
                                        <div class="rs-footer-widget-address">
                                            <a target="_blank" href="https://www.google.com/maps" data-i18n="footer.address">Cairo, Egypt<br>Industrial Zone</a>
                                        </div>
                                        <h5 class="rs-footer-widget-title" data-i18n="footer.emailTitle">Email Address</h5>
                                        <p data-i18n="footer.emailPrompt">Ready to start your project?</p>
                                        <div class="rs-footer-widget-email">
                                            <a href="mailto:info@growthroots.com" data-i18n="footer.email">info@growthroots.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="rs-footer-widget footer-2-col-4">
                                <h5 class="rs-footer-widget-title" data-i18n="footer.phoneTitle">Phone Number</h5>
                                <div class="rs-footer-widget-content">
                                    <div class="rs-footer-widget-contact-info">
                                        <div class="rs-footer-widget-number">
                                            <span>
                                                <a href="tel:+20xxxxxxxxxx" data-i18n="footer.phonePrimary">+20 xxx xxx xxxx</a>
                                            </span>
                                            <span>
                                                <a href="tel:+20xxxxxxxxxx" data-i18n="footer.phoneSecondary">+20 xxx xxx xxxx</a>
                                            </span>
                                        </div>
                                    </div>
                                    <h5 class="rs-footer-widget-title" data-i18n="footer.followTitle">Follow Us</h5>
                                    <div class="rs-footer-widget-social">
                                        <div class="rs-theme-social">
                                            <a href="#"><i class="ri-twitter-x-line"></i></a>
                                            <a href="#"><i class="ri-facebook-fill"></i></a>
                                            <a href="#"><i class="ri-linkedin-fill"></i></a>
                                            <a href="#"><i class="ri-instagram-line"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rs-footer-copyright-area rs-copyright-one">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                            <div class="rs-footer-copyright has-theme-orange text-center">
                                <p class="underline" data-i18n="footer.copyright">© <span id="year">2025</span> Growth Roots. All Rights Reserved. | Your Complete Food Manufacturing Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer area end -->
</div>`;

    document.addEventListener('DOMContentLoaded', () => {
        const placeholder = document.querySelector('[data-include="footer"]');
        if (!placeholder) {
            return;
        }

        renderFooter(placeholder, FALLBACK_FOOTER_HTML);

        let partialUrl;
        try {
            partialUrl = new URL(FOOTER_PARTIAL_URL, window.location.href).toString();
        } catch (error) {
            console.warn('[footer-loader] Falling back to inline footer due to URL resolution error:', error);
            return;
        }

        fetch(partialUrl, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load footer: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                renderFooter(placeholder, html);
            })
            .catch(error => {
                console.warn('[footer-loader] Failed to load footer partial, using fallback footer:', error);
            });
    });

    function renderFooter(target, html) {
        target.innerHTML = html;

        if (typeof window.attachLanguageToggle === 'function') {
            window.attachLanguageToggle();
        }

        if (typeof window.initLanguageToggle === 'function') {
            window.initLanguageToggle();
        }
    }
})();
