import { ServiceItem, ProjectItem, ValuePillar, ProcessStep } from "./types";

export const DEVELOPER_NAME = "Tarek Eid";
export const DEVELOPER_NAME_AR = "طارق عيد";
export const DEVELOPER_TITLE = "Front-End Developer & React/Next.js Specialist";
export const DEVELOPER_TITLE_AR =
  "مطور واجهات أمامية متخصص في React.js و Next.js";
export const DEVELOPER_LOCATION = "القاهرة، المعادي، جمهورية مصر العربية";
export const GITHUB_PROFILE_URL = "https://github.com/eng-tarek-cyber";
export const LINKEDIN_PROFILE_URL =
  "https://www.linkedin.com/in/tarek-eid-5280b3392/";
export const FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1EzQqATenY/";
export const SITE_PRODUCTION_URL = "https://te-digital-lilac.vercel.app";

export const AGENCY_NAME = "T.E Digital";
export const AGENCY_NAME_AR = "تي إي ديجيتال";
export const AGENCY_TAGLINE_AR =
  "تسويق رقمي • برمجة • حلول ويب للأنشطة والشركات في مصر والوطن العربي";

export const AGENCY_LOGO_URL = "/te-digitale-logo.png";
export const AGENCY_LOGO_ALT =
  "شعار T.E Digital — تي إي ديجيتال: تسويق رقمي وتطوير مواقع وتطبيقات ويب";

