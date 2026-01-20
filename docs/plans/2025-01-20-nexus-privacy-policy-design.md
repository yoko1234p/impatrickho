# Nexus App Privacy Policy Page Design

**Date:** 2025-01-20
**Status:** Approved
**Product:** Nexus 智能記帳 App

---

## Overview

為 Nexus App 建立一個 Privacy Policy 頁面，放置於 Patrick Ho Portfolio 網站。

## Requirements

### Page Format
- **Type:** Accordion 摺疊式單頁
- **URL:** `/privacy`
- **Language:** 雙語切換（English / 繁體中文）
- **Style:** 簡潔法律文件風格（白底黑字，專業正式）

### Legal Compliance
- GDPR (歐盟)
- CCPA + CPRA (加州)
- CalOPPA (加州)
- COPPA (兒童私隱)

---

## Page Structure

```
/privacy
├── Header
│   ├── Nexus Logo
│   ├── Title: "Privacy Policy"
│   └── Language Toggle [EN] | [繁]
├── Last Updated Date
├── Introduction Paragraph
└── Accordion Sections (12 sections)
    ├── 1. Information We Collect
    ├── 2. How We Collect Information
    ├── 3. How We Use Your Information
    ├── 4. Cookies Policy
    ├── 5. Third Party Access
    ├── 6. Dispute Resolution
    ├── 7. Business Transfer
    ├── 8. Policy Changes
    ├── 9. Communications
    ├── 10. COPPA - Children's Privacy
    ├── 11. Data Retention
    └── 12. Contact Information
├── Legal Compliance Sections
│   ├── GDPR Rights
│   ├── CCPA/CPRA Rights
│   └── CalOPPA Compliance
└── Footer
```

---

## Visual Design

### Colors
| Element | Color | Hex |
|---------|-------|-----|
| Background | White | #FFFFFF |
| Primary Text | Dark Gray | #1a1a1a |
| Secondary Text | Medium Gray | #666666 |
| Accordion Border | Light Gray | #E5E5E5 |
| Accordion Expanded BG | Off White | #F9FAFB |
| Language Toggle Active | Nexus Blue | #2196F3 |

### Typography
- **Font Family:** system-ui, -apple-system (Sans-serif)
- **Body Text:** 16px, line-height 1.6
- **Legal Terms:** 14px
- **Headings:** Bold, appropriately sized

### Accordion Behavior
- Default: All collapsed
- Click to expand/collapse with smooth transition
- Show +/- icon indicator
- Optional: Only one section open at a time

---

## Bilingual Implementation

### Toggle Mechanism
- Location: Header, top-right
- Display: `[EN] | [繁]`
- Default: English
- Behavior: Instant text swap, no page reload
- Persistence: localStorage for user preference

### URL Strategy
- Single URL: `/privacy`
- Language controlled by React state
- Reason: App Store only needs one Privacy Policy URL

---

## Content Details

### 1. Information We Collect
**Personal Data:**
- Email address (from Apple Sign In)
- First name and last name (from Apple Sign In)

**Financial Data:**
- Transaction records, amounts, categories (stored locally)
- Future: Apple Card/bank transactions (via FinanceKit)

**Media:**
- Receipt photos (processed locally via OCR)

### 2. How We Collect Information
- Apple Sign In authorization
- User manual input (natural language)
- Camera capture (user-initiated)
- FinanceKit user authorization (future)

### 3. How We Use Your Information
- AI parsing of natural language input
- OCR extraction from receipts
- Local expense tracking and analysis
- Cloud sync (Supabase, encrypted transmission)

### 4. Cookies Policy
- Native iOS app does not use cookies
- Website version may use localStorage for preferences

### 5. Third Party Access
**Service Providers:**
- Apple Inc. (Sign In with Apple, FinanceKit)
- Supabase (Authentication + Data Sync)

**Declaration:** We do NOT sell user data to third parties.

### 6. Dispute Resolution
- Contact via website contact page
- Commitment to respond within 30 days

### 7. Business Transfer
- In case of acquisition, user data may be transferred
- Users will be notified in advance

### 8. Policy Changes
- Significant changes notified via in-app notification
- Published 30 days before taking effect

### 9. Communications
- Currently no promotional emails sent
- Future analytics may be implemented

### 10. COPPA - Children's Privacy
- App suitable for all ages
- Users under 13 require parental consent
- Parents may request deletion of child's data

### 11. Data Retention
- Data retained while account is active
- Deleted within 30 days after account deletion

### 12. Contact Information
- Link to website contact page

---

## Legal Compliance Sections

### GDPR (EU Users)
- Right to Access - Request copy of personal data
- Right to Rectification - Request correction of inaccurate data
- Right to Erasure - Request deletion (right to be forgotten)
- Right to Restrict Processing - Limit data processing
- Right to Data Portability - Export data in common format
- Legal Basis: User consent + Contract fulfillment

### CCPA + CPRA (California Users)
- Right to Know - What data is collected
- Right to Delete - Request data deletion
- Right to Opt-Out - Refuse data sale (we don't sell)
- Right to Non-Discrimination - No penalty for exercising rights
- Declaration: No personal data sold in past 12 months

### CalOPPA
- Display last updated date
- Policy change notification mechanism
- Do Not Track signal handling statement

---

## Technical Implementation

### Stack
- React (existing Portfolio stack)
- Tailwind CSS
- localStorage for language preference

### Component Structure
```
PrivacyPage/
├── PrivacyPage.tsx          # Main page component
├── PrivacyHeader.tsx        # Logo + title + language toggle
├── Accordion.tsx            # Reusable accordion component
├── AccordionSection.tsx     # Individual section
├── content/
│   ├── en.ts                # English content
│   └── zh-hk.ts             # Traditional Chinese content
└── styles.css               # Tailwind overrides if needed
```

### Route
Add to existing router: `/privacy` → `<PrivacyPage />`

---

## Files to Create/Modify

### New Files
1. `components/privacy/PrivacyPage.tsx`
2. `components/privacy/PrivacyHeader.tsx`
3. `components/privacy/Accordion.tsx`
4. `components/privacy/content/en.ts`
5. `components/privacy/content/zh-hk.ts`

### Modify
1. `App.tsx` - Add route for `/privacy`
2. `index.html` - Add meta tags if needed

---

## App Store / Google Play URL

After deployment, the Privacy Policy URL will be:
```
https://impatrickho.com/privacy
```

This URL should be used when:
- Submitting to App Store
- Submitting to Google Play
- FinanceKit capability request
- Any other compliance requirements

---

## Approval

- [x] Page structure approved
- [x] Visual design approved
- [x] Bilingual mechanism approved
- [x] Content sections approved (Part 1)
- [x] Content sections approved (Part 2)
- [x] Legal compliance sections approved
