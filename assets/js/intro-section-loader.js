/**
 * Growth Roots Intro Section Loader
 * Dynamically loads intro/about section with page-specific content
 */

(function() {
    'use strict';

    // Page-specific content configuration
    const pageContent = {
        'index.html': {
            counter: {
                count: '460',
                icon: 'employees', // uses the employee SVG icon
                title: 'counter.highlySpecialised',
                titleFallback: '<span class="large-text">Highly</span> Specialised <br> Employees'
            },
            subtitle: 'about.subtitle',
            subtitleFallback: 'About Growth Roots',
            title: 'about.title',
            titleFallback: 'Your trusted partner for <span class="rs-theme-orange">over 20 years</span> in food manufacturing',
            description: 'about.description',
            descriptionFallback: 'Growth Roots is Egypt\'s leading provider of comprehensive food manufacturing solutions, specializing in meat and poultry production facilities.',
            tabs: [
                {
                    id: 'history',
                    label: 'about.ourHistory',
                    labelFallback: 'Our History',
                    content: 'about.historyText',
                    contentFallback: 'Founded with a vision to revolutionize Egypt\'s food manufacturing sector, Growth Roots has grown from a specialized consultancy to a comprehensive industrial partner. Our journey spans over two decades of transforming ideas into successful, profitable food production facilities.',
                    features: [
                        { key: 'about.feature1', fallback: '20+ Years Industry Experience' },
                        { key: 'about.feature2', fallback: 'Complete A-to-Z Solutions' }
                    ]
                },
                {
                    id: 'mission',
                    label: 'about.ourMission',
                    labelFallback: 'Our Mission',
                    content: 'about.missionText2',
                    contentFallback: 'To empower food manufacturers with world-class solutions that transform ideas into profitable, sustainable businesses. We\'re committed to being more than a service provider—we\'re your partner in success, ensuring quality, efficiency, and growth at every stage.',
                    features: [
                        { key: 'about.feature3', fallback: 'Partnership-Driven Approach' },
                        { key: 'about.feature4', fallback: 'Quality & Innovation Focus' }
                    ]
                },
                {
                    id: 'vision',
                    label: 'about.ourVision',
                    labelFallback: 'Our Vision',
                    content: 'about.visionText',
                    contentFallback: 'To be the most trusted name in food manufacturing solutions across Egypt and the region, setting the benchmark for excellence, innovation, and partnership. We envision a future where every food producer has access to world-class support to achieve their full potential.',
                    features: [
                        { key: 'about.feature5', fallback: 'Regional Industry Leadership' },
                        { key: 'about.feature6', fallback: 'Innovation & Excellence' }
                    ]
                }
            ]
        },
        'ricatto-products.html': {
            sectionStyle: 'margin-top: 80px;',
            counter: {
                count: '150',
                icon: 'formulations',
                title: 'ricatto.counter.title',
                titleFallback: '<span class="large-text">تركيبات</span> مخصصة <br> تم توريدها'
            },
            subtitle: 'ricatto.subtitle',
            subtitleFallback: 'عن ريكاتو',
            title: 'ricatto.title',
            titleFallback: 'مكسبات طعم وإضافات غذائية <span class="rs-theme-orange">عالية الجودة</span> لنجاح مصنعك',
            description: 'ricatto.description',
            descriptionFallback: '<strong>Ricatto</strong> هي علامتنا التجارية المتخصصة في إنتاج وتوريد مكسبات الطعم والإضافات الغذائية عالية الجودة. تم تطوير هذه العلامة لتلبية احتياجات مصانع الأغذية من المواد الخام المتخصصة التي تضمن جودة وطعم مميز للمنتجات النهائية.',
            tabs: null // No tabs for Ricatto page
        },
        'kaya-products.html': {
            sectionStyle: 'margin-top: 80px;',
            counter: {
                count: '120',
                icon: 'equipment',
                title: 'kaya.counter.title',
                titleFallback: '<span class="large-text">تركيبات</span> معدات <br> تم تسليمها'
            },
            subtitle: 'kaya.subtitle',
            subtitleFallback: 'عن برازرز ستيل',
            title: 'kaya.title',
            titleFallback: 'خطوط إنتاج مصنعة محلياً ل<span class="rs-theme-orange">تصنيع عالمي المستوى</span>',
            description: 'kaya.description',
            descriptionFallback: 'شركة <strong>Brothers Steel للصناعات الهندسية</strong> هي شريكنا الاستراتيجي في تصميم وتصنيع معدات مصانع الأغذية. من خلال هذه الشراكة، نوفر لعملائنا مجموعة واسعة من خطوط الإنتاج والمعدات الصناعية المصممة حسب احتياجاتهم الخاصة.',
            tabs: null // No tabs for Brothers Steel page
        },
        'brothers-products.html': {
            sectionStyle: 'margin-top: 80px;',
            counter: {
                count: '120',
                icon: 'equipment',
                title: 'kaya.counter.title',
                titleFallback: '<span class="large-text">تركيبات</span> معدات <br> تم تسليمها'
            },
            subtitle: 'kaya.subtitle',
            subtitleFallback: 'عن برازرز ستيل',
            title: 'kaya.title',
            titleFallback: 'خطوط إنتاج مصنعة محلياً ل<span class="rs-theme-orange">تصنيع عالمي المستوى</span>',
            description: 'kaya.description',
            descriptionFallback: 'شركة <strong>Brothers Steel للصناعات الهندسية</strong> هي شريكنا الاستراتيجي في تصميم وتصنيع معدات مصانع الأغذية. من خلال هذه الشراكة، نوفر لعملائنا مجموعة واسعة من خطوط الإنتاج والمعدات الصناعية المصممة حسب احتياجاتهم الخاصة.',
            tabs: null // No tabs for Brothers Steel page
        }
    };

    // SVG Icons
    const icons = {
        employees: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <circle opacity="0.1" cx="27.5" cy="27.5" r="27.5" fill="#1F1F1F"></circle>
            <path d="M43.543 41.25C43.543 41.25 45.8346 41.25 45.8346 38.9583C45.8346 36.6667 43.543 29.7917 34.3763 29.7917C25.2096 29.7917 22.918 36.6667 22.918 38.9583C22.918 41.25 25.2096 41.25 25.2096 41.25H43.543ZM25.2608 38.9583C25.2529 38.9574 25.2418 38.956 25.2283 38.9537C25.222 38.9527 25.2157 38.9515 25.2097 38.9504C25.213 38.3453 25.592 36.5908 26.9496 35.007C28.2194 33.5256 30.4408 32.0833 34.3763 32.0833C38.3118 32.0833 40.5332 33.5256 41.803 35.007C43.1606 36.5908 43.5396 38.3453 43.5429 38.9504C43.5369 38.9515 43.5306 38.9527 43.5243 38.9537C43.5108 38.956 43.4997 38.9574 43.4918 38.9583H25.2608Z" fill="white"></path>
            <path d="M34.3763 25.2083C36.9076 25.2083 38.9596 23.1563 38.9596 20.625C38.9596 18.0937 36.9076 16.0417 34.3763 16.0417C31.845 16.0417 29.793 18.0937 29.793 20.625C29.793 23.1563 31.845 25.2083 34.3763 25.2083ZM41.2513 20.625C41.2513 24.422 38.1733 27.5 34.3763 27.5C30.5793 27.5 27.5013 24.422 27.5013 20.625C27.5013 16.828 30.5793 13.75 34.3763 13.75C38.1733 13.75 41.2513 16.828 41.2513 20.625Z" fill="white"></path>
            <path d="M30.3542 28.4199V38.0973L25.9994 34.4683L21.6445 38.0973V28.4199C22.9349 29.307 24.3865 29.7909 25.9994 29.7909C27.6123 29.7909 29.1445 29.307 30.3542 28.4199Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M26.0014 16.8086L27.5336 19.8731L30.9207 20.357L28.5014 22.7763L29.0659 26.2441L26.0014 24.6312L22.9369 26.2441L23.5014 22.7763L21.082 20.357L24.4691 19.8731L26.0014 16.8086Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.6055 21.7708C12.6055 17.9739 15.6835 14.8958 19.4805 14.8958C23.2774 14.8958 26.3555 17.9739 26.3555 21.7708C26.3555 25.5678 23.2774 28.6458 19.4805 28.6458C15.6835 28.6458 12.6055 25.5678 12.6055 21.7708ZM19.4805 17.1875C16.9492 17.1875 14.8971 19.2395 14.8971 21.7708C14.8971 24.3021 16.9492 26.3542 19.4805 26.3542C22.0118 26.3542 24.0638 24.3021 24.0638 21.7708C24.0638 19.2395 22.0118 17.1875 19.4805 17.1875Z" fill="white"></path>
        </svg>`,
        formulations: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <circle opacity="0.1" cx="27.5" cy="27.5" r="27.5" fill="#1F1F1F"></circle>
            <path d="M43.543 41.25C43.543 41.25 45.8346 41.25 45.8346 38.9583C45.8346 36.6667 43.543 29.7917 34.3763 29.7917C25.2096 29.7917 22.918 36.6667 22.918 38.9583C22.918 41.25 25.2096 41.25 25.2096 41.25H43.543ZM25.2608 38.9583C25.2529 38.9574 25.2418 38.956 25.2283 38.9537C25.222 38.9527 25.2157 38.9515 25.2097 38.9504C25.213 38.3453 25.592 36.5908 26.9496 35.007C28.2194 33.5256 30.4408 32.0833 34.3763 32.0833C38.3118 32.0833 40.5332 33.5256 41.803 35.007C43.1606 36.5908 43.5396 38.3453 43.5429 38.9504C43.5369 38.9515 43.5306 38.9527 43.5243 38.9537C43.5108 38.956 43.4997 38.9574 43.4918 38.9583H25.2608Z" fill="white"></path>
            <path d="M34.3763 25.2083C36.9076 25.2083 38.9596 23.1563 38.9596 20.625C38.9596 18.0937 36.9076 16.0417 34.3763 16.0417C31.845 16.0417 29.793 18.0937 29.793 20.625C29.793 23.1563 31.845 25.2083 34.3763 25.2083ZM41.2513 20.625C41.2513 24.422 38.1733 27.5 34.3763 27.5C30.5793 27.5 27.5013 24.422 27.5013 20.625C27.5013 16.828 30.5793 13.75 34.3763 13.75C38.1733 13.75 41.2513 16.828 41.2513 20.625Z" fill="white"></path>
            <path d="M30.3542 28.4199V38.0973L25.9994 34.4683L21.6445 38.0973V28.4199C22.9349 29.307 24.3865 29.7909 25.9994 29.7909C27.6123 29.7909 29.1445 29.307 30.3542 28.4199Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M26.0014 16.8086L27.5336 19.8731L30.9207 20.357L28.5014 22.7763L29.0659 26.2441L26.0014 24.6312L22.9369 26.2441L23.5014 22.7763L21.082 20.357L24.4691 19.8731L26.0014 16.8086Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.6055 21.7708C12.6055 17.9739 15.6835 14.8958 19.4805 14.8958C23.2774 14.8958 26.3555 17.9739 26.3555 21.7708C26.3555 25.5678 23.2774 28.6458 19.4805 28.6458C15.6835 28.6458 12.6055 25.5678 12.6055 21.7708ZM19.4805 17.1875C16.9492 17.1875 14.8971 19.2395 14.8971 21.7708C14.8971 24.3021 16.9492 26.3542 19.4805 26.3542C22.0118 26.3542 24.0638 24.3021 24.0638 21.7708C24.0638 19.2395 22.0118 17.1875 19.4805 17.1875Z" fill="white"></path>
        </svg>`,
        equipment: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <circle opacity="0.1" cx="27.5" cy="27.5" r="27.5" fill="#1F1F1F"></circle>
            <path d="M43.543 41.25C43.543 41.25 45.8346 41.25 45.8346 38.9583C45.8346 36.6667 43.543 29.7917 34.3763 29.7917C25.2096 29.7917 22.918 36.6667 22.918 38.9583C22.918 41.25 25.2096 41.25 25.2096 41.25H43.543ZM25.2608 38.9583C25.2529 38.9574 25.2418 38.956 25.2283 38.9537C25.222 38.9527 25.2157 38.9515 25.2097 38.9504C25.213 38.3453 25.592 36.5908 26.9496 35.007C28.2194 33.5256 30.4408 32.0833 34.3763 32.0833C38.3118 32.0833 40.5332 33.5256 41.803 35.007C43.1606 36.5908 43.5396 38.3453 43.5429 38.9504C43.5369 38.9515 43.5306 38.9527 43.5243 38.9537C43.5108 38.956 43.4997 38.9574 43.4918 38.9583H25.2608Z" fill="white"></path>
            <path d="M34.3763 25.2083C36.9076 25.2083 38.9596 23.1563 38.9596 20.625C38.9596 18.0937 36.9076 16.0417 34.3763 16.0417C31.845 16.0417 29.793 18.0937 29.793 20.625C29.793 23.1563 31.845 25.2083 34.3763 25.2083ZM41.2513 20.625C41.2513 24.422 38.1733 27.5 34.3763 27.5C30.5793 27.5 27.5013 24.422 27.5013 20.625C27.5013 16.828 30.5793 13.75 34.3763 13.75C38.1733 13.75 41.2513 16.828 41.2513 20.625Z" fill="white"></path>
            <path d="M30.3542 28.4199V38.0973L25.9994 34.4683L21.6445 38.0973V28.4199C22.9349 29.307 24.3865 29.7909 25.9994 29.7909C27.6123 29.7909 29.1445 29.307 30.3542 28.4199Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M26.0014 16.8086L27.5336 19.8731L30.9207 20.357L28.5014 22.7763L29.0659 26.2441L26.0014 24.6312L22.9369 26.2441L23.5014 22.7763L21.082 20.357L24.4691 19.8731L26.0014 16.8086Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12.6055 21.7708C12.6055 17.9739 15.6835 14.8958 19.4805 14.8958C23.2774 14.8958 26.3555 17.9739 26.3555 21.7708C26.3555 25.5678 23.2774 28.6458 19.4805 28.6458C15.6835 28.6458 12.6055 25.5678 12.6055 21.7708ZM19.4805 17.1875C16.9492 17.1875 14.8971 19.2395 14.8971 21.7708C14.8971 24.3021 16.9492 26.3542 19.4805 26.3542C22.0118 26.3542 24.0638 24.3021 24.0638 21.7708C24.0638 19.2395 22.0118 17.1875 19.4805 17.1875Z" fill="white"></path>
        </svg>`
    };

    // Get current page
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        return page;
    }

    // Generate intro section HTML
    function generateIntroSection(config) {
        if (!config) return '';

        const hasTabsClass = config.tabs ? '' : ' no-tabs';
        const styleAttr = config.sectionStyle ? ` style="${config.sectionStyle}"` : '';

        let html = `
        <section class="rs-about-area section-space rs-about-ten${hasTabsClass}"${styleAttr}>
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
                                                ${icons[config.counter.icon] || icons.employees}
                                            </div>
                                            <div class="rs-counter-number-item">
                                                <span class="rs-counter-number odometer" data-count="${config.counter.count}">00</span>
                                                <span class="prefix">+</span>
                                            </div>
                                        </div>
                                        <span class="rs-counter-title" data-i18n="${config.counter.title}">${config.counter.titleFallback}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="rs-about-content-wrapper">
                                <div class="rs-section-title-wrapper">
                                    <span class="rs-section-subtitle has-stroke justify-content-start" data-i18n="${config.subtitle}">
                                        ${config.subtitleFallback}
                                    </span>
                                    <h2 class="rs-section-title rs-split-text-enable split-in-fade" data-i18n="${config.title}">${config.titleFallback}</h2>
                                    <p class="descrip" data-i18n="${config.description}">${config.descriptionFallback}</p>
                                </div>`;

        // Add tabs if they exist
        if (config.tabs && config.tabs.length > 0) {
            html += `
                                <div class="rs-about-tab">
                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">`;
            
            config.tabs.forEach((tab, index) => {
                const activeClass = index === 0 ? 'active' : '';
                html += `
                                        <li class="nav-item ${activeClass}" role="presentation">
                                            <button class="nav-link ${activeClass}" id="pills-${tab.id}-tab" data-bs-toggle="pill" data-bs-target="#pills-${tab.id}" type="button" role="tab" aria-controls="pills-${tab.id}" aria-selected="${index === 0}" data-i18n="${tab.label}">
                                                ${tab.labelFallback}
                                            </button>
                                        </li>`;
            });

            html += `
                                    </ul>
                                </div>
                                <div class="rs-aobut-tab-content-wrapper">
                                    <div class="tab-content rs-about-tab-anim" id="pills-tabContent">`;

            config.tabs.forEach((tab, index) => {
                const activeClass = index === 0 ? 'show active' : '';
                html += `
                                        <div class="tab-pane fade ${activeClass}" id="pills-${tab.id}" role="tabpanel" aria-labelledby="pills-${tab.id}-tab" tabindex="0">
                                            <div class="rs-about-tab-content">
                                                <p data-i18n="${tab.content}">${tab.contentFallback}</p>
                                                <div class="rs-about-feature-list">
                                                    <div class="rs-list-item has-theme-orange">
                                                        <ul>`;
                
                tab.features.forEach(feature => {
                    html += `
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                <span data-i18n="${feature.key}">${feature.fallback}</span>
                                                            </li>`;
                });

                html += `
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
            });

            html += `
                                    </div>
                                </div>`;
        }

        html += `
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

        return html;
    }

    // Load intro section
    function loadIntroSection() {
        const currentPage = getCurrentPage();
        const config = pageContent[currentPage];
        
        if (!config) {
            console.warn('No intro section configuration found for:', currentPage);
            return;
        }

        // Find placeholder
        const placeholder = document.querySelector('[data-include="intro-section"]');
        if (!placeholder) {
            console.warn('No intro section placeholder found');
            return;
        }

        // Generate and insert HTML
        const html = generateIntroSection(config);
        placeholder.outerHTML = html;

        // Trigger language update if language toggle exists
        if (window.languageToggle && typeof window.languageToggle.updateTranslations === 'function') {
            window.languageToggle.updateTranslations();
        }

        // Re-initialize odometer counters if they exist
        if (typeof jQuery !== 'undefined' && jQuery.fn.appear) {
            jQuery('.odometer').each(function() {
                const $this = jQuery(this);
                $this.appear(function() {
                    const count = $this.data('count');
                    $this.html(count);
                });
            });
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadIntroSection);
    } else {
        loadIntroSection();
    }

})();