export const WHATSAPP_NUMBER = "201006494164";
export const AGENCY_EMAIL = "snamr015@gmail.com";
export const AGENCY_LOCATION = "المعادي، القاهرة، جمهورية مصر العربية";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "sponsored-ads",
    title: "إعلانات ممولة (Sponsored Ads)",
    titleEn: "Sponsored Ads",
    description:
      "نساعدك في الوصول للجمهور المناسب من خلال حملات إعلانية مدروسة ومتابعة مستمرة للأداء وضبط التكاليف.",
    iconName: "ads_click",
    tags: [
      "Facebook & Instagram Ads",
      "TikTok Ads",
      "Google Ads",
      "Audience Targeting",
    ],
  },
  {
    id: "social-media",
    title: "إدارة صفحات السوشيال ميديا",
    titleEn: "Social Media Management",
    description:
      "نساعدك تبني حضورًا احترافيًا ومستمرًا على منصات التواصل الاجتماعي بمحتوى يتكلم لغة عميلك ويجيب على تساؤلاته.",
    iconName: "share_reviews",
    tags: [
      "Content Planning",
      "Page Management",
      "Audience Engagement",
      "Performance Monitoring",
    ],
  },
  {
    id: "web-dev",
    title: "تصميم وتطوير المواقع",
    titleEn: "Web Design & Development",
    description:
      "نصمم مواقع حديثة وسريعة تعكس هوية مشروعك وتساعدك على تحويل الزوار إلى عملاء مع دعم كامل للهواتف ومحركات البحث.",
    iconName: "code_blocks",
    tags: [
      "Responsive Design",
      "Modern UI / UX",
      "Fast Performance",
      "SEO Friendly",
    ],
  },
  {
    id: "landing-pages",
    title: "صفحات الهبوط (Landing Pages)",
    titleEn: "High-Converting Landing Pages",
    description:
      "صفحات هبوط مصممة بهدف واضح: تقديم خدمتك أو عرضك بشكل احترافي وتشجيع العميل على اتخاذ الخطوة المطلوبة فورًا.",
    iconName: "web",
    tags: [
      "High Conversion Flow",
      "Lead Capture",
      "Pixel Integration",
      "Instant WhatsApp CTA",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "abyssal-elegance",
    title: "Abyssal Elegance",
    titleEn: "Abyssal Elegance",
    category: "موقع مطعم",
    categoryEn: "Restaurant Website",
    description:
      "موقع مطعم حديث بطابع بصري داكن فاخر، وتخطيط متجاوب، وأقسام تفاعلية، وعرض للقائمة، وتجربة مستخدم مصقولة.",
    descriptionEn:
      "Modern restaurant website with a premium dark visual style, responsive layout, interactive sections, menu presentation, and a polished user experience.",
    fullDetails:
      "موقع مطعم حديث بطابع بصري داكن فاخر، وتخطيط متجاوب، وأقسام تفاعلية، وعرض للقائمة، وتجربة مستخدم مصقولة.",
    fullDetailsEn:
      "Modern restaurant website with a premium dark visual style, responsive layout, interactive sections, menu presentation, and a polished user experience.",
    imageUrl: "/projects/abyssal-elegance.webp",
    liveUrl: "https://abyssa-l-elegance-s3umr3.cranl.net",
    tags: ["Restaurant Website"],
    altText: "Abyssal Elegance — موقع مطعم حديث من أعمال T.E Digital",
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise Admin Dashboard",
    titleEn: "Enterprise Admin Dashboard",
    category: "لوحة تحكم إدارية / نظام أعمال",
    categoryEn: "Admin Dashboard / Business System",
    description:
      "لوحة تحكم إدارية حديثة لإدارة الأعمال، بواجهة متجاوبة، وتنقل واضح، وعرض للبيانات، وتصميم احترافي نظيف.",
    descriptionEn:
      "Modern enterprise admin dashboard focused on business management, responsive UI, navigation, data visualization, and a clean professional interface.",
    fullDetails:
      "لوحة تحكم إدارية حديثة لإدارة الأعمال، بواجهة متجاوبة، وتنقل واضح، وعرض للبيانات، وتصميم احترافي نظيف.",
    fullDetailsEn:
      "Modern enterprise admin dashboard focused on business management, responsive UI, navigation, data visualization, and a clean professional interface.",
    imageUrl: "/projects/enterprise-dashboard.webp",
    liveUrl: "https://enterprise-admin-dashboard-phi.vercel.app/",
    tags: ["Admin Dashboard", "Business System"],
    altText:
      "Enterprise Admin Dashboard — لوحة تحكم إدارية حديثة من أعمال T.E Digital",
  },
  {
    id: "bright-smile",
    title: "Bright Smile Dental Clinic",
    titleEn: "Bright Smile Dental Clinic",
    category: "موقع رعاية صحية / عيادة أسنان",
    categoryEn: "Healthcare / Dental Website",
    description:
      "موقع عيادة أسنان حديثة يشمل الخدمات، والأطباء، وآراء العملاء، والأسعار، والمقالات، وبيانات التواصل، وتجربة حجز المواعيد.",
    descriptionEn:
      "Modern dental clinic website featuring services, doctors, testimonials, pricing, articles, contact information, and an appointment booking experience.",
    fullDetails:
      "موقع عيادة أسنان حديثة يشمل الخدمات، والأطباء، وآراء العملاء، والأسعار، والمقالات، وبيانات التواصل، وتجربة حجز المواعيد.",
    fullDetailsEn:
      "Modern dental clinic website featuring services, doctors, testimonials, pricing, articles, contact information, and an appointment booking experience.",
    imageUrl: "/projects/bright-smile.webp",
    liveUrl: "https://bright-smil.vercel.app/",
    tags: ["Healthcare", "Dental Website"],
    altText:
      "Bright Smile Dental Clinic — موقع عيادة أسنان حديثة من أعمال T.E Digital",
  },
  {
    id: "shop-co",
    title: "ShopCo – Modern E-Commerce Platform",
    titleEn: "ShopCo – Modern E-Commerce Platform",
    category: "تجارة إلكترونية",
    categoryEn: "E-Commerce",
    description:
      "منصة تجارة إلكترونية حديثة مع تصفح المنتجات، وسلة تسوق، وقائمة رغبات، وواجهة متجاوبة، وتجربة تسوق سلسة.",
    descriptionEn:
      "Modern e-commerce platform with product browsing, shopping cart, wishlist functionality, responsive UI, and a smooth shopping experience.",
    fullDetails:
      "منصة تجارة إلكترونية حديثة مع تصفح المنتجات، وسلة تسوق، وقائمة رغبات، وواجهة متجاوبة، وتجربة تسوق سلسة.",
    fullDetailsEn:
      "Modern e-commerce platform with product browsing, shopping cart, wishlist functionality, responsive UI, and a smooth shopping experience.",
    imageUrl: "/projects/shop-co.webp",
    liveUrl: "https://shop-co-one-mu.vercel.app/",
    tags: ["E-Commerce"],
    altText:
      "ShopCo – Modern E-Commerce Platform — منصة تجارة إلكترونية حديثة من أعمال T.E Digital",
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: "tailored-solutions",
    title: "حلول مناسبة لنشاطك",
    description:
      "خطط واستراتيجيات مصممة خصيصًا لطبيعة مجالك وعملائك، مش قوالب مكررة.",
    iconName: "tune",
  },
  {
    id: "goal-oriented",
    title: "تركيز على الهدف",
    description:
      "كل حملة وكل سطر كود بيبدأ من هدف تجاري محدد وواضح يسهم في نمو مشروعك.",
    iconName: "track_changes",
  },
  {
    id: "continuous-improvement",
    title: "متابعة وتحسين مستمر",
    description:
      "مراقبة دورية للأداء وتحسين مستمر للمتغيرات والمحتوى اللي يصنع فارق حقيقي.",
    iconName: "monitoring",
  },
  {
    id: "transparent-communication",
    title: "تواصل واضح وشفاف",
    description:
      "تقارير واضحة وتواصل شفاف ومباشر بدون تعقيدات أو مصطلحات تقنية مضللة.",
    iconName: "chat_bubble_outline",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "نفهم مشروعك",
    description:
      "دراسة طبيعة نشاطك التجاري، جمهورك، الميزة التنافسية، والتحديات التسويقية الحالية.",
  },
  {
    stepNumber: "02",
    title: "نحدد الخطة",
    description:
      "اختيار المزيج التسويقي والقنوات الأنسب، أو تصميم البنية التقنية لموقعك الإلكتروني.",
  },
  {
    stepNumber: "03",
    title: "ننفذ بدقة",
    description:
      "إطلاق الحملات الإعلانية، تهيئة وتغذية صفحات التواصل، أو برمجة وتطوير الواجهات بأعلى سرعة.",
  },
  {
    stepNumber: "04",
    title: "نتابع ونطوّر",
    description:
      "قياس التفاعل والتحويلات، وتقديم تقارير واقعية وتطوير الحملات لزيادة الكفاءة وتخفيض تكلفة الاستحواذ.",
  },
];
