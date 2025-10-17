#!/bin/bash

# Script to update FAQ, About, and Contact pages with Growth Roots branding

# Function to extract lines from a file
extract_lines() {
    local file=$1
    local start=$2
    local end=$3
    sed -n "${start},${end}p" "$file"
}

# Paths
INDEX="/Volumes/Div/newest-growth/index.html"
FAQ="/Volumes/Div/newest-growth/faq.html"
ABOUT="/Volumes/Div/newest-growth/about.html"
CONTACT="/Volumes/Div/newest-growth/contact.html"

echo "Updating pages with Growth Roots branding..."

# Extract sections from index.html
HEADER_START=47
HEADER_END=170
OFFCANVAS_START=173
OFFCANVAS_END=289
FOOTER_START=1232
FOOTER_END=1326

# For each page, we need to:
# 1. Keep head section (lines 1-46)
# 2. Replace header (line 47-270 in templates) with Growth Roots header
# 3. Replace offcanvas (line 272-389 in templates) with Growth Roots offcanvas
# 4. Keep main content
# 5. Replace footer with Growth Roots footer

echo "Processing FAQ page..."
# Extract head
extract_lines "$FAQ" 1 46 > /tmp/faq_new.html

# Add Growth Roots header
extract_lines "$INDEX" $HEADER_START $HEADER_END >> /tmp/faq_new.html

# Add Growth Roots offcanvas
extract_lines "$INDEX" $OFFCANVAS_START $OFFCANVAS_END >> /tmp/faq_new.html

# Add main content (from line 392 to before footer)
extract_lines "$FAQ" 392 600 >> /tmp/faq_new.html

# Add Growth Roots footer
extract_lines "$INDEX" $FOOTER_START $FOOTER_END >> /tmp/faq_new.html

# Add closing tags
extract_lines "$INDEX" 1328 1369 >> /tmp/faq_new.html

# Replace original
mv /tmp/faq_new.html "$FAQ"

echo "Done!"
