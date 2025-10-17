#!/bin/bash

# Extract footer from index.html
sed -n '1232,1325p' /Volumes/Div/newest-growth/index.html > /tmp/new_footer.html

# Update FAQ
awk 'BEGIN {p=1} /<!-- footer area start -->/ {p=0; system("cat /tmp/new_footer.html")} /<!-- footer area end -->/ {p=1; next} p' /Volumes/Div/newest-growth/faq.html > /tmp/faq_new.html && mv /tmp/faq_new.html /Volumes/Div/newest-growth/faq.html

# Update About
awk 'BEGIN {p=1} /<!-- footer area start -->/ {p=0; system("cat /tmp/new_footer.html")} /<!-- footer area end -->/ {p=1; next} p' /Volumes/Div/newest-growth/about.html > /tmp/about_new.html && mv /tmp/about_new.html /Volumes/Div/newest-growth/about.html

# Update Contact
awk 'BEGIN {p=1} /<!-- footer area start -->/ {p=0; system("cat /tmp/new_footer.html")} /<!-- footer area end -->/ {p=1; next} p' /Volumes/Div/newest-growth/contact.html > /tmp/contact_new.html && mv /tmp/contact_new.html /Volumes/Div/newest-growth/contact.html

echo "Footer updated successfully in all pages!"
