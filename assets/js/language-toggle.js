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
            'hero.subtitle': '',
            'hero.brandName': '',
            'hero.title': 'From Concept to Full Production',
            'hero.description': 'Growth Roots provides comprehensive solutions for establishing, operating, and developing meat and poultry production factories across Egypt and the region.',
            'hero.exploreServices': 'Explore Our Services',
            'hero.contactUs': 'Contact Us',
            'hero.slide1Title': 'Driving growth for food manufacturers across the region',
            'hero.slide1Desc': 'End-to-end project execution from concept through commissioning for poultry and meat production facilities.',
            'hero.slide1Cta': 'Explore Services',
            'hero.slide2Title': 'Architecture-led layouts for efficient production lines',
            'hero.slide2Desc': 'Optimized plant architecture balancing hygiene zones, process flow, and regulatory compliance.',
            'hero.slide2Cta': 'View Case Studies',
            
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
            'services.pageTitle': 'Our Services',
            'services.breadcrumbHome': 'Home',
            'services.cards.establishment.title': 'Food Factory Establishment',
            'services.cards.establishment.desc': 'Comprehensive feasibility, site design, and execution oversight for a confident launch.',
            'services.cards.cta': 'View Details',
            'services.cards.equipment.title': 'Production Line & Equipment Supply',
            'services.cards.equipment.desc': 'European-grade machinery via Kaya Steel with fully integrated production lines.',
            'services.cards.operations.title': 'Operations & Performance Management',
            'services.cards.operations.desc': 'Daily plant management, quality systems, and workflow optimization to sustain profitability.',
            'services.cards.training.title': 'Training & Capability Building',
            'services.cards.training.desc': 'Structured programs that upskill teams on modern equipment and quality best practices.',
            'services.cards.productDev.title': 'Product & Recipe Development',
            'services.cards.productDev.desc': 'Innovative formulations that balance quality, yield, and cost to fit market demand.',
            'services.cards.rawMaterials.title': 'Raw Materials Procurement',
            'services.cards.rawMaterials.desc': 'Trusted Frozo ingredients and premium suppliers to secure consistent production.',
            'services.cards.restructuring.title': 'Factory Restructuring',
            'services.cards.restructuring.desc': 'Turn struggling facilities into profitable plants through holistic assessments and action plans.',
            'services.cards.restaurant.title': 'Restaurant & Foodservice Support',
            'services.cards.restaurant.desc': 'Standardize menus, control costs, and elevate quality across foodservice brands.',
            'services.benefits.subtitle': 'Why choose Growth Roots?',
            'services.benefits.title': 'Driving your food business success for over <span class="rs-black">20 years</span>',
            'services.benefits.items.experts.title': 'Specialist team of experts',
            'services.benefits.items.experts.desc': 'Cross-functional leaders in engineering, production, food technology, and quality management.',
            'services.benefits.items.quality.title': 'Integrated quality systems',
            'services.benefits.items.quality.desc': 'HACCP frameworks and continuous auditing keep every product safe and consistent.',
            'services.benefits.items.satisfaction.title': 'Partnership built on trust',
            'services.benefits.items.satisfaction.desc': 'Transparent support and proactive guidance to deliver on operational and financial goals.',
            'services.benefits.items.regional.title': 'Regional footprint',
            'services.benefits.items.regional.desc': 'Proven projects across Egypt and the region that enable confident expansion.',
            'services.benefits.items.professionals.title': 'Professional, trained crews',
            'services.benefits.items.professionals.desc': 'Dedicated follow-up teams who resolve challenges fast and keep production on track.',
            'services.benefits.items.workmanship.title': 'World-class manufacturing tools',
            'services.benefits.items.workmanship.desc': 'Equipment and plant designs that comply with stringent European standards.',
            'services.process.subtitle': 'Project execution steps',
            'services.process.title': 'The journey from planning to full-scale operations',
            'services.process.stepLabel': 'Step',
            'services.process.steps.design.title': 'Design & Planning',
            'services.process.steps.design.desc': 'We assess your needs and craft facility layouts that meet safety and production standards.',
            'services.process.steps.sourcing.title': 'Component Sourcing',
            'services.process.steps.sourcing.desc': 'We procure equipment from Growth Roots partners and configure every specification to your plan.',
            'services.process.steps.testing.title': 'Pilot Run & Quality Assurance',
            'services.process.steps.testing.desc': 'We test systems, implement HACCP programs, and confirm every product meets your standards.',
            'services.process.steps.launch.title': 'Launch & Handover',
            'services.process.steps.launch.desc': 'We commission the facility, train your teams, and stay beside you for continuous improvement.',
            'services.contact.title': 'Have a question?',
            'services.contact.desc': 'Our specialists are ready to support every stage of your manufacturing project.',
            'services.contact.fields.name': 'Full Name',
            'services.contact.fields.email': 'Email Address',
            'services.contact.fields.topic': 'Your Inquiry',
            'services.contact.fields.message': 'Write Your Message',
            'services.contact.cta': 'Send Message',

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

            // Success Stories Section
            'success.subtitle': 'Success Stories',
            'success.title': 'Discover our <span class="rs-theme-orange">successful projects</span> across Egypt',
            'success.itemFactoryEstablishment': 'Factory Establishment',
            'success.itemFactoryDesc': 'Complete Poultry Factory Setup',
            'success.itemEquipmentSupply': 'Equipment Supply',
            'success.itemEquipmentDesc': 'Kaya Steel Production Lines',
            'success.itemRestructuring': 'Restructuring',
            'success.itemRestructuringDesc': 'Meat Factory Transformation',

            // Counter Section
            'metrics.factoryLaunches': 'Factories launched with Growth Roots',
            'metrics.efficiencyGain': 'Average efficiency improvement',
            'metrics.mealCapacity': 'Million meals of annual capacity',
            'metrics.trainingHours': 'Hours of technical training delivered',

            // Work Process Section
            'work.subtitle': 'Work Process',
            'work.title': 'How we <span class="rs-theme-orange">complete</span> work',
            'work.step1Title': 'Product Design and Planning',
            'work.step1Desc': 'The point of using Lorem Ipsum is that it has more-or-less normal.',
            'work.step2Title': 'Component Sourcing and Procurement',
            'work.step2Desc': 'Reader will be distracted by the readable content of a page when looking.',
            'work.step3Title': 'Testing and Quality Control',
            'work.step3Desc': 'Packages and web page editors now use as their default model.',
            'work.step4Title': 'Final Assembly and Integration',
            'work.step4Desc': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.',

            // Contact Section
            'contact.title': 'Have any Question?',
            'contact.description': 'The point of using Lorem Ipsum is that it has more-or-less normal',
            'contact.button': 'Send Message',

            // Footer Section
            'footer.aboutTitle': 'About Growth Roots',
            'footer.aboutDescription': "Egypt's leading provider of comprehensive food manufacturing solutions, specializing in meat and poultry production facilities.",
            'footer.linksTitle': 'Useful Links',
            'footer.linkAbout': 'About Us',
            'footer.linkServices': 'Our Services',
            'footer.linkPortfolio': 'Success Stories',
            'footer.linkFaq': 'FAQ',
            'footer.linkContact': 'Contact Us',
            'footer.addressTitle': 'Office Address',
            'footer.address': 'Cairo, Egypt<br>Industrial Zone',
            'footer.emailTitle': 'Email Address',
            'footer.emailPrompt': 'Ready to start your project?',
            'footer.email': 'info@growthroots.com',
            'footer.phoneTitle': 'Phone Number',
            'footer.phonePrimary': '+20 xxx xxx xxxx',
            'footer.phoneSecondary': '+20 xxx xxx xxxx',
            'footer.followTitle': 'Follow Us',
            'footer.copyright': ' 2025 Growth Roots. All Rights Reserved. | Your Complete Food Manufacturing Partner',

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
            'hero.subtitle': '',
            'hero.brandName': '',
            'hero.title': 'من الفكرة إلى الإنتاج الكامل',
            'hero.description': 'جروث رووتس تقدم حلولاً شاملة لتأسيس وتشغيل وتطوير مصانع اللحوم والدواجن في مصر والمنطقة.',
            'hero.exploreServices': 'استكشف خدماتنا',
            'hero.contactUs': 'تواصل معنا',
            'hero.slide1Title': 'نقود نمو مصنّعي الغذاء في المنطقة',
            'hero.slide1Desc': 'تنفيذ كامل للمشروعات من الفكرة حتى التشغيل لمصانع إنتاج اللحوم والدواجن.',
            'hero.slide1Cta': 'استكشف خدماتنا',
            'hero.slide2Title': 'تصاميم معمارية تعزز كفاءة خطوط الإنتاج',
            'hero.slide2Desc': 'تنظيم تدفق العمليات ومناطق النظافة والامتثال التشريعي بأعلى المعايير.',
            'hero.slide2Cta': 'شاهد قصص نجاحنا',
            
            // About Section
            'about.subtitle': 'عن جروث روتس',
            'about.title': 'شريكك الموثوق لأكثر من <span class="rs-theme-orange">20 عامًا</span> في صناعة الغذاء',
            'about.description': 'جروث رووتس هي المزود الرائد في مصر للحلول الشاملة للتصنيع الغذائي والمتخصص في منشآت إنتاج اللحوم والدواجن.',
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
            'services.pageTitle': 'خدماتنا',
            'services.breadcrumbHome': 'الرئيسية',
            'services.cards.establishment.title': 'تأسيس مصانع الغذاء',
            'services.cards.establishment.desc': 'دراسات جدوى شاملة، تصميم المواقع، والإشراف على التنفيذ لضمان انطلاقة ناجحة.',
            'services.cards.cta': 'اكتشف التفاصيل',
            'services.cards.equipment.title': 'توريد خطوط الإنتاج والمعدات',
            'services.cards.equipment.desc': 'مكائن أوروبية عبر كايا ستيل مع تكامل كامل لخطوط الإنتاج.',
            'services.cards.operations.title': 'إدارة العمليات والتشغيل',
            'services.cards.operations.desc': 'إدارة يومية، ضبط جودة، وتحسين تدفق العمل لضمان الاستدامة الربحية.',
            'services.cards.training.title': 'برامج التدريب وبناء القدرات',
            'services.cards.training.desc': 'تأهيل الكوادر على المعدات الحديثة وممارسات الجودة بنظام تدريبي متكامل.',
            'services.cards.productDev.title': 'تطوير المنتجات والوصفات',
            'services.cards.productDev.desc': 'ابتكار وصفات تلائم السوق وتحقيق التوازن بين الجودة والتكلفة.',
            'services.cards.rawMaterials.title': 'توريد المواد الخام',
            'services.cards.rawMaterials.desc': 'مواد خام موثوقة ومنتجات فروزو لضمان استقرار التوريد وجودة الإنتاج.',
            'services.cards.restructuring.title': 'إعادة هيكلة المصانع',
            'services.cards.restructuring.desc': 'تحويل خطوط الإنتاج المتعثرة إلى منشآت مربحة عبر تقييم شامل وخطط تنفيذية.',
            'services.cards.restaurant.title': 'دعم المطاعم وسلاسل الأغذية',
            'services.cards.restaurant.desc': 'توحيد الوصفات، ضبط التكاليف، ورفع جودة المنتجات لضمان تجربة متكررة متميزة.',
            'services.benefits.subtitle': 'لماذا تختار جروث رووتس؟',
            'services.benefits.title': 'نقود نجاح شركتك الغذائية بخبرة تمتد لأكثر من <span class="rs-black">20 عاماً</span>',
            'services.benefits.items.experts.title': 'فريق خبراء متخصص',
            'services.benefits.items.experts.desc': 'خبرات متعددة تغطي الهندسة، الإنتاج، تكنولوجيا الأغذية، وإدارة الجودة.',
            'services.benefits.items.quality.title': 'منظومة جودة متكاملة',
            'services.benefits.items.quality.desc': 'معايير HACCP وتدقيق متواصل لضمان سلامة المنتجات وكفاءتها.',
            'services.benefits.items.satisfaction.title': 'شراكة مبنية على الثقة',
            'services.benefits.items.satisfaction.desc': 'دعم مستمر وشفافية كاملة لضمان تحقيق أهدافك التشغيلية والمالية.',
            'services.benefits.items.regional.title': 'انتشار إقليمي واسع',
            'services.benefits.items.regional.desc': 'مشروعات ناجحة عبر مصر والمنطقة تدعم توسع شركتك بثقة.',
            'services.benefits.items.professionals.title': 'كوادر محترفة ومدربة',
            'services.benefits.items.professionals.desc': 'فريق عمليات ومتابعة يقدم حلولاً فورية لأي تحديات تشغيلية.',
            'services.benefits.items.workmanship.title': 'أدوات تصنيع بمعايير عالمية',
            'services.benefits.items.workmanship.desc': 'معدات وتصاميم تخضع لمعايير أوروبية لضمان استدامة الإنتاج.',
            'services.process.subtitle': 'خطوات تنفيذ المشروع',
            'services.process.title': 'رحلة التنفيذ من التخطيط إلى التشغيل',
            'services.process.stepLabel': 'الخطوة',
            'services.process.steps.design.title': 'التصميم والتخطيط',
            'services.process.steps.design.desc': 'نحلل احتياجاتك ونصمم مخطط المصنع بما يتوافق مع معايير السلامة والإنتاج.',
            'services.process.steps.sourcing.title': 'توريد المكونات والمعدات',
            'services.process.steps.sourcing.desc': 'نزودك بخطوط الإنتاج ومعداتها من شركاء جروث رووتس.',
            'services.process.steps.testing.title': 'التشغيل التجريبي وضبط الجودة',
            'services.process.steps.testing.desc': 'نختبر المعدات، نطبق أنظمة HACCP، ونضمن توافق المنتج مع معاييرك.',
            'services.process.steps.launch.title': 'الإطلاق والتسليم',
            'services.process.steps.launch.desc': 'نطلق المصنع، ندرب الفرق التشغيلية، ونبقى شريكك في المتابعة والتطوير.',
            'services.contact.title': 'هل لديك استفسار؟',
            'services.contact.desc': 'فريقنا جاهز لدعمك في كل مرحلة من مشروعك التصنيعي.',
            'services.contact.fields.name': 'الاسم الكامل',
            'services.contact.fields.email': 'البريد الإلكتروني',
            'services.contact.fields.topic': 'مجال الاستفسار',
            'services.contact.fields.message': 'اكتب رسالتك',
            'services.contact.cta': 'أرسل رسالتك',

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

            // Success Stories Section
            'success.subtitle': 'قصص النجاح',
            'success.title': 'اكتشف <span class="rs-theme-orange">قصص نجاحنا</span> في مختلف أنحاء مصر',
            'success.itemFactoryEstablishment': 'تأسيس المصانع',
            'success.itemFactoryDesc': 'تنفيذ كامل لمصانع الدواجن',
            'success.itemEquipmentSupply': 'توريد المعدات',
            'success.itemEquipmentDesc': 'خطوط إنتاج كايا ستيل',
            'success.itemRestructuring': 'إعادة الهيكلة',
            'success.itemRestructuringDesc': 'تحويل مصانع اللحوم المتعثرة',

            // Counter Section
            'metrics.factoryLaunches': 'مصانع أطلقناها مع جروث رووتس',
            'metrics.efficiencyGain': 'متوسط تحسن الكفاءة',
            'metrics.mealCapacity': 'ملايين الوجبات من الطاقة الإنتاجية السنوية',
            'metrics.trainingHours': 'ساعات التدريب التقني المقدمة',

            // Work Process Section
            'work.subtitle': 'عملية العمل',
            'work.title': 'كيف نُكمل <span class="rs-theme-orange">العمل</span>',
            'work.step1Title': 'تصميم المنتج والتخطيط',
            'work.step1Desc': 'تكمن فائدة استخدام لوريم إيبسوم في أنه يشبه النص الطبيعي إلى حد كبير.',
            'work.step2Title': 'توريد المكوّنات وشراؤها',
            'work.step2Desc': 'قد يتشتت القارئ بسبب محتوى الصفحة عند الاطلاع عليه.',
            'work.step3Title': 'الاختبار وضبط الجودة',
            'work.step3Desc': 'تعتمد حزم البرمجيات ومحررات الصفحات عليه كنموذج افتراضي.',
            'work.step4Title': 'التجميع النهائي والتكامل',
            'work.step4Desc': 'يُعاد استخدام المقطع القياسي من لوريم إيبسوم منذ القرن السادس عشر حتى الآن.',

            // Contact Section
            'contact.title': 'هل لديك أي استفسار؟',
            'contact.description': 'تكمن فائدة استخدام لوريم إيبسوم في أنه يشبه النص الطبيعي إلى حد كبير.',
            'contact.button': 'أرسل الرسالة',

            // Footer Section
            'footer.aboutTitle': 'عن جروث رووتس',
            'footer.aboutDescription': 'المزود الرائد في مصر للحلول الشاملة للتصنيع الغذائي والمتخصص في منشآت إنتاج اللحوم والدواجن.',
            'footer.linksTitle': 'روابط مفيدة',
            'footer.linkAbout': 'من نحن',
            'footer.linkServices': 'خدماتنا',
            'footer.linkPortfolio': 'قصص النجاح',
            'footer.linkFaq': 'الأسئلة الشائعة',
            'footer.linkContact': 'تواصل معنا',
            'footer.addressTitle': 'عنوان المكتب',
            'footer.address': 'القاهرة، مصر<br>المنطقة الصناعية',
            'footer.emailTitle': 'البريد الإلكتروني',
            'footer.emailPrompt': 'مستعد لبدء مشروعك؟',
            'footer.email': 'info@growthroots.com',
            'footer.phoneTitle': 'رقم الهاتف',
            'footer.phonePrimary': '+20 xxx xxx xxxx',
            'footer.phoneSecondary': '+20 xxx xxx xxxx',
            'footer.followTitle': 'تابعنا',
            'footer.copyright': ' 2025 جروث رووتس. جميع الحقوق محفوظة. | شريكك الكامل في التصنيع الغذائي',

            // Slider Text
            'slider.establishment': 'تأسيس',
            'slider.equipments': 'معدات',
            'slider.operations': 'عمليات',
            'slider.training': 'تدريب',
            'slider.ingredients': 'مواد خام',
            'slider.restructuring': 'إعادة هيكلة',
            'slider.support': 'حلول دعم',
            
            // CTA Section
            'cta.title': 'مستعد لبدء مشروع التصنيع الغذائي؟',
            'cta.description': 'دعنا نحول رؤيتك إلى منشأة إنتاج مزدهرة. تواصل مع فريقنا اليوم للحصول على استشارة.',
            'cta.requestConsultation': 'اطلب استشارة',
            'cta.callUs': 'اتصل بنا الآن',
            
            // Footer
            'footer.aboutGrowthRoots': 'عن جروث رووتس',
            'footer.aboutText': 'المزود الرائد في مصر للحلول الشاملة لصناعة الغذاء، متخصصون في منشآت إنتاج اللحوم والدواجن.',
            'footer.usefulLinks': 'روابط مفيدة',
            'footer.officeAddress': 'عنوان المكتب',
            'footer.location': 'القاهرة، مصر<br>المنطقة الصناعية',
            'footer.emailAddress': 'البريد الإلكتروني',
            'footer.readyToStart': 'مستعد لبدء مشروعك؟',
            'footer.phoneNumber': 'رقم الهاتف',
            'footer.followUs': 'تابعنا',
            'footer.copyright': 'جروث رووتس. جميع الحقوق محفوظة. | شريكك الكامل في التصنيع الغذائي'
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
            if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
                const translation = translations[lang][key];
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
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
    function bindLanguageToggleHandlers() {
        document.querySelectorAll('.language-menu a').forEach(link => {
            link.addEventListener('click', onLanguageToggleClick);
        });
    }

    function onLanguageToggleClick(event) {
        event.preventDefault();
        const lang = this.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
            localStorage.setItem('siteLanguage', lang);
            currentLang = lang;
            updateLanguageButtons();
            window.location.reload();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    function initialize() {
        initLanguage();
        bindLanguageToggleHandlers();
    }

    // expose helpers for dynamically injected header
    window.attachLanguageToggle = bindLanguageToggleHandlers;
    window.initLanguageToggle = initLanguage;

})();
