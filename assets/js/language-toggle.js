/**
 * Growth Roots - Bilingual Language Toggle
 * Simple implementation for switching between English and Arabic
 */

document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Apply saved language on page load
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
        document.body.classList.add('rtl');
        document.body.setAttribute('dir', 'rtl');
    }
    
    // Language toggle click handler
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle language
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            
            // Save preference
            localStorage.setItem('language', currentLang);
            
            // Apply language changes
            document.documentElement.lang = currentLang;
            
            if (currentLang === 'ar') {
                document.body.classList.add('rtl');
                document.body.setAttribute('dir', 'rtl');
                // You can redirect to Arabic version or dynamically load Arabic content
                // window.location.href = 'index-ar.html';
            } else {
                document.body.classList.remove('rtl');
                document.body.setAttribute('dir', 'ltr');
                // window.location.href = 'index.html';
            }
            
            // Show notification (optional)
            showLanguageNotification(currentLang);
        });
    }
    
    function showLanguageNotification(lang) {
        const message = lang === 'ar' 
            ? 'تم تغيير اللغة إلى العربية' 
            : 'Language changed to English';
        
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #296c3f;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-weight: 600;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    /* RTL Support */
    body.rtl {
        direction: rtl;
        text-align: right;
    }
    
    body.rtl .rs-header-logo {
        margin-right: 0;
        margin-left: auto;
    }
    
    body.rtl .main-menu ul li {
        float: right;
    }
    
    body.rtl .language-toggle {
        border-left: 1px solid rgba(255,255,255,0.2);
        padding-left: 15px;
    }
`;
document.head.appendChild(style);
