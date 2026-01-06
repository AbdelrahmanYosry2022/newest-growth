/**
 * Course Registration Form Handler
 * Sends registration emails via EmailJS to growthroots2020.eg@gmail.com
 */

(function () {
    'use strict';

    // EmailJS Configuration
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // User needs to replace this
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // User needs to replace this
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // User needs to replace this
    const RECIPIENT_EMAIL = 'growthroots2020.eg@gmail.com';

    // Course names mapping
    const courseNames = {
        'course-01': {
            en: 'Comprehensive Meat & Poultry Manufacturing Course',
            ar: 'الدورة التدريبية المتكاملة في صناعة منتجات اللحوم والدجاج'
        },
        'course-02': {
            en: 'Professional Flavor Engineering & Industrial Blends Course',
            ar: 'الدورة الاحترافية المتقدمة في مكسبات الطعم والخلطات الصناعية'
        }
    };

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        initCourseRegistration();
    });

    function initCourseRegistration() {
        const form = document.getElementById('course-registration-form');
        if (!form) return;

        // Set default course based on current page
        setDefaultCourse();

        // Handle form submission
        form.addEventListener('submit', handleFormSubmit);
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

    async function handleFormSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const submitBtn = document.getElementById('course-reg-submit-btn');
        const messagesDiv = document.getElementById('course-reg-messages');
        const btnText = submitBtn.querySelector('span[data-i18n]');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Get current language
        const currentLang = localStorage.getItem('siteLanguage') || 'en';

        // Show loading state
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;

        // Collect form data
        const formData = {
            name: document.getElementById('reg-name').value.trim(),
            email: document.getElementById('reg-email').value.trim(),
            phone: document.getElementById('reg-phone').value.trim(),
            course: document.getElementById('reg-course').value,
            company: document.getElementById('reg-company').value.trim() || 'Not provided',
            message: document.getElementById('reg-message').value.trim() || 'No additional notes'
        };

        // Get course name in both languages
        const courseInfo = courseNames[formData.course] || { en: formData.course, ar: formData.course };

        // Prepare email content
        const emailContent = formatEmailContent(formData, courseInfo, currentLang);

        try {
            // Check if EmailJS is configured
            if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                // Fallback: Use mailto link if EmailJS not configured
                sendViaMailto(formData, courseInfo, currentLang);
                showMessage(messagesDiv, 'success', currentLang);
                form.reset();
                setDefaultCourse();
            } else {
                // Send via EmailJS
                await sendViaEmailJS(formData, courseInfo, emailContent);
                showMessage(messagesDiv, 'success', currentLang);
                form.reset();
                setDefaultCourse();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage(messagesDiv, 'error', currentLang);
        } finally {
            // Reset button state
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    }

    function formatEmailContent(formData, courseInfo, lang) {
        const isArabic = lang === 'ar';
        
        if (isArabic) {
            return `
═══════════════════════════════════════════
        طلب تسجيل جديد في الدورة التدريبية
═══════════════════════════════════════════

📋 بيانات المتقدم:
────────────────────────────────────────────
• الاسم الكامل: ${formData.name}
• البريد الإلكتروني: ${formData.email}
• رقم الهاتف: ${formData.phone}
• الشركة/المصنع: ${formData.company}

📚 الدورة المطلوبة:
────────────────────────────────────────────
${courseInfo.ar}

💬 ملاحظات إضافية:
────────────────────────────────────────────
${formData.message}

═══════════════════════════════════════════
        Growth Roots Academy
═══════════════════════════════════════════
            `;
        } else {
            return `
═══════════════════════════════════════════
        NEW COURSE REGISTRATION REQUEST
═══════════════════════════════════════════

📋 Applicant Details:
────────────────────────────────────────────
• Full Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company/Factory: ${formData.company}

📚 Requested Course:
────────────────────────────────────────────
${courseInfo.en}

💬 Additional Notes:
────────────────────────────────────────────
${formData.message}

═══════════════════════════════════════════
        Growth Roots Academy
═══════════════════════════════════════════
            `;
        }
    }

    async function sendViaEmailJS(formData, courseInfo, emailContent) {
        // Initialize EmailJS if not already done
        if (typeof emailjs !== 'undefined' && !window.emailjsInitialized) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
            window.emailjsInitialized = true;
        }

        const templateParams = {
            to_email: RECIPIENT_EMAIL,
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            course_name_en: courseInfo.en,
            course_name_ar: courseInfo.ar,
            company: formData.company,
            message: formData.message,
            full_content: emailContent
        };

        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    }

    function sendViaMailto(formData, courseInfo, lang) {
        const isArabic = lang === 'ar';
        const subject = isArabic 
            ? `طلب تسجيل جديد - ${courseInfo.ar}` 
            : `New Course Registration - ${courseInfo.en}`;
        
        const body = isArabic 
            ? `الاسم: ${formData.name}%0D%0Aالبريد الإلكتروني: ${formData.email}%0D%0Aالهاتف: ${formData.phone}%0D%0Aالدورة: ${courseInfo.ar}%0D%0Aالشركة: ${formData.company}%0D%0Aملاحظات: ${formData.message}`
            : `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACourse: ${courseInfo.en}%0D%0ACompany: ${formData.company}%0D%0ANotes: ${formData.message}`;

        const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open mailto link in new window
        window.open(mailtoLink, '_blank');
    }

    function showMessage(container, type, lang) {
        if (!container) return;

        const messages = {
            success: {
                en: '✅ Thank you! Your registration has been submitted successfully. We will contact you within 24 hours.',
                ar: '✅ شكراً لك! تم إرسال طلب التسجيل بنجاح. سنتواصل معك خلال 24 ساعة.'
            },
            error: {
                en: '❌ Sorry, there was an error submitting your registration. Please try again or contact us directly.',
                ar: '❌ عذراً، حدث خطأ أثناء إرسال طلب التسجيل. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.'
            }
        };

        const message = messages[type][lang] || messages[type]['en'];
        const className = type === 'success' ? 'alert-success' : 'alert-danger';

        container.innerHTML = `<div class="alert ${className}" role="alert">${message}</div>`;
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                container.innerHTML = '';
            }, 5000);
        }
    }

})();
