# Nexus App Privacy Policy Page Design

**Date:** 2025-01-20
**Status:** Approved (v2 - Updated with legal compliance review)
**Product:** Nexus 智能記帳 App
**Last Updated:** 2025-01-20

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
- Apple App Store Requirements
- FinanceKit Privacy Requirements

### Age Restriction
- **13 歲或以上** (13+)
- 不收集 13 歲以下兒童資料
- 符合基本 COPPA 要求（聲明不針對兒童）

### Contact Information
- **Email:** pathoworkmail@gmail.com
- **Contact Page:** Website contact form

---

## Page Structure (Updated)

```
/privacy
├── Header
│   ├── Nexus Logo
│   ├── Title: "Privacy Policy"
│   ├── Language Toggle [EN] | [繁]
│   └── Last Updated Date: [Date]
├── Introduction
│   ├── App description
│   ├── Data controller information
│   └── Contact email: pathoworkmail@gmail.com
└── Accordion Sections (15 sections)
    │
    ├── CORE PRIVACY SECTIONS
    │   ├── 1. Information We Collect
    │   ├── 2. How We Collect Information
    │   ├── 3. How We Use Your Information
    │   ├── 4. Legal Basis for Processing (GDPR)
    │   ├── 5. Third Party Services & Data Sharing
    │   ├── 6. Data Storage & Security
    │   ├── 7. Data Retention & Deletion
    │   ├── 8. Your Rights & Choices
    │   │
    ├── SPECIFIC DISCLOSURES
    │   ├── 9. FinanceKit Data (Apple)
    │   ├── 10. AI & Automated Processing
    │   ├── 11. Cookies & Tracking
    │   │
    ├── LEGAL COMPLIANCE
    │   ├── 12. GDPR (European Users)
    │   ├── 13. CCPA/CPRA (California Users)
    │   ├── 14. Children's Privacy (COPPA)
    │   │
    └── GENERAL
        └── 15. Policy Changes & Contact
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
| Links | Nexus Blue | #2196F3 |

### Typography
- **Font Family:** system-ui, -apple-system (Sans-serif)
- **Body Text:** 16px, line-height 1.6
- **Legal Terms:** 14px
- **Headings:** Bold, appropriately sized

### Accordion Behavior
- Default: All collapsed
- Click to expand/collapse with smooth transition
- Show +/- or chevron icon indicator
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

## Detailed Content Specifications

### Section 1: Information We Collect

**Personal Data:**
- Email address (from Apple Sign In)
- First name and last name (from Apple Sign In)
- Apple User ID (anonymized identifier)

**Financial Data:**
- Transaction records (amount, date, merchant, category)
- Budget settings and spending goals
- Account information (if using FinanceKit)

**Media:**
- Receipt photos (processed locally via OCR, not uploaded)

**Device Data:**
- Device model and OS version (for app compatibility)
- App usage analytics (if enabled in future)

**Data NOT Collected:**
- Location data
- Contacts
- Browsing history
- Advertising identifiers

---

### Section 2: How We Collect Information

| Collection Method | Data Type | User Action Required |
|-------------------|-----------|---------------------|
| Apple Sign In | Email, Name | User authorization |
| Manual Input | Transactions, budgets | User enters data |
| Camera Capture | Receipt photos | User initiates |
| FinanceKit (future) | Bank transactions | User authorization |
| Automatic | Device info | App installation |

**Key Principle:** We only collect data that you actively provide or explicitly authorize.

---

### Section 3: How We Use Your Information

| Purpose | Data Used | Legal Basis (GDPR) |
|---------|-----------|-------------------|
| Account creation & authentication | Email, Name, Apple ID | Contract performance |
| Expense tracking & budgeting | Transactions, categories | Contract performance |
| AI-powered transaction parsing | Text input | Legitimate interest |
| Receipt OCR processing | Photos (local only) | Contract performance |
| Cloud sync across devices | All user data | Contract performance |
| App improvement & bug fixes | Device info, crash logs | Legitimate interest |
| Customer support | Contact info, usage data | Legitimate interest |

**We do NOT use your data for:**
- Advertising or marketing to third parties
- Selling to data brokers
- Profiling for purposes unrelated to the app
- Training AI models with your personal financial data

---

### Section 4: Legal Basis for Processing (GDPR)

Under GDPR Article 6, we process your data based on:

**1. Contract Performance (Art. 6(1)(b))**
- Providing the expense tracking service you requested
- Account management and authentication
- Cloud synchronization

**2. Legitimate Interests (Art. 6(1)(f))**
- Improving app functionality and user experience
- Preventing fraud and ensuring security
- Analyzing anonymized usage patterns

**3. Consent (Art. 6(1)(a))**
- Optional analytics (if implemented)
- Marketing communications (not currently sent)

**You can withdraw consent at any time** by contacting us or adjusting app settings.

---

### Section 5: Third Party Services & Data Sharing

#### Service Providers

| Provider | Purpose | Data Shared | Location |
|----------|---------|-------------|----------|
| **Apple Inc.** | Sign In with Apple, FinanceKit | Auth tokens, financial data access | USA (Privacy Shield) |
| **Supabase** | Authentication, database, edge functions | Email, user ID, encrypted data | USA/EU (configurable) |

#### Data Sharing Principles

- **No Sale of Data:** We do NOT sell your personal information to any third party.
- **No Sharing for Advertising:** We do NOT share data with advertisers.
- **Service Providers Only:** Data is only shared with providers necessary to operate the app.
- **Contractual Protections:** All providers are bound by data processing agreements.

#### Third-Party SDK Disclosure

| SDK | Purpose | Data Access |
|-----|---------|-------------|
| Supabase SDK | Backend services | User auth, app data |
| Apple Frameworks | System integration | As per Apple's privacy policy |

---

### Section 6: Data Storage & Security

#### Storage Locations

| Data Type | Storage | Encryption |
|-----------|---------|------------|
| Transactions, categories | Local (SwiftData) | AES-256 |
| User credentials | iOS Keychain | Apple Secure Enclave |
| Cloud backup | Supabase (encrypted) | TLS 1.3 + AES-256 |
| Receipt photos | Local only | Device encryption |

#### Security Measures

- **Encryption at Rest:** All local data encrypted with AES-256
- **Encryption in Transit:** All network requests use TLS 1.3
- **No Plain Text Storage:** Sensitive data never stored unencrypted
- **Secure Authentication:** Apple Sign In with secure token handling
- **Data Isolation:** Each user's data is isolated and inaccessible to others

#### Data Breach Response

In the event of a data breach affecting your personal information:
- We will notify affected users within 72 hours (GDPR requirement)
- We will notify relevant supervisory authorities as required
- We will provide details of the breach and remediation steps

---

### Section 7: Data Retention & Deletion

#### Retention Periods

| Data Type | Retention Period | Reason |
|-----------|------------------|--------|
| Account data | Until account deletion | Service provision |
| Transaction history | Until account deletion | User access to records |
| Receipt images | Until user deletes | User reference |
| Crash logs | 90 days | Bug fixing |
| Anonymized analytics | 2 years | App improvement |

#### Account Deletion

**Your Right to Delete:**
- You can delete your account at any time from within the app (Settings > Account > Delete Account)
- All personal data will be permanently deleted within **30 days** of request
- Some anonymized, aggregated data may be retained for analytics

**What Happens When You Delete:**
1. Account credentials removed immediately
2. Local data wiped from device
3. Cloud data queued for deletion
4. Backup data purged within 30 days
5. You will receive email confirmation

---

### Section 8: Your Rights & Choices

#### All Users

| Right | How to Exercise |
|-------|-----------------|
| Access your data | Settings > Privacy > Download My Data |
| Correct inaccurate data | Edit within the app or contact us |
| Delete your data | Settings > Account > Delete Account |
| Export your data | Settings > Privacy > Export Data (CSV/JSON) |
| Withdraw consent | Adjust permissions in iOS Settings |

#### Additional Rights by Region

See Sections 12 (GDPR) and 13 (CCPA/CPRA) for region-specific rights.

#### Response Timeline

- We respond to all data requests within **30 days** (GDPR) or **45 days** (CCPA)
- Complex requests may require an additional 30-60 days with notice

---

### Section 9: FinanceKit Data (Apple)

*This section applies when FinanceKit integration is available.*

#### What is FinanceKit?

FinanceKit allows you to securely share your Apple Card and linked bank account transactions with Nexus for automatic expense tracking.

#### How We Handle FinanceKit Data

| Aspect | Our Practice |
|--------|--------------|
| **Data Access** | Only data you explicitly authorize |
| **Processing Location** | 100% on-device (never sent to Apple or our servers for processing) |
| **Storage** | Stored locally with same encryption as other data |
| **Server Transmission** | Only synced to your personal cloud backup (Supabase), never to third parties |
| **Revocation** | You can revoke access anytime in iOS Settings > Privacy > Finance |

#### Data Minimization

- We only request transaction data necessary for expense tracking
- We do NOT access account numbers or routing numbers
- We do NOT access your credit score or loan information

#### What Happens When You Revoke Access

1. New transaction sync stops immediately
2. Previously imported transactions remain (for your records)
3. You can manually delete imported transactions
4. No residual access to your financial institutions

---

### Section 10: AI & Automated Processing

#### How We Use AI

| Feature | AI Purpose | Data Used |
|---------|------------|-----------|
| Natural language input | Parse "lunch $50 at McDonald's" into structured transaction | Your text input only |
| Receipt OCR | Extract amount, date, merchant from photos | Photo (processed locally) |
| Category suggestion | Suggest appropriate spending category | Transaction details |

#### Important Disclosures

**Local vs. Cloud Processing:**
- **Receipt OCR:** Processed 100% locally using Apple Vision framework
- **Natural language parsing:** Processed via secure cloud function (Supabase Edge Function)

**No Profiling:**
- AI is used only to help you categorize transactions
- We do NOT use AI to make decisions that affect you
- We do NOT use your data to train AI models

**Transparency (CCPA/CPRA Compliance):**
- You can opt out of AI features and enter transactions manually
- AI suggestions can always be overridden by you
- Contact us if you want to understand how a specific categorization was made

---

### Section 11: Cookies & Tracking

#### Mobile App

- **Cookies:** Native iOS apps do not use browser cookies
- **Tracking:** We do NOT track you across other apps or websites
- **Advertising ID:** We do NOT access your device's advertising identifier
- **App Tracking Transparency:** No tracking permission is requested

#### Website (Privacy Policy Page)

- **Essential Cookies:** Language preference (localStorage)
- **Analytics:** None currently; if added in future, will be disclosed
- **Third-Party Cookies:** None

#### Do Not Track (DNT) Disclosure (CalOPPA)

We honor Do Not Track signals. When DNT is enabled:
- No analytics data is collected
- No third-party tracking scripts are loaded

---

### Section 12: GDPR (European Users)

If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR).

#### Your GDPR Rights

| Right | Description | How to Exercise |
|-------|-------------|-----------------|
| **Right to Access** (Art. 15) | Obtain a copy of your personal data | Settings > Privacy > Download My Data |
| **Right to Rectification** (Art. 16) | Correct inaccurate personal data | Edit in app or email us |
| **Right to Erasure** (Art. 17) | Request deletion of your data ("right to be forgotten") | Settings > Account > Delete Account |
| **Right to Restrict Processing** (Art. 18) | Limit how we use your data | Email us with specific request |
| **Right to Data Portability** (Art. 20) | Receive data in machine-readable format | Settings > Privacy > Export Data |
| **Right to Object** (Art. 21) | Object to processing based on legitimate interests | Email us |
| **Right to Withdraw Consent** (Art. 7) | Withdraw previously given consent | Adjust in iOS Settings or email us |

#### Data Controller

**Data Controller:** Patrick Ho (Individual Developer)
**Contact Email:** pathoworkmail@gmail.com
**Response Time:** Within 30 days

#### International Data Transfers

Your data may be transferred to and processed in countries outside the EEA, including the United States. We ensure appropriate safeguards:

- **Supabase:** EU-US Data Privacy Framework certified
- **Apple:** Standard Contractual Clauses (SCCs)

#### Right to Lodge a Complaint

If you believe your rights have been violated, you have the right to lodge a complaint with your local Data Protection Authority (DPA). A list of EU DPAs can be found at: https://edpb.europa.eu/about-edpb/board/members_en

---

### Section 13: CCPA/CPRA (California Users)

If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).

#### Your CCPA/CPRA Rights

| Right | Description |
|-------|-------------|
| **Right to Know** | Know what personal information we collect and how it's used |
| **Right to Delete** | Request deletion of your personal information |
| **Right to Correct** | Request correction of inaccurate personal information |
| **Right to Opt-Out** | Opt out of the sale or sharing of personal information |
| **Right to Limit Use of Sensitive PI** | Limit use of sensitive personal information |
| **Right to Non-Discrimination** | Not be discriminated against for exercising your rights |

#### Categories of Personal Information Collected

| Category | Examples | Collected? |
|----------|----------|------------|
| Identifiers | Name, email, user ID | Yes |
| Financial Information | Transaction records, amounts | Yes |
| Commercial Information | Purchase history | Yes |
| Internet/Network Activity | App usage data | Limited |
| Geolocation | Precise location | No |
| Biometric | Fingerprints, face data | No |
| Sensitive Personal Information | Financial account data (via FinanceKit) | Yes (with consent) |

#### Sale or Sharing of Personal Information

**We do NOT sell your personal information.**
**We do NOT share your personal information for cross-context behavioral advertising.**

In the preceding 12 months, we have not sold or shared any personal information.

#### Do Not Sell or Share My Personal Information

Although we do not sell or share personal information, you may submit a request at any time:
- **Email:** pathoworkmail@gmail.com
- **Subject Line:** "Do Not Sell or Share My Personal Information"

#### Sensitive Personal Information

Financial data is considered Sensitive Personal Information under CPRA. We only use this data to provide the expense tracking service you requested. You can limit use of sensitive personal information by contacting us.

#### Response Timeline

We will respond to verifiable consumer requests within **45 days**. If additional time is needed (up to 90 days total), we will notify you.

#### Authorized Agents

You may designate an authorized agent to make requests on your behalf. The agent must provide proof of authorization.

---

### Section 14: Children's Privacy (COPPA)

#### Age Requirement

**Nexus is intended for users aged 13 and older.**

We do not knowingly collect personal information from children under 13 years of age.

#### If We Discover Underage Users

If we become aware that we have collected personal information from a child under 13:
1. We will delete the information immediately
2. We will terminate the associated account
3. No parental consent mechanism is provided as the app is not intended for children

#### Parental Inquiries

If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at:

**Email:** pathoworkmail@gmail.com

We will promptly investigate and delete any such information.

---

### Section 15: Policy Changes & Contact

#### Policy Updates

We may update this Privacy Policy from time to time. When we make changes:

- **Minor Changes:** Updated on this page with new "Last Updated" date
- **Material Changes:**
  - Notification via in-app message at least **30 days** before effective date
  - Email notification to registered users (if email communications are enabled)
  - Prominent notice on this page

Your continued use of the app after the effective date constitutes acceptance of the updated policy.

#### Contact Us

For any questions, concerns, or requests regarding this Privacy Policy or your personal data:

**Email:** pathoworkmail@gmail.com
**Website:** [Contact Page URL]
**Response Time:** Within 30 days

#### Dispute Resolution

If you have a complaint about our privacy practices:
1. Contact us first at pathoworkmail@gmail.com
2. We will investigate and respond within 30 days
3. If unsatisfied, you may contact your local data protection authority (EU) or the California Attorney General (California residents)

---

## Apple App Store Compliance

### Privacy Nutrition Labels

Ensure App Store Connect privacy labels match this policy:

| Data Type | Collected | Linked to Identity | Used for Tracking |
|-----------|-----------|-------------------|-------------------|
| Contact Info (Email, Name) | Yes | Yes | No |
| Financial Info | Yes | Yes | No |
| User Content (Photos) | Yes | No | No |
| Identifiers (User ID) | Yes | Yes | No |
| Usage Data | No | No | No |
| Diagnostics | Yes | No | No |

### Required App Features

- [x] Privacy Policy URL in App Store Connect
- [x] Privacy Policy accessible within app (Settings)
- [x] Account deletion feature in app
- [x] No App Tracking Transparency needed (no tracking)
- [ ] Privacy Manifest file (to be added to Xcode project)

### Privacy Manifest (PrivacyInfo.xcprivacy)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>NSPrivacyTracking</key>
    <false/>
    <key>NSPrivacyTrackingDomains</key>
    <array/>
    <key>NSPrivacyCollectedDataTypes</key>
    <array>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeEmailAddress</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <true/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeName</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <true/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
    </array>
    <key>NSPrivacyAccessedAPITypes</key>
    <array/>
</dict>
</plist>
```

