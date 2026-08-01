SEO PLAN — 2026 H2

## formy.prasuco.com

Prepared 1 August 2026 · Replaces the 1 August audit's "What to publish" list
Method: keyword-research skill (aaron-he-zhu). Volumes are **Estimated** (no volume tool connected — verify in GSC/SEO tool before committing budget). Difficulty and SERP composition are **Measured** from live SERPs fetched 1 Aug 2026.

---

## Executive summary

The category you compete in is crowded with **new, low-authority indie tools** — ServerForm, FormHandle, Formboost, Noundry, FormsList, GetYourForms, Formz, Formigo, FormSubmits, splitforms, Form Plume, SubmitKit, onsubmit, FormWit, W3Forms, Form Dump. None of them own real authority yet. For most of the terms that matter, the top 10 is **not** dominated by giants; it is dominated by thin landing pages and one-off blog posts from sites with DR lower than what a focused small site can build.

That is the opportunity. The audit said "the pages answering those searches do not exist." That is still true — but the bigger structural gap is now the **alternative pages**: 6+ competitors already publish "formsubmit alternative" pages and rank for a term Formy has no page for. Formspree, not FormSubmit, is the biggest name in the category, and "formspree alternative" is a term nobody at Formy is targeting.

Three moves, in order:

1. **Ship the alternative pages** — `/alternatives/formsubmit`, `/alternatives/formspree`, `/alternatives/formbackend`, `/alternatives/formkeep`. These are the fastest route to a buyer with budget, and the SERPs are winnable by a small site today.
2. **Fix the category-term pages that already exist** — the 3 blog posts are good writing but do not rank because they are buried in a `/blog/` hub with no internal links and no sibling pages. Retitle them, add the missing on-page structure, and interlink.
3. **Add the two pages the SERPs reward that don't exist** — a `/docs` (API reference, targets "form submission api") and a `/pricing` (targets "formspree pricing" and comparison intent).

Estimated payoff if the alternative pages are published and interlinked within 6 weeks: the two highest-value terms ("formspree alternative" ~2,400/mo, "formsubmit alternative" ~1,300/mo, both Estimated) are reachable from page two to page one because the incumbents are thin pages on weak domains.

---

## Top opportunities

### Quick Wins (low difficulty, winnable this quarter)

| Keyword | Est. vol/mo | Intent | Est. diff | Opportunity | Action |
|---|---|---|---|---|---|
| formspree alternative | 2,400 | Commercial | 35 | **P0** | New `/alternatives/formspree` page |
| formsubmit alternative | 1,300 | Commercial | 30 | **P0** | New `/alternatives/formsubmit` page |
| form endpoint service | 150 | Transactional | 25 | P1 | New `/form-endpoint` landing or fold into docs |
| form backend with webhooks | 90 | Transactional | 25 | P1 | New `/webhooks` feature page |
| formkeep alternative | 70 | Commercial | 20 | P1 | New `/alternatives/formkeep` page |
| formbackend alternative | 200 | Commercial | 25 | P1 | New `/alternatives/formbackend` page |

*Opportunity = (volume × intent value) / difficulty; commercial = 2, transactional = 3.*

### Growth (existing pages that need fixing, not new writing)

| Keyword | Est. vol/mo | Intent | Est. diff | Opportunity | Action |
|---|---|---|---|---|---|
| serverless form handling | 1,000 | Transactional | 50 | P1 | Retitle + restructure existing blog post |
| form backend as a service | 500 | Transactional | 40 | P1 | Retitle + restructure existing blog post |
| form submission api | 400 | Transactional | 40 | P1 | New `/docs` API reference page |
| best form backend for developers | 350 | Commercial | 45 | P2 | Retitle existing post + get listed in the 3 live roundups |

### GEO (AI-answer overlap — answer these, get cited)

| Query shape | Where it lives |
|---|---|
| What is a form backend? | 40-60 word definition block on the landing page + blog 2 |
| How do I handle form submissions without a backend? | FAQ block on blog 1 + `/use-cases` intro |
| form endpoint vs formspree | The `/alternatives/formspree` comparison table |
| form submit api without a server | FAQ on `/docs` + blog 1 |
| best free form backend | New listicle-style blog or `/alternatives` hub copy |

