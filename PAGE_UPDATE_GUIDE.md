# Page Update Guide - Growth Roots Branding

## ✅ Completed Tasks

### All Three Pages (about.html, contact.html, faq.html)
- ✅ Updated page titles and meta descriptions
- ✅ Changed favicon to Growth Roots logo
- ✅ Added `growth-roots-custom.css` stylesheet link
- ✅ Removed RTL attribute from body tag
- ✅ Updated preloader logo

## 🔧 Remaining Tasks

### 1. Header Replacement (Lines ~47-270)

**Current:** Template header with complex navigation
**Replace with:** Growth Roots header from `index.html` (lines 47-170)

**Key changes:**
- Logo: Change to `assets/images/logo/growth-roots-logo.svg`
- Navigation: Simplified Growth Roots menu structure
- Social icons: Growth Roots social media links
- Language toggle: EN/AR dropdown

**How to do it:**
1. Open `index.html` and copy lines 47-170
2. In each page (about.html, contact.html, faq.html), replace lines 47-270 with the copied header

---

### 2. Offcanvas Sidebar Update (Lines ~272-389)

**Current:** Template offcanvas with generic content
**Replace with:** Growth Roots offcanvas from `index.html` (lines 173-289)

**Key changes:**
- Logo: Growth Roots SVG logo
- Description: "Growth Roots is Egypt's premier partner for food manufacturing excellence..."
- Contact info: Updated to Growth Roots details
- Social links: Growth Roots social media

**How to do it:**
1. Open `index.html` and copy lines 173-289
2. In each page, replace lines 272-389 with the copied offcanvas section

---

### 3. Page Content Updates

#### A. About Page (`about.html`)

**Content Source:** `/Volumes/Div/newest-growth/docs/content/about.md`

**Main sections to update:**
1. **Breadcrumb** (line ~403): Change "About" title
2. **Hero/Intro Section**: Replace with Growth Roots company introduction
3. **Mission/Vision**: Update with objectives from about.md
4. **Why Choose Us**: Add the 4 key differentiators from about.md
5. **Core Values**: Innovation, Quality, Partnership, Support

**Key Content Blocks:**
```
- Company overview (founded 2018, 20+ years experience)
- Mission: Plant seeds of quality, lead in protein food manufacturing
- 4 Differentiators:
  * Integrated Expert Team
  * Technology & Quality
  * End-to-End Solutions  
  * Ongoing Support
```

---

#### B. Contact Page (`contact.html`)

**Content Source:** `/Volumes/Div/newest-growth/docs/content/contact.md`

**Main sections to update:**
1. **Breadcrumb** (line ~403): Change to "Contact Us"
2. **Contact Info Blocks**:
   - Address: Update to Saudi Arabia/Riyadh details
   - Phone: +966 numbers from contact.md
   - Email: info@growthroots.sa, sales@growthroots.sa, support@growthroots.sa
3. **Business Hours**: Sunday-Thursday 8:00 AM - 6:00 PM
4. **Contact Form**: Update heading and description
5. **Map**: Update to correct location

**Key Contact Details:**
```
Address: Kingdom of Saudi Arabia - Riyadh
         King Fahd District, King Abdulaziz Road
Phones:  Main: +966 11 123 4567
         Sales: +966 11 123 4568  
         Support: +966 11 123 4569
Emails:  info@growthroots.sa
         sales@growthroots.sa
         support@growthroots.sa
```

---

#### C. FAQ Page (`faq.html`)

**Content Source:** `/Volumes/Div/newest-growth/docs/content/faq.md`

**Questions to replace (starting around line 440):**

**Question 1:**
- Title: "What services does Growth Roots provide?"
- Answer: "Growth Roots offers a comprehensive range of services for establishing, operating, and developing food production facilities. Our services include setting up new factories from concept through full operation, supplying production lines and equipment, managing and optimizing factory operations, training employees, developing new product recipes, providing raw materials and food additives, restructuring underperforming factories, and offering consulting and operational support for restaurants and food chains."

**Question 2:**
- Title: "Who can benefit from your services?"
- Answer: "Our services are available to anyone looking to enter the food manufacturing sector or improve their current operations. Our clients range from entrepreneurs and investors aiming to launch new food factories, to owners of existing factories who need to enhance performance, solve technical issues, or expand production, and also include owners of restaurants and fast-food chains."

**Question 3:**
- Title: "Do you help obtain licenses and quality certifications for factories?"
- Answer: "Yes, we do. We have extensive experience in this area. Our team will assist you in preparing your facility to meet all required industrial regulations and food safety standards. We also guide and support you in achieving international quality certifications such as ISO certificates and Halal certification."

**Question 4:**
- Title: "Are your services limited to consulting, or do you also provide equipment and raw materials?"
- Answer: "We pride ourselves on being an end-to-end service provider. Through our partnership with Kaya Steel, we manufacture and supply the machinery and production lines needed for your factory. Additionally, we enable our clients to source high-quality raw materials and food additives through our Ricatto brand."

