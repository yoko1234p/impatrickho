import React from 'react';
import type { PrivacyContent } from '../types';

export const enContent: PrivacyContent = {
  pageTitle: 'Privacy Policy',
  lastUpdated: 'January 20, 2025',
  effectiveDate: 'January 20, 2025',
  introduction: `This Privacy Policy describes how Nexus ("we", "us", or "our") collects, uses, and shares your personal information when you use our expense tracking application ("Nexus" or the "App"). We are committed to protecting your privacy and being transparent about our data practices.

Data Controller: Patrick Ho (Individual Developer)
Contact Email: pathoworkmail@gmail.com`,
  sections: [
    {
      id: 'information-we-collect',
      title: '1. Information We Collect',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Personal Data</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Email address (from Apple Sign In)</li>
              <li>First name and last name (from Apple Sign In)</li>
              <li>Apple User ID (anonymized identifier)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Financial Data</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Transaction records (amount, date, merchant, category)</li>
              <li>Budget settings and spending goals</li>
              <li>Account information (if using FinanceKit)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Media</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Receipt photos (processed locally via OCR, not uploaded)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Device Data</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Device model and OS version (for app compatibility)</li>
              <li>App usage analytics (if enabled in future)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Data NOT Collected</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Location data</li>
              <li>Contacts</li>
              <li>Browsing history</li>
              <li>Advertising identifiers</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-collect',
      title: '2. How We Collect Information',
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">Collection Method</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data Type</th>
                  <th className="text-left py-2 font-semibold text-gray-900">User Action Required</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Apple Sign In</td>
                  <td className="py-2 pr-4">Email, Name</td>
                  <td className="py-2">User authorization</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Manual Input</td>
                  <td className="py-2 pr-4">Transactions, budgets</td>
                  <td className="py-2">User enters data</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Camera Capture</td>
                  <td className="py-2 pr-4">Receipt photos</td>
                  <td className="py-2">User initiates</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">FinanceKit (future)</td>
                  <td className="py-2 pr-4">Bank transactions</td>
                  <td className="py-2">User authorization</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Automatic</td>
                  <td className="py-2 pr-4">Device info</td>
                  <td className="py-2">App installation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 font-medium">Key Principle: We only collect data that you actively provide or explicitly authorize.</p>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data Used</th>
                  <th className="text-left py-2 font-semibold text-gray-900">Legal Basis (GDPR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Account creation & authentication</td>
                  <td className="py-2 pr-4">Email, Name, Apple ID</td>
                  <td className="py-2">Contract performance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Expense tracking & budgeting</td>
                  <td className="py-2 pr-4">Transactions, categories</td>
                  <td className="py-2">Contract performance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">AI-powered transaction parsing</td>
                  <td className="py-2 pr-4">Text input</td>
                  <td className="py-2">Legitimate interest</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Receipt OCR processing</td>
                  <td className="py-2 pr-4">Photos (local only)</td>
                  <td className="py-2">Contract performance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Cloud sync across devices</td>
                  <td className="py-2 pr-4">All user data</td>
                  <td className="py-2">Contract performance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">App improvement & bug fixes</td>
                  <td className="py-2 pr-4">Device info, crash logs</td>
                  <td className="py-2">Legitimate interest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">We do NOT use your data for:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Advertising or marketing to third parties</li>
              <li>Selling to data brokers</li>
              <li>Profiling for purposes unrelated to the app</li>
              <li>Training AI models with your personal financial data</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis for Processing (GDPR)',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">Under GDPR Article 6, we process your data based on:</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Contract Performance (Art. 6(1)(b))</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Providing the expense tracking service you requested</li>
              <li>Account management and authentication</li>
              <li>Cloud synchronization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Legitimate Interests (Art. 6(1)(f))</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Improving app functionality and user experience</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Analyzing anonymized usage patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Consent (Art. 6(1)(a))</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Optional analytics (if implemented)</li>
              <li>Marketing communications (not currently sent)</li>
            </ul>
          </div>
          <p className="text-gray-700 font-medium">You can withdraw consent at any time by contacting us or adjusting app settings.</p>
        </div>
      ),
    },
    {
      id: 'third-party',
      title: '5. Third Party Services & Data Sharing',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data Shared</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Location</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Apple Inc.</td>
                    <td className="py-2 pr-4">Sign In with Apple, FinanceKit</td>
                    <td className="py-2 pr-4">Auth tokens, financial data access</td>
                    <td className="py-2">USA</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Supabase</td>
                    <td className="py-2 pr-4">Authentication, database, edge functions</td>
                    <td className="py-2 pr-4">Email, user ID, encrypted data</td>
                    <td className="py-2">USA/EU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Sharing Principles</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>No Sale of Data:</strong> We do NOT sell your personal information to any third party.</li>
              <li><strong>No Sharing for Advertising:</strong> We do NOT share data with advertisers.</li>
              <li><strong>Service Providers Only:</strong> Data is only shared with providers necessary to operate the app.</li>
              <li><strong>Contractual Protections:</strong> All providers are bound by data processing agreements.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'data-storage',
      title: '6. Data Storage & Security',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Storage Locations</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data Type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Storage</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Encryption</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Transactions, categories</td>
                    <td className="py-2 pr-4">Local (SwiftData)</td>
                    <td className="py-2">AES-256</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">User credentials</td>
                    <td className="py-2 pr-4">iOS Keychain</td>
                    <td className="py-2">Apple Secure Enclave</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cloud backup</td>
                    <td className="py-2 pr-4">Supabase (encrypted)</td>
                    <td className="py-2">TLS 1.3 + AES-256</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Receipt photos</td>
                    <td className="py-2 pr-4">Local only</td>
                    <td className="py-2">Device encryption</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Encryption at Rest:</strong> All local data encrypted with AES-256</li>
              <li><strong>Encryption in Transit:</strong> All network requests use TLS 1.3</li>
              <li><strong>No Plain Text Storage:</strong> Sensitive data never stored unencrypted</li>
              <li><strong>Secure Authentication:</strong> Apple Sign In with secure token handling</li>
              <li><strong>Data Isolation:</strong> Each user's data is isolated and inaccessible to others</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Breach Response</h4>
            <p className="text-gray-700">In the event of a data breach affecting your personal information, we will notify affected users within 72 hours (GDPR requirement), notify relevant supervisory authorities as required, and provide details of the breach and remediation steps.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'data-retention',
      title: '7. Data Retention & Deletion',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Retention Periods</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data Type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Retention Period</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Reason</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Account data</td>
                    <td className="py-2 pr-4">Until account deletion</td>
                    <td className="py-2">Service provision</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Transaction history</td>
                    <td className="py-2 pr-4">Until account deletion</td>
                    <td className="py-2">User access to records</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Receipt images</td>
                    <td className="py-2 pr-4">Until user deletes</td>
                    <td className="py-2">User reference</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Crash logs</td>
                    <td className="py-2 pr-4">90 days</td>
                    <td className="py-2">Bug fixing</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Anonymized analytics</td>
                    <td className="py-2 pr-4">2 years</td>
                    <td className="py-2">App improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Account Deletion</h4>
            <p className="text-gray-700 mb-2"><strong>Your Right to Delete:</strong> You can delete your account at any time from within the app (Settings &gt; Account &gt; Delete Account). All personal data will be permanently deleted within <strong>30 days</strong> of request.</p>
            <p className="text-gray-700 mb-2"><strong>What Happens When You Delete:</strong></p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Account credentials removed immediately</li>
              <li>Local data wiped from device</li>
              <li>Cloud data queued for deletion</li>
              <li>Backup data purged within 30 days</li>
              <li>You will receive email confirmation</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: '8. Your Rights & Choices',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">All Users</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Right</th>
                    <th className="text-left py-2 font-semibold text-gray-900">How to Exercise</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Access your data</td>
                    <td className="py-2">Settings &gt; Privacy &gt; Download My Data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Correct inaccurate data</td>
                    <td className="py-2">Edit within the app or contact us</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Delete your data</td>
                    <td className="py-2">Settings &gt; Account &gt; Delete Account</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Export your data</td>
                    <td className="py-2">Settings &gt; Privacy &gt; Export Data (CSV/JSON)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Withdraw consent</td>
                    <td className="py-2">Adjust permissions in iOS Settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Response Timeline</h4>
            <p className="text-gray-700">We respond to all data requests within <strong>30 days</strong> (GDPR) or <strong>45 days</strong> (CCPA). Complex requests may require an additional 30-60 days with notice.</p>
          </div>
          <p className="text-gray-700">See Sections 12 (GDPR) and 13 (CCPA/CPRA) for region-specific rights.</p>
        </div>
      ),
    },
    {
      id: 'financekit',
      title: '9. FinanceKit Data (Apple)',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 italic">This section applies when FinanceKit integration is available.</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What is FinanceKit?</h4>
            <p className="text-gray-700">FinanceKit allows you to securely share your Apple Card and linked bank account transactions with Nexus for automatic expense tracking.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">How We Handle FinanceKit Data</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Our Practice</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Data Access</td>
                    <td className="py-2">Only data you explicitly authorize</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Processing Location</td>
                    <td className="py-2">100% on-device (never sent to Apple or our servers for processing)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Storage</td>
                    <td className="py-2">Stored locally with same encryption as other data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Server Transmission</td>
                    <td className="py-2">Only synced to your personal cloud backup (Supabase), never to third parties</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Revocation</td>
                    <td className="py-2">You can revoke access anytime in iOS Settings &gt; Privacy &gt; Finance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Minimization</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>We only request transaction data necessary for expense tracking</li>
              <li>We do NOT access account numbers or routing numbers</li>
              <li>We do NOT access your credit score or loan information</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-processing',
      title: '10. AI & Automated Processing',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">How We Use AI</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">AI Purpose</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Data Used</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Natural language input</td>
                    <td className="py-2 pr-4">Parse "lunch $50 at McDonald's" into structured transaction</td>
                    <td className="py-2">Your text input only</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Receipt OCR</td>
                    <td className="py-2 pr-4">Extract amount, date, merchant from photos</td>
                    <td className="py-2">Photo (processed locally)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Category suggestion</td>
                    <td className="py-2 pr-4">Suggest appropriate spending category</td>
                    <td className="py-2">Transaction details</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Important Disclosures</h4>
            <p className="text-gray-700 mb-2"><strong>Local vs. Cloud Processing:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li><strong>Receipt OCR:</strong> Processed 100% locally using Apple Vision framework</li>
              <li><strong>Natural language parsing:</strong> Processed via secure cloud function (Supabase Edge Function)</li>
            </ul>
            <p className="text-gray-700 mb-2"><strong>No Profiling:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>AI is used only to help you categorize transactions</li>
              <li>We do NOT use AI to make decisions that affect you</li>
              <li>We do NOT use your data to train AI models</li>
            </ul>
            <p className="text-gray-700"><strong>Transparency (CCPA/CPRA Compliance):</strong> You can opt out of AI features and enter transactions manually. AI suggestions can always be overridden by you. Contact us if you want to understand how a specific categorization was made.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cookies-tracking',
      title: '11. Cookies & Tracking',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Cookies:</strong> Native iOS apps do not use browser cookies</li>
              <li><strong>Tracking:</strong> We do NOT track you across other apps or websites</li>
              <li><strong>Advertising ID:</strong> We do NOT access your device's advertising identifier</li>
              <li><strong>App Tracking Transparency:</strong> No tracking permission is requested</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Website (Privacy Policy Page)</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Essential Cookies:</strong> Language preference (localStorage)</li>
              <li><strong>Analytics:</strong> None currently; if added in future, will be disclosed</li>
              <li><strong>Third-Party Cookies:</strong> None</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Do Not Track (DNT) Disclosure (CalOPPA)</h4>
            <p className="text-gray-700">We honor Do Not Track signals. When DNT is enabled: no analytics data is collected, and no third-party tracking scripts are loaded.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'gdpr',
      title: '12. GDPR (European Users)',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR).</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Your GDPR Rights</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Right</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Access (Art. 15)</td>
                    <td className="py-2">Obtain a copy of your personal data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Rectification (Art. 16)</td>
                    <td className="py-2">Correct inaccurate personal data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Erasure (Art. 17)</td>
                    <td className="py-2">Request deletion of your data ("right to be forgotten")</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Restrict Processing (Art. 18)</td>
                    <td className="py-2">Limit how we use your data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Data Portability (Art. 20)</td>
                    <td className="py-2">Receive data in machine-readable format</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Right to Object (Art. 21)</td>
                    <td className="py-2">Object to processing based on legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Right to Withdraw Consent (Art. 7)</td>
                    <td className="py-2">Withdraw previously given consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Controller</h4>
            <p className="text-gray-700"><strong>Data Controller:</strong> Patrick Ho (Individual Developer)<br /><strong>Contact Email:</strong> pathoworkmail@gmail.com<br /><strong>Response Time:</strong> Within 30 days</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">International Data Transfers</h4>
            <p className="text-gray-700">Your data may be transferred to and processed in countries outside the EEA, including the United States. We ensure appropriate safeguards through EU-US Data Privacy Framework certification (Supabase) and Standard Contractual Clauses (Apple).</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Right to Lodge a Complaint</h4>
            <p className="text-gray-700">If you believe your rights have been violated, you have the right to lodge a complaint with your local Data Protection Authority (DPA). A list of EU DPAs can be found at: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a></p>
          </div>
        </div>
      ),
    },
    {
      id: 'ccpa',
      title: '13. CCPA/CPRA (California Users)',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Your CCPA/CPRA Rights</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Right to Know:</strong> Know what personal information we collect and how it's used</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information</li>
              <li><strong>Right to Limit Use of Sensitive PI:</strong> Limit use of sensitive personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Sale or Sharing of Personal Information</h4>
            <p className="text-gray-700"><strong>We do NOT sell your personal information.</strong><br /><strong>We do NOT share your personal information for cross-context behavioral advertising.</strong></p>
            <p className="text-gray-700 mt-2">In the preceding 12 months, we have not sold or shared any personal information.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Do Not Sell or Share My Personal Information</h4>
            <p className="text-gray-700">Although we do not sell or share personal information, you may submit a request at any time:<br /><strong>Email:</strong> pathoworkmail@gmail.com<br /><strong>Subject Line:</strong> "Do Not Sell or Share My Personal Information"</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Sensitive Personal Information</h4>
            <p className="text-gray-700">Financial data is considered Sensitive Personal Information under CPRA. We only use this data to provide the expense tracking service you requested. You can limit use of sensitive personal information by contacting us.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Response Timeline</h4>
            <p className="text-gray-700">We will respond to verifiable consumer requests within <strong>45 days</strong>. If additional time is needed (up to 90 days total), we will notify you.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'coppa',
      title: "14. Children's Privacy (COPPA)",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Age Requirement</h4>
            <p className="text-gray-700"><strong>Nexus is intended for users aged 13 and older.</strong></p>
            <p className="text-gray-700 mt-2">We do not knowingly collect personal information from children under 13 years of age.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">If We Discover Underage Users</h4>
            <p className="text-gray-700">If we become aware that we have collected personal information from a child under 13:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 mt-2">
              <li>We will delete the information immediately</li>
              <li>We will terminate the associated account</li>
              <li>No parental consent mechanism is provided as the app is not intended for children</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Parental Inquiries</h4>
            <p className="text-gray-700">If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at:<br /><strong>Email:</strong> pathoworkmail@gmail.com</p>
            <p className="text-gray-700 mt-2">We will promptly investigate and delete any such information.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'policy-changes',
      title: '15. Policy Changes & Contact',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Policy Updates</h4>
            <p className="text-gray-700">We may update this Privacy Policy from time to time. When we make changes:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li><strong>Minor Changes:</strong> Updated on this page with new "Last Updated" date</li>
              <li><strong>Material Changes:</strong> Notification via in-app message at least 30 days before effective date, email notification to registered users (if email communications are enabled), and prominent notice on this page</li>
            </ul>
            <p className="text-gray-700 mt-2">Your continued use of the app after the effective date constitutes acceptance of the updated policy.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
            <p className="text-gray-700">For any questions, concerns, or requests regarding this Privacy Policy or your personal data:</p>
            <p className="text-gray-700 mt-2"><strong>Email:</strong> pathoworkmail@gmail.com<br /><strong>Response Time:</strong> Within 30 days</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h4>
            <p className="text-gray-700">If you have a complaint about our privacy practices:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 mt-2">
              <li>Contact us first at pathoworkmail@gmail.com</li>
              <li>We will investigate and respond within 30 days</li>
              <li>If unsatisfied, you may contact your local data protection authority (EU) or the California Attorney General (California residents)</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
