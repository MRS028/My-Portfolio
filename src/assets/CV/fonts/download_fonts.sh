#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p fonts

# Download Inter font family
wget https://github.com/rsms/inter/releases/download/v3.19/Inter-3.19.zip
unzip Inter-3.19.zip "Inter Desktop/*"
mv "Inter Desktop"/*.ttf fonts/
rm -rf "Inter Desktop" Inter-3.19.zip

# Rename fonts to match LaTeX template
cd fonts
mv "Inter-Regular.ttf" "Inter-Regular.ttf"
mv "Inter-Bold.ttf" "Inter-Bold.ttf"
mv "Inter-Italic.ttf" "Inter-Italic.ttf"
mv "Inter-BoldItalic.ttf" "Inter-BoldItalic.ttf" 