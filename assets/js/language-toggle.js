/**
 * Growth Roots Language Toggle System
 * Supports Arabic (AR) and English (EN) with RTL/LTR switching
 */

(function() {
    'use strict';
    
    // Get current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('siteLanguage') || 'en';
    
    // Translation data
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.allServices': 'All Services',
            'nav.factoryEstablishment': 'Factory Establishment',
            'nav.equipmentSupply': 'Equipment Supply',
            'nav.operationsManagement': 'Operations Management',
            'nav.trainingPrograms': 'Training Programs',
            'nav.productDevelopment': 'Product Development',
            'nav.rawMaterialsSupply': 'Raw Materials Supply',
            'nav.restructuring': 'Restructuring',
            'nav.restaurantSupport': 'Restaurant Support',
            'nav.products': 'Products',
            'nav.ricattoProducts': 'Ricatto Products',
            'nav.kayaEquipment': 'Kaya Steel Equipment',
            'nav.about': 'About Us',
            'nav.successStories': 'Success Stories',
            'nav.contact': 'Contact',
            'nav.more': 'More',
            'nav.faq': 'FAQ',
            'nav.getInTouch': 'Get in Touch',
            
            // Hero Section
            'hero.subtitle': 'Egypt\'s Leading Food Manufacturing Partner',
            'hero.brandName': 'Growth Roots',
            'hero.title': 'From Concept to Full Production',
            'hero.description': 'Growth Roots provides comprehensive solutions for establishing, operating, and developing meat and poultry production factories across Egypt and the region.',
            'hero.exploreServices': 'Explore Our Services',
            'hero.contactUs': 'Contact Us',
            
            // About Section
            'about.subtitle': 'Who We Are',
            'about.title': 'Your trusted partner for <span class="rs-theme-orange">over 20 years</span> in food manufacturing',
            'about.description': 'Growth Roots is Egypt\'s leading provider of comprehensive food manufacturing solutions, specializing in meat and poultry production facilities.',
            'about.ourMission': 'Our Mission',
            'about.missionText': 'We plant the seeds of quality to reap a healthy, prosperous future for Egypt\'s food industry.',
            'about.whyChoose': 'Why Choose Growth Roots?',
            'about.feature1Title': 'Integrated Team of Experts',
            'about.feature1Text': 'Multidisciplinary team covering food production, engineering, equipment manufacturing, and flavor technology.',
            'about.feature2Title': 'Technology & Quality',
            'about.feature2Text': 'Latest scientific advancements and highest standards at every production stage.',
            'about.feature3Title': 'End-to-End Solutions',
            'about.feature3Text': 'Turnkey solutions from planning to operations for a smooth factory establishment journey.',
            'about.learnMore': 'Learn More',
            'about.ourHistory': 'Our History',
            'about.ourVision': 'Our Vision',
            'about.historyText': 'Founded with a vision to revolutionize Egypt\'s food manufacturing sector, Growth Roots has grown from a specialized consultancy to a comprehensive industrial partner. Our journey spans over two decades of transforming ideas into successful, profitable food production facilities.',
            'about.feature1': '20+ Years Industry Experience',
            'about.feature2': 'Complete A-to-Z Solutions',
            'about.missionText2': 'To empower food manufacturers with world-class solutions that transform ideas into profitable, sustainable businesses. We\'re committed to being more than a service provider—we\'re your partner in success, ensuring quality, efficiency, and growth at every stage.',
            'about.feature3': 'Partnership-Driven Approach',
            'about.feature4': 'Quality & Innovation Focus',
            'about.visionText': 'To be the most trusted name in food manufacturing solutions across Egypt and the region, setting the benchmark for excellence, innovation, and partnership. We envision a future where every food producer has access to world-class support to achieve their full potential.',
            'about.feature5': 'Regional Industry Leadership',
            'about.feature6': 'Innovation & Excellence',
            'counter.number': '460',
            'counter.plus': '+',
            'counter.highlySpecialised': '<span class="large-text">Highly</span> Specialised <br> Employees',

            // Services Section
            'services.subtitle': 'Our Comprehensive Services',
            'services.title': 'Complete <span class="rs-theme-orange">food manufacturing solutions</span> from start to finish',
            'services.factoryEstablishment': 'Factory Establishment',
            'services.factoryEstablishmentDesc': 'Complete feasibility studies, facility design, and construction oversight to turn your vision into reality.',
            'services.equipmentSupply': 'Equipment Supply',
            'services.equipmentSupplyDesc': 'European-standard production lines through Kaya Steel partnership for optimal efficiency.',
            'services.operationsManagement': 'Operations Management',
            'services.operationsManagementDesc': 'Expert daily oversight ensuring maximum efficiency, quality control, and profitability.',
            'services.trainingPrograms': 'Training Programs',
            'services.trainingProgramsDesc': 'Comprehensive workforce development on modern equipment and best quality practices.',
            'services.productDevelopment': 'Product Development',
            'services.productDevelopmentDesc': 'Recipe development and formulation services for optimal balance of quality and cost.',
            'services.rawMaterials': 'Raw Materials Supply',
            'services.rawMaterialsDesc': 'Premium Frozo and quality raw materials at competitive prices.',
            'services.factoryRestructuring': 'Factory Restructuring',
            'services.restructuringDesc': 'Transform struggling operations into profitable facilities with comprehensive assessments.',
            'services.restaurantSupport': 'Restaurant Support',
            'services.restaurantSupportDesc': 'Specialized solutions for restaurants and food chains to improve operations and consistency.',
            
            // Sub-Brands Section
            'subbrands.subtitle': 'Sub-Brands',
            'subbrands.title': 'Our Growth Roots Family',
            'subbrands.growthRoots': 'Growth Roots',
            'subbrands.kayaSteel': 'Kaya Steel',
            'subbrands.ricetto': 'Ricetto',
            'subbrands.growthRootsDesc': 'From site scouting to full-scale commissioning, we launch food factories that align with Growth Roots standards.',
            'subbrands.growthRootsCta': 'Discover Launch Support',
            'subbrands.kayaSteelDesc': 'We build production lines, implement HACCP processes, and structure teams for sustained efficiency.',
            'subbrands.kayaSteelCta': 'Streamline Operations',
            'subbrands.ricettoDesc': 'We coach culinary teams, standardize recipes, and transfer Growth Roots best practices on-site.',
            'subbrands.ricettoCta': 'Upskill Your Team',

            // Why Choose Section
            'why.subtitle': 'Why Choose Us',
            'why.title': 'Your Trusted Partner in Food Manufacturing Excellence For Over 20 Years',
            'why.item1Title': 'Complete A-to-Z Solutions',
            'why.item1Desc': 'From feasibility studies to full operations, we handle every aspect of your factory journey.',
            'why.item2Title': 'European-Standard Equipment',
            'why.item2Desc': 'Kaya Steel partnership ensures top-quality machinery manufactured to strict European standards.',
            'why.item3Title': 'Proven Track Record',
            'why.item3Desc': '20+ years of successful projects across Egypt, transforming visions into profitable realities.',

            // Slider Text
            'slider.establishment': 'Establishment',
            'slider.equipments': 'Equipments',
            'slider.operations': 'Operations',
            'slider.training': 'Training',
            'slider.ingredients': 'Ingredients',
            'slider.restructuring': 'Restructuring',
            'slider.support': 'Support Solutions',
            
            // CTA Section
            'cta.title': 'Ready to Start Your Food Manufacturing Project?',
            'cta.description': 'Let\'s transform your vision into a thriving production facility. Contact our team today for a consultation.',
            'cta.requestConsultation': 'Request Consultation',
            'cta.callUs': 'Call Us Now',
            
            // Footer
            'footer.aboutGrowthRoots': 'About Growth Roots',
            'footer.aboutText': 'Egypt\'s leading provider of comprehensive food manufacturing solutions, specializing in meat and poultry production facilities.',
            'footer.usefulLinks': 'Useful Links',
            'footer.officeAddress': 'Office Address',
            'footer.location': 'Cairo, Egypt<br>Industrial Zone',
            'footer.emailAddress': 'Email Address',
            'footer.readyToStart': 'Ready to start your project?',
            'footer.phoneNumber': 'Phone Number',
            'footer.followUs': 'Follow Us',
            'footer.copyright': 'Growth Roots. All Rights Reserved. | Your Complete Food Manufacturing Partner'
        },
        ar: {
            // Navigation
            'nav.home': 'الرئيسية',
            'nav.services': 'خدماتنا',
            'nav.allServices': 'جميع الخدمات',
            'nav.factoryEstablishment': 'تأسيس المصانع',
            'nav.equipmentSupply': 'توريد المعدات',
            'nav.operationsManagement': 'إدارة العمليات',
            'nav.trainingPrograms': 'برامج التدريب',
            'nav.productDevelopment': 'تطوير المنتجات',
            'nav.rawMaterialsSupply': 'توريد الخامات',
            'nav.restructuring': 'إعادة الهيكلة',
            'nav.restaurantSupport': 'دعم المطاعم',
            'nav.products': 'المنتجات',
            'nav.ricattoProducts': 'منتجات ريكاتو',
            'nav.kayaEquipment': 'معدات كايا ستيل',
            'nav.about': 'من نحن',
            'nav.successStories': 'قصص النجاح',
            'nav.contact': 'تواصل معنا',
            'nav.more': 'المزيد',
            'nav.faq': 'الأسئلة الشائعة',
            'nav.getInTouch': 'تواصل معنا',
            
            // Hero Section
            'hero.subtitle': 'شريكك المتكامل لتأسيس مصانع الغذاء',
            'hero.brandName': 'جروث رووتس',
            'hero.title': 'من الفكرة إلى الإنتاج الكامل',
            'hero.description': 'جروث رووتس تقدم حلولاً شاملة لتأسيس وتشغيل وتطوير مصانع اللحوم والدواجن في مصر والمنطقة.',
            'hero.exploreServices': 'استكشف خدماتنا',
            'hero.contactUs': 'تواصل معنا',
            
            // About Section
            'about.subtitle': 'عن جروث روتس',
            'about.title': 'شريكك الموثوق لأكثر من <span class="rs-theme-orange">20 عامًا</span> في صناعة الغذاء',
            'about.description': 'جروث رووتس هي المزود الرائد في مصر للحلول الشاملة لصناعة الغذاء، متخصصون في منشآت إنتاج اللحوم والدواجن.',
            'about.ourMission': 'رسالتنا',
            'about.missionText': 'نزرع بذور الجودة لنحصد مستقبلاً صحيًا ومزدهرًا لصناعة الغذاء في مصر.',
            'about.whyChoose': 'لماذا تختار جروث روتس؟',
            'about.feature1Title': 'فريق خبراء متكامل',
            'about.feature1Text': 'فريق متعدد التخصصات يغطي الإنتاج الغذائي والهندسة وتصنيع المعدات وتكنولوجيا النكهات.',
            'about.feature2Title': 'التكنولوجيا والجودة',
            'about.feature2Text': 'أحدث التطورات العلمية وأعلى المعايير في كل مرحلة إنتاجية.',
            'about.feature3Title': 'حلول متكاملة',
            'about.feature3Text': 'حلول تسليم مفتاح من التخطيط إلى التشغيل لرحلة تأسيس مصنع سلسة.',
            'about.learnMore': 'اعرف المزيد',
            'about.ourHistory': 'تاريخنا',
            'about.ourVision': 'رؤيتنا',
            'about.historyText': 'تأسست برؤية لإحداث ثورة في قطاع التصنيع الغذائي المصري، نمت جروث رووتس من استشارات متخصصة إلى شريك صناعي شامل. رحلتنا تمتد لأكثر من عقدين من تحويل الأفكار إلى منشآت إنتاج غذائي ناجحة ومربحة.',
            'about.feature1': 'خبرة صناعية تتجاوز 20 عامًا',
            'about.feature2': 'حلول شاملة من الألف إلى الياء',
            'about.missionText2': 'تمكين مصنعي الأغذية بحلول عالمية المستوى تحول الأفكار إلى أعمال مربحة ومستدامة. نحن ملتزمون بأن نكون أكثر من مزود خدمة—نحن شريكك في النجاح، نضمن الجودة والكفاءة والنمو في كل مرحلة.',
            'about.feature3': 'نهج قائم على الشراكة',
            'about.feature4': 'التركيز على الجودة والابتكار',
            'about.visionText': 'أن نكون الاسم الأكثر ثقة في حلول التصنيع الغذائي في مصر والمنطقة، نضع معايير التميز والابتكار والشراكة. نتخيل مستقبلًا يتمكن فيه كل منتج غذائي من الوصول إلى دعم عالمي المستوى لتحقيق إمكاناته الكاملة.',
            'about.feature5': 'الريادة الصناعية الإقليمية',
            'about.feature6': 'الابتكار والتميز',
            'counter.number': '٤٦٠',
            'counter.plus': '+',
            'counter.highlySpecialised': '<span class="large-text">موظفون</span> متخصصون <br> بدرجة عالية',

            // Services Section
            'services.subtitle': 'خدماتنا الشاملة',
            'services.title': '<span class="rs-theme-orange">حلول صناعة غذائية</span> شاملة من البداية للنهاية',
            'services.factoryEstablishment': 'تأسيس المصانع',
            'services.factoryEstablishmentDesc': 'الدعم الشامل لتأسيس مصنعك الجديد من الفكرة حتى التشغيل.',
            'services.equipmentSupply': 'توريد المعدات',
            'services.equipmentSupplyDesc': 'توفير خطوط إنتاج ومعدات حديثة بمعايير عالمية.',
            'services.operationsManagement': 'إدارة العمليات',
            'services.operationsManagementDesc': 'إدارة مباشرة لعمليات المصنع مع حلول تحسين الكفاءة.',
            'services.trainingPrograms': 'برامج التدريب',
            'services.trainingProgramsDesc': 'تطوير شامل للقوى العاملة على المعدات الحديثة وأفضل ممارسات الجودة.',
            'services.productDevelopment': 'تطوير المنتجات',
            'services.productDevelopmentDesc': 'ابتكار الوصفات وخدمات التركيب للتوازن الأمثل بين الجودة والتكلفة.',
            'services.rawMaterials': 'توريد المواد الخام',
            'services.rawMaterialsDesc': 'منتجات فروزو المميزة والمواد الخام عالية الجودة بأسعار تنافسية.',
            'services.factoryRestructuring': 'إعادة هيكلة المصانع',
            'services.restructuringDesc': 'تحويل العمليات المتعثرة إلى منشآت مربحة من خلال تقييمات شاملة.',
            'services.restaurantSupport': 'دعم المطاعم',
            'services.restaurantSupportDesc': 'حلول متخصصة للمطاعم وسلاسل الأغذية لتحسين العمليات والاتساق.',

            // Sub-Brands Section
            'subbrands.subtitle': 'العلامات الفرعية',
            'subbrands.title': 'عائلة جروث رووتس',
            'subbrands.growthRoots': 'جروث رووتس',
            'subbrands.kayaSteel': 'كايا ستيل',
            'subbrands.ricetto': 'ريكيتو',
            'subbrands.growthRootsDesc': 'من اختيار الموقع إلى التشغيل الكامل، نؤسس مصانع غذائية متوافقة مع معايير جروث رووتس.',
            'subbrands.growthRootsCta': 'اكتشف دعم الإطلاق',
            'subbrands.kayaSteelDesc': 'نبني خطوط الإنتاج ونطبق أنظمة الهاسب وننظم الفرق لضمان كفاءة مستدامة.',
            'subbrands.kayaSteelCta': 'حسّن العمليات',
            'subbrands.ricettoDesc': 'ندرب فرق الطهي، نوحد الوصفات، وننقل أفضل ممارسات جروث رووتس في الموقع.',
            'subbrands.ricettoCta': 'طوّر فريقك',

            // Why Choose Section
            'why.subtitle': 'لماذا تختارنا',
            'why.title': 'شريكك الموثوق في تصنيع الغذاء لأكثر من 20 عامًا',
            'why.item1Title': 'حلول متكاملة من الألف إلى الياء',
            'why.item1Desc': 'من دراسات الجدوى إلى التشغيل الكامل، ندير كل جانب من رحلة مصنعك.',
            'why.item2Title': 'معدات بمعايير أوروبية',
            'why.item2Desc': 'شراكتنا مع كايا ستيل تضمن معدات عالية الجودة مصنّعة بمعايير أوروبية صارمة.',
            'why.item3Title': 'سجل نجاح مثبت',
            'why.item3Desc': 'أكثر من 20 عامًا من المشاريع الناجحة في مصر نحول الرؤى إلى واقع مربح.',

            // Slider Text
            'slider.establishment': 'التأسيس',
            'slider.equipments': 'المعدات',
            'slider.operations': 'العمليات',
            'slider.training': 'التدريب',
            'slider.ingredients': 'المواد الخام',
            'slider.restructuring': 'إعادة الهيكلة',
            'slider.support': 'حلول الدعم',
            
            // CTA Section
            'cta.title': 'مستعد لبدء مشروع التصنيع الغذائي؟',
            'cta.description': 'دعنا نحول رؤيتك إلى منشأة إنتاج مزدهرة. تواصل مع فريقنا اليوم للحصول على استشارة.',
            'cta.requestConsultation': 'اطلب استشارة',
            'cta.callUs': 'اتصل بنا الآن',
            
            // Footer
            'footer.aboutGrowthRoots': 'عن جروث روتس',
            'footer.aboutText': 'المزود الرائد في مصر للحلول الشاملة لصناعة الغذاء، متخصصون في منشآت إنتاج اللحوم والدواجن.',
            'footer.usefulLinks': 'روابط مفيدة',
            'footer.officeAddress': 'عنوان المكتب',
            'footer.location': 'القاهرة، مصر<br>المنطقة الصناعية',
            'footer.emailAddress': 'البريد الإلكتروني',
            'footer.readyToStart': 'مستعد لبدء مشروعك؟',
            'footer.phoneNumber': 'رقم الهاتف',
            'footer.followUs': 'تابعنا',
            'footer.copyright': 'جروث روتس. جميع الحقوق محفوظة. | شريكك الكامل في التصنيع الغذائي'
        }
    };
    
    // Initialize language on page load
    function initLanguage() {
        setLanguage(currentLang);
        updateLanguageButtons();
    }
    
    // Set language and update DOM
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('siteLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        toggleSplitText(lang);
        updateLanguageButtons();
    }

    // Update active state on language buttons
    function updateLanguageButtons() {
        document.querySelectorAll('.language-menu a').forEach(link => {
            const linkLang = link.getAttribute('data-lang');
            if (linkLang === currentLang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function toggleSplitText(lang) {
        const splitElements = document.querySelectorAll('[data-toggle-split="true"], .rs-split-text-enable');
        splitElements.forEach(element => {
            if (!element.dataset.toggleSplit) {
                element.dataset.toggleSplit = element.classList.contains('rs-split-text-enable') ? 'true' : 'false';
            }

            if (lang === 'ar') {
                if (element.classList.contains('rs-split-text-enable')) {
                    element.classList.remove('rs-split-text-enable', 'split-in-fade');
                    element.dataset.hasSplitRemoved = 'true';
                }
            } else {
                if (element.dataset.toggleSplit === 'true' && element.dataset.hasSplitRemoved === 'true') {
                    element.classList.add('rs-split-text-enable', 'split-in-fade');
                    delete element.dataset.hasSplitRemoved;
                }
            }
        });
    }

    // Add event listeners to language toggle links
    function attachLanguageListeners() {
        document.querySelectorAll('.language-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    localStorage.setItem('siteLanguage', lang);
                    currentLang = lang;
                    updateLanguageButtons();
                    window.location.reload();
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initLanguage();
            attachLanguageListeners();
        });
    } else {
        initLanguage();
        attachLanguageListeners();
    }
})();
