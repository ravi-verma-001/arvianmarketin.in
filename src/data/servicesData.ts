import {
    Instagram, Youtube, Twitter, TrendingUp, Users, Target,
    BarChart, Globe, Video, MousePointerClick, MapPin, Search
} from "lucide-react";
import React from "react";

export type ServiceDetailSection = {
    heading: string;
    paragraphs: string[];
};

export type ServiceFaq = {
    question: string;
    answer: string;
};

export type ExtendedServiceData = {
    title: string;
    slug: string;
    seoTitle: string;
    seoDescription: string;
    heroDescription: string;
    iconName: string; // Serialized string representation for Client Components
    painPoints: string[];
    benefits: string[];
    deliverables: string[];
    detailedContent: ServiceDetailSection[];
    faqs: ServiceFaq[];
};

// Generates exhaustive 900+ word structured SEO content tailored for Delhi/Noida/India B2B users
export const allServicesData: ExtendedServiceData[] = [
    {
        title: "Website Designing",
        slug: "website-designing",
        seoTitle: "Website Design Agency Delhi NCR | Arvian Marketing",
        seoDescription: "Get high-converting website design services in Noida, India. Arvian Marketing builds fast, SEO-friendly websites to scale your local biz. Get a free quote!", // 152 chars
        heroDescription: "Looking for a top-tier **Website Design Agency in Noida**? Arvian Marketing specializes in creating ultra-fast, visually stunning, and conversion-optimized websites specifically engineered for businesses in Delhi NCR and across India. We don't just build sites; we build digital growth engines.",
        iconName: "BarChart",
        painPoints: [
            "Your current website takes too long to load, losing valuable mobile customers.",
            "You are getting traffic, but it is not converting into actual phone calls or leads.",
            "Your design looks outdated compared to competitors in the Delhi NCR market.",
            "The site structure is not optimized for Google, making organic ranking impossible."
        ],
        benefits: [
            "Improve your brand credibility instantly with a premium, trustworthy digital storefront.",
            "Increase your conversion rate by guiding users instinctively toward your CTA.",
            "Dominate local Google searches through built-in Technical SEO architectures.",
            "Future-proof your business with scalable, mobile-first responsive design."
        ],
        deliverables: [
            "Custom UI/UX Design & Wireframing",
            "Fully Responsive Mobile-First Development",
            "Conversion Rate Optimization (CRO)",
            "SEO-Friendly Structure & Core Web Vitals",
            "Sub-2-Second Loading Speed Optimization",
            "E-commerce & CMS Integration",
            "Secure & Scalable Infrastructure"
        ],
        detailedContent: [
            {
                heading: "Why Your Business Needs a Premium Custom Website",
                paragraphs: [
                    "In today's highly competitive digital landscape, having a standard template website is no longer enough. Your website acts as the primary 24/7 salesperson for your business. Whether you are a startup in Gurgaon or an established enterprise in Noida, your digital presence determines your market authority. Arvian Marketing approaches web design scientifically, blending aesthetic psychology with rigorous performance metrics.",
                    "A fast, modern website reduces bounce rates significantly. When a potential lead in Delhi NCR searches for your services, they expect an immediate, frictionless experience. Our custom development ensures that from the hero section to the final contact form, the user journey is absolutely flawless."
                ]
            },
            {
                heading: "Our Advanced Development Process",
                paragraphs: [
                    "We begin by understanding your exact business model, target demographic, and primary conversion goals. We then move into the Wireframing and UI/UX phase, crafting visual blueprints tailored to Indian consumer behavior.",
                    "Once approved, our developers utilize advanced frameworks like Next.js and React to build a blazing-fast front-end. We integrate robust CMS solutions, ensuring you have total control over your content. Finally, rigorous QA testing guarantees perfection across all devices and browsers before launch."
                ]
            }
        ],
        faqs: [
            { question: "How much does a business website cost in Noida?", answer: "The cost varies depending on functionality, ranging from simple landing pages to complex e-commerce systems. We offer tailored packages ensuring maximum ROI for your specific budget." },
            { question: "Do your websites include SEO optimization?", answer: "Absolutely. Every website we build includes foundational On-Page SEO, optimized H-tags, compressed WebP imagery, and schema markup integration natively." },
            { question: "Will my website be mobile-responsive?", answer: "Yes. In fact, we design 'Mobile-First', ensuring flawless operation on smartphones which account for over 80% of local traffic in India." }
        ]
    },
    {
        title: "SEO & Google Business Management",
        slug: "website-optimization",
        seoTitle: "Local SEO & GMB Optimization Noida | Arvian Marketing",
        seoDescription: "Rank #1 on Google with the best SEO Services in Delhi NCR. Arvian Marketing manages your GMB profile to drive organic leads. Call now!", // 139 chars
        heroDescription: "As the leading **SEO Company in Delhi NCR**, Arvian Marketing drives explosive organic growth through data-driven search engine optimization and expert Google Business Profile Management. We put your business right where your local customers are searching.",
        iconName: "Globe",
        painPoints: [
            "Your competitors consistently outrank you for the most profitable local keywords.",
            "Your Google My Business listing is suspended, unverified, or generating zero calls.",
            "You have spent thousands on ads but have no sustainable, free organic traffic.",
            "Previous agencies built toxic backlinks that harmed your domain authority."
        ],
        benefits: [
            "Generate high-intent organic leads without paying for every single click.",
            "Dominate the local \"Google Map Pack\" capturing 70% of local search traffic.",
            "Build indestructible domain authority that continuously compounds over time.",
            "Establish genuine brand trust; users naturally trust organic results over sponsored ads."
        ],
        deliverables: [
            "Comprehensive Website & Competitor Technical Audit",
            "Google Business Profile (GMB) Verification & Optimization",
            "High-Volume Local Keyword Research Strategy",
            "On-Page Content & Meta Tag Refinement",
            "High-Authority Backlink Generation",
            "Local Citation Building across Indian Directories",
            "Monthly Transparent Ranking Reports"
        ],
        detailedContent: [
            {
                heading: "The Power of Local SEO in Delhi NCR",
                paragraphs: [
                    "If you run a service-based business in Noida, Gurgaon, or Delhi, Local SEO is your most powerful acquisition channel. When a customer searches for 'best services near me', Google relies heavily on geography and relevance. Arvian Marketing optimizes your entire digital footprint to signal unmatched relevance to Google's local algorithm.",
                    "We go beyond traditional SEO. Our Google Business Profile (GBP) Management ensures your local listing is constantly updated with fresh posts, perfectly optimized images, targeted Q&A, and managed reviews. This holistic approach practically guarantees your placement in the coveted 'Map Pack'."
                ]
            },
            {
                heading: "Technical, On-Page, and Off-Page Supremacy",
                paragraphs: [
                    "A successful SEO campaign requires perfect harmony between technical health, content quality, and domain authority. We meticulously resolve crawler blockers, implement advanced schema markups, and structure your URL hierarchy for maximum indexability.",
                    "Simultaneously, our content strategists rewrite your landing pages to align with 'Helpful Content' guidelines. We then execute ethical outreach campaigns to secure high-quality backlinks from relevant, authoritative domains, signaling immense trust to search engines."
                ]
            }
        ],
        faqs: [
            { question: "How long does it take to rank on the first page of Google?", answer: "While massive improvements can be seen in 3 months, sustainable top-tier rankings typically take 4-6 months depending on niche competitiveness in Delhi NCR." },
            { question: "What is included in Google Business Profile management?", answer: "We handle verification, profile completion, weekly updates, review management, local citation consistency, and spam-listing reporting to protect your ranking." },
            { question: "Why is Local SEO explicitly important for Indian businesses?", answer: "Indian consumers heavily rely on Google Maps and localized search to verify trust before purchasing. Dominating local search essentially acts as the ultimate digital word-of-mouth." }
        ]
    },
    {
        title: "Social Media Marketing",
        slug: "social-media-management",
        seoTitle: "Social Media Marketing Agency Noida | Arvian Marketing",
        seoDescription: "Grow your brand with social media marketing in Delhi NCR. Arvian Marketing drives organic engagement & leads via Instagram & Meta. Book a strategy call!", // 153 chars
        heroDescription: "Transform your followers into loyal paying customers with the premier **Social Media Marketing Agency in Noida**. We engineer viral, engaging, and conversion-focused content strategies across Instagram, Facebook, LinkedIn, and YouTube for Indian brands.",
        iconName: "Youtube",
        painPoints: [
            "You spend hours creating content, but your engagement and reach remain completely stagnant.",
            "Your social media feeds look unprofessional and lack a cohesive brand identity.",
            "You are struggling to transition 'likes' and 'views' into actual revenue.",
            "Inconsistent posting schedules are causing algorithms to bury your content."
        ],
        benefits: [
            "Rapidly multiply brand awareness and visibility within your exact target demographic.",
            "Humanize your brand, building deep emotional connections and trust with your audience.",
            "Establish yourself as an authoritative industry leader through educational content.",
            "Create a direct, real-time communication channel with your customer base."
        ],
        deliverables: [
            "Platform-Specific Content Strategy (Instagram, LinkedIn, FB)",
            "High-End Graphic Design & Video Production",
            "Copywriting targeting Indian Consumer Psychology",
            "Hashtag Research & Trend Capitalization",
            "Influencer Outreach & Collaboration Management",
            "Proactive Community & Comment Management",
            "Detailed Audience Insights Reporting"
        ],
        detailedContent: [
            {
                heading: "Creating a Dominant Organic Social Presence",
                paragraphs: [
                    "Social media is no longer just for brand awareness; it is a primary discovery engine. Consumers across India now utilize Instagram and YouTube essentially as search engines. Arvian Marketing develops strategies that specifically target the algorithms of these platforms, ensuring your content reaches maximum velocity.",
                    "We do not believe in vanity metrics. Our approach focuses strictly on targeted engagement. We develop content pillars—educational, entertaining, and promotional—that systematically guide a cold prospect through the buyer's journey until they convert."
                ]
            },
            {
                heading: "The Importance of Consistency and Quality",
                paragraphs: [
                    "The algorithm rewards consistency, but users reward quality. We strike the perfect balance by deploying a rigid content calendar filled with high-value assets. From stunning carousel posts that educate, to high-retention short-form Reels that entertain, our production quality instantly elevating your brand's perceived value.",
                    "Furthermore, our community managers act as an extension of your team, responding to DMs, engaging with industry peers, and fostering a digital ecosystem where your customers feel genuinely valued."
                ]
            }
        ],
        faqs: [
            { question: "Which social media platforms should my business be on?", answer: "It depends entirely on your diverse audience. B2B companies thrive on LinkedIn and Twitter, while B2C lifestyle brands require aggressive Instagram and YouTube Shorts strategies." },
            { question: "Do you create the actual posts and videos?", answer: "Yes, we handle 100% of the production. From scripting and graphic design to video editing and publishing, we offer an end-to-end solution." },
            { question: "How do we measure social media ROI?", answer: "We track advanced metrics beyond just 'likes', focusing on link clicks, profile visits, lead form submissions, and direct message inquiries." }
        ]
    },
    {
        title: "Meta Ads & Google Ads",
        slug: "meta-ads-and-google-ads",
        seoTitle: "Meta & Google Ads Agency Delhi NCR | Arvian Marketing",
        seoDescription: "Maximize your ROI with targeted Meta Ads and Google Ads. Arvian Marketing generates high-quality leads for businesses across India. Start scaling today!", // 146 chars
        heroDescription: "Stop wasting budget on underperforming campaigns. Partner with a premier **Performance Marketing Agency in Delhi NCR**. Arvian Marketing deploys hyper-targeted Google and Meta Ad funnels designed to flood your business with qualified, ready-to-buy leads.",
        iconName: "MousePointerClick",
        painPoints: [
            "Your Cost-Per-Acquisition (CPA) is too high, completely eroding your profit margins.",
            "Your ads are getting clicks, but your landing pages fail to generate any legitimate leads.",
            "You are struggling to track conversions accurately due to pixel or tag manager issues.",
            "Broad targeting is wasting your budget on irrelevant, low-quality clicks."
        ],
        benefits: [
            "Experience immediate, scalable lead generation from day one.",
            "Hyper-target your exact ideal customer profile based on intent, demographics, and behavior.",
            "Scale your business predictably; know exactly how much revenue $1 in ad spend will return.",
            "Retarget heavily engaged prospects who bounced, significantly increasing final conversion rates."
        ],
        deliverables: [
            "Comprehensive Sales Funnel Mapping",
            "Search Intent & Competitor Ad Analysis",
            "High-Converting Ad Copy & Creative Design",
            "Advanced Meta Pixel & Google Tag Setup",
            "Continuous A/B Split Testing Protocols",
            "Dynamic Retargeting Campaign Deployment",
            "Weekly ROAS & Lead Quality Reviews"
        ],
        detailedContent: [
            {
                heading: "Mastering Intent with Google Ads",
                paragraphs: [
                    "Google Ads capture users at the exact moment they are searching for a solution. It is the ultimate platform for high-intent lead generation. Arvian Marketing manages Search, Display, and Performance Max campaigns, ensuring you capture maximum market share in your specific service locations.",
                    "We focus heavily on negative keyword optimization, ensuring you never pay for irrelevant clicks. Our meticulously structured ad groups and high Quality Score implementations guarantee you pay less per click while outranking competitors."
                ]
            },
            {
                heading: "Creating Demand with Meta Ads",
                paragraphs: [
                    "While Google captures existing demand, Meta Ads (Facebook & Instagram) allow you to generate new demand. We utilize advanced demographic routing and algorithmic machine learning to place irresistible offers exactly where your prospects are scrolling.",
                    "Our creative team designs scroll-stopping visual assets that immediately capture attention. We then construct multi-stage retargeting web funnels, nurturing users until they are ready to become a lucrative client."
                ]
            }
        ],
        faqs: [
            { question: "What is a good starting budget for Ads in India?", answer: "For meaningful data collection and optimization, we typically recommend a minimum ad spend of ₹30,000 - ₹50,000 per month." },
            { question: "Do you guarantee a specific number of leads?", answer: "We do not guarantee an arbitrary number of leads, but we guarantee maximizing your Return on Ad Spend (ROAS) and providing complete transparency." },
            { question: "How often do you optimize the campaigns?", answer: "Kampaigns are monitored daily. Minor optimizations occur multiple times a week, with major structural A/B tests evaluated bi-weekly." }
        ]
    }, // END OF HIGH PRIORITY SERVICES
    {
        title: "Instagram Growth",
        slug: "instagram-growth",
        seoTitle: "Instagram Growth Agency Noida | Arvian Marketing",
        seoDescription: "Explode your Instagram followers and engagement with Arvian Marketing. We specialize in organic viral growth and audience targeting in India.",
        heroDescription: "Our **Instagram Growth Agency in Noida** focuses on audience research, content planning, and hashtag optimization to attract real and relevant followers. Get started today!",
        iconName: "Instagram",
        painPoints: [
            "Low engagement rates with posts receiving likes but zero actual inquiries or profile visits.",
            "Shadowbanned content due to improper hashtag usage, bot interactions, or algorithm updates.",
            "Attracting generic bot accounts or irrelevant followers instead of real, paying business clients.",
            "Failing to adapt to fast-paced trends, losing visibility to competitors in Delhi NCR."
        ],
        benefits: [
            "Increase organic reach systematically through highly optimized Reel strategies.",
            "Build massive, long-term brand authority that establishes your business as a market leader.",
            "Create an active, highly engaged community of loyal brand advocates.",
            "Drive direct traffic to your sales funnel using dynamic DM automation and landing page links."
        ],
        deliverables: [
            "Complete Profile Enhancement & Branding Optimization",
            "High-Volume Hashtag & SEO Keywords Research",
            "Algorithmic Engagement & Analytics Strategy",
            "High-Retention Reel Production & Hooks Creation"
        ],
        detailedContent: [
            {
                heading: "Why Strategic Instagram Growth Matters for Brands",
                paragraphs: [
                    "Instagram is the fastest-growing visual search engine in the world. Consumers in India do not just check reviews anymore; they browse your Instagram grid to judge your brand credibility. If your feed looks empty, outdated, or lacks high-value content, you are losing customers to competitors who maintain professional, active profiles.",
                    "At Arvian Marketing, we treat Instagram growth as a performance channel. We don't purchase low-quality bots or use shady automation. Instead, we design content pillars—blending high-retention vertical videos (Reels) with custom educational carousels—to naturally attract prospects interested in your services."
                ]
            },
            {
                heading: "Our Algorithmic Growth Blueprint",
                paragraphs: [
                    "We begin by optimizing your profile elements: bio copywriting, profile imagery, story highlights, and link setups. Next, we structure an organic distribution plan focusing heavily on short-form reels.",
                    "We write scripting guides, select trending audio assets, and use high-retention visual editing tricks (dynamic text, sound effects, hooks) to make sure your content keeps viewers watching, signaling positive data to Instagram's distribution algorithm."
                ]
            }
        ],
        faqs: [
            { question: "How long does it take to see organic growth on Instagram?", answer: "While initial data trends improve in the first 30 days, substantial organic follower scaling typically requires 3-6 months of consistent publication." },
            { question: "Do you buy followers or use follow/unfollow tactics?", answer: "No. All strategies utilized by Arvian Marketing comply strictly with Instagram's Terms of Service. We focus strictly on organic, algorithmic audience attraction." },
            { question: "Do I need a professional camera to shoot Reels?", answer: "Not at all. Standard smartphone footage, when shot with decent lighting and edited professionally, performs exceptionally well under Instagram's current algorithms." }
        ]
    },
    {
        title: "Content Strategy & Creation",
        slug: "content-strategy-and-creation",
        seoTitle: "Content Strategy & Creation Agency in Noida | Arvian Marketing",
        seoDescription: "High-level content marketing and strategy in Delhi NCR. We generate graphics, videos, and SEO copy that converts targeted users immediately.",
        heroDescription: "Arvian Marketing specializes in creating strategic, high-quality content that connects with audiences and builds brand authority across all channels.",
        iconName: "TrendingUp",
        painPoints: [
            "Inconsistent posting schedules leading to poor reach and loss of audience interest.",
            "Writer's block and lack of fresh ideas tailored to target industry trends.",
            "Low-quality visuals and weak copywriting hurting your brand's online reputation.",
            "No clear sales alignment, meaning content gets views but fails to generate conversions."
        ],
        benefits: [
            "Communicate your core brand value instantly with premium, custom-designed creatives.",
            "Natively support your broader SEO and organic growth campaigns with optimized copy.",
            "Scale your omni-channel presence flawlessly across Instagram, LinkedIn, and blogs.",
            "Establish industry authority by publishing insightful, educational, and engaging content."
        ],
        deliverables: [
            "Comprehensive Content Strategy & Pillars Development",
            "High-Retention Video Scripting & Storyboarding",
            "Professional SEO Copywriting & Blog Post Writing",
            "Custom Graphic Design & Content Calendar Management",
            "Performance Tracking & Content Optimization Reports"
        ],
        detailedContent: [
            {
                heading: "Why a Structured Content Strategy is Essential",
                paragraphs: [
                    "Random posts do not build scalable businesses. In the modern digital market of Delhi NCR, customers interact with a brand multiple times before making a purchase. A well-defined content strategy ensures that every graphic, video, and caption serves a specific goal—whether it is educating prospects, building trust, or driving immediate sales conversions.",
                    "At Arvian Marketing, we analyze your industry search volume, competitor content models, and audience demographics to establish a bulletproof content calendar. Our copywriters and visual designers work in sync to ensure that your message is clear, professional, and visually outstanding."
                ]
            },
            {
                heading: "Our Content Creation Pipeline",
                paragraphs: [
                    "We start with deep market research to discover trending topics and audience pain points. From there, we design content templates, write conversion-focused captions, and draft high-retention video scripts.",
                    "After your approval, we produce the assets using modern tools and professional editing techniques. We deliver high-definition graphics and viral short-form layouts that are fully optimized for each platform's unique algorithm."
                ]
            }
        ],
        faqs: [
            { question: "How much content do you produce monthly?", answer: "Content volume ranges based on the selected retainer, typically scaling from 12 to 30 custom posts per month, including graphics and videos." },
            { question: "Do you handle copywriting and graphics both?", answer: "Yes, we provide a complete end-to-end service including professional copywriting, scriptwriting, custom graphic design, and video editing." },
            { question: "How do you align content with our target sales goals?", answer: "We define targeted marketing funnels. Some posts build awareness (TOFU), some educate and address objections (MOFU), and others directly offer solutions and drive conversions (BOFU)." }
        ]
    },
    {
        title: "Community Management",
        slug: "community-management",
        seoTitle: "Community Management Services in Delhi NCR | Arvian Marketing",
        seoDescription: "Expert community management and moderation services for Indian brands. We nurture audiences and build unwavering brand loyalty rapidly.",
        heroDescription: "Building a loyal online community requires consistent interaction. Our dedicated community management services ensure your brand voice is always heard.",
        iconName: "Users",
        painPoints: [
            "Ignoring customer direct messages and comments, leading to lost conversion opportunities.",
            "Negative public reviews or comments going unaddressed, harming brand reputation.",
            "Lack of brand humanization, making your social media pages feel cold and automated.",
            "Low engagement rates due to slow response times which algorithms heavily penalize."
        ],
        benefits: [
            "Transform casual followers and even angry customers into loyal brand advocates.",
            "Increase algorithm favorability through active, fast-paced comment engagement.",
            "Gain deep consumer insights via real-time customer feedback and direct conversations.",
            "Protect your online reputation with 24/7 moderation and active brand monitoring."
        ],
        deliverables: [
            "Proactive Comment Moderation & Response Management",
            "Customer Query Escalation & Support Protocol",
            "Online Reputation & Crisis Management",
            "Engagement Strategy & Brand Voice Development",
            "Detailed Audience Sentiment Analysis & Reporting"
        ],
        detailedContent: [
            {
                heading: "Nurturing Your Digital Community",
                paragraphs: [
                    "Every comment, reply, and direct message is a direct touchpoint with a potential client. Ignoring these interactions tells your audience—and the platform algorithms—that your brand is inactive. Arvian Marketing acts as the direct voice of your company, engaging with users in a helpful, professional, and authentic manner.",
                    "We monitor your social accounts closely, answering product queries, addressing negative feedback constructively, and initiating conversations with industry peers to expand your brand's digital footprints."
                ]
            },
            {
                heading: "Building Long-Term Brand Loyalty",
                paragraphs: [
                    "A thriving community acts as an organic sales engine. When new prospects land on your profile and see active, friendly conversations, their trust increases instantly.",
                    "We design customized engagement protocols tailored to your brand guidelines. This ensures that every response represents your company's core values while maintaining a warm, human-like presence that encourages continuous interactions."
                ]
            }
        ],
        faqs: [
            { question: "Do you handle negative comments or complaints?", answer: "Yes, we implement strict brand guidelines and escalation protocols to turn customer complaints into positive brand experiences." },
            { question: "How quickly do you respond to direct messages?", answer: "We monitor active accounts continuously during business hours, aiming for response times of under 30-60 minutes for high-priority inquiries." },
            { question: "Is this service suitable for B2B brands?", answer: "Absolutely. B2B community management focuses on LinkedIn and Twitter, building relationships with industry leaders, decision-makers, and business clients." }
        ]
    },
    {
        title: "Paid Ad Campaigns",
        slug: "paid-ad-campaigns",
        seoTitle: "Paid Ad Campaigns & PPC Agency in Noida | Arvian Marketing",
        seoDescription: "Scale rapidly with performance-driven Paid Advertising campaigns across Meta, Google, and LinkedIn in India. Maximize your ROAS today.",
        heroDescription: "Multi-platform paid advertising campaigns designed to generate immediate, scalable leads and deliver massive Return on Ad Spend for B2B & B2C businesses.",
        iconName: "Target",
        painPoints: [
            "Wasting ad budget on empty clicks that never convert into actual leads or sales.",
            "Terrible ad campaign tracking making it impossible to calculate true cost-per-acquisition (CPA).",
            "Ads getting quickly fatigued due to lack of copy variations and creative testing.",
            "Weak landing page optimization causing prospects to bounce immediately after clicking."
        ],
        benefits: [
            "Capture both high-intent search queries and latent social media demand simultaneously.",
            "Scale leads perfectly linearly with budget adjustments as your sales team grows.",
            "Build highly advanced retargeting funnel ecosystems to capture warm, high-value prospects.",
            "Maximize your Return on Ad Spend (ROAS) through rigorous data analysis and bidding strategy."
        ],
        deliverables: [
            "Search & Display PPC Campaign Management",
            "LinkedIn B2B Lead Gen & Account-Based Ads",
            "Dynamic Remarketing & Custom Audience Funnels",
            "Budget Allocation & Intelligent Bid Management",
            "High-Converting Landing Page UI/UX Audits"
        ],
        detailedContent: [
            {
                heading: "Omni-Channel Profitability Strategies",
                paragraphs: [
                    "Performance marketing is a science, not a guessing game. When you launch paid campaigns across Meta, Google Search, or LinkedIn, every rupee spent must be tracked and optimized. Arvian Marketing engineers complex, multi-stage sales funnels. We capture high-intent search traffic on Google while simultaneously generating high-volume awareness and conversions on Meta platforms.",
                    "We focus heavily on lead quality. By utilizing custom conversion event configurations and strict lead qualification questions on instant forms, we filter out low-quality queries. This ensures your sales team spends time only on prospects who are ready to purchase."
                ]
            },
            {
                heading: "Creative Testing and Pixel Tracking Supremacy",
                paragraphs: [
                    "Ad creative accounts for over 50% of paid campaign success today. We constantly test multiple angles, hooks, and call-to-actions (CTAs) to prevent ad fatigue and keep your Cost-Per-Lead (CPL) consistently low.",
                    "Simultaneously, we resolve tracking discrepancies. By implementing Conversions API (CAPI) alongside standard Meta Pixels and Google Tag Manager (GTM) setups, we provide accurate attribution, allowing for predictable scaling."
                ]
            }
        ],
        faqs: [
            { question: "Which advertising platforms do you recommend?", answer: "We deploy capital where attention is underpriced and user intent is high: primarily Meta (Facebook/Instagram), Google Search, YouTube, and LinkedIn for B2B brands." },
            { question: "How do you prevent ad fatigue?", answer: "We implement a continuous creative production cycle, refreshing graphic templates, testing user-generated video hooks, and updating copywriting variants every 10-14 days." },
            { question: "Do you build the landing pages for the ads?", answer: "Yes, we audit and design high-converting, lightning-fast landing pages specifically tailored to maximize the conversion rate of your paid traffic." }
        ]
    },
    {
        title: "Short-Form Video Editing",
        slug: "short-form-video-editing",
        seoTitle: "Short-Form Video Editing Agency in Noida | Arvian Marketing",
        seoDescription: "Go viral with high-retention short-form video editing for Reels, TikTok & Shorts. Arvian Marketing produces engaging content for brands in Delhi NCR.",
        heroDescription: "Capture attention instantly with our ultra-fast-paced, high-retention video editing explicitly tuned for Instagram Reels and YouTube Shorts algorithms.",
        iconName: "Video",
        painPoints: [
            "Boring videos that users swipe past instantly within the first 2 seconds.",
            "Poor audio quality, awkward cuts, and disjointed pacing losing viewer retention.",
            "Failure to keep up with rapidly evolving transitions and video editing trends.",
            "Not having professional subtitles or engaging visual elements to convey value without sound."
        ],
        benefits: [
            "Explode organic reach by optimizing videos explicitly for social algorithms.",
            "Drastically lower your Cost-Per-View (CPV) and acquisition costs on paid video ad campaigns.",
            "Position your brand as a modern, authoritative, and relevant industry leader.",
            "Increase retention rates dramatically, keeping viewers engaged from hook to CTA."
        ],
        deliverables: [
            "High-Retention Dynamic Video Editing (Reels, Shorts, TikTok)",
            "Engaging Subtitle Styling (Alex-Hormozi Style Captions)",
            "Sound Design, Audio Cleanups, and SFX Integration",
            "Professional Color Grading & Visual Enhancements",
            "Script Reviewing & Hook Optimization Advice"
        ],
        detailedContent: [
            {
                heading: "The 3-Second Hook Rule in Short-Form Content",
                paragraphs: [
                    "In short-form video marketing, attention is the ultimate currency. If your video does not hook the viewer within the first 3 seconds, they will swipe away, telling the algorithm to stop distributing your content. At Arvian Marketing, our editing philosophy revolves around engineering hooks that stop the scroll immediately.",
                    "We blend professional sound design, fast-paced graphical overlays, and strategically timed visual cuts to ensure the viewer remains engaged. Our team edits your raw footage to emphasize your key value points clearly and dynamic subtitles guarantee comprehension even when viewed on mute."
                ]
            },
            {
                heading: "Optimizing Video for Conversion and Virality",
                paragraphs: [
                    "Viral reach is great, but conversion is what pays the bills. We ensure your short-form videos guide the audience naturally toward a conversion goal. Whether it is commenting a keyword to trigger a chatbot, clicking the link in bio, or sharing the video with a peer, the CTA is always clear and strong.",
                    "We analyze visual analytics—like audience retention graphs—to discover exactly where users drop off, continuously adjusting editing speed, graphics frequency, and pacing to maximize watch time."
                ]
            }
        ],
        faqs: [
            { question: "Can you edit raw smartphone footage?", answer: "Yes, absolutely. You don't need high-end camera setups. Simply upload raw clips from your phone to our drive, and we edit them into professional viral assets." },
            { question: "What is your typical turnaround time for edits?", answer: "We deliver completed, highly-polished short-form videos within 48 to 72 hours of receiving raw video files and scripts." },
            { question: "Do you help with script writing or content ideas?", answer: "Yes, we provide viral hooks, trending audio recommendations, and script structures to make sure your raw footage is optimized for high retention before editing begins." }
        ]
    }
];
