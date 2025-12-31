// Dynamically load the shared About/Intro section partial into pages
(function () {
    'use strict';

    const ABOUT_INTRO_URL = 'includes/about-intro.html';

    // Full fallback HTML (mirrors includes/about-intro.html)
    const FALLBACK_ABOUT_INTRO_HTML = `
<section class="rs-about-area section-space rs-about-ten">
    <div class="container">
        <div class="row g-5">
            <div class="col-12">
                <div class="rs-about-wrapper">
                    <div class="rs-about-thumb-wrapper">
                        <div class="rs-about-shape-one prallax-parent">
                            <img data-depth="1.3" src="assets/images/shape/dott-shape.png" alt="image">
                        </div>
                        <div class="rs-about-thumb">
                            <img src="assets/images/about/about-thumb-13.png" alt="image">
                        </div>
                        <div class="rs-about-counter-wrapper">
                            <div class="rs-counter-item">
                                <div class="rs-counter-content-wrapper">
                                    <div class="rs-counter-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                                            <circle opacity="0.1" cx="27.5" cy="27.5" r="27.5" fill="#1F1F1F"></circle>
                                            <path d="M43.543 41.25C43.543 41.25 45.8346 41.25 45.8346 38.9583C45.8346 36.6667 43.543 29.7917 34.3763 29.7917C25.2096 29.7917 22.918 36.6667 22.918 38.9583C22.918 41.25 25.2096 41.25 25.2096 41.25H43.543ZM25.2608 38.9583C25.2529 38.9574 25.2418 38.956 25.2283 38.9537C25.222 38.9527 25.2157 38.9515 25.2097 38.9504C25.213 38.3453 25.592 36.5908 26.9496 35.007C28.2194 33.5256 30.4408 32.0833 34.3763 32.0833C38.3118 32.0833 40.5332 33.5256 41.803 35.007C43.1606 36.5908 43.5396 38.3453 43.5429 38.9504C43.5369 38.9515 43.5306 38.9527 43.5243 38.9537C43.5108 38.956 43.4997 38.9574 43.4918 38.9583H25.2608Z" fill="white"></path>
                                            <path d="M34.3763 25.2083C36.9076 25.2083 38.9596 23.1563 38.9596 20.625C38.9596 18.0937 36.9076 16.0417 34.3763 16.0417C31.845 16.0417 29.793 18.0937 29.793 20.625C29.793 23.1563 31.845 25.2083 34.3763 25.2083ZM41.2513 20.625C41.2513 24.422 38.1733 27.5 34.3763 27.5C30.5793 27.5 27.5013 24.422 27.5013 20.625C27.5013 16.828 30.5793 13.75 34.3763 13.75C38.1733 13.75 41.2513 16.828 41.2513 20.625Z" fill="white"></path>
                                            <path d="M30.3542 28.4199V38.0973L25.9994 34.4683L21.6445 38.0973V28.4199C22.9349 29.307 24.3865 29.7909 25.9994 29.7909C27.6123 29.7909 29.1445 29.307 30.3542 28.4199Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M26.0014 16.8086L27.5336 19.8731L30.9207 20.357L28.5014 22.7763L29.0659 26.2441L26.0014 24.6312L22.9369 26.2441L23.5014 22.7763L21.082 20.357L24.4691 19.8731L26.0014 16.8086Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12.6055 21.7708C12.6055 17.9739 15.6835 14.8958 19.4805 14.8958C23.2774 14.8958 26.3555 17.9739 26.3555 21.7708C26.3555 25.5678 23.2774 28.6458 19.4805 28.6458C15.6835 28.6458 12.6055 25.5678 12.6055 21.7708ZM19.4805 17.1875C16.9492 17.1875 14.8971 19.2395 14.8971 21.7708C14.8971 24.3021 16.9492 26.3542 19.4805 26.3542C22.0118 26.3542 24.0638 24.3021 24.0638 21.7708C24.0638 19.2395 22.0118 17.1875 19.4805 17.1875Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <div class="rs-counter-number-item">
                                        <span class="rs-counter-number odometer" data-count="460">00</span>
                                        <span class="prefix">+</span>
                                    </div>
                                </div>
                                <span class="rs-counter-title" data-i18n="counter.highlySpecialised"><span class="large-text">موظفون</span> متخصصون <br> بدرجة عالية</span>
                            </div>
                        </div>
                    </div>
                    <div class="rs-about-content-wrapper">
                        <div class="rs-section-title-wrapper">
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade" data-i18n="about.title">شريكك الموثوق لأكثر من <span class="rs-theme-orange">20 عامًا</span> في صناعة الغذاء</h2>
                            <p class="descrip" data-i18n="about.description">جروث رووتس هي المزود الرائد في مصر للحلول الشاملة للتصنيع الغذائي والمتخصص في منشآت إنتاج اللحوم والدواجن.</p>
                        </div>
                        <div class="rs-about-tab">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <button class="nav-link active" id="pills-history-tab" data-bs-toggle="pill" data-bs-target="#pills-history" type="button" role="tab" aria-controls="pills-history" aria-selected="true" data-i18n="about.ourHistory">
                                        تاريخنا
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-mission-tab" data-bs-toggle="pill" data-bs-target="#pills-mission" type="button" role="tab" aria-controls="pills-mission" aria-selected="false" data-i18n="about.ourMission">
                                        رسالتنا
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-vision-tab" data-bs-toggle="pill" data-bs-target="#pills-vision" type="button" role="tab" aria-controls="pills-vision" aria-selected="false" data-i18n="about.ourVision">
                                        رؤيتنا
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="rs-aobut-tab-content-wrapper">
                            <div class="tab-content rs-about-tab-anim" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab" tabindex="0">
                                    <div class="rs-about-tab-content">
                                        <p data-i18n="about.historyText">تأسست برؤية لإحداث ثورة في قطاع التصنيع الغذائي المصري، نمت جروث رووتس من استشارات متخصصة إلى شريك صناعي شامل. رحلتنا تمتد لأكثر من عقدين من تحويل الأفكار إلى منشآت إنتاج غذائي ناجحة ومربحة.</p>
                                        <div class="rs-about-feature-list">
                                            <div class="rs-list-item has-theme-orange">
                                                <ul>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature1">خبرة صناعية تتجاوز 20 عامًا</span>
                                                    </li>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature2">حلول شاملة من الألف إلى الياء</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab" tabindex="0">
                                    <div class="rs-about-tab-content">
                                        <p data-i18n="about.missionText2">لتمكين مصنعي الأغذية من حلول عالمية المستوى تحول الأفكار إلى أعمال مربحة ومستدامة. نحن ملتزمون بأن نكون أكثر من مجرد مزود خدمة — نحن شريك النجاح الذي يضمن الجودة والكفاءة والنمو في كل مرحلة.</p>
                                        <div class="rs-about-feature-list">
                                            <div class="rs-list-item has-theme-orange">
                                                <ul>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature3">شراكات مبنية على الثقة</span>
                                                    </li>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature4">تركيز على الجودة والابتكار</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab" tabindex="0">
                                    <div class="rs-about-tab-content">
                                        <p data-i18n="about.visionText">أن نكون الاسم الأكثر ثقة في حلول التصنيع الغذائي في مصر والمنطقة، واضعين معيارًا للتميز والابتكار والشراكات طويلة الأمد. نرى مستقبلاً يحصل فيه كل مصنع أغذية على الدعم العالمي للوصول إلى أقصى إمكاناته.</p>
                                        <div class="rs-about-feature-list">
                                            <div class="rs-list-item has-theme-orange">
                                                <ul>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature5">قيادة إقليمية في الصناعة</span>
                                                    </li>
                                                    <li>
                                                        <i class="fa-regular fa-check"></i>
                                                        <span data-i18n="about.feature6">ابتكار وتميز مستمر</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

    function injectStyleIntoSection(html, style) {
        if (!style) return html;
        // inject style attribute into the first <section ...>
        return html.replace(/<section(\s+)/i, `<section style="${style}" $1`);
    }

    const renderInto = (placeholder, html) => {
        const phStyle = placeholder.getAttribute('style');
        const finalHtml = injectStyleIntoSection(html, phStyle);
        placeholder.outerHTML = finalHtml;
        if (typeof window.initLanguageToggle === 'function') {
            window.initLanguageToggle();
        }
        if (typeof window.applyTranslations === 'function') {
            window.applyTranslations();
        }
        if (window.WOW && typeof window.WOW === 'function') {
            try { new window.WOW().init(); } catch (e) {}
        }
        if (typeof jQuery !== 'undefined' && jQuery.fn.appear) {
            jQuery('.odometer').each(function() {
                const $this = jQuery(this);
                $this.appear(function() {
                    const count = $this.data('count');
                    $this.html(count);
                });
            });
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const placeholders = document.querySelectorAll('[data-include="about-intro"]');
        if (placeholders.length === 0) return;

        // Fallback to embedded HTML if fetch not allowed
        if (window.location.protocol === 'file:') {
            const html = FALLBACK_ABOUT_INTRO_HTML;
            placeholders.forEach(ph => renderInto(ph, html));
            return;
        }

        const url = new URL(ABOUT_INTRO_URL, window.location.href).toString();
        fetch(url, { cache: 'no-cache' })
            .then(res => { if (!res.ok) throw new Error('Failed to load about intro'); return res.text(); })
            .then(html => { placeholders.forEach(ph => renderInto(ph, html)); })
            .catch(() => {
                const html = FALLBACK_ABOUT_INTRO_HTML;
                placeholders.forEach(ph => renderInto(ph, html));
            });
    });
})();
