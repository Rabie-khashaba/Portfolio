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
  farra: {
    en: {
      challenge:
        'Deliver a reliable, low-latency transportation backend capable of managing real-time ride requests, multi-role dispatching, and high-frequency status updates.',
      approach:
        'Built a Laravel and MySQL architecture with Firebase integration for real-time alerts. Designed role-based permissions, automated driver assignment workflows, and comprehensive booking APIs.',
      highlights: [
        'Live ride dispatching and request management',
        'Role-based access control for riders, drivers, and admins',
        'Firebase push notifications and event-driven alerts',
        'Status tracking, ride history, and trip logging',
        'Optimized REST APIs for high-concurrency mobile clients',
      ],
      focus: 'Transportation and dispatch operations',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'توفير باك إند عالي الأداء ومنخفض زمن الاستجابة لخدمات النقل لإدارة طلبات المشاوير اللحظية والتوزيع متعدد الأدوار وتحديثات الحالة السريعة.',
      approach:
        'تطوير بنية معمارية بـLaravel وMySQL مع ربط Firebase للتنبيهات اللحظية. وتصميم نظام صلاحيات حسب الدور، ومسارات توزيع السائقين تلقائياً، وواجهات برمجة تطبيقات متكاملة للحجز.',
      highlights: [
        'توزيع وإدارة طلبات المشاوير والرحلات اللحظية',
        'صلاحيات متعددة الأدوار للمستخدمين والسائقين والإدارة',
        'إشعارات Firebase اللحظية والتنبيهات الموجهة بالأحداث',
        'تتبع الحالات وسجل الرحلات والعمليات',
        'واجهات REST APIs مهيأة للتعامل مع الأحمال العالية لتطبيقات الجوال',
      ],
      focus: 'عمليات النقل والتوزيع اللحظي',
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
  expresscare: {
    en: {
      challenge:
        'Connect patient bookings, doctor referrals, and administrative work in a healthcare platform that teams can use in both Arabic and English.',
      approach:
        'Built a Laravel 12 dashboard and API with role-based access, phone-based WhatsApp OTP authentication, referral and booking workflows, Paymob payment support, and Firebase notifications.',
      highlights: [
        'Arabic and English dashboards with RTL support',
        'Role-based access for platform and care teams',
        'WhatsApp OTP authentication and account recovery',
        'Patient booking and doctor referral workflows',
        'Paymob checkout and verified payment webhooks',
        'Firebase push notifications and API documentation',
      ],
      focus: 'Healthcare operations and patient workflows',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'ربط حجوزات المرضى وإحالات الأطباء والمهام الإدارية في منصة رعاية صحية تعمل بالعربية والإنجليزية.',
      approach:
        'تطوير لوحة تحكم وواجهات API باستخدام Laravel 12، مع صلاحيات حسب الدور، ومصادقة عبر الهاتف وWhatsApp OTP، ومسارات للحجوزات والإحالات، ودعم مدفوعات Paymob وإشعارات Firebase.',
      highlights: [
        'لوحات تحكم بالعربية والإنجليزية مع دعم RTL',
        'صلاحيات حسب الدور لفرق المنصة والرعاية',
        'مصادقة WhatsApp OTP واستعادة الحساب',
        'مسارات حجز المرضى وإحالات الأطباء',
        'الدفع عبر Paymob والتحقق من إشعارات الدفع',
        'إشعارات Firebase وتوثيق واجهات API',
      ],
      focus: 'عمليات الرعاية الصحية ومسارات المرضى',
      role: 'تطوير الباك إند',
    },
  },
  'salem-shop': {
    en: {
      challenge:
        'Keep product catalogs, customer quotes, and order workflows organized across a commerce backend and administration dashboard.',
      approach:
        'Developed a Laravel commerce backend with API documentation and a dedicated dashboard, including repeatable development data for catalog, quote, and order workflows.',
      highlights: [
        'Product catalog and lookup data management',
        'Customer quote workflows',
        'Order operations and supporting records',
        'Administration dashboard',
        'Authentication and notifications API documentation',
        'Postman collection for API workflows',
      ],
      focus: 'Commerce catalog and order operations',
      role: 'Backend development',
    },
    ar: {
      challenge:
        'تنظيم كتالوج المنتجات وعروض الأسعار ومسارات الطلبات بين باك إند التجارة ولوحة الإدارة.',
      approach:
        'تطوير باك إند للتجارة باستخدام Laravel مع توثيق للـAPI ولوحة تحكم مخصصة، وبيانات تطوير قابلة لإعادة الإنشاء لمسارات المنتجات وعروض الأسعار والطلبات.',
      highlights: [
        'إدارة كتالوج المنتجات وبيانات البحث',
        'مسارات عروض الأسعار للعملاء',
        'إدارة الطلبات والسجلات المرتبطة بها',
        'لوحة تحكم إدارية',
        'توثيق واجهات المصادقة والإشعارات',
        'مجموعة Postman لمسارات API',
      ],
      focus: 'كتالوج التجارة وإدارة الطلبات',
      role: 'تطوير الباك إند',
    },
  },
  arzaq: {
    en: {
      challenge:
        'Deliver a fast, responsive classifieds and commercial advertising platform with intuitive browsing, post-ad flows, and clean API integration.',
      approach:
        'Built a modern frontend using React, Vite, and Tailwind CSS, featuring categorized directory navigation, image uploads, ad posting forms, and structured REST API communication.',
      highlights: [
        'Commercial advertisements directory and search filters',
        'Multi-step ad posting workflow with validation',
        'Category and taxonomy navigation system',
        'Responsive UI with dark theme and RTL support',
        'Structured REST API integration with timeout and error handling',
        'Interactive chat and commercial details views',
      ],
      focus: 'Commercial classifieds and ads platform',
      role: 'Frontend & API integration',
    },
    ar: {
      challenge:
        'تقديم منصة سريعة ومتجاوبة للإعلانات المبوبة والتجارية مع تصفح سلس ومسارات واضحة لإضافة الإعلانات وتكامل فعال مع الـAPI.',
      approach:
        'تطوير واجهة مستخدم حديثة بـReact وVite وTailwind CSS، تشمل دليلاً إعلانياً مصنفاً، رفع الصور، نماذج نشر الإعلانات، وتكاملاً منظماً مع REST APIs.',
      highlights: [
        'دليل الإعلانات التجارية وفلاتر البحث المتقدمة',
        'مسار متكامل لإضافة الإعلانات والتحقق من المدخلات',
        'نظام تصنيف وتصفح الأقسام والأنشطة',
        'تصميم متجاوب بالكامل مع دعم الوضع المظلم واللغة العربية RTL',
        'تكامل منظم مع واجهات برمجة التطبيقات مع معالجة الأخطاء',
        'صفحات تفاصيل الإعلانات والمحادثات التجارية',
      ],
      focus: 'منصة الإعلانات التجارية والمبوبة',
      role: 'تطوير الواجهة الأمامية والتكامل',
    },
  },
  meshwary: {
    en: {
      challenge:
        'Coordinate limousine bookings, fleet vehicle management, driver assignments, and trip dispatching across multiple governorates and service areas.',
      approach:
        'Engineered a Laravel backend and operations system managing drivers, vehicle fleets (brands, types, colors), service areas, pricing tiers, and ride booking lifecycles.',
      highlights: [
        'Limousine and trip booking management lifecycle',
        'Fleet vehicle administration (brands, types, specifications)',
        'Driver assignment, status tracking, and verification',
        'Governorate and regional service area mapping',
        'Role-based administrative permissions system',
        'REST APIs powering customer and driver applications',
      ],
      focus: 'Transportation and fleet management platform',
      role: 'Backend development & operations',
    },
    ar: {
      challenge:
        'تنسيق حجوزات الليموزين وإدارة أسطول المركبات والسائقين وتوزيع الرحلات عبر مختلف المحافظات والمناطق الجغرافية.',
      approach:
        'تطوير نظام باك إند ولوحة تحكم متكاملة باستخدام Laravel لإدارة السائقين، أسطول السيارات (الموديلات والأنواع)، نطاقات الخدمة، ودورة حياة حجز المشاوير.',
      highlights: [
        'دورة حياة حجز وإدارة رحلات الليموزين والمشاوير',
        'إدارة أسطول المركبات (الماركات، الأنواع، المواصفات)',
        'إدارة وتوزيع وتتبع حالات السائقين والتحقق منهم',
        'تحديد وتغطية نطاقات الخدمة والمحافظات والمناطق',
        'نظام صلاحيات إدارية متعدد الأدوار',
        'واجهات RESTful APIs لتطبيقات العملاء والسائقين',
      ],
      focus: 'منصة النقل وإدارة أسطول الرحلات',
      role: 'تطوير الباك إند',
    },
  },
};