---

## Topic clusters

### Cluster 1: Alternatives (the revenue engine)

**Pillar**: `/alternatives` hub — "Form Backend Alternatives: Formy vs FormSubmit, Formspree, FormBackend, FormKeep"
**Cluster**: `/alternatives/formsubmit`, `/alternatives/formspree`, `/alternatives/formbackend`, `/alternatives/formkeep`
Each page: quick verdict, a real comparison table (webhooks / dashboard / no-field-builder / JSON POST / price), the 2-3 concrete things the incumbent does worse for a developer, and a migration note ("change your action URL, done"). These pages point at `/auth/register`.

### Cluster 2: Serverless form handling (the category)

**Pillar**: blog post "Serverless form handling" (exists — retitle and restructure)
**Cluster**: `/webhooks` feature page, `/docs` API reference, `/use-cases/*` (already exist)
Retitle to the form-backend vocabulary the SERP uses. The dev.to post and Netlify docs rank for this; a product page can win the transactional slice.

### Cluster 3: Form backend as a service (the buyer's label)

**Pillar**: blog post "Form backend as a service" (exists — retitle and restructure)
**Cluster**: `/alternatives/*`, `/webhooks`, `/docs`
This is the term a developer types after deciding not to build. Every competitor landing page ranks for it with thin copy — a genuinely useful definition + decision table beats all of them.

### Cluster 4: Form submission API (the docs play)

**Pillar**: `/docs` — "Form Submission API Reference"
**Cluster**: blog 1, `/alternatives/*`, `/use-cases/*`
The SERP for "form submission api" is all documentation (Gravity Forms, apiforms, splitforms, w3forms, OpnForm). A clean API reference page with a real POST example, response codes, and rate limits is a winnable entry.

---

## Content calendar (6 weeks)

| Week | Ship | Target | Type |
|---|---|---|---|
| 1 | `/alternatives/formsubmit` | formsubmit alternative | New page |
| 1 | `/alternatives/formspree` | formspree alternative | New page |
| 2 | `/alternatives/formbackend` + `/alternatives/formkeep` | formbackend / formkeep alternative | New pages |
| 2 | `/alternatives` hub with comparison table | — | New hub, links to all four |
| 3 | `/docs` API reference | form submission api | New page |
| 3 | `/webhooks` feature page | form backend with webhooks | New page |
| 4 | Retitle + restructure blog 1 | serverless form handling | Rewrite existing |
| 4 | Retitle + restructure blog 2 | form backend as a service | Rewrite existing |
| 5 | Retitle blog 3 + add comparison table | best form backend for developers | Rewrite existing |
| 5 | `/pricing` page | formspree pricing, comparison intent | New page |
| 6 | Update sitemap + interlink all clusters + submit roundup outreach | — | Technical + outreach |

Cross-linking rules: every `/alternatives/*` page links to `/auth/register` and `/docs`; every blog post links to the two sibling posts and the relevant `/alternatives/` or `/webhooks` page; every use-case page links to `/blog` and `/docs`. Landing page gains a "Compare" nav item.

### Outreach (free listings, not just content)

The roundups already ranking for "best form backend for developers" — formtorch.com (2026-04), orbitforms.ai (2026-03), formgrid.dev — do not list Formy. A one-line submission ("thinnest option, no field builder, webhooks + email, free tier") to all three is cheap and can move the page-one result for a term Formy already wrote a post for.

---

## Next steps

1. Approve the `/alternatives/*` scope (4 pages + hub). Build the formspree + formsubmit pages first — they are the two quick wins with the largest estimated volume.
2. Add `/docs` and `/pricing` to the route map. These are currently the two biggest SERP-shaped gaps in the site.
3. Run the aaron content-writer skill on the 3 existing blog posts and the 2 use-case pages to bring them to CORE-EEAT standard (TL;DR box, direct answer in first 150 words, 5+ precise numbers, ≥1 external citation per 500 words) before touching them further.
4. Wire internal links + update `app/sitemap.ts` after the first four pages ship (the sitemap is already centralized and easy to extend).
5. Verify estimated volumes in GSC (data will appear once pages index) before any paid budget decisions.
