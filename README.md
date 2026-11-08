# Luiz Fernando — SAP Portfolio

Personal portfolio of **Luiz Fernando Gonçalves da Silva** — SAP MM / S/4HANA Sourcing & Procurement, SAP certified (MM · MDG · BTP · Business AI · Joule Studio).

🔗 Live site: https://lfernandosap.github.io/sap-portfolio-hub/
🔗 LinkedIn: https://www.linkedin.com/in/luizfernando-sap-mm/

## Content
- Professional summary, experience and key projects
- SAP certifications with Credly verification links, renewals and validity
- Education, SAP modules & domains, technical skills
- Available in Portuguese, English, German and Spanish
- Downloadable CV (`public/Luiz_Fernando_CV.pdf`)

## Tech stack
React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion

## Run locally
```sh
npm install
npm run dev
```

## Update content
- Texts (4 languages): `src/lib/i18n.ts`
- Certifications: `src/components/Certifications.tsx`
- Education: `src/components/Education.tsx`
- CV PDF: `python3 scripts/generate_cv.py public/Luiz_Fernando_CV.pdf` (requires `reportlab`)

## Deploy
Every push to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.
