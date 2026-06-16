#!/usr/bin/env bash
# Restructure Law Society project into 6 logical commits and push to GitHub.
# Usage: bash scripts/setup-git-history.sh
# Remote: https://github.com/thimomeres/TimoDev.git

set -euo pipefail

cd "$(dirname "$0")/.."

REMOTE_URL="https://github.com/thimomeres/TimoDev.git"

echo "==> Initializing fresh git repository..."
rm -rf .git
git init
git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

echo "==> Commit 1/6: initial setup"
git add \
  package.json \
  package-lock.json \
  vite.config.js \
  eslint.config.js \
  index.html \
  .gitignore \
  .env.example \
  public/ \
  src/main.jsx \
  src/index.css \
  src/styles/global.css \
  src/assets/fonts/

git commit -m "$(cat <<'EOF'
feat: initial setup and project structure

Scaffold React + Vite app with Tailwind, path aliases, local fonts,
and base entry files.
EOF
)"

echo "==> Commit 2/6: header and navigation"
git add \
  src/components/organisms/NavOverlay/ \
  src/components/atoms/MobileMenuButton/ \
  src/components/molecules/MobileNav/ \
  src/assets/icons/hamburger-menu.svg \
  src/assets/icons/social/ \
  src/assets/images/brand/logo.png \
  src/components/sections/HeroSection/

git commit -m "$(cat <<'EOF'
feat: implement header and navigation bar

Add hamburger-triggered NavOverlay, mobile menu button, hero sidebar,
and social navigation assets.
EOF
)"

echo "==> Commit 3/6: hero banner"
git add \
  src/assets/images/hero/ \
  src/assets/icons/red-shape.svg \
  src/pages/HomePage/

git commit -m "$(cat <<'EOF'
feat: build hero banner section

Add hero imagery, torn-paper masks, and homepage hero layout with
affiliate headline and CTA.
EOF
)"

echo "==> Commit 4/6: news carousel + API"
git add \
  src/services/ \
  src/hooks/ \
  src/utils/formatDate.js \
  src/components/molecules/PressCard/ \
  src/components/organisms/NewsCarousel/ \
  src/components/sections/MediaPressSection/ \
  "src/assets/images/pres&media/"

git commit -m "$(cat <<'EOF'
feat: create news carousel with API integration

Integrate Guardian API, loading/error states, responsive carousel,
and press card components.
EOF
)"

echo "==> Commit 5/6: footer"
git add \
  src/components/sections/FooterSection/ \
  src/components/atoms/FooterLogo/

git commit -m "$(cat <<'EOF'
feat: design and implement footer

Add footer navigation links, logo, and copyright section.
EOF
)"

echo "==> Commit 6/6: polish and remaining sections"
git add \
  src/App.jsx \
  README.md \
  src/components/sections/WhatWeDoSection/ \
  src/components/sections/AnniversarySection/ \
  src/components/sections/CareerGrowthSection/ \
  src/components/molecules/ServiceCard/ \
  src/components/atoms/ScrollReveal/ \
  src/components/atoms/BriefcaseIcon/ \
  src/components/atoms/CardArrowIcon/ \
  src/assets/images/anniversary/ \
  src/assets/images/cards/ \
  src/assets/images/career-growth/ \
  src/assets/images/road-to-2027/ \
  src/assets/icons/career-briefcase.svg

git commit -m "$(cat <<'EOF'
style: final polish and responsive adjustments

Add remaining homepage sections, scroll-reveal animations, service cards,
career growth banner, and complete README documentation.
EOF
)"

echo ""
echo "==> Done! Commit history:"
git log --oneline

echo ""
echo "==> Push to GitHub (requires network + auth):"
echo "    git push -u origin main --force"
echo ""
echo "WARNING: --force replaces the single README commit on GitHub with this history."
