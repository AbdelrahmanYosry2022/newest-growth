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

            // Service Details - Factory Establishment
            'serviceDetails.factoryEst.heroTitle': 'Factory Establishment',
            'serviceDetails.factoryEst.intro': 'Factory Establishment is one of our core services at Growth Roots, where we provide comprehensive solutions for creating food manufacturing facilities from scratch to full operation. We handle all phases of establishment, starting from feasibility studies and initial planning, through engineering design and construction, to equipment installation and trial operations.',
            'serviceDetails.factoryEst.section1.title': 'Feasibility Studies and Planning',
            'serviceDetails.factoryEst.section1.item1': 'Comprehensive project feasibility studies',
            'serviceDetails.factoryEst.section1.item2': 'Market and competitor analysis',
            'serviceDetails.factoryEst.section1.item3': 'Optimal factory location selection',
            'serviceDetails.factoryEst.section1.item4': 'Timeline and financial planning for the project',
            'serviceDetails.factoryEst.section2.title': 'Design and Engineering',
            'serviceDetails.factoryEst.section2.item1': 'Factory engineering blueprint design',
            'serviceDetails.factoryEst.section2.item2': 'Highly efficient production line planning',
            'serviceDetails.factoryEst.section2.item3': 'Ventilation and cooling system design',
            'serviceDetails.factoryEst.section2.item4': 'Storage and processing area planning',
            'serviceDetails.factoryEst.section3.title': 'Construction and Setup',
            'serviceDetails.factoryEst.section3.item1': 'Construction and building work supervision',
            'serviceDetails.factoryEst.section3.item2': 'Electrical and mechanical system installation',
            'serviceDetails.factoryEst.section3.item3': 'Support facilities and utilities setup',
            'serviceDetails.factoryEst.section3.item4': 'Implementation of safety and occupational health standards',
            'serviceDetails.factoryEst.section4.title': 'Licenses and Certifications',
            'serviceDetails.factoryEst.section4.item1': 'Obtaining all required licenses',
            'serviceDetails.factoryEst.section4.item2': 'Factory qualification for quality certifications',
            'serviceDetails.factoryEst.section4.item3': 'Ensuring compliance with local and international standards',
            'serviceDetails.factoryEst.section4.item4': 'Obtaining Halal and ISO certifications',
            'serviceDetails.factoryEst.cta': 'Ready to build your factory? Let’s lay the foundation for your success together – contact us today!',
            'serviceDetails.factoryEst.sidebar.title': 'Our Services',
            'serviceDetails.factoryEst.sidebar.item1': 'Factory Establishment',
            'serviceDetails.factoryEst.sidebar.item2': 'Equipment Supply',
            'serviceDetails.factoryEst.sidebar.item3': 'Operations Management',
            'serviceDetails.factoryEst.sidebar.item4': 'Product Development',
            'serviceDetails.factoryEst.sidebar.item5': 'Training Programs',
            'serviceDetails.factoryEst.sidebar.item6': 'Raw Materials Supply',
            'serviceDetails.factoryEst.sidebar.item7': 'Factory Restructuring',
            'serviceDetails.factoryEst.sidebar.item8': 'Restaurant Support',
            'serviceDetails.factoryEst.sidebar.brochuresTitle': 'Download Brochures',
            'serviceDetails.factoryEst.sidebar.docTitle': 'Factory Establishment Report 2024',
            'serviceDetails.factoryEst.sidebar.docCta': 'Download PDF',

            // Service Details - Supply & Equipment
            'serviceDetails.supplyEquip.heroTitle': 'Supply & Equipment',
            'serviceDetails.supplyEquip.intro': 'At Growth Roots, we provide comprehensive Supply & Equipment services to ensure your factory gets the best equipment and technologies available in the market. We work with an extensive network of local and international suppliers to provide high-quality equipment at competitive prices.',
            'serviceDetails.supplyEquip.section1.title': 'Production Equipment',
            'serviceDetails.supplyEquip.section1.item1': 'Complete meat and poultry production lines',
            'serviceDetails.supplyEquip.section1.item2': 'Grinding, mixing, and forming equipment',
            'serviceDetails.supplyEquip.section1.item3': 'Industrial ovens and cooking equipment',
            'serviceDetails.supplyEquip.section1.item4': 'Modern packaging and wrapping machinery',
            'serviceDetails.supplyEquip.section2.title': 'Cooling and Freezing Systems',
            'serviceDetails.supplyEquip.section2.item1': 'Cold storage and freezing rooms',
            'serviceDetails.supplyEquip.section2.item2': 'Temperature control systems',
            'serviceDetails.supplyEquip.section2.item3': 'Refrigerated transport equipment',
            'serviceDetails.supplyEquip.section2.item4': 'Preservation and storage systems',
            'serviceDetails.supplyEquip.section3.title': 'Quality and Safety Equipment',
            'serviceDetails.supplyEquip.section3.item1': 'Quality testing and analysis devices',
            'serviceDetails.supplyEquip.section3.item2': 'Food safety monitoring systems',
            'serviceDetails.supplyEquip.section3.item3': 'Sterilization and sanitization equipment',
            'serviceDetails.supplyEquip.section3.item4': 'Production measurement and monitoring devices',
            'serviceDetails.supplyEquip.section4.title': 'Support Services',
            'serviceDetails.supplyEquip.section4.item1': 'Installation and trial operation',
            'serviceDetails.supplyEquip.section4.item2': 'Equipment operation training',
            'serviceDetails.supplyEquip.section4.item3': 'Maintenance and technical support',
            'serviceDetails.supplyEquip.section4.item4': 'Spare parts and consumables',
            'serviceDetails.supplyEquip.cta': 'At Growth Roots, we provide comprehensive Supply & Equipment services to ensure your factory gets the best equipment and technologies available in the market. We work with an extensive network of local and international suppliers to provide high-quality equipment at competitive prices.',

            // Service Details - Operation & Management
            'serviceDetails.operations.heroTitle': 'Operation & Management',
            'serviceDetails.operations.intro': 'Our role doesn\'t end once your factory is up and running. Through our Operation & Management support service, we stay by your side during the production phase to ensure everything runs smoothly. Our experts provide day-to-day technical management of your facility, closely monitoring production to maximize efficiency and maintain top quality.',
            'serviceDetails.operations.section1.title': 'Operational Management',
            'serviceDetails.operations.section1.item1': 'Daily production process monitoring',
            'serviceDetails.operations.section1.item2': 'Immediate analysis and resolution of operational issues',
            'serviceDetails.operations.section1.item3': 'Process optimization and waste reduction',
            'serviceDetails.operations.section1.item4': 'Production line efficiency improvement',
            'serviceDetails.operations.section2.title': 'Quality Assurance',
            'serviceDetails.operations.section2.item1': 'Product quality monitoring at every stage',
            'serviceDetails.operations.section2.item2': 'Implementation of safety and quality standards',
            'serviceDetails.operations.section2.item3': 'Final product testing and analysis',
            'serviceDetails.operations.section2.item4': 'Ensuring consistent taste and quality',
            'serviceDetails.operations.section3.title': 'Inventory Management',
            'serviceDetails.operations.section3.item1': 'Raw material level monitoring',
            'serviceDetails.operations.section3.item2': 'Storage and preservation process management',
            'serviceDetails.operations.section3.item3': 'Shipping and distribution coordination',
            'serviceDetails.operations.section3.item4': 'Inventory cycle optimization',
            'serviceDetails.operations.section4.title': 'Follow-up and Support',
            'serviceDetails.operations.section4.item1': 'Factory monitoring for a full year after launch',
            'serviceDetails.operations.section4.item2': 'Performance stability assurance',
            'serviceDetails.operations.section4.item3': 'Addressing any emerging challenges',
            'serviceDetails.operations.section4.item4': 'Ready support team for immediate intervention',
            'serviceDetails.operations.cta': 'We continuously fine-tune operational processes, minimize waste, and improve production line efficiency through ongoing optimization. Additionally, we commit to following up on your factory for up to a full year after launch to ensure stable performance and address any challenges that arise. With Growth Roots, you can be confident that your factory is operating at its best and meeting all safety and quality standards, with a dedicated support team ready to step in whenever needed.',

            // Service Details - Training & Development
            'serviceDetails.training.heroTitle': 'Training & Development',
            'serviceDetails.training.intro': 'We recognize that a skilled workforce is the backbone of any successful operation. Our Training & Development service provides comprehensive programs to build your team\'s capabilities and ensure they continue to excel. Our experts train your staff on operating modern machinery and advanced technologies, emphasizing the implementation of best practices for quality and safety on the production floor.',
            'serviceDetails.training.section1.title': 'Technical Training',
            'serviceDetails.training.section1.item1': 'Operating modern equipment and advanced technologies',
            'serviceDetails.training.section1.item2': 'Basic equipment maintenance and repair',
            'serviceDetails.training.section1.item3': 'Using control and monitoring systems',
            'serviceDetails.training.section1.item4': 'Implementing occupational safety standards',
            'serviceDetails.training.section2.title': 'Quality and Production Training',
            'serviceDetails.training.section2.item1': 'Implementing best quality practices',
            'serviceDetails.training.section2.item2': 'Production process monitoring',
            'serviceDetails.training.section2.item3': 'Product testing and analysis',
            'serviceDetails.training.section2.item4': 'Ensuring consistent quality and taste',
            'serviceDetails.training.section3.title': 'Scientific and Practical Knowledge Transfer',
            'serviceDetails.training.section3.item1': 'Improving production efficiency',
            'serviceDetails.training.section3.item2': 'Elevating final product quality to global standards',
            'serviceDetails.training.section3.item3': 'Refining recipes and formulations',
            'serviceDetails.training.section3.item4': 'Optimal use of raw materials',
            'serviceDetails.training.section4.title': 'Management Training',
            'serviceDetails.training.section4.item1': 'Operational process management',
            'serviceDetails.training.section4.item2': 'Production planning and organization',
            'serviceDetails.training.section4.item3': 'Inventory and raw material management',
            'serviceDetails.training.section4.item4': 'Implementing total quality systems',
            'serviceDetails.training.section5.title': 'Features of Our Training Programs',
            'serviceDetails.training.section5.item1': 'Customized Programs: Designed according to your factory\'s specific needs',
            'serviceDetails.training.section5.item2': 'Specialized Experts: Training by experts with over 20 years of experience',
            'serviceDetails.training.section5.item3': 'Practical Application: Hands-on training on actual equipment in the work environment',
            'serviceDetails.training.section5.item4': 'Continuous Follow-up: Performance evaluation and progress monitoring',
            'serviceDetails.training.cta': 'Our training programs also include guidance on refining product recipes and the optimal use of raw materials, ensuring consistency in taste and quality for every production batch. With Growth Roots, your team will gain the knowledge and skills needed to run the factory efficiently and professionally, securing your project\'s success for the long term.',

            // Service Details - Product Development
            'serviceDetails.productDev.heroTitle': 'Product Development',
            'serviceDetails.productDev.intro': 'When it comes to creating new food products or enhancing your existing ones, Growth Roots\' Product Development experts are here to fully support you. We offer recipe development and formulation services to achieve the optimal balance between quality and cost for your product.',
            'serviceDetails.productDev.section1.title': 'Recipe and Formulation Development',
            'serviceDetails.productDev.section1.item1': 'Proven standard production recipes for meat and poultry products',
            'serviceDetails.productDev.section1.item2': 'Custom formulations tailored to your specific requirements and goals',
            'serviceDetails.productDev.section1.item3': 'Achieving optimal balance between quality and cost',
            'serviceDetails.productDev.section1.item4': 'Ensuring consistent flavor and quality in every production batch',
            'serviceDetails.productDev.section2.title': 'Modification and Improvement of Existing Products',
            'serviceDetails.productDev.section2.item1': 'Adjusting current recipes or operating procedures',
            'serviceDetails.productDev.section2.item2': 'Compliance with Egyptian standard specifications',
            'serviceDetails.productDev.section2.item3': 'Meeting relevant regulatory requirements',
            'serviceDetails.productDev.section2.item4': 'Quality improvement and cost reduction',
            'serviceDetails.productDev.section3.title': 'Development for Global Markets',
            'serviceDetails.productDev.section3.item1': 'Developing local products to suit Gulf markets',
            'serviceDetails.productDev.section3.item2': 'Adapting products for European markets',
            'serviceDetails.productDev.section3.item3': 'Expanding product reach to international markets',
            'serviceDetails.productDev.section3.item4': 'Ensuring compliance with international standards',
            'serviceDetails.productDev.section4.title': 'Launch and Testing Support',
            'serviceDetails.productDev.section4.item1': 'Guiding new product prototyping',
            'serviceDetails.productDev.section4.item2': 'Supporting market launch process',
            'serviceDetails.productDev.section4.item3': 'Ensuring consistent taste and quality',
            'serviceDetails.productDev.section4.item4': 'Verifying ingredient safety',
            'serviceDetails.productDev.section5.title': 'Features of Our Product Development Service',
            'serviceDetails.productDev.section5.item1': 'Innovation with Confidence: With Growth Roots\' product development services, you can innovate with confidence, knowing that your final product will be safe, delicious, and fully compliant with local and global standards.',
            'serviceDetails.productDev.section5.item2': 'Specialized Expertise: Our team is experienced in developing local products to suit the tastes and standards of different markets, helping you expand your product\'s reach to international markets.',
            'serviceDetails.productDev.section5.item3': 'Comprehensive Support: We guide you through prototyping and launching new products, ensuring consistent flavor, quality, and ingredient safety.',
            'serviceDetails.productDev.cta': 'Turn your ideas into successful products – contact us today and let Growth Roots be your partner in developing a one-of-a-kind food product!',

            // Service Details - Raw Materials Supply
            'serviceDetails.rawMaterials.heroTitle': 'Raw Materials Supply',
            'serviceDetails.rawMaterials.intro': 'Growth Roots\' services extend to supplying high-quality raw materials essential for food manufacturing. We understand that the quality of the final product depends heavily on the quality of raw materials used, which is why we ensure the provision of the finest materials from trusted and certified sources.',
            'serviceDetails.rawMaterials.section1.title': 'Our Raw Materials Supply Services Include',
            'serviceDetails.rawMaterials.section1.item1': 'Flavor Enhancers and Seasonings: A wide range of natural and artificial enhancers to improve taste and flavor of food products',
            'serviceDetails.rawMaterials.section1.item2': 'Food Additives: Safe and internationally approved preservatives, colorants, and texture improvers',
            'serviceDetails.rawMaterials.section1.item3': 'Proteins and Essential Ingredients: High-quality raw materials for meat, poultry, and seafood products',
            'serviceDetails.rawMaterials.section1.item4': 'Spices and Seasonings: A diverse selection of natural spices and specialized blends',
            'serviceDetails.rawMaterials.section1.item5': 'Packaging Materials: Advanced packaging solutions that maintain product quality and safety',
            'serviceDetails.rawMaterials.section2.title': 'Features of Our Supply Service',
            'serviceDetails.rawMaterials.section2.item1': 'Quality Assurance: All materials undergo strict quality testing before delivery',
            'serviceDetails.rawMaterials.section2.item2': 'Standards Compliance: Materials certified according to international standards and halal certifications',
            'serviceDetails.rawMaterials.section2.item3': 'Regular Supply: Guaranteed continuity of supply and no production interruptions',
            'serviceDetails.rawMaterials.section2.item4': 'Technical Support: Consultations on optimal use of raw materials in your products',
            'serviceDetails.rawMaterials.section2.item5': 'Competitive Pricing: Economic solutions suitable for various production scales',
            'serviceDetails.rawMaterials.cta': "Growth Roots' services extend to supplying high-quality raw materials essential for food manufacturing. We understand that the quality of the final product depends heavily on the quality of raw materials used, which is why we ensure the provision of the finest materials from trusted and certified sources.",

            // Service Details - Factory Restructuring
            'serviceDetails.restructuring.heroTitle': 'Factory Restructuring',
            'serviceDetails.restructuring.intro': 'Growth Roots provides specialized Restructuring services for food factories and institutions facing operational challenges or seeking to modernize their operations and improve performance. We understand that some factories may go through difficult periods or need radical development to meet modern market requirements.',
            'serviceDetails.restructuring.section1.title': 'Restructuring Services Include',
            'serviceDetails.restructuring.section1.item1': 'Current Situation Analysis: Comprehensive study of all operational, financial, and performance aspects',
            'serviceDetails.restructuring.section1.item2': 'Identifying Weaknesses: Diagnosing problems and obstacles affecting efficiency and profitability',
            'serviceDetails.restructuring.section1.item3': 'Development Planning: Integrated strategy for reorganizing operations and improving performance',
            'serviceDetails.restructuring.section1.item4': 'Equipment Updates: Replacing or upgrading old production lines and machinery',
            'serviceDetails.restructuring.section1.item5': 'Factory Redesign: Improving space layout and operational flow',
            'serviceDetails.restructuring.section1.item6': 'Product Development: Improving existing recipes or developing new products',
            'serviceDetails.restructuring.section1.item7': 'Staff Training: Enhancing employee skills and qualifying them for updated operations',
            'serviceDetails.restructuring.section1.item8': 'Quality System Improvement: Implementing modern quality standards and effective control systems',
            'serviceDetails.restructuring.section2.title': 'Work Methodology',
            'serviceDetails.restructuring.section2.item1': '1. Initial Assessment: Comprehensive examination of current situation and priority identification',
            'serviceDetails.restructuring.section2.item2': '2. Strategic Planning: Developing a phased plan for development and improvement',
            'serviceDetails.restructuring.section2.item3': '3. Gradual Implementation: Applying changes in an organized and studied manner',
            'serviceDetails.restructuring.section2.item4': '4. Monitoring and Evaluation: Tracking results and making necessary adjustments',
            'serviceDetails.restructuring.section2.item5': '5. Continuous Support: Providing technical and consulting support after implementation',
            'serviceDetails.restructuring.section3.title': 'Expected Results',
            'serviceDetails.restructuring.section3.item1': 'Improved operational efficiency and increased productivity',
            'serviceDetails.restructuring.section3.item2': 'Reduced costs and improved profitability',
            'serviceDetails.restructuring.section3.item3': 'Enhanced product quality and safety standards',
            'serviceDetails.restructuring.section3.item4': 'Better work environment and employee satisfaction',
            'serviceDetails.restructuring.section3.item5': 'Increased market competitiveness',
            'serviceDetails.restructuring.cta': 'Growth Roots provides specialized Restructuring services for food factories and institutions facing operational challenges or seeking to modernize their operations and improve performance. We understand that some factories may go through difficult periods or need radical development to meet modern market requirements.',

            // Service Details - Restaurant Support
            'serviceDetails.restaurant.heroTitle': 'Restaurant Support',
            'serviceDetails.restaurant.intro': 'Growth Roots\' services also extend to Restaurant Support, assisting fast-food outlets and food chains that may be facing operational challenges affecting quality or profitability. If your restaurant brand is struggling with inconsistent quality, difficulties in managing operations, or obstacles in expanding to new locations, our team offers specialized solutions to help you overcome these issues. We start by conducting a thorough analysis of every aspect of your restaurant\'s operations – from kitchen workflows to customer service – to pinpoint problem areas and improvement opportunities. Based on this analysis, we develop a tailored improvement or restructuring plan aimed at boosting operational efficiency and elevating the quality of your food and service.',
            'serviceDetails.restaurant.section1.title': 'Solutions We Provide',
            'serviceDetails.restaurant.section1.item1': 'Kitchen Redesign: Streamlining workflows for increased efficiency',
            'serviceDetails.restaurant.section1.item2': 'Standardized Operating Procedures: Establishing procedures that can be applied across all branches to ensure consistent experience',
            'serviceDetails.restaurant.section1.item3': 'Staff Training: Training programs on best practices for food safety and service excellence',
            'serviceDetails.restaurant.section1.item4': 'Modern Technology Integration: Implementing advanced POS systems and inventory tracking tools',
            'serviceDetails.restaurant.section1.item5': 'Improved Oversight: Quality and performance monitoring systems',
            'serviceDetails.restaurant.section1.item6': 'Increased Operational Efficiency: Process improvements to reduce waste and increase productivity',
            'serviceDetails.restaurant.section2.title': 'Areas We Cover',
            'serviceDetails.restaurant.section2.item1': 'Kitchen Management: Improving workflow and organizing operations',
            'serviceDetails.restaurant.section2.item2': 'Inventory Management: Effective systems for tracking and monitoring raw materials',
            'serviceDetails.restaurant.section2.item3': 'Customer Service: Training teams to deliver exceptional service',
            'serviceDetails.restaurant.section2.item4': 'Quality Control: Establishing consistent standards for food and service quality',
            'serviceDetails.restaurant.section2.item5': 'Cost Management: Improving profitability through process optimization',
            'serviceDetails.restaurant.section2.item6': 'Expansion and Growth: Strategies for successfully opening new branches',
            'serviceDetails.restaurant.cta': 'Our ultimate goal is to enable your restaurant to deliver an outstanding customer experience through smooth operations that support the growth and reputation of your brand. Elevate your restaurant\'s operations and customer experience – contact us today, and let us help you turn challenges into opportunities for success and enhance your brand\'s reputation.',

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
'services.factoryEstablishmentDesc': 'تشمل خدمة تأسيس المصانع كل ما يلزم لتحويل فكرتك إلى واقع صناعي ناجح. نبدأ بإعداد دراسات الجدوى المفصّلة ووضع خطة عمل مناسبة لأهدافك ومساحة مصنعك وميزانيتك. ثم نتولى تصميم المرافق وخطوط الإنتاج وفق أحدث معايير السلامة والجودة، مع الإشراف الكامل على عمليات الإنشاء والبناء. بعد ذلك نقوم بتوريد وتركيب جميع المعدات والآلات اللازمة وتشغيلها للتأكد من انطلاق مصنعك بكفاءة. نحرص في كل خطوة على اتباع أسس علمية صحيحة واستخدام التكنولوجيا المتقدمة لتحقيق أفضل النتائج الممكنة. مع جروث روتس، ستكون عملية تأسيس مصنعك سلسة ومدروسة من البداية إلى النهاية، مما يضعك على طريق نجاح قوي ومستدام.<br><br>هل لديك فكرة لمصنع غذائي؟ دعنا نضع حجر الأساس لنجاحك سويًا – تواصل معنا للبدء.',
'services.equipmentSupply': 'توريد المعدات',
'services.equipmentSupplyDesc': 'من خلال خدمة التوريد، نضمن تجهيز مصنعك بكافة خطوط الإنتاج والمعدات الحديثة اللازمة. بفضل شراكتنا مع شركة Kaya Steel للصناعات الهندسية، نقوم بتصميم وتصنيع معدات إنتاج عالية الجودة محليًا وفقًا للمعايير الأوروبية الصارمة. يشمل ذلك كل ما يحتاجه مصنع اللحوم أو الدواجن الخاص بك – ابتداءً من خطوط إنتاج أصابع الناجتس والدجاج الاستربس، ومرورًا بخطوط إنتاج اللانشون والسوسيس، ومعدات المطابخ الصناعية، وأحواض التعقيم وسيور النقل، وصولًا إلى أنفاق وغرف التجميد لتخزين المنتجات. كما يمكننا توفير معدات مستوردة جديدة وفق احتياجات مشروعك. مع جروث روتس، ستحصل على أفضل المعدات بأعلى جودة وأفضل تكلفة، مما يضمن لك تشغيلًا فعالًا وموثوقًا لمصنعك.<br><br>مهتم بمعداتنا وخطوط الإنتاج؟ اطلب كتالوج المعدات الخاص بنا اليوم واستكشف مجموعة حلول التوريد الكاملة لدينا.',
'services.operationsManagementDesc': 'لا يتوقف دعمنا عند تسليم المصنع جاهزًا؛ فخدمة التشغيل لدينا تضمن استمرار الوقوف بجانبك خلال مرحلة تشغيل مصنعك لضمان سير العمل بسلاسة. يقدم خبراؤنا إدارة فنية وتشغيلية للمصنع، فيراقبون عمليات الإنتاج عن كثب لتحقيق أعلى إنتاجية وجودة ممكنة. وإذا ظهرت أي مشكلة في أي خطوة من خطوات الإنتاج أو في حفظ وتخزين المنتجات، فإننا نبادر بتحليلها وحلها فورًا لضمان عدم تعطّل العمل. نعمل باستمرار على ضبط العمليات التشغيلية وتقليل الهدر وتحسين كفاءة خطوط الإنتاج وفق منهجية التحسين المستمر. إضافة إلى ذلك، نلتزم بمتابعة مصنعك بعد التشغيل لفترة تصل إلى عام كامل لضمان استقرار الأداء ومعالجة أي تحديات قد تطرأ. مع جروث روتس، يمكنك الاطمئنان بأن مصنعك يعمل بأفضل صورة ممكنة ويلتزم بمعايير السلامة والجودة، مع وجود فريق دعم جاهز للتدخل الفوري كلما احتجت.<br><br>دع خبراءنا يعتنون بتشغيل مصنعك لضمان نجاح مستدام – تواصل معنا الآن للحصول على الدعم الفني المستمر.',
'services.trainingProgramsDesc': 'نعلم أن الكوادر البشرية المؤهلة هي عماد نجاح أي منشأة صناعية. لذلك توفر خدمة التدريب لدينا برامج شاملة لبناء قدرات فريق عملك وضمان استمرارية تميّز أدائه. يقوم خبراؤنا بتدريب العاملين لديك على تشغيل المعدات الحديثة والتقنيات المتطورة، مع التأكيد على تطبيق أفضل ممارسات الجودة والسلامة على خطوط الإنتاج. ونحرص على نقل الخبرات العلمية والعملية إلى فريقك لرفع كفاءة الإنتاج وجودة المنتج النهائي إلى المستويات العالمية. تغطي برامجنا التدريبية أيضًا إرشادات حول تحسين الوصفات والاستخدام الأمثل للمواد الخام لضمان ثبات الطعم والجودة في كل دفعة إنتاج. ومع جروث روتس، يكتسب فريقك المعرفة والمهارات اللازمة لتشغيل المصنع بكفاءة واحترافية، مما يؤمن استدامة نجاح مشروعك على المدى الطويل.<br><br>ارتقِ بمهارات فريقك الإنتاجية – تواصل معنا اليوم لتنظيم برامج تدريبية مخصصة تلبي احتياجات مصنعك.',
'services.productDevelopmentDesc': 'عندما يتعلق الأمر بابتكار منتجات غذائية جديدة أو تحسين منتجاتك الحالية، فإن خبراء تطوير المنتجات في جروث روتس جاهزون لتقديم الدعم الكامل. نقدم خدمات تطوير الوصفات والتركيبات لتحقيق التوازن الأمثل بين الجودة والتكلفة في منتجك. إذا كنت تبدأ من الصفر، نوفر لك وصفات تشغيل قياسية معتمدة لمنتجات اللحوم والدواجن، أو نصمم تركيبات خاصة تناسب متطلباتك وطموحاتك. كما يمكننا تعديل وصفاتك الحالية أو خطة التشغيل لديك لتتوافق مع المواصفات القياسية المصرية ومتطلبات الجهات الرقابية ذات الصلة. فريقنا ملمّ أيضًا بتطوير المنتجات المحلية لتلائم أذواق ومتطلبات الأسواق الخليجية والأوروبية في حال استهداف التصدير، مما يساعدك على توسعة نطاق منتجك للأسواق العالمية. سنكون إلى جانبك خلال تجربة المنتج الجديد وإطلاقه، مع ضمان ثبات الطعم والجودة وسلامة المكونات. مع خدمات تطوير المنتجات من جروث روتس، يمكنك الابتكار بثقة، لأننا سنضمن أن منتجك النهائي آمن ولذيذ ومتوافق مع المعايير المحلية والدولية على حد سواء.<br><br>حوّل أفكارك إلى منتجات ناجحة – تواصل معنا اليوم ليكون جروث روتس شريكك في تطوير منتج غذائي فريد من نوعه!',
'services.rawMaterialsDesc': 'يُعد تأمين الخامات والإضافات عالية الجودة عاملًا أساسيًا في نجاح أي مصنع للأغذية. من خلال شبكتنا الواسعة من الموردين المحليين والعالميين، نساعدك في الحصول على أفضل المكونات، مثل التوابل والخلطات والمواد الحافظة الطبيعية وغيرها، بأسعار تنافسية وبجودة موثوقة. كما نوفر لك إضافات غذائية ومكسبات طعم متخصصة مصنّعة وفق أعلى معايير الجودة تحت علامتنا التجارية Ricatto. سواء كنت بحاجة إلى مواد أولية أساسية لعملية الإنتاج أو مكونات لتحسين نكهة المنتج وزيادة جاذبيته، فإن جروث روتس ستكون وجهتك المتكاملة لتلبية تلك الاحتياجات. نحن نضمن أن تساهم الخامات والإضافات التي نوفرها في رفع جودة منتجك النهائي مع الحفاظ على معايير السلامة الغذائية وتخفيض تكاليف الإنتاج قدر الإمكان.<br><br>احصل على أفضل المواد الخام والمكونات لمصنعك – تواصل معنا الآن لنوفّر لك قائمة توريد مخصّصة تناسب احتياجاتك.',
'services.factoryRestructuringDesc': 'إذا كان مصنعك القائم يعاني من مشكلات تشغيلية أو تكبد خسائر، فإن خدمة إعادة الهيكلة من جروث روتس مصممة لوضعه على الطريق الصحيح من جديد. سنقوم بإجراء تقييم شامل لكافة جوانب عمليات المصنع لتحديد نقاط الضعف وفرص التحسين. سواء كانت المشاكل في جودة المنتج، أو كفاءة خط الإنتاج، أو التكاليف التشغيلية المرتفعة، سنجد الحلول العملية لمعالجتها وتحسين الأداء. قد يشمل ذلك تحديث أو تعديل خطوط الإنتاج الحالية، وإعادة تنظيم تدفق العمل وعمليات التشغيل، وتدريب الموظفين من جديد على أساليب إنتاج أكثر فعالية، بالإضافة إلى إدخال تقنيات حديثة لتعزيز الكفاءة والإنتاجية. كذلك نحرص على تأهيل مصنعك للحصول على كافة متطلبات هيئات سلامة الغذاء، بما في ذلك مساعدتك في نيل الشهادات اللازمة مثل شهادات الآيزو وشهادات حلال لضمان مطابقة منشأتك لأعلى المعايير الصحية والجودة. هدفنا هو تحويل مصنعك المتعثر إلى منشأة ناجحة ومنتجة، قادرة على المنافسة وتحقيق الأرباح كما خططت لها.<br><br>لا تدع مصنعك يواجه الصعوبات بمفرده – تواصل معنا ودعنا نعمل معًا لإعادة بنائه وجعله أقوى من ذي قبل.',
'services.restaurantSupportDesc': 'تمتد خدمات جروث روتس لتشمل دعم المطاعم وسلاسل الوجبات السريعة التي قد تواجه تحديات تشغيلية تؤثر على جودة الخدمة أو الربحية. إذا كانت علامتك التجارية في قطاع المطاعم تعاني من مشاكل في اتساق الجودة، أو عقبات في إدارة العمليات وتوسعة الفروع، فإن فريقنا يقدم حلولًا متخصصة لمساعدتك في تجاوز هذه العقبات. نبدأ بتحليل دقيق لكافة جوانب عمليات مطعمك – من آليات العمل داخل المطبخ إلى خدمة العملاء – لتحديد مكامن الخلل والفرص. بناءً على هذا التحليل، نضع خطة تطوير أو إعادة هيكلة مخصصة لتحسين كفاءة التشغيل ورفع مستوى جودة الطعام والخدمة المقدمة. قد تتضمن الحلول إعادة تصميم المطبخ لتنظيم سير العمل بشكل أفضل، ووضع معايير تشغيل موحّدة يمكن تطبيقها في جميع الفروع لضمان اتساق التجربة، بالإضافة إلى تدريب العاملين على أفضل ممارسات سلامة الغذاء وجودة الخدمة. كما نساعد في دمج التقنيات الحديثة مثل أنظمة نقاط البيع أو أنظمة تتبّع المخزون لتحسين الرقابة وزيادة الكفاءة التشغيلية. هدفنا النهائي هو تمكين مطعمك من تقديم تجربة متميزة لعملائك مع عمليات تشغيلية سلسة تدعم نمو وسمعة علامتك التجارية.<br><br>ارتقِ بمستوى مطعمك التشغيلي وخدمة عملائك – تواصل معنا الآن لنساعدك في تحويل التحديات إلى فرص نجاح وتعزيز سمعة علامتك التجارية.',
'services.restaurantSupport': 'دعم المطاعم',
'services.restaurantSupportDesc': 'حلول متخصصة للمطاعم وسلاسل الأغذية لتحسين العمليات والاتساق.',
'services.pageTitle': 'خدماتنا',
'services.breadcrumbHome': 'الرئيسية',
'services.cards.establishment.title': 'تأسيس مصانع الغذاء',
            'services.cards.establishment.desc': 'تشمل خدمة تأسيس المصانع كل ما يلزم لتحويل فكرتك إلى واقع صناعي ناجح، من دراسات الجدوى المفصّلة وتصميم المرافق وخطوط الإنتاج، إلى الإشراف الكامل على البناء وتوريد المعدات وتشغيلها لضمان انطلاقة سلسة ومدروسة.',
            'services.cards.cta': 'اكتشف التفاصيل',
            'services.cards.equipment.title': 'توريد خطوط الإنتاج والمعدات',
            'services.cards.equipment.desc': 'من خلال خدمة التوريد نجهّز مصنعك بكل خطوط الإنتاج والمعدات الحديثة عبر شراكتنا مع Kaya Steel، لتشمل خطوط اللحوم والدواجن والمطابخ الصناعية وأنفاق التجميد مع إمكانية توفير معدات مستوردة وفق احتياجات مشروعك.',
            'services.cards.operations.title': 'إدارة العمليات والتشغيل',
            'services.cards.operations.desc': 'نستمر معك بعد التشغيل بإدارة فنية وتشغيلية يومية، ومتابعة الجودة وحل التحديات فور ظهورها، مع ضبط العمليات وتقليل الهدر لضمان كفاءة عالية واستقرار أداء مصنعك.',
            'services.cards.training.title': 'برامج التدريب وبناء القدرات',
            'services.cards.training.desc': 'برامج تدريب شاملة تبني قدرات فريقك على تشغيل المعدات الحديثة وتطبيق أفضل ممارسات الجودة والسلامة مع نقل الخبرات العلمية والعملية لضمان أداء ثابت على المدى الطويل.',
            'services.cards.productDev.title': 'تطوير المنتجات والوصفات',
            'services.cards.productDev.desc': 'ندعمك في ابتكار أو تحسين منتجاتك عبر تطوير الوصفات والتركيبات وتحويل الأفكار إلى منتجات متوافقة مع المعايير المحلية والدولية وقابلة للتوسع في الأسواق الإقليمية.',
            'services.cards.rawMaterials.title': 'توريد المواد الخام',
            'services.cards.rawMaterials.desc': 'نوفر لك مكونات وإضافات عالية الجودة من موردين موثوقين ومن علامة Ricatto لضمان طعم ثابت، وسلامة غذائية، وتكاليف إنتاج متوازنة.',
            'services.cards.restructuring.title': 'إعادة هيكلة المصانع',
            'services.cards.restructuring.desc': 'إعادة هيكلة شاملة لمصنعك المتعثر عبر تقييم نقاط الضعف، تحديث خطوط الإنتاج، إعادة تنظيم العمليات، وتأهيلك للشهادات المطلوبة لضمان عودة المصنع للربحية.',
            'services.cards.restaurant.title': 'دعم المطاعم وسلاسل الأغذية',
            'services.cards.restaurant.desc': 'نحلل عمليات مطعمك من المطبخ إلى خدمة العملاء ونضع خطط تطوير مخصصة تشمل إعادة تصميم سير العمل، معايير تشغيل موحّدة، تدريب الفرق، ودمج التقنيات الحديثة لضمان جودة ثابتة وربحية أعلى.',
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

            // Service Details - Factory Establishment
            'serviceDetails.factoryEst.heroTitle': 'تأسيس المصانع',
            'serviceDetails.factoryEst.intro': 'تشمل خدمة تأسيس المصانع كل ما يلزم لتحويل فكرتك إلى واقع صناعي ناجح. نبدأ بإعداد دراسات الجدوى المفصّلة ووضع خطة عمل مناسبة لأهدافك ومساحة مصنعك وميزانيتك. ثم نتولى تصميم المرافق وخطوط الإنتاج وفق أحدث معايير السلامة والجودة، مع الإشراف الكامل على عمليات الإنشاء والبناء. بعد ذلك نقوم بتوريد وتركيب جميع المعدات والآلات اللازمة وتشغيلها للتأكد من انطلاق مصنعك بكفاءة. نحرص في كل خطوة على اتباع أسس علمية صحيحة واستخدام التكنولوجيا المتقدمة لتحقيق أفضل النتائج الممكنة. مع جروث روتس، ستكون عملية تأسيس مصنعك سلسة ومدروسة من البداية إلى النهاية، مما يضعك على طريق نجاح قوي ومستدام.',
            'serviceDetails.factoryEst.section1.title': 'دراسة الجدوى والتخطيط',
            'serviceDetails.factoryEst.section1.item1': 'إعداد دراسات جدوى شاملة للمشروع',
            'serviceDetails.factoryEst.section1.item2': 'تحليل السوق والمنافسين',
            'serviceDetails.factoryEst.section1.item3': 'تحديد الموقع الأمثل للمصنع',
            'serviceDetails.factoryEst.section1.item4': 'وضع الخطط الزمنية والمالية للمشروع',
            'serviceDetails.factoryEst.section2.title': 'التصميم والهندسة',
            'serviceDetails.factoryEst.section2.item1': 'تصميم المخططات الهندسية للمصنع',
            'serviceDetails.factoryEst.section2.item2': 'تخطيط خطوط الإنتاج بكفاءة عالية',
            'serviceDetails.factoryEst.section2.item3': 'تصميم أنظمة التهوية والتبريد',
            'serviceDetails.factoryEst.section2.item4': 'تخطيط مناطق التخزين والمعالجة',
            'serviceDetails.factoryEst.section3.title': 'الإنشاءات والتجهيزات',
            'serviceDetails.factoryEst.section3.item1': 'الإشراف على أعمال البناء والإنشاءات',
            'serviceDetails.factoryEst.section3.item2': 'تركيب الأنظمة الكهربائية والميكانيكية',
            'serviceDetails.factoryEst.section3.item3': 'تجهيز المرافق والخدمات المساندة',
            'serviceDetails.factoryEst.section3.item4': 'تطبيق معايير السلامة والصحة المهنية',
            'serviceDetails.factoryEst.section4.title': 'التراخيص والشهادات',
            'serviceDetails.factoryEst.section4.item1': 'الحصول على كافة التراخيص المطلوبة',
            'serviceDetails.factoryEst.section4.item2': 'تأهيل المصنع للحصول على شهادات الجودة',
            'serviceDetails.factoryEst.section4.item3': 'ضمان المطابقة مع المعايير المحلية والدولية',
            'serviceDetails.factoryEst.section4.item4': 'الحصول على شهادات الحلال والآيزو',
            'serviceDetails.factoryEst.cta': 'هل لديك فكرة لمصنع غذائي؟ دعنا نضع حجر الأساس لنجاحك سويًا – تواصل معنا للبدء.',
            'serviceDetails.factoryEst.sidebar.title': 'خدماتنا',
            'serviceDetails.factoryEst.sidebar.item1': 'تأسيس المصانع',
            'serviceDetails.factoryEst.sidebar.item2': 'توريد المعدات',
            'serviceDetails.factoryEst.sidebar.item3': 'إدارة العمليات',
            'serviceDetails.factoryEst.sidebar.item4': 'تطوير المنتجات',
            'serviceDetails.factoryEst.sidebar.item5': 'برامج التدريب',
            'serviceDetails.factoryEst.sidebar.item6': 'توريد المواد الخام',
            'serviceDetails.factoryEst.sidebar.item7': 'إعادة هيكلة المصانع',
            'serviceDetails.factoryEst.sidebar.item8': 'دعم المطاعم',
            'serviceDetails.factoryEst.sidebar.brochuresTitle': 'حمّل الكتيبات',
            'serviceDetails.factoryEst.sidebar.docTitle': 'تقرير تأسيس المصانع 2024',
            'serviceDetails.factoryEst.sidebar.docCta': 'تحميل PDF',

            // Service Details - Supply & Equipment
            'serviceDetails.supplyEquip.heroTitle': 'توريد المعدات',
            'serviceDetails.supplyEquip.intro': 'نوفر في جروث روتس خدمات التوريد والمعدات الشاملة لضمان حصول مصنعك على أفضل المعدات والتقنيات المتاحة في السوق. نحن نعمل مع شبكة واسعة من الموردين المحليين والعالميين لتوفير معدات عالية الجودة بأسعار تنافسية.',
            'serviceDetails.supplyEquip.section1.title': 'معدات الإنتاج',
            'serviceDetails.supplyEquip.section1.item1': 'خطوط إنتاج اللحوم والدواجن المتكاملة',
            'serviceDetails.supplyEquip.section1.item2': 'معدات الطحن والخلط والتشكيل',
            'serviceDetails.supplyEquip.section1.item3': 'أفران وأجهزة الطبخ الصناعية',
            'serviceDetails.supplyEquip.section1.item4': 'معدات التعبئة والتغليف الحديثة',
            'serviceDetails.supplyEquip.section2.title': 'أنظمة التبريد والتجميد',
            'serviceDetails.supplyEquip.section2.item1': 'غرف التبريد والتجميد',
            'serviceDetails.supplyEquip.section2.item2': 'أنظمة التحكم في درجات الحرارة',
            'serviceDetails.supplyEquip.section2.item3': 'معدات النقل المبردة',
            'serviceDetails.supplyEquip.section2.item4': 'أنظمة الحفظ والتخزين',
            'serviceDetails.supplyEquip.section3.title': 'معدات الجودة والسلامة',
            'serviceDetails.supplyEquip.section3.item1': 'أجهزة فحص الجودة والتحليل',
            'serviceDetails.supplyEquip.section3.item2': 'أنظمة مراقبة سلامة الغذاء',
            'serviceDetails.supplyEquip.section3.item3': 'معدات التعقيم والتطهير',
            'serviceDetails.supplyEquip.section3.item4': 'أجهزة قياس ومراقبة الإنتاج',
            'serviceDetails.supplyEquip.section4.title': 'الخدمات المساندة',
            'serviceDetails.supplyEquip.section4.item1': 'التركيب والتشغيل التجريبي',
            'serviceDetails.supplyEquip.section4.item2': 'التدريب على استخدام المعدات',
            'serviceDetails.supplyEquip.section4.item3': 'الصيانة والدعم الفني',
            'serviceDetails.supplyEquip.section4.item4': 'قطع الغيار والاستهلاكيات',
            'serviceDetails.supplyEquip.cta': 'نوفر في جروث روتس خدمات التوريد والمعدات الشاملة لضمان حصول مصنعك على أفضل المعدات والتقنيات المتاحة في السوق. نحن نعمل مع شبكة واسعة من الموردين المحليين والعالميين لتوفير معدات عالية الجودة بأسعار تنافسية.',

            // Service Details - Operation & Management
            'serviceDetails.operations.heroTitle': 'التشغيل والإدارة',
            'serviceDetails.operations.intro': 'لا يتوقف دعمنا عند تسليم المصنع جاهزًا؛ فخدمة التشغيل والإدارة لدينا تضمن استمرار الوقوف بجانبك خلال مرحلة تشغيل مصنعك لضمان سير العمل بسلاسة. يقدم خبراؤنا إدارة فنية وتشغيلية للمصنع، فيراقبون عمليات الإنتاج عن كثب لتحقيق أعلى إنتاجية وجودة ممكنة.',
            'serviceDetails.operations.section1.title': 'الإدارة التشغيلية',
            'serviceDetails.operations.section1.item1': 'مراقبة عمليات الإنتاج اليومية',
            'serviceDetails.operations.section1.item2': 'تحليل وحل المشاكل التشغيلية فورًا',
            'serviceDetails.operations.section1.item3': 'ضبط العمليات وتقليل الهدر',
            'serviceDetails.operations.section1.item4': 'تحسين كفاءة خطوط الإنتاج',
            'serviceDetails.operations.section2.title': 'ضمان الجودة',
            'serviceDetails.operations.section2.item1': 'مراقبة جودة المنتجات في كل مرحلة',
            'serviceDetails.operations.section2.item2': 'تطبيق معايير السلامة والجودة',
            'serviceDetails.operations.section2.item3': 'فحص وتحليل المنتجات النهائية',
            'serviceDetails.operations.section2.item4': 'ضمان ثبات الطعم والجودة',
            'serviceDetails.operations.section3.title': 'إدارة المخزون',
            'serviceDetails.operations.section3.item1': 'مراقبة مستويات المواد الخام',
            'serviceDetails.operations.section3.item2': 'إدارة عمليات التخزين والحفظ',
            'serviceDetails.operations.section3.item3': 'تنظيم عمليات الشحن والتوزيع',
            'serviceDetails.operations.section3.item4': 'تحسين دورة المخزون',
            'serviceDetails.operations.section4.title': 'المتابعة والدعم',
            'serviceDetails.operations.section4.item1': 'متابعة المصنع لمدة عام كامل بعد التشغيل',
            'serviceDetails.operations.section4.item2': 'ضمان استقرار الأداء',
            'serviceDetails.operations.section4.item3': 'معالجة أي تحديات قد تطرأ',
            'serviceDetails.operations.section4.item4': 'فريق دعم جاهز للتدخل الفوري',
            'serviceDetails.operations.cta': 'نعمل باستمرار على ضبط العمليات التشغيلية وتقليل الهدر وتحسين كفاءة خطوط الإنتاج وفق منهجية التحسين المستمر. ومع جروث روتس، يمكنك الاطمئنان بأن مصنعك يعمل بأفضل صورة ممكنة ويلتزم بمعايير السلامة والجودة مع وجود فريق دعم جاهز للتدخل الفوري كلما احتجت.',

            // Service Details - Training & Development
            'serviceDetails.training.heroTitle': 'التدريب والتطوير',
            'serviceDetails.training.intro': 'نعلم أن الكوادر البشرية المؤهلة هي عماد نجاح أي منشأة صناعية. لذلك توفر خدمة التدريب والتطوير لدينا برامج شاملة لبناء قدرات فريق عملك وضمان استمرارية تميّز أدائه.',
            'serviceDetails.training.section1.title': 'التدريب التقني',
            'serviceDetails.training.section1.item1': 'تشغيل المعدات الحديثة والتقنيات المتطورة',
            'serviceDetails.training.section1.item2': 'صيانة وإصلاح المعدات الأساسية',
            'serviceDetails.training.section1.item3': 'استخدام أنظمة التحكم والمراقبة',
            'serviceDetails.training.section1.item4': 'تطبيق معايير السلامة المهنية',
            'serviceDetails.training.section2.title': 'تدريب الجودة والإنتاج',
            'serviceDetails.training.section2.item1': 'تطبيق أفضل ممارسات الجودة',
            'serviceDetails.training.section2.item2': 'مراقبة عمليات الإنتاج',
            'serviceDetails.training.section2.item3': 'فحص وتحليل المنتجات',
            'serviceDetails.training.section2.item4': 'ضمان ثبات الجودة والطعم',
            'serviceDetails.training.section3.title': 'نقل الخبرات العلمية والعملية',
            'serviceDetails.training.section3.item1': 'رفع كفاءة الإنتاج',
            'serviceDetails.training.section3.item2': 'تحسين جودة المنتج النهائي إلى المستويات العالمية',
            'serviceDetails.training.section3.item3': 'تحسين الوصفات والتركيبات',
            'serviceDetails.training.section3.item4': 'الاستخدام الأمثل للمواد الخام',
            'serviceDetails.training.section4.title': 'التدريب الإداري',
            'serviceDetails.training.section4.item1': 'إدارة العمليات التشغيلية',
            'serviceDetails.training.section4.item2': 'تخطيط وتنظيم الإنتاج',
            'serviceDetails.training.section4.item3': 'إدارة المخزون والمواد الخام',
            'serviceDetails.training.section4.item4': 'تطبيق أنظمة الجودة الشاملة',
            'serviceDetails.training.section5.title': 'مميزات برامجنا التدريبية',
            'serviceDetails.training.section5.item1': 'برامج مخصصة: تصميم البرامج حسب احتياجات مصنعك الخاصة',
            'serviceDetails.training.section5.item2': 'خبراء متخصصون: تدريب على يد خبراء بخبرة تزيد عن 20 عامًا',
            'serviceDetails.training.section5.item3': 'تطبيق عملي: التدريب على المعدات الفعلية في بيئة العمل',
            'serviceDetails.training.section5.item4': 'متابعة مستمرة: تقييم الأداء ومتابعة التطور',
            'serviceDetails.training.cta': 'تغطي برامجنا التدريبية أيضًا إرشادات حول تحسين الوصفات والاستخدام الأمثل للمواد الخام لضمان ثبات الطعم والجودة في كل دفعة إنتاج. ومع جروث روتس، يكتسب فريقك المعرفة والمهارات اللازمة لتشغيل المصنع بكفاءة واحترافية، مما يؤمن استدامة نجاح مشروعك على المدى الطويل.',

            // Service Details - Product Development
            'serviceDetails.productDev.heroTitle': 'تطوير المنتجات',
            'serviceDetails.productDev.intro': 'عندما يتعلق الأمر بابتكار منتجات غذائية جديدة أو تحسين منتجاتك الحالية، فإن خبراء تطوير المنتجات في جروث روتس جاهزون لتقديم الدعم الكامل. نقدم خدمات تطوير الوصفات والتركيبات لتحقيق التوازن الأمثل بين الجودة والتكلفة في منتجك.',
            'serviceDetails.productDev.section1.title': 'تطوير الوصفات والتركيبات',
            'serviceDetails.productDev.section1.item1': 'وصفات تشغيل قياسية معتمدة لمنتجات اللحوم والدواجن',
            'serviceDetails.productDev.section1.item2': 'تصميم تركيبات خاصة تناسب متطلباتك وطموحاتك',
            'serviceDetails.productDev.section1.item3': 'تحقيق التوازن الأمثل بين الجودة والتكلفة',
            'serviceDetails.productDev.section1.item4': 'ضمان ثبات الطعم والجودة في كل دفعة إنتاج',
            'serviceDetails.productDev.section2.title': 'تعديل وتحسين المنتجات الحالية',
            'serviceDetails.productDev.section2.item1': 'تعديل الوصفات الحالية أو خطة التشغيل',
            'serviceDetails.productDev.section2.item2': 'التوافق مع المواصفات القياسية المصرية',
            'serviceDetails.productDev.section2.item3': 'تلبية متطلبات الجهات الرقابية ذات الصلة',
            'serviceDetails.productDev.section2.item4': 'تحسين الجودة وخفض التكاليف',
            'serviceDetails.productDev.section3.title': 'التطوير للأسواق العالمية',
            'serviceDetails.productDev.section3.item1': 'تطوير المنتجات المحلية لتلائم الأسواق الخليجية',
            'serviceDetails.productDev.section3.item2': 'تكييف المنتجات للأسواق الأوروبية',
            'serviceDetails.productDev.section3.item3': 'توسعة نطاق المنتج للأسواق العالمية',
            'serviceDetails.productDev.section3.item4': 'ضمان المطابقة مع المعايير الدولية',
            'serviceDetails.productDev.section4.title': 'الدعم في الإطلاق والتجريب',
            'serviceDetails.productDev.section4.item1': 'مرافقة تجربة المنتج الجديد',
            'serviceDetails.productDev.section4.item2': 'دعم عملية الإطلاق في السوق',
            'serviceDetails.productDev.section4.item3': 'ضمان ثبات الطعم والجودة',
            'serviceDetails.productDev.section4.item4': 'التأكد من سلامة المكونات',
            'serviceDetails.productDev.section5.title': 'مميزات خدمة تطوير المنتجات',
            'serviceDetails.productDev.section5.item1': 'الابتكار بثقة: مع خدمات تطوير المنتجات من جروث روتس، يمكنك الابتكار بثقة لأننا سنضمن أن منتجك النهائي آمن ولذيذ ومتوافق مع المعايير المحلية والدولية.',
            'serviceDetails.productDev.section5.item2': 'الخبرة المتخصصة: فريقنا ملمّ بتطوير المنتجات المحلية لتلائم أذواق ومتطلبات الأسواق المختلفة، مما يساعدك على توسعة نطاق منتجك للأسواق العالمية.',
            'serviceDetails.productDev.section5.item3': 'الدعم الشامل: سنكون إلى جانبك خلال تجربة المنتج الجديد وإطلاقه، مع ضمان ثبات الطعم والجودة وسلامة المكونات.',
            'serviceDetails.productDev.cta': 'الابتكار بثقة: مع خدمات تطوير المنتجات من جروث روتس، يمكنك الابتكار بثقة لأننا سنضمن أن منتجك النهائي آمن ولذيذ ومتوافق مع المعايير المحلية والدولية.',

            // Service Details - Raw Materials Supply
            'serviceDetails.rawMaterials.heroTitle': 'توريد المواد الخام',
            'serviceDetails.rawMaterials.intro': 'تمتد خدمات جروث روتس لتشمل توريد المواد الخام عالية الجودة اللازمة لصناعة الأغذية. نحن نفهم أن جودة المنتج النهائي تعتمد بشكل كبير على جودة المواد الخام المستخدمة، لذلك نحرص على توفير أفضل المواد من مصادر موثوقة ومعتمدة.',
            'serviceDetails.rawMaterials.section1.title': 'خدماتنا في توريد المواد الخام تشمل',
            'serviceDetails.rawMaterials.section1.item1': 'مكسبات الطعم والنكهات: مجموعة واسعة من المكسبات الطبيعية والصناعية لتحسين طعم ونكهة المنتجات الغذائية',
            'serviceDetails.rawMaterials.section1.item2': 'الإضافات الغذائية: مواد حافظة، ملونات، ومحسنات قوام آمنة ومعتمدة دوليًا',
            'serviceDetails.rawMaterials.section1.item3': 'البروتينات والمكونات الأساسية: مواد خام عالية الجودة للحوم والدواجن والمنتجات البحرية',
            'serviceDetails.rawMaterials.section1.item4': 'التوابل والبهارات: تشكيلة متنوعة من التوابل الطبيعية والخلطات المتخصصة',
            'serviceDetails.rawMaterials.section1.item5': 'مواد التعبئة والتغليف: حلول تغليف متطورة تحافظ على جودة وسلامة المنتجات',
            'serviceDetails.rawMaterials.section2.title': 'مميزات خدمة التوريد لدينا',
            'serviceDetails.rawMaterials.section2.item1': 'ضمان الجودة: جميع المواد تخضع لفحوصات جودة صارمة قبل التسليم',
            'serviceDetails.rawMaterials.section2.item2': 'الامتثال للمعايير: مواد معتمدة وفقًا للمعايير الدولية وشهادات الحلال',
            'serviceDetails.rawMaterials.section2.item3': 'التوريد المنتظم: ضمان استمرارية التوريد وعدم انقطاع الإنتاج',
            'serviceDetails.rawMaterials.section2.item4': 'الدعم الفني: استشارات حول أفضل استخدام للمواد الخام في منتجاتك',
            'serviceDetails.rawMaterials.section2.item5': 'أسعار تنافسية: حلول اقتصادية تناسب مختلف أحجام الإنتاج',
            'serviceDetails.rawMaterials.cta': 'تمتد خدمات جروث روتس لتشمل توريد المواد الخام عالية الجودة اللازمة لصناعة الأغذية. نحن نفهم أن جودة المنتج النهائي تعتمد بشكل كبير على جودة المواد الخام المستخدمة، لذلك نحرص على توفير أفضل المواد من مصادر موثوقة ومعتمدة.',

            // Service Details - Factory Restructuring
            'serviceDetails.restructuring.heroTitle': 'إعادة الهيكلة',
            'serviceDetails.restructuring.intro': 'تقدم جروث روتس خدمات إعادة الهيكلة المتخصصة للمصانع والمؤسسات الغذائية التي تواجه تحديات تشغيلية أو تسعى لتحديث عملياتها وتحسين أدائها. نحن نفهم أن بعض المصانع قد تمر بفترات صعبة أو تحتاج إلى تطوير جذري لمواكبة متطلبات السوق الحديثة.',
            'serviceDetails.restructuring.section1.title': 'خدمات إعادة الهيكلة تشمل',
            'serviceDetails.restructuring.section1.item1': 'تحليل الوضع الحالي: دراسة شاملة لجميع جوانب العمليات والأداء المالي والتشغيلي',
            'serviceDetails.restructuring.section1.item2': 'تحديد نقاط الضعف: تشخيص المشاكل والعقبات التي تؤثر على الكفاءة والربحية',
            'serviceDetails.restructuring.section1.item3': 'وضع خطة التطوير: استراتيجية متكاملة لإعادة تنظيم العمليات وتحسين الأداء',
            'serviceDetails.restructuring.section1.item4': 'تحديث المعدات: استبدال أو تطوير خطوط الإنتاج والآلات القديمة',
            'serviceDetails.restructuring.section1.item5': 'إعادة تصميم المصنع: تحسين تخطيط المساحات وتدفق العمليات',
            'serviceDetails.restructuring.section1.item6': 'تطوير المنتجات: تحسين الوصفات الحالية أو تطوير منتجات جديدة',
            'serviceDetails.restructuring.section1.item7': 'تدريب الكوادر: رفع مهارات العاملين وتأهيلهم للعمليات المحدثة',
            'serviceDetails.restructuring.section1.item8': 'تحسين أنظمة الجودة: تطبيق معايير جودة حديثة وأنظمة رقابة فعالة',
            'serviceDetails.restructuring.section2.title': 'منهجية العمل',
            'serviceDetails.restructuring.section2.item1': '1. التقييم الأولي: فحص شامل للوضع الحالي وتحديد الأولويات',
            'serviceDetails.restructuring.section2.item2': '2. التخطيط الاستراتيجي: وضع خطة مرحلية للتطوير والتحسين',
            'serviceDetails.restructuring.section2.item3': '3. التنفيذ المتدرج: تطبيق التغييرات بشكل منظم ومدروس',
            'serviceDetails.restructuring.section2.item4': '4. المتابعة والتقييم: مراقبة النتائج وإجراء التعديلات اللازمة',
            'serviceDetails.restructuring.section2.item5': '5. الدعم المستمر: تقديم الدعم الفني والاستشاري بعد التنفيذ',
            'serviceDetails.restructuring.section3.title': 'النتائج المتوقعة',
            'serviceDetails.restructuring.section3.item1': 'تحسين الكفاءة التشغيلية وزيادة الإنتاجية',
            'serviceDetails.restructuring.section3.item2': 'تقليل التكاليف وتحسين الربحية',
            'serviceDetails.restructuring.section3.item3': 'رفع جودة المنتجات ومعايير السلامة',
            'serviceDetails.restructuring.section3.item4': 'تحسين بيئة العمل ورضا العاملين',
            'serviceDetails.restructuring.section3.item5': 'زيادة القدرة التنافسية في السوق',
            'serviceDetails.restructuring.cta': 'تقدم جروث روتس خدمات إعادة الهيكلة المتخصصة للمصانع والمؤسسات الغذائية التي تواجه تحديات تشغيلية أو تسعى لتحديث عملياتها وتحسين أدائها. نحن نفهم أن بعض المصانع قد تمر بفترات صعبة أو تحتاج إلى تطوير جذري لمواكبة متطلبات السوق الحديثة.',

            // Service Details - Restaurant Support
            'serviceDetails.restaurant.heroTitle': 'دعم المطاعم',
            'serviceDetails.restaurant.intro': 'تمتد خدمات جروث روتس لتشمل دعم المطاعم وسلاسل الوجبات السريعة التي قد تواجه تحديات تشغيلية تؤثر على جودة الخدمة أو الربحية. إذا كانت علامتك التجارية تعاني من مشاكل في اتساق الجودة أو عقبات في إدارة العمليات وتوسعة الفروع، فإن فريقنا يقدم حلولًا متخصصة لمساعدتك في تجاوز هذه العقبات. نبدأ بتحليل دقيق لكافة جوانب عمليات مطعمك لتحديد مكامن الخلل والفرص، ثم نضع خطة تطوير أو إعادة هيكلة مخصصة لتحسين كفاءة التشغيل ورفع مستوى جودة الطعام والخدمة المقدمة.',
            'serviceDetails.restaurant.section1.title': 'الحلول التي نقدمها',
            'serviceDetails.restaurant.section1.item1': 'إعادة تصميم المطبخ: تنظيم سير العمل بشكل أفضل لزيادة الكفاءة',
            'serviceDetails.restaurant.section1.item2': 'معايير تشغيل موحّدة: وضع إجراءات قابلة للتطبيق في جميع الفروع لضمان اتساق التجربة',
            'serviceDetails.restaurant.section1.item3': 'تدريب العاملين: برامج تدريبية على أفضل ممارسات سلامة الغذاء وجودة الخدمة',
            'serviceDetails.restaurant.section1.item4': 'دمج التقنيات الحديثة: تطبيق أنظمة نقاط البيع وأنظمة تتبع المخزون',
            'serviceDetails.restaurant.section1.item5': 'تحسين الرقابة: أنظمة مراقبة الجودة والأداء',
            'serviceDetails.restaurant.section1.item6': 'زيادة الكفاءة التشغيلية: تحسين العمليات لتقليل الهدر وزيادة الإنتاجية',
            'serviceDetails.restaurant.section2.title': 'المجالات التي نغطيها',
            'serviceDetails.restaurant.section2.item1': 'إدارة المطبخ: تحسين سير العمل وتنظيم العمليات',
            'serviceDetails.restaurant.section2.item2': 'إدارة المخزون: أنظمة فعّالة لتتبع ومراقبة المواد الخام',
            'serviceDetails.restaurant.section2.item3': 'خدمة العملاء: تدريب الفرق على تقديم خدمة متميزة',
            'serviceDetails.restaurant.section2.item4': 'مراقبة الجودة: وضع معايير ثابتة لجودة الطعام والخدمة',
            'serviceDetails.restaurant.section2.item5': 'إدارة التكاليف: تحسين الربحية من خلال تحسين العمليات',
            'serviceDetails.restaurant.section2.item6': 'التوسع والنمو: استراتيجيات لفتح فروع جديدة بنجاح',
            'serviceDetails.restaurant.cta': 'ارتقِ بمستوى مطعمك التشغيلي وخدمة عملائك – تواصل معنا الآن لنساعدك في تحويل التحديات إلى فرص نجاح وتعزيز سمعة علامتك التجارية.',

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
