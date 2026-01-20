// Dynamically load the shared header partial into pages
(function () {
    'use strict';

    const HEADER_PARTIAL_URL = 'includes/header.html';
    const FALLBACK_HEADER_HTML = `
<header class="gr-header">
    <div class="gr-navbar-wrapper header-sticky">
        <div class="container-fluid">
            <div class="gr-navbar">
                <div class="gr-navbar-logo">
                    <a href="index.html">
                        <img src="assets/images/logo/growth-roots-logo.svg" alt="Growth Roots Logo">
                    </a>
                </div>
                <nav class="gr-main-menu d-none d-xl-block">
                    <ul class="multipage-menu">
                        <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                        <li class="menu-item-has-children">
                            <a href="services.html" data-i18n="nav.services">Services</a>
                            <ul class="submenu">
                                <li><a href="services.html" data-i18n="nav.allServices">All Services</a></li>
                                <li><a href="factory-establishment.html" data-i18n="nav.factoryEstablishment">Factory Establishment</a></li>
                                <li><a href="supply-equipment.html" data-i18n="nav.equipmentSupply">Equipment Supply</a></li>
                                <li><a href="operations-management.html" data-i18n="nav.operationsManagement">Operations Management</a></li>
                                <li><a href="training-programs.html" data-i18n="nav.trainingPrograms">Training Programs</a></li>
                                <li><a href="product-development.html" data-i18n="nav.productDevelopment">Product Development</a></li>
                                <li><a href="raw-materials-supply.html" data-i18n="nav.rawMaterialsSupply">Raw Materials Supply</a></li>
                                <li><a href="factory-restructuring.html" data-i18n="nav.restructuring">Restructuring</a></li>
                                <li><a href="restaurant-support.html" data-i18n="nav.restaurantSupport">Restaurant Support</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" data-i18n="nav.products">Products</a>
                            <ul class="submenu">
                                <li><a href="brothers-products.html" data-i18n="nav.kayaEquipment">Brothers Steel Equipment</a></li>
                            </ul>
                        </li>
                        <li><a href="courses.html" data-i18n="nav.courses">Courses</a></li>
                        <li><a href="about.html" data-i18n="nav.about">About Us</a></li>
                        <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
                        <li class="menu-item-has-children">
                            <a href="#" data-i18n="nav.more">More</a>
                            <ul class="submenu">
                                <li><a href="faq.html" data-i18n="nav.faq">FAQ</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="gr-header-actions">
                    <div class="gr-language-select">
                        <a href="#" class="language-toggle-btn" id="languageToggleBtn">
                            <i class="ri-global-line"></i>
                            <span class="opposite-lang">AR</span>
                        </a>
                    </div>
                    <div class="gr-header-btn d-none d-sm-block">
                        <a class="gr-btn" href="contact.html">
                            <span data-i18n="nav.getInTouch">Get in Touch</span>
                        </a>
                    </div>
                    <div class="gr-hamburger d-xl-none">
                        <button class="sidebar-toggle bar-icon" type="button" aria-label="Open navigation menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`;

    document.addEventListener('DOMContentLoaded', () => {
        const placeholder = document.querySelector('[data-include="header"]');
        if (!placeholder) return;

        renderHeader(placeholder, FALLBACK_HEADER_HTML);

        const partialUrl = new URL(HEADER_PARTIAL_URL, window.location.origin).toString();

        fetch(partialUrl, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load header: ${response.status}`);
                return response.text();
            })
            .then(html => renderHeader(placeholder, html))
            .catch(error => {
                console.warn('[header-loader] Using fallback header due to error:', error);
            });
    });

    function renderHeader(target, html) {
        target.innerHTML = html;

        if (typeof window.attachLanguageToggle === 'function') {
            window.attachLanguageToggle();
        }

        if (typeof window.initLanguageToggle === 'function') {
            window.initLanguageToggle();
        }

        if (window.jQuery && typeof window.jQuery.fn.meanmenu === 'function') {
            const mobileMenuContainer = document.querySelector('.mobile-menu');
            if (mobileMenuContainer && !mobileMenuContainer.querySelector('.mean-nav')) {
                window.jQuery('.gr-main-menu').meanmenu({
                    meanMenuContainer: '.mobile-menu',
                    meanScreenWidth: '1199',
                    meanExpand: ['<i class="fa-regular fa-plus"></i>'],
                });
            }
        }

        if (window.jQuery) {
            window.jQuery('.sidebar-toggle').off('click').on('click', function () {
                window.jQuery('.offcanvas-area').addClass('info-open');
                window.jQuery('.offcanvas-overlay').addClass('overlay-open');
            });
        }
    }
})();