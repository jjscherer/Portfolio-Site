# Portfolio Site — Design Doc (Outline)

_Draft outline, 2026-11-13. JJ to fill in details; bring back for a polished version._

**Links:** [Trello board](https://trello.com/b/6tDim272/portfolio-site) · [Markdown Quick Reference](https://claude.ai/artifact/EQUoasFzHyUy7bRDwUs8UV)

## 1. Vision
One or two sentences: what the site is and who it's for.
- Example: "A home for my code and audio work, including in-progress projects, built on my real stack."

## 2. Audience & goals
- Primary: recruiters and hiring managers
- Secondary: collaborators and fans of my music
- What should a visitor come away knowing about me?

## 3. Rev 1 scope
**Must-have**
- Home/About
- Code area
- Audio area (incl. PSV demo EP listing w/ Bandcamp embed)
- Project detail pages
- Contact

**Stretch (can slide to rev 2)**
- API + database
- Admin page

**Not in rev 1**
- GitHub activity feed
- Blog
- All-Star Studio site link

## 4. Pages
Short description of each page and what's on it.
- Home/About:
- Code:
- Audio:
- Project detail:
- Contact:
- Admin (stretch):

## 5. Data shapes
List fields so the static JSON matches the future API.
- Project (Code/Audio tags):
- Release:
- Track:
- ProgressNote:

## 6. Tech decisions
- Project template: Visual Studio "React and ASP.NET Core" (one solution, client + server projects)
- Front end: React with TypeScript, raw CSS (design tokens in :root + CSS Modules)
- Back end: ASP.NET Core API, Entity Framework
- Database: SQL Server in Docker (local); Azure SQL Database free offer (production)
- Hosting: Azure Static Web Apps (Free) for React; App Service F1 (Free) for API
- Deploys: GitHub Actions for Static Web Apps; Visual Studio Publish for the API
- Build order: front end first (static JSON), then API + DB
- Domain: buy before launch (~$12/yr)

## 7. Visual direction
_TBD — pending inspiration notes._
- Mood words:
- Inspiration links (+ why):
- Palette:
- Fonts:
- Wireframes: save images in the repo (e.g. docs/wireframes/) and embed them here

## 8. Milestones
_From the Trello board; add rough target dates._
1. React pages (static JSON data) —
2. Styling (raw CSS) —
3. API + database (stretch) —
4. Admin page (stretch) —
5. Deploy rev 1 — end of 2026

## 9. Open questions
-

## 10. Decision log
- 2026-11-13: Chose all-free Azure hosting (Static Web Apps + App Service F1 + Azure SQL free offer); Docker SQL Server locally.
- 2026-11-13: Front-end-first build order; rev 1 can ship as a static site.
- 2026-11-13: Raw CSS, no UI framework.
- 2026-11-13: Bandcamp embeds for audio (store album IDs; no Bandcamp API).
- 2026-11-13: Design doc written in Markdown, kept in the repo.
- 2026-11-15: Used Visual Studio's "React and ASP.NET Core" template (one solution, client + server projects).
- 2026-11-15: TypeScript over plain JS for the front end (resume keyword; C# typing habits carry over).
- 2026-11-15: Design doc lives in `docs/` at the repo root.
- 2026-11-15: Azure CLI deferred; deploys go through VS Publish and GitHub Actions.
