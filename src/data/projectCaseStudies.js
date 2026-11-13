export const projectCaseStudies = {
  'home-plate': {
    en: {
      challenge:
        'Coordinate a food-delivery journey across customers, vendors, riders, and administrators while keeping mobile ordering and day-to-day operations connected.',
      approach:
        'Built Laravel REST APIs for the mobile apps and an admin dashboard for operations. The workflows cover order lifecycles, onboarding, wallets, support, ratings, payments, notifications, localization, and media delivery through Cloudflare R2.',
      highlights: [
        'Order lifecycle tracking for customers, vendors, and riders',
        'Vendor and rider onboarding with wallet and withdrawal workflows',
        'Support tickets, ratings, and push notifications',
        'Payment integration and localized mobile experiences',
        'Cloudflare R2 storage for images and videos',
        'Android and iOS app version control',
      ],
      focus: 'Multi-role delivery operations',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'تنسيق رحلة توصيل الطعام بين العملاء والمتاجر والسائقين والإدارة، وربط طلبات تطبيقات الجوال بالعمليات اليومية.',
      approach:
        'تطوير واجهات Laravel REST وتطبيق لوحة إدارة للعمليات. تشمل مسارات العمل دورة الطلب، وضم المتاجر والسائقين، والمحافظ، والدعم، والتقييمات، والمدفوعات، والإشعارات، والتعريب، وتخزين الوسائط عبر Cloudflare R2.',
      highlights: [
        'متابعة دورة الطلب بين العميل والمتجر والسائق',
        'ضم المتاجر والسائقين وإدارة المحافظ والسحب',
        'تذاكر الدعم والتقييمات والإشعارات الفورية',
        'تكامل المدفوعات وتجارب جوال متعددة اللغات',
        'تخزين الصور والفيديوهات عبر Cloudflare R2',
        'إدارة إصدارات تطبيقي Android وiOS',
      ],
      focus: 'عمليات توصيل متعددة الأطراف',
      role: 'تطوير الباك إند',
    },
  },
  movepoint: {
    en: {
      challenge:
        'Bring recruitment, sales, lead management, and payroll processes together in one enterprise system, while giving teams clear operational visibility.',
      approach:
        'Developed a Laravel ERP and CRM using PHP and MySQL, with JavaScript-driven dashboards and WhatsApp API integration for real-time communication.',
      highlights: [
        'Recruitment lifecycle management',
        'Sales pipelines and lead tracking',
        'Complex payroll workflows',
        'WhatsApp API integration for real-time communication',
        'Dynamic dashboards for operational visibility',
      ],
      focus: 'ERP & CRM workflows',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'جمع التوظيف والمبيعات وإدارة العملاء المحتملين والرواتب في نظام مؤسسي واحد، مع رؤية أوضح للعمليات.',
      approach:
        'تطوير نظام ERP وCRM باستخدام Laravel وPHP وMySQL، مع لوحات معلومات تفاعلية عبر JavaScript وتكامل WhatsApp API للتواصل الفوري.',
      highlights: [
        'إدارة دورة التوظيف',
        'مسارات المبيعات ومتابعة العملاء المحتملين',
        'مسارات رواتب معقدة',
        'تكامل WhatsApp API للتواصل الفوري',
        'لوحات معلومات ديناميكية لمتابعة العمليات',
      ],
      focus: 'مسارات ERP وCRM',
      role: 'تطوير الباك إند',
    },
  },
  'whatsapp-messaging': {
    en: {
      challenge:
        'Give businesses a structured way to connect WhatsApp accounts and manage more than one messaging instance for each phone number.',
      approach:
        'Built a platform where users register and create accounts, authenticate by scanning a QR code, and receive access tokens to manage multiple WhatsApp instances and automation workflows.',
      highlights: [
        'User registration and account management',
        'QR-code-based authentication',
        'Access-token generation',
        'Multiple WhatsApp instances per phone number',
        'Messaging and automation workflows',
      ],
      focus: 'Messaging platform & automation',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'توفير طريقة منظمة لربط حسابات WhatsApp وإدارة أكثر من نسخة مراسلة لكل رقم هاتف.',
      approach:
        'بناء منصة تتيح للمستخدمين التسجيل وإنشاء الحسابات، ثم المصادقة بمسح رمز QR والحصول على رموز وصول لإدارة عدة نسخ من WhatsApp ومسارات الأتمتة.',
      highlights: [
        'تسجيل المستخدمين وإدارة الحسابات',
        'المصادقة باستخدام رمز QR',
        'إنشاء رموز الوصول',
        'إدارة عدة نسخ من WhatsApp لكل رقم هاتف',
        'مسارات المراسلة والأتمتة',
      ],
      focus: 'منصة مراسلة وأتمتة',
      role: 'تطوير الباك إند',
    },
  },
  wander: {
    en: {
      challenge:
        'Support a location-based social app with interconnected profile, content, discovery, privacy, and communication features for mobile users.',
      approach:
        'Developed Laravel REST APIs backed by MySQL. Designed relationships for users, posts, tags, check-ins, follows, chats, and reports, and integrated media handling with cloud-storage URLs.',
      highlights: [
        'Profiles, posts, comments, likes, shares, and saved posts',
        'Location-based check-ins and nearby-user discovery',
        'Tags, follow requests, and privacy controls',
        'Notifications, chat, profile views, and reporting',
        'Media handling for profile and post images and videos',
      ],
      focus: 'Location-based social features',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'دعم تطبيق اجتماعي قائم على الموقع بميزات مترابطة للملفات الشخصية والمحتوى والاكتشاف والخصوصية والتواصل عبر الجوال.',
      approach:
        'تطوير واجهات Laravel REST مع MySQL. تصميم العلاقات بين المستخدمين والمنشورات والوسوم وتسجيلات الوصول والمتابعات والمحادثات والبلاغات، مع ربط الوسائط بروابط التخزين السحابي.',
      highlights: [
        'الملفات الشخصية والمنشورات والتعليقات والإعجابات والمشاركات',
        'تسجيلات الوصول واكتشاف المستخدمين القريبين',
        'الوسوم وطلبات المتابعة وإعدادات الخصوصية',
        'الإشعارات والمحادثات ومشاهدات الملف الشخصي والتقارير',
        'إدارة صور الملفات والمنشورات والفيديوهات',
      ],
      focus: 'ميزات اجتماعية مرتبطة بالموقع',
      role: 'تطوير الباك إند',
    },
  },
  'real-estate-management': {
    en: {
      challenge:
        'Keep property listings, client information, and real-estate operations organized in a single management workflow.',
      approach:
        'Developed both the backend and frontend of a real-estate management system, bringing listings, client information, and operational workflows together.',
      highlights: [
        'Real-estate listing management',
        'Client information management',
        'Operational workflow support',
        'Backend and frontend development',
      ],
      focus: 'Property operations',
      role: 'Backend & frontend development',
    },
    ar: {
      challenge:
        'تنظيم العقارات والعملاء والعمليات العقارية ضمن مسار إدارة واحد.',
      approach:
        'تطوير الباك إند والفرونت إند لنظام إدارة عقارات يجمع القوائم العقارية وبيانات العملاء ومسارات العمل التشغيلية.',
      highlights: [
        'إدارة قوائم العقارات',
        'إدارة بيانات العملاء',
        'دعم مسارات العمل التشغيلية',
        'تطوير الباك إند والفرونت إند',
      ],
      focus: 'عمليات العقارات',
      role: 'تطوير الباك إند والفرونت إند',
    },
  },
  'course-management-system': {
    en: {
      challenge:
        'Coordinate English and Dutch courses alongside the college teams responsible for HR, finance, operations, technical support, and sales.',
      approach:
        'Developed a Laravel course-management system to organize courses, students, and scheduling, with supporting modules for the college’s internal teams.',
      highlights: [
        'English and Dutch course management',
        'Student and schedule coordination',
        'HR, finance, operations, technical, and sales modules',
      ],
      focus: 'Course & college operations',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'تنسيق دورات الإنجليزية والهولندية إلى جانب فرق الموارد البشرية والمالية والعمليات والدعم التقني والمبيعات.',
      approach:
        'تطوير نظام Laravel لإدارة الدورات والطلاب والجداول، مع وحدات مساندة للفرق الداخلية بالكلية.',
      highlights: [
        'إدارة دورات الإنجليزية والهولندية',
        'تنسيق الطلاب والجداول',
        'وحدات الموارد البشرية والمالية والعمليات والدعم التقني والمبيعات',
      ],
      focus: 'الدورات وعمليات الكلية',
      role: 'تطوير الباك إند',
    },
  },
};
