// Dynamically load the shared header partial into pages
(function () {
    'use strict';

    const HEADER_PARTIAL_URL = 'includes/header.html';
    const FALLBACK_HEADER_HTML = `
<header>
    <div class="rs-header-area rs-header-four header-transparent has-theme-light-green">
        <div class="container-fluid g-0">
            <div class="rs-header-top rs-header-top-three">
                <div class="rs-header-info-wrapper">
                    <div class="rs-header-info-item">
                        <div class="rs-header-contact-item">
                            <span>Email.</span>
                            <h6><a href="mailto:info@growthroots.com">info@growthroots.com</a></h6>
                        </div>
                    </div>
                    <div class="rs-header-info-item">
                        <div class="rs-header-contact-item">
                            <span>Call.</span>
                            <h6><a href="tel:+20123456789">+20 123 456 789</a></h6>
                        </div>
                    </div>
                </div>
                <div class="rs-header-info-item">
                    <div class="rs-header-contact-item">
                        <span>Schedule.</span>
                        <h6>Sun - Thu 9:00 - 17:00</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="rs-header-inner" id="header-sticky">
                <div class="rs-header-left">
                    <div class="rs-header-logo-wrapper">
                        <div class="rs-header-logo">
                            <a href="index.html"><img src="assets/images/logo/growth-roots-logo.svg" alt="Growth Roots Logo" style="max-height: 60px;"></a>
                        </div>
                    </div>
                </div>
                <div class="rs-header-menu">
                    <div class="rs-header-utility">
                        <div class="rs-language-toggle">
                            <a href="#" class="language-toggle" aria-haspopup="true" aria-expanded="false">
                                <i class="ri-global-line"></i>
                            </a>
                            <div class="language-menu" role="menu">
                                <a href="#" role="menuitem" data-lang="en">EN</a>
                                <a href="#" role="menuitem" data-lang="ar">AR</a>
                            </div>
                        </div>
                        <div class="rs-theme-social has-transparent has-orange">
                            <a href="#"><i class="ri-facebook-fill"></i></a>
                            <a href="#"><i class="ri-linkedin-fill"></i></a>
                            <a href="#"><i class="ri-instagram-line"></i></a>
                        </div>
                    </div>
                    <nav id="mobile-menu" class="main-menu">
                        <ul class="multipage-menu">
                            <li>
                                <a href="index.html" data-i18n="nav.home">Home</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="services.html" data-i18n="nav.services">Services</a>
                                <ul class="submenu last-children">
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
                                <ul class="submenu last-children">
                                    <li><a href="ricatto-products.html" data-i18n="nav.ricattoProducts">Ricatto Products</a></li>
                                    <li><a href="kaya-products.html" data-i18n="nav.kayaEquipment">Kaya Steel Equipment</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html" data-i18n="nav.about">About Us</a>
                            </li>
                            <li>
                                <a href="contact.html" data-i18n="nav.contact">Contact</a>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#" data-i18n="nav.more">More</a>
                                <ul class="submenu last-children">
                                    <li><a href="faq.html" data-i18n="nav.faq">FAQ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="rs-header-right">
                    <div class="rs-header-btn">
                        <a class="rs-btn has-theme-orange has-icon has-bg has-large-radius" href="contact.html"><span data-i18n="nav.getInTouch">Get in Touch</span>
                            <span class="icon-box">
                                <svg class="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                                </svg>
                                <svg class="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`;

    document.addEventListener('DOMContentLoaded', () => {
        const placeholder = document.querySelector('[data-include="header"]');
        if (!placeholder) {
            return;
        }

        renderHeader(placeholder, FALLBACK_HEADER_HTML);

        const partialUrl = new URL(HEADER_PARTIAL_URL, window.location.origin).toString();

        fetch(partialUrl, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load header: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                renderHeader(placeholder, html);
            })
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
                window.jQuery('#mobile-menu').meanmenu({
                    meanMenuContainer: '.mobile-menu',
                    meanScreenWidth: '1199',
                    meanExpand: ['<i class="fa-regular fa-plus"></i>'],
                });
            }
        }

        // Re-bind sidebar toggle after header is loaded
        if (window.jQuery) {
            window.jQuery('.sidebar-toggle').off('click').on('click', function() {
                window.jQuery('.offcanvas-area').addClass('info-open');
                window.jQuery('.offcanvas-overlay').addClass('overlay-open');
            });
        }
    }
})();