---

## Technical Implementation

### Stack
- React (existing Portfolio stack)
- Tailwind CSS
- localStorage for language preference

### Component Structure
```
components/privacy/
├── PrivacyPage.tsx           # Main page component
├── PrivacyHeader.tsx         # Logo + title + language toggle + date
├── Accordion.tsx             # Reusable accordion component
├── AccordionSection.tsx      # Individual section
├── content/
│   ├── en.ts                 # English content (all 15 sections)
│   └── zh-hk.ts              # Traditional Chinese content
└── types.ts                  # TypeScript interfaces
```

### Route
Add to existing router: `/privacy` → `<PrivacyPage />`

---

## Files to Create/Modify

### New Files (impatrickho project)
1. `components/privacy/PrivacyPage.tsx`
2. `components/privacy/PrivacyHeader.tsx`
3. `components/privacy/Accordion.tsx`
4. `components/privacy/content/en.ts`
5. `components/privacy/content/zh-hk.ts`

### Modify (impatrickho project)
1. `App.tsx` - Add route for `/privacy`

### New Files (Nexus project)
1. `Nexus/PrivacyInfo.xcprivacy` - Privacy Manifest

---

## App Store / Google Play URL

After deployment, the Privacy Policy URL will be:
```
https://impatrickho.com/privacy
```

