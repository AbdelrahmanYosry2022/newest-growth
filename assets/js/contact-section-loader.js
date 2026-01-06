// Dynamically load the shared contact section partial into pages
(function () {
    'use strict';

    const CONTACT_SECTION_URL = 'includes/contact-section.html';

    const FALLBACK_CONTACT_SECTION_HTML = `
<section class="rs-work-process-area section-space rs-work-step-two has-theme-orange">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-xl-7 col-lg-7">
                <div class="rs-work-process-content-wrapper">
                    <div class="rs-section-title-wrapper section-title-space">
                        <h2 class="rs-section-title rs-split-text-enable split-in-fade" data-i18n="work.title">How we <span class="rs-theme-orange">complete</span> work</h2>
                    </div>
                    <div class="rs-work-step-wrapper">
                        <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div class="rs-work-step-number">
                                01
                                <div class="rs-work-step-thumb">
                                    <img src="assets/images/shape/work-process-shape-gray.svg" alt="">
                                </div>
                                <div class="rs-work-step-thumb has-orange">
                                    <img src="assets/images/shape/work-process-shape-orange.svg" alt="">
                                </div>
                            </div>
                            <h5 class="rs-work-step-title" data-i18n="work.step1Title">Planning and Analysis</h5>
                            <div class="rs-work-step-descrip">
                                <p data-i18n="work.step1Desc">We start by understanding your unique needs and conducting a thorough analysis of your facility requirements.</p>
                            </div>
                        </div>
                        <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                            <div class="rs-work-step-number">
                                02
                                <div class="rs-work-step-thumb">
                                    <img src="assets/images/shape/work-process-shape-gray.svg" alt="">
                                </div>
                                <div class="rs-work-step-thumb has-orange">
                                    <img src="assets/images/shape/work-process-shape-orange.svg" alt="">
                                </div>
                            </div>
                            <h5 class="rs-work-step-title" data-i18n="work.step2Title">Design and Engineering</h5>
                            <div class="rs-work-step-descrip">
                                <p data-i18n="work.step2Desc">Our expert team designs customized solutions that meet international standards and your specific production goals.</p>
                            </div>
                        </div>
                        <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div class="rs-work-step-number">
                                03
                                <div class="rs-work-step-thumb">
                                    <img src="assets/images/shape/work-process-shape-gray.svg" alt="">
                                </div>
                                <div class="rs-work-step-thumb has-orange">
                                    <img src="assets/images/shape/work-process-shape-orange.svg" alt="">
                                </div>
                            </div>
                            <h5 class="rs-work-step-title" data-i18n="work.step3Title">Implementation and Setup</h5>
                            <div class="rs-work-step-descrip">
                                <p data-i18n="work.step3Desc">We handle the complete installation, configuration, and testing of all equipment and systems.</p>
                            </div>
                        </div>
                        <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                            <div class="rs-work-step-number">
                                04
                                <div class="rs-work-step-thumb">
                                    <img src="assets/images/shape/work-process-shape-gray.svg" alt="">
                                </div>
                                <div class="rs-work-step-thumb has-orange">
                                    <img src="assets/images/shape/work-process-shape-orange.svg" alt="">
                                </div>
                            </div>
                            <h5 class="rs-work-step-title" data-i18n="work.step4Title">Launch and Support</h5>
                            <div class="rs-work-step-descrip">
                                <p data-i18n="work.step4Desc">We ensure a smooth launch with comprehensive training and ongoing support for your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5">
                <div class="rs-contact-form rs-contact-one has-white">
                    <h3 class="rs-contact-form-title mb-10" data-i18n="contact.title">Have a question?</h3>
                    <p class="descrip" data-i18n="contact.description">Our specialists are ready to support every stage of your manufacturing project.</p>
                    <form id="contact-form" action="https://formsubmit.co/growthroots2020.eg@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New message from Growth Roots website">
                        <input type="hidden" name="_template" value="table">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_next" value="">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="name" name="name" type="text" data-i18n="services.contact.fields.name">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="email" name="email" type="email" data-i18n="services.contact.fields.email">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="info" name="info" type="text" data-i18n="services.contact.fields.topic">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <textarea id="message" name="message" data-i18n="services.contact.fields.message"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-btn">
                                    <button type="submit" class="rs-btn has-theme-orange" data-i18n="contact.button">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="form-messages"></div>
                </div>
            </div>
        </div>
    </div>
</section>`;

    document.addEventListener('DOMContentLoaded', function loadContactSection() {
        const placeholder = document.querySelector('[data-include="contact-section"]');
        if (!placeholder) {
            return;
        }

        function setNextRedirectUrl() {
            const form = placeholder.querySelector('#contact-form');
            if (!form) return;
            const nextInput = form.querySelector('input[name="_next"]');
            if (!nextInput) return;

            const url = new URL(window.location.href);
            url.searchParams.set('sent', '1');
            nextInput.value = url.toString();
        }

        const renderFallback = () => {
            placeholder.innerHTML = FALLBACK_CONTACT_SECTION_HTML;
            setNextRedirectUrl();
        };

        // If running from the file system, fetch will fail because of CORS. Use fallback immediately.
        if (window.location.protocol === 'file:') {
            renderFallback();
            return;
        }

        const partialUrl = new URL(CONTACT_SECTION_URL, window.location.href).toString();

        fetch(partialUrl, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load contact section: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
                setNextRedirectUrl();
            })
            .catch(error => {
                console.warn('[contact-section-loader] Error loading section, using fallback:', error);
                placeholder.innerHTML = FALLBACK_CONTACT_SECTION_HTML;

                setNextRedirectUrl();
            });
    });

    function renderContactSection(target, html) {
        target.innerHTML = html;

        // Re-initialize language toggle if needed
        if (typeof window.initLanguageToggle === 'function') {
            window.initLanguageToggle();
        }

        // Re-apply i18n translations
        if (typeof window.applyTranslations === 'function') {
            window.applyTranslations();
        }

        // Re-initialize WOW animations if available
        if (window.WOW && typeof window.WOW === 'function') {
            try {
                new window.WOW().init();
            } catch (e) {
                console.warn('[contact-section-loader] WOW animation initialization failed:', e);
            }
        }

        // Re-initialize form handlers if available
        if (typeof window.initContactForm === 'function') {
            window.initContactForm();
        }
    }
})();
