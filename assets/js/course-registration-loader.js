// Dynamically load the course registration section partial into pages
(function () {
    'use strict';

    const PARTIAL_URL = 'includes/course-registration-section.html';

    function loadCourseRegistration() {
        const placeholder = document.querySelector('[data-include="course-registration"]');
        if (!placeholder) {
            return;
        }

        function setNextRedirectUrl() {
            const form = placeholder.querySelector('#course-registration-form');
            if (!form) return;
            const nextInput = form.querySelector('input[name="_next"]');
            if (!nextInput) return;

            const url = new URL(window.location.href);
            url.searchParams.set('sent', '1');
            nextInput.value = url.toString();
        }

        fetch(PARTIAL_URL, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load course registration section: ${response.status}`);
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;

                setNextRedirectUrl();
                
                // Re-apply translations for dynamically loaded content
                if (typeof window.applyCurrentLanguage === 'function') {
                    window.applyCurrentLanguage();
                } else if (typeof window.initLanguageToggle === 'function') {
                    window.initLanguageToggle();
                }

                // Initialize WOW animations for the new content
                if (typeof WOW !== 'undefined') {
                    new WOW().init();
                }

                // Set default course based on current page
                setDefaultCourse();
            })
            .catch(error => {
                console.warn('[course-registration-loader] Error loading section:', error);
            });
    }

    function setDefaultCourse() {
        const courseSelect = document.getElementById('reg-course');
        if (!courseSelect) return;

        const currentPage = window.location.pathname;
        
        if (currentPage.includes('course-01')) {
            courseSelect.value = 'course-01';
        } else if (currentPage.includes('course-02')) {
            courseSelect.value = 'course-02';
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCourseRegistration);
    } else {
        loadCourseRegistration();
    }
})();
