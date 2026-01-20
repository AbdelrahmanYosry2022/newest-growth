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
                    <form id="contact-form" action="assets/mailer.php" method="POST">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="name" name="name" type="text" placeholder="Full Name" data-i18n="services.contact.fields.name">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="email" name="email" type="email" placeholder="Email Address" data-i18n="services.contact.fields.email">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number" data-i18n="services.contact.fields.phone" style="text-align: right; direction: rtl;">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <select id="country" name="country" class="form-control no-nice-select" data-i18n="services.contact.fields.country">
                                        <option value="" disabled selected>البلد</option>
                                        <option value="EG">مصر</option>
                                        <option value="SA">المملكة العربية السعودية</option>
                                        <option value="AE">الإمارات العربية المتحدة</option>
                                        <option value="KW">الكويت</option>
                                        <option value="QA">قطر</option>
                                        <option value="BH">البحرين</option>
                                        <option value="OM">عمان</option>
                                        <option value="JO">الأردن</option>
                                        <option value="LB">لبنان</option>
                                        <option value="SY">سوريا</option>
                                        <option value="IQ">العراق</option>
                                        <option value="DZ">الجزائر</option>
                                        <option value="MA">المغرب</option>
                                        <option value="TN">تونس</option>
                                        <option value="LY">ليبيا</option>
                                        <option value="SD">السودان</option>
                                        <option value="YE">اليمن</option>
                                        <option value="PS">فلسطين</option>
                                        <option value="US">الولايات المتحدة</option>
                                        <option value="GB">المملكة المتحدة</option>
                                        <option value="TR">تركيا</option>
                                        <option value="DE">ألمانيا</option>
                                        <option value="FR">فرنسا</option>
                                        <option value="IT">إيطاليا</option>
                                        <option value="ES">إسبانيا</option>
                                        <option value="CA">كندا</option>
                                        <option value="AU">أستراليا</option>
                                        <option value="CN">الصين</option>
                                        <option value="JP">اليابان</option>
                                        <option value="RU">روسيا</option>
                                        <option value="BR">البرازيل</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="rs-contact-input">
                                    <textarea id="message" name="message" placeholder="Write Your Message" data-i18n="services.contact.fields.message"></textarea>
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

    document.addEventListener('DOMContentLoaded', () => {
        const placeholders = document.querySelectorAll('[data-include="contact-section"]');

        if (placeholders.length === 0) {
            return;
        }

        const renderFallback = () => {
            placeholders.forEach(placeholder => {
                renderContactSection(placeholder, FALLBACK_CONTACT_SECTION_HTML);
            });
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
                placeholders.forEach(placeholder => {
                    renderContactSection(placeholder, html);
                });
            })
            .catch(error => {
                console.warn('[contact-section-loader] Failed to load contact section:', error);
                renderFallback();
            });
    });

    function renderContactSection(target, html) {
        target.innerHTML = html;

        // Ensure native country dropdown (remove any Nice Select wrappers)
        const countrySelects = target.querySelectorAll('select#country, select.no-nice-select');
        countrySelects.forEach(select => {
            const niceWrapper = select.nextElementSibling;
            if (niceWrapper && niceWrapper.classList.contains('nice-select')) {
                niceWrapper.remove();
            }
            select.style.display = 'block';
        });

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
