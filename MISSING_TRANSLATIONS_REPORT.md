# تقرير النواقص في الترجمة (Missing Translations Report)

هذا الملف يحتوي على قائمة بالنصوص والمحتوى الذي يحتاج إلى إضافة سمات الترجمة (`data-i18n`) أو ترجمته بشكل كامل في ملفات المشروع.

## 1. صفحة من نحن (`about.html`)
الصفحة تعتمد بشكل كبير على نصوص ثابتة (Hardcoded) وتحتاج إلى ربطها بنظام الترجمة.

### الأقسام التي تحتاج تعديل:
- **Hero Section**: العنوان الفرعي والعنوان الرئيسي (`About Industrie`, `Welcome to Industrie...`).
- **Our Mission & Vision**: العناوين والنصوص الوصفية.
- **Our History**: جميع تواريخ وأحداث الـ Timeline.
- **Team Section**: عناوين الأقسام وأسماء الفريق والمسميات الوظيفية.
- **Testimonials**: (إذا وجدت) نصوص العملاء.

**مثال للتصحيح المطلوب:**
```html
<!-- الوضع الحالي -->
<h2 class="rs-section-title">Welcome to Industrie...</h2>

<!-- التعديل المطلوب -->
<h2 class="rs-section-title" data-i18n="about.welcomeTitle">Welcome to Growth Roots...</h2>
```

## 2. صفحة التواصل (`contact.html`)
- **العناوين**: "Get in touch with our team", "Our Location", "Opening Hour".
- **بيانات الاتصال**: العناوين التفصيلية وساعات العمل.
- **نموذج الاتصال (Form)**: الـ Placeholders في الحقول (Full Name, Email, etc.) والزر (Send Message).

## 3. القائمة الجانبية (Offcanvas)
- النص التعريفي "Growth Roots is Egypt's premier partner..." يحتاج لـ `data-i18n`.
- عناوين الأقسام "Contact Info", "Subscribe & Follow".

## 4. الصفحات الفرعية للخدمات
- أغلب الصفحات الفرعية (مثل `factory-establishment.html`) تحتاج لمراجعة للتأكد من وجود `data-i18n` في المحتوى التفصيلي، وليس فقط في العناوين الرئيسية.

## 5. ملاحظات عامة
- يجب إضافة مفاتيح الترجمة الجديدة إلى ملف `assets/js/language-toggle.js` في قسمي `en` و `ar`.
- يجب التأكد من تغيير اسم "Industrie" إلى "Growth Roots" في جميع النصوص الثابتة والمتحركة (Breadcrumbs, Page Titles).