This URL should be used for:
- App Store submission
- Google Play submission (if applicable)
- FinanceKit capability request
- Any other compliance requirements

---

## Approval History

- [x] v1 (2025-01-20): Initial design approved
- [x] v2 (2025-01-20): Updated with comprehensive legal compliance review
  - Added GDPR legal basis details
  - Added CCPA/CPRA sensitive personal information
  - Added CalOPPA DNT disclosure
  - Changed age restriction to 13+
  - Added FinanceKit specific section
  - Added AI/automated processing transparency
  - Added Apple App Store compliance section
  - Added Privacy Manifest template

---

## References

### Legal Sources
- [GDPR Local - App Compliance](https://gdprlocal.com/gdpr-compliance-for-apps/)
- [Secure Privacy - CCPA 2025](https://secureprivacy.ai/blog/ccpa-privacy-policy-requirements-2025)
- [CPPA Official Regulations](https://cppa.ca.gov/regulations/)
- [Termly - CalOPPA](https://termly.io/resources/articles/caloppa/)
- [FTC - COPPA FAQ](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)

### Apple Sources
- [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [Apple User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/)
- [Apple FinanceKit](https://developer.apple.com/financekit/)
- [WWDC24 - Meet FinanceKit](https://developer.apple.com/videos/play/wwdc2024/2023/)
