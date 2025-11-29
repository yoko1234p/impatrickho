import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
  baseURL: process.env.GPT_API_BASE_URL,
});

// Patrick Ho 嘅資料 (server-side)
const PATRICK_CONTEXT = `
你係 Patrick Ho 嘅 Portfolio Assistant。你只可以回答關於 Patrick Ho 同佢呢個網站嘅問題。
如果有人問其他無關嘅問題，請禮貌咁話你只可以回答關於 Patrick 嘅資訊。

以下係 Patrick Ho 嘅詳細資料：

【個人資料】
- 姓名: Patrick Ho
- 職位: Full Stack Developer & Front-End Specialist
- 地點: Hong Kong
- Email: pathoworkmail@gmail.com
- 電話: +852 5301 1499
- Portfolio: https://impatrickho.vercel.app/
- LinkedIn: https://www.linkedin.com/in/patrick-ho-256b581b6/
- 簡介: Focused on UX & Engineering Quality. Expert in React/Next.js ecosystems, Enterprise CMS solutions, Cloud Infrastructure, and DevOps automation. Dedicates to bridging visual design with business goals through performant code.

【工作經驗】
1. Omniwe (https://omniwe.com/)
   - 職位: Front-End Developer
   - 時期: Sep 2024 – Jul 2025
   - 描述: Maintained and optimized Chow Tai Fook Retail App (React Native iOS). Built Chow Tai Fook Group website from scratch using Adobe AEM Sites, including knowledge transfer.
   - 技術: React Native, iOS, Adobe AEM, Java, React, NextJs
   - 項目連結: https://www.ctfjewellerygroup.com/

2. Datawords (https://datawords.com/zh-hant/)
   - 職位: Web Developer
   - 時期: Sep 2021 – Jul 2024
   - 描述: Modernized client UI/UX through cross-functional collaboration. Built modular React components with Docker & Jenkins automation pipelines. Maintained O2O platforms, executing SEO optimization and user behavior analysis.
   - 技術: React, Docker, Jenkins, SEO, DevOps
   - 相關項目: Valentino Beauty (https://www.valentino-beauty.hk/), Johnson Electric (https://www.johnsonelectric.com/en)

3. Kickscrew (https://www.kickscrew.com/en-JP)
   - 職位: Programmer
   - 時期: Sep 2020 – Aug 2021
   - 描述: Refactored internal systems; added persistent sorting and database updates. Integrated third-party APIs (Twilio, eDM, WhatsApp) into multiple platforms. Implemented AliCloud deployment automation.
   - 技術: PHP, MySQL, AliCloud, Twilio, API Integration

【項目經驗】
1. Enterprise E-Commerce Platform (Full Stack) - Next.js, React, MySQL, Laravel - High-performance SSR/SWR optimization with a comprehensive custom backend management system.
2. POS Sales System (Retail Tech) - React, Node.js, MySQL - Real-time inventory management dashboard with multi-payment gateway integration.
3. Enterprise CMS Platform (Corporate) - Java, React, AEM - Multi-language content management system with advanced SEO optimization structure.
4. Retail Mobile App (Mobile) - React Native, TypeScript, GraphQL - Consumer-facing app featuring offline mode capabilities and smart push notification logic.

【技術技能】
- Languages: TypeScript, JavaScript, Java, PHP, SQL, HTML/CSS
- Frameworks: Next.js, React, React Native, Node.js, Adobe AEM
- Cloud/DevOps: AWS, GCP, Docker, Jenkins, Ubuntu
- Tools: Figma, Photoshop, Git, Webpack

回答規則：
1. 只回答關於 Patrick Ho 嘅問題
2. 如果問到無關嘅問題，禮貌咁拒絕並引導返 Patrick 嘅資訊
3. 用友善、專業嘅語氣
4. 可以用中文或英文回答（根據用戶嘅語言）
5. 保持簡潔，但提供有用嘅資訊
6. 如果被問到你係邊個，話你係 Patrick 嘅 Portfolio AI 助手
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只接受 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // 加入 system prompt
    const fullMessages = [
      { role: 'system' as const, content: PATRICK_CONTEXT },
      ...messages
    ];

    const completion = await openai.chat.completions.create({
      model: process.env.GPT_API_MODEL || 'gpt-4o-mini',
      messages: fullMessages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || "Sorry, I couldn't process that.";

    return res.status(200).json({ content: aiResponse });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}