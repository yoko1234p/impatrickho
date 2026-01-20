import React from 'react';
import type { PrivacyContent } from '../types';

export const zhHkContent: PrivacyContent = {
  pageTitle: '私隱政策',
  lastUpdated: '2025年1月20日',
  effectiveDate: '2025年1月20日',
  introduction: `本私隱政策說明 Nexus（「我們」）在您使用我們的記帳應用程式（「Nexus」或「應用程式」）時如何收集、使用和分享您的個人資料。我們致力於保護您的私隱，並對我們的數據處理方式保持透明。

資料控制者：Patrick Ho（獨立開發者）
聯絡電郵：pathoworkmail@gmail.com`,
  sections: [
    {
      id: 'information-we-collect',
      title: '1. 我們收集的資料',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">個人資料</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>電郵地址（來自 Apple 登入）</li>
              <li>名字和姓氏（來自 Apple 登入）</li>
              <li>Apple 用戶 ID（匿名識別碼）</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">財務資料</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>交易記錄（金額、日期、商戶、類別）</li>
              <li>預算設定和消費目標</li>
              <li>帳戶資料（如使用 FinanceKit）</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">媒體</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>收據照片（透過 OCR 本地處理，不會上傳）</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">裝置資料</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>裝置型號和作業系統版本（用於應用程式兼容性）</li>
              <li>應用程式使用分析（如將來啟用）</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">我們不會收集的資料</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>位置資料</li>
              <li>通訊錄</li>
              <li>瀏覽記錄</li>
              <li>廣告識別碼</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-collect',
      title: '2. 我們如何收集資料',
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">收集方式</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">資料類型</th>
                  <th className="text-left py-2 font-semibold text-gray-900">需要的用戶操作</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Apple 登入</td>
                  <td className="py-2 pr-4">電郵、姓名</td>
                  <td className="py-2">用戶授權</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">手動輸入</td>
                  <td className="py-2 pr-4">交易、預算</td>
                  <td className="py-2">用戶輸入資料</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">相機拍攝</td>
                  <td className="py-2 pr-4">收據照片</td>
                  <td className="py-2">用戶主動拍攝</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">FinanceKit（將來）</td>
                  <td className="py-2 pr-4">銀行交易</td>
                  <td className="py-2">用戶授權</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">自動收集</td>
                  <td className="py-2 pr-4">裝置資料</td>
                  <td className="py-2">安裝應用程式</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 font-medium">核心原則：我們只收集您主動提供或明確授權的資料。</p>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. 我們如何使用您的資料',
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">使用的資料</th>
                  <th className="text-left py-2 font-semibold text-gray-900">法律依據（GDPR）</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">帳戶建立和驗證</td>
                  <td className="py-2 pr-4">電郵、姓名、Apple ID</td>
                  <td className="py-2">合約履行</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">記帳和預算管理</td>
                  <td className="py-2 pr-4">交易、類別</td>
                  <td className="py-2">合約履行</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">AI 交易解析</td>
                  <td className="py-2 pr-4">文字輸入</td>
                  <td className="py-2">合法利益</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">收據 OCR 處理</td>
                  <td className="py-2 pr-4">照片（僅限本地）</td>
                  <td className="py-2">合約履行</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">跨裝置雲端同步</td>
                  <td className="py-2 pr-4">所有用戶資料</td>
                  <td className="py-2">合約履行</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">應用程式改進和錯誤修復</td>
                  <td className="py-2 pr-4">裝置資料、崩潰日誌</td>
                  <td className="py-2">合法利益</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">我們不會將您的資料用於：</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>向第三方進行廣告或營銷</li>
              <li>出售給數據經紀商</li>
              <li>與應用程式無關的分析</li>
              <li>使用您的個人財務數據訓練 AI 模型</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'legal-basis',
      title: '4. 資料處理的法律依據（GDPR）',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">根據 GDPR 第6條，我們基於以下依據處理您的資料：</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. 合約履行（第6(1)(b)條）</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>提供您要求的記帳服務</li>
              <li>帳戶管理和驗證</li>
              <li>雲端同步</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. 合法利益（第6(1)(f)條）</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>改進應用程式功能和用戶體驗</li>
              <li>防止欺詐和確保安全</li>
              <li>分析匿名使用模式</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. 同意（第6(1)(a)條）</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>可選分析（如有實施）</li>
              <li>營銷通訊（目前未發送）</li>
            </ul>
          </div>
          <p className="text-gray-700 font-medium">您可以隨時透過聯絡我們或調整應用程式設定撤回同意。</p>
        </div>
      ),
    },
    {
      id: 'third-party',
      title: '5. 第三方服務和資料分享',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">服務提供商</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">提供商</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">用途</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">分享的資料</th>
                    <th className="text-left py-2 font-semibold text-gray-900">位置</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">Apple Inc.</td>
                    <td className="py-2 pr-4">Apple 登入、FinanceKit</td>
                    <td className="py-2 pr-4">認證令牌、財務數據存取</td>
                    <td className="py-2">美國</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Supabase</td>
                    <td className="py-2 pr-4">認證、資料庫、邊緣函數</td>
                    <td className="py-2 pr-4">電郵、用戶 ID、加密資料</td>
                    <td className="py-2">美國/歐盟</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">資料分享原則</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>不出售資料：</strong>我們不會將您的個人資料出售給任何第三方。</li>
              <li><strong>不與廣告商分享：</strong>我們不會與廣告商分享資料。</li>
              <li><strong>僅限服務提供商：</strong>資料僅與營運應用程式所需的提供商分享。</li>
              <li><strong>合約保護：</strong>所有提供商均受數據處理協議約束。</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'data-storage',
      title: '6. 資料儲存和安全',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">儲存位置</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">資料類型</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">儲存位置</th>
                    <th className="text-left py-2 font-semibold text-gray-900">加密方式</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">交易、類別</td>
                    <td className="py-2 pr-4">本地（SwiftData）</td>
                    <td className="py-2">AES-256</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">用戶憑證</td>
                    <td className="py-2 pr-4">iOS 鑰匙圈</td>
                    <td className="py-2">Apple 安全隔離區</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">雲端備份</td>
                    <td className="py-2 pr-4">Supabase（加密）</td>
                    <td className="py-2">TLS 1.3 + AES-256</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">收據照片</td>
                    <td className="py-2 pr-4">僅限本地</td>
                    <td className="py-2">裝置加密</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">安全措施</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>靜態加密：</strong>所有本地資料使用 AES-256 加密</li>
              <li><strong>傳輸加密：</strong>所有網絡請求使用 TLS 1.3</li>
              <li><strong>無明文儲存：</strong>敏感資料從不以明文儲存</li>
              <li><strong>安全認證：</strong>Apple 登入配合安全令牌處理</li>
              <li><strong>資料隔離：</strong>每個用戶的資料相互隔離，無法互相存取</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">資料外洩應對</h4>
            <p className="text-gray-700">如發生影響您個人資料的資料外洩事件，我們將在 72 小時內通知受影響用戶（GDPR 要求）、按要求通知相關監管機構，並提供外洩詳情和補救措施。</p>
          </div>
        </div>
      ),
    },
    {
      id: 'data-retention',
      title: '7. 資料保留和刪除',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">保留期限</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">資料類型</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">保留期限</th>
                    <th className="text-left py-2 font-semibold text-gray-900">原因</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">帳戶資料</td>
                    <td className="py-2 pr-4">直至帳戶刪除</td>
                    <td className="py-2">服務提供</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">交易記錄</td>
                    <td className="py-2 pr-4">直至帳戶刪除</td>
                    <td className="py-2">用戶存取記錄</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">收據圖片</td>
                    <td className="py-2 pr-4">直至用戶刪除</td>
                    <td className="py-2">用戶參考</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">崩潰日誌</td>
                    <td className="py-2 pr-4">90 天</td>
                    <td className="py-2">錯誤修復</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">匿名分析</td>
                    <td className="py-2 pr-4">2 年</td>
                    <td className="py-2">應用程式改進</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">帳戶刪除</h4>
            <p className="text-gray-700 mb-2"><strong>您的刪除權：</strong>您可以隨時在應用程式內刪除帳戶（設定 &gt; 帳戶 &gt; 刪除帳戶）。所有個人資料將在請求後 <strong>30 天</strong>內永久刪除。</p>
            <p className="text-gray-700 mb-2"><strong>刪除時會發生什麼：</strong></p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>帳戶憑證立即移除</li>
              <li>裝置上的本地資料清除</li>
              <li>雲端資料列入刪除隊列</li>
              <li>備份資料在 30 天內清除</li>
              <li>您將收到電郵確認</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: '8. 您的權利和選擇',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">所有用戶</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">權利</th>
                    <th className="text-left py-2 font-semibold text-gray-900">如何行使</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">存取您的資料</td>
                    <td className="py-2">設定 &gt; 私隱 &gt; 下載我的資料</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">更正不準確的資料</td>
                    <td className="py-2">在應用程式內編輯或聯絡我們</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">刪除您的資料</td>
                    <td className="py-2">設定 &gt; 帳戶 &gt; 刪除帳戶</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">匯出您的資料</td>
                    <td className="py-2">設定 &gt; 私隱 &gt; 匯出資料（CSV/JSON）</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">撤回同意</td>
                    <td className="py-2">在 iOS 設定中調整權限</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">回應時間</h4>
            <p className="text-gray-700">我們會在 <strong>30 天</strong>（GDPR）或 <strong>45 天</strong>（CCPA）內回應所有資料請求。複雜請求可能需要額外 30-60 天並會提前通知。</p>
          </div>
          <p className="text-gray-700">有關特定地區權利，請參閱第 12 節（GDPR）和第 13 節（CCPA/CPRA）。</p>
        </div>
      ),
    },
    {
      id: 'financekit',
      title: '9. FinanceKit 資料（Apple）',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 italic">本節適用於 FinanceKit 整合可用時。</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">什麼是 FinanceKit？</h4>
            <p className="text-gray-700">FinanceKit 讓您安全地與 Nexus 分享您的 Apple Card 和連結的銀行帳戶交易，以實現自動記帳。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">我們如何處理 FinanceKit 資料</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">方面</th>
                    <th className="text-left py-2 font-semibold text-gray-900">我們的做法</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">資料存取</td>
                    <td className="py-2">僅存取您明確授權的資料</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">處理位置</td>
                    <td className="py-2">100% 在裝置上處理（從不發送到 Apple 或我們的伺服器進行處理）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">儲存</td>
                    <td className="py-2">與其他資料使用相同加密方式本地儲存</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">伺服器傳輸</td>
                    <td className="py-2">僅同步到您的個人雲端備份（Supabase），從不傳輸給第三方</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">撤銷</td>
                    <td className="py-2">您可以隨時在 iOS 設定 &gt; 私隱 &gt; 財務 中撤銷存取權限</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">資料最小化</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>我們只請求記帳所需的交易資料</li>
              <li>我們不會存取帳戶號碼或轉帳號碼</li>
              <li>我們不會存取您的信用評分或貸款資料</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-processing',
      title: '10. AI 和自動化處理',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">我們如何使用 AI</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">功能</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">AI 用途</th>
                    <th className="text-left py-2 font-semibold text-gray-900">使用的資料</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">自然語言輸入</td>
                    <td className="py-2 pr-4">將「麥當勞午餐 $50」解析為結構化交易</td>
                    <td className="py-2">僅您的文字輸入</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">收據 OCR</td>
                    <td className="py-2 pr-4">從照片中提取金額、日期、商戶</td>
                    <td className="py-2">照片（本地處理）</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">類別建議</td>
                    <td className="py-2 pr-4">建議適當的消費類別</td>
                    <td className="py-2">交易詳情</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">重要披露</h4>
            <p className="text-gray-700 mb-2"><strong>本地與雲端處理：</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li><strong>收據 OCR：</strong>使用 Apple Vision 框架 100% 本地處理</li>
              <li><strong>自然語言解析：</strong>透過安全雲端函數處理（Supabase Edge Function）</li>
            </ul>
            <p className="text-gray-700 mb-2"><strong>無分析：</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>AI 僅用於幫助您分類交易</li>
              <li>我們不使用 AI 做出影響您的決定</li>
              <li>我們不使用您的資料訓練 AI 模型</li>
            </ul>
            <p className="text-gray-700"><strong>透明度（CCPA/CPRA 合規）：</strong>您可以選擇退出 AI 功能並手動輸入交易。AI 建議隨時可以被您覆蓋。如果您想了解特定分類是如何做出的，請聯絡我們。</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cookies-tracking',
      title: '11. Cookie 和追蹤',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">手機應用程式</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Cookie：</strong>原生 iOS 應用程式不使用瀏覽器 Cookie</li>
              <li><strong>追蹤：</strong>我們不會跨其他應用程式或網站追蹤您</li>
              <li><strong>廣告 ID：</strong>我們不會存取您裝置的廣告識別碼</li>
              <li><strong>App 追蹤透明度：</strong>不會請求追蹤權限</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">網站（私隱政策頁面）</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>必要 Cookie：</strong>語言偏好（localStorage）</li>
              <li><strong>分析：</strong>目前沒有；如將來添加，將會披露</li>
              <li><strong>第三方 Cookie：</strong>無</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">請勿追蹤（DNT）披露（CalOPPA）</h4>
            <p className="text-gray-700">我們尊重請勿追蹤信號。當 DNT 啟用時：不收集分析資料，不載入第三方追蹤腳本。</p>
          </div>
        </div>
      ),
    },
    {
      id: 'gdpr',
      title: '12. GDPR（歐洲用戶）',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">如果您位於歐洲經濟區（EEA）、英國或瑞士，您根據《通用資料保護條例》（GDPR）享有額外權利。</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">您的 GDPR 權利</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">權利</th>
                    <th className="text-left py-2 font-semibold text-gray-900">說明</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">存取權（第15條）</td>
                    <td className="py-2">獲取您個人資料的副本</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">更正權（第16條）</td>
                    <td className="py-2">更正不準確的個人資料</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">刪除權（第17條）</td>
                    <td className="py-2">要求刪除您的資料（「被遺忘權」）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">限制處理權（第18條）</td>
                    <td className="py-2">限制我們使用您資料的方式</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">資料可攜權（第20條）</td>
                    <td className="py-2">以機器可讀格式接收資料</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">反對權（第21條）</td>
                    <td className="py-2">反對基於合法利益的處理</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">撤回同意權（第7條）</td>
                    <td className="py-2">撤回先前給予的同意</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">資料控制者</h4>
            <p className="text-gray-700"><strong>資料控制者：</strong>Patrick Ho（獨立開發者）<br /><strong>聯絡電郵：</strong>pathoworkmail@gmail.com<br /><strong>回應時間：</strong>30 天內</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">國際資料傳輸</h4>
            <p className="text-gray-700">您的資料可能會被傳輸到 EEA 以外的國家（包括美國）並在那裡處理。我們透過歐盟-美國資料私隱框架認證（Supabase）和標準合約條款（Apple）確保適當的保障措施。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">投訴權</h4>
            <p className="text-gray-700">如果您認為您的權利受到侵犯，您有權向當地資料保護機構（DPA）投訴。歐盟 DPA 列表可在此找到：<a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a></p>
          </div>
        </div>
      ),
    },
    {
      id: 'ccpa',
      title: '13. CCPA/CPRA（加州用戶）',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">如果您是加州居民，您根據《加州消費者私隱法》（CCPA）及《加州私隱權利法》（CPRA）修訂版享有額外權利。</p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">您的 CCPA/CPRA 權利</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>知情權：</strong>了解我們收集什麼個人資料以及如何使用</li>
              <li><strong>刪除權：</strong>要求刪除您的個人資料</li>
              <li><strong>更正權：</strong>要求更正不準確的個人資料</li>
              <li><strong>退出權：</strong>選擇退出個人資料的出售或分享</li>
              <li><strong>限制敏感個人資料使用權：</strong>限制敏感個人資料的使用</li>
              <li><strong>非歧視權：</strong>行使權利時不受歧視</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">個人資料的出售或分享</h4>
            <p className="text-gray-700"><strong>我們不會出售您的個人資料。</strong><br /><strong>我們不會為跨情境行為廣告分享您的個人資料。</strong></p>
            <p className="text-gray-700 mt-2">在過去 12 個月內，我們沒有出售或分享任何個人資料。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">請勿出售或分享我的個人資料</h4>
            <p className="text-gray-700">雖然我們不會出售或分享個人資料，但您可以隨時提交請求：<br /><strong>電郵：</strong>pathoworkmail@gmail.com<br /><strong>主旨：</strong>「請勿出售或分享我的個人資料」</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">敏感個人資料</h4>
            <p className="text-gray-700">根據 CPRA，財務資料被視為敏感個人資料。我們僅使用此資料提供您要求的記帳服務。您可以透過聯絡我們限制敏感個人資料的使用。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">回應時間</h4>
            <p className="text-gray-700">我們將在 <strong>45 天</strong>內回應可驗證的消費者請求。如需額外時間（最多 90 天），我們會通知您。</p>
          </div>
        </div>
      ),
    },
    {
      id: 'coppa',
      title: '14. 兒童私隱（COPPA）',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">年齡要求</h4>
            <p className="text-gray-700"><strong>Nexus 適用於 13 歲及以上的用戶。</strong></p>
            <p className="text-gray-700 mt-2">我們不會故意收集 13 歲以下兒童的個人資料。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">如果我們發現未成年用戶</h4>
            <p className="text-gray-700">如果我們發現我們收集了 13 歲以下兒童的個人資料：</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 mt-2">
              <li>我們將立即刪除該資料</li>
              <li>我們將終止相關帳戶</li>
              <li>由於應用程式不針對兒童，因此不提供家長同意機制</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">家長查詢</h4>
            <p className="text-gray-700">如果您是家長或監護人，認為您 13 歲以下的孩子向我們提供了個人資料，請立即聯絡我們：<br /><strong>電郵：</strong>pathoworkmail@gmail.com</p>
            <p className="text-gray-700 mt-2">我們將立即調查並刪除任何此類資料。</p>
          </div>
        </div>
      ),
    },
    {
      id: 'policy-changes',
      title: '15. 政策變更和聯絡',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">政策更新</h4>
            <p className="text-gray-700">我們可能會不時更新本私隱政策。當我們進行變更時：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li><strong>輕微變更：</strong>在本頁面更新並標註新的「最後更新」日期</li>
              <li><strong>重大變更：</strong>在生效日期前至少 30 天透過應用程式內訊息通知、向註冊用戶發送電郵通知（如已啟用電郵通訊），並在本頁面顯著提示</li>
            </ul>
            <p className="text-gray-700 mt-2">在生效日期後繼續使用應用程式即表示接受更新後的政策。</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">聯絡我們</h4>
            <p className="text-gray-700">如對本私隱政策或您的個人資料有任何問題、疑慮或請求：</p>
            <p className="text-gray-700 mt-2"><strong>電郵：</strong>pathoworkmail@gmail.com<br /><strong>回應時間：</strong>30 天內</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">爭議解決</h4>
            <p className="text-gray-700">如果您對我們的私隱做法有投訴：</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 mt-2">
              <li>請先聯絡我們 pathoworkmail@gmail.com</li>
              <li>我們將在 30 天內調查並回應</li>
              <li>如不滿意，您可以聯絡當地資料保護機構（歐盟）或加州總檢察長（加州居民）</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