**Question 5:**
- Title: "How do I get started with Growth Roots?"
- Answer: "To begin, you can reach out to us via the Contact Us page on our website or through our direct contact information (phone or email). We will arrange an initial consultation (free of charge) to understand your project's needs and objectives. After this discussion, we will prepare a comprehensive proposal outlining the scope of services, estimated costs, and a projected timeline."

---

### 4. Footer Replacement (Before closing `</main>` tag)

**Current:** Template footer with generic branding
**Replace with:** Growth Roots footer from `index.html` (lines 1232-1326)

**Key sections:**
- About Growth Roots description
- Useful Links (About, Services, Portfolio, FAQ, Contact)
- Office Address: Cairo, Egypt
- Email: info@growth-roots-eg.com
- Phone numbers (placeholder)
- Social media links
- Copyright: "© 2025 Growth Roots. All Rights Reserved."

**How to do it:**
1. Find where footer starts in each page (search for `<!-- footer area start -->`)
2. Replace entire footer section with Growth Roots footer from index.html
3. Keep the closing JavaScript includes after footer

---

### 5. JavaScript Files (End of file)

**Ensure these scripts are present before `</body>`:**
```html
<script src="assets/js/vendor/jquery-3.7.1.min.js"></script>
<script src="assets/js/plugins/waypoints.min.js"></script>
<script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
<script src="assets/js/plugins/meanmenu.min.js"></script>
<script src="assets/js/plugins/swiper.min.js"></script>
<script src="assets/js/plugins/wow.min.js"></script>
<script src="assets/js/vendor/magnific-popup.min.js"></script>
<script src="assets/js/vendor/isotope.pkgd.min.js"></script>
<script src="assets/js/vendor/imagesloaded.pkgd.min.js"></script>
<script src="assets/js/plugins/nice-select.min.js"></script>
<script src="assets/js/plugins/jarallax.min.js"></script>
<script src="assets/js/vendor/ajax-form.js"></script>
<script src="assets/js/plugins/easypie.js"></script>
<script src="assets/js/plugins/headding-title.js"></script>
<script src="assets/js/plugins/lenis.min.js"></script>
<script src="assets/js/plugins/gsap.min.js"></script>
<script src="assets/js/plugins/rs-anim-int.js"></script>
<script src="assets/js/plugins/rs-scroll-trigger.min.js"></script>
<script src="assets/js/plugins/rs-splitText.min.js"></script>
<script src="assets/js/plugins/jquery.lettering.js"></script>
<script src="assets/js/plugins/parallax-effect.min.js"></script>
<script src="assets/js/plugins/jquery.appear.min.js"></script>
<script src="assets/js/plugins/marquee.min.js"></script>
<script src="assets/js/plugins/chart.umd.min.js"></script>
<script src="assets/js/plugins/nouislider.min.js"></script>
<script src="assets/js/vendor/purecounter.js"></script>
<script src="assets/js/vendor/odometer.min.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/language-toggle.js"></script>
```

---

## 📝 Quick Reference - Line Numbers

### index.html (Source)
- Header: Lines 47-170
- Offcanvas: Lines 173-289
- Footer: Lines 1232-1326

### Template Pages (Target - approximate)
- Header: Lines 47-270
- Offcanvas: Lines 272-389
- Main Content: Lines 392-600
- Footer: Lines 600-800

---

## 🎯 Priority Order

1. **High Priority** (Required for pages to display correctly):
   - Replace Header
   - Replace Footer
   - Update Offcanvas

2. **Medium Priority** (For brand consistency):
   - Update page-specific content (About, Contact, FAQ)
   - Update breadcrumbs

3. **Low Priority** (Nice to have):
   - Optimize images
   - Update meta tags for SEO
   - Add schema markup

---

## ⚠️ Important Notes

- Always backup files before making changes
- Test each page after updates in a browser
- Ensure all links point to correct pages
- Verify mobile responsiveness after changes
- Check that all images load correctly
- Test the language toggle functionality
- Verify form submissions work on contact page

---

## 🔗 Useful File Paths

- Logo: `assets/images/logo/growth-roots-logo.svg`
- Favicon: `public/Growth%20Roots.png`
- Custom CSS: `assets/css/growth-roots-custom.css`
- Content Files: `/Volumes/Div/newest-growth/docs/content/`

---

## ✨ Testing Checklist

After completing updates, verify:
- [ ] Page loads without errors
- [ ] Header displays correctly
- [ ] Navigation menu works
- [ ] Footer displays correctly  
- [ ] All links work
- [ ] Images load
- [ ] Mobile menu works
- [ ] Forms submit (contact page)
- [ ] Accordion works (FAQ page)
- [ ] Custom green branding applies
- [ ] Language toggle appears
- [ ] Social icons link correctly

---

**Last Updated:** Oct 17, 2025
**Status:** Metadata complete, structural updates needed
