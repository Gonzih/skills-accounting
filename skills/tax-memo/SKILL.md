---
name: tax-memo
description: Write a structured tax research memo covering issue, facts, applicable law, analysis, conclusion, and a client-friendly summary.
triggers: ["write a tax memo", "tax research memo", "draft a tax memo"]
---

# Tax Memo

## What this skill does
Produces a formal tax research memo organized into standard sections: issue presented, relevant facts, applicable law (IRC sections, regulations, rulings, case law), legal analysis, conclusion, and a plain-language client summary. The memo follows the structure used by CPA firms and tax counsel for documentation and opinion support.

## How to invoke
/tax-memo [topic or issue]

## Workflow steps

### Step 1 — Identify the issue
Clarify the specific tax question or questions to be addressed. If the user has not provided enough facts, ask for the client's situation, entity type, transaction details, and relevant dates.

### Step 2 — Gather facts
Summarize the relevant facts as provided. Flag any missing information that would affect the analysis and note assumptions made.

### Step 3 — Research applicable law
Identify and cite the governing authority: Internal Revenue Code sections, Treasury Regulations, Revenue Rulings, Revenue Procedures, IRS notices, and relevant Tax Court or Federal Circuit decisions. Note the weight of authority (primary vs. secondary).

### Step 4 — Analyze the law against the facts
Apply the cited authorities to the specific facts. Address favorable and unfavorable authority. Identify planning opportunities or risk areas. Note any open questions or areas of uncertainty.

### Step 5 — State the conclusion
Provide a clear conclusion for each issue with a confidence level (e.g., should, more likely than not, could). Recommend any protective actions such as disclosures or elections.

### Step 6 — Write the client-friendly summary
Translate the conclusion into plain language the client can understand. Avoid jargon. State what it means for them and what (if anything) they need to do.

## Example outputs
A memo with headed sections — Issue, Facts, Law, Analysis, Conclusion, Client Summary — suitable for inclusion in a client file, shared with counsel, or used to support a tax return position.

## Live Data Sources
- **IRS tax tables and brackets** — `irs.gov/pub` (annual revenue procedures with updated tax rate schedules)
- **State tax rate databases** — `tax-rates.org` (state income, sales, and corporate tax rates by jurisdiction)
- **IRS Forms and Instructions** — IRS Forms and Instructions API / `irs.gov/forms-instructions` (current-year forms, instructions, and publications)
- **Tax Foundation data** — `taxfoundation.org` (federal and state tax policy data, comparative rate tables, and fiscal fact sheets)
