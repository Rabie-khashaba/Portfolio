import { getTechById } from './tech';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFeature {
  titleKey: string;
  descKey: string;
  iconName: string;
}

export interface DatabaseEntity {
  name: string;
  fields: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  categoryKey: 'mobile_backend' | 'ecommerce_delivery' | 'enterprise_ops' | 'realestate_portal';
  techIds: string[];
  platforms: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  year: string;
  architectureLayer: string[];
  databaseEntities: DatabaseEntity[];
  apiEndpointCount: number;
}

export const projects: ProjectItem[] = [
  {
    id: 'farrah',
    slug: 'farrah',
    title: 'Farrah (Farra / Wanderr)',
    categoryKey: 'mobile_backend',
    techIds: ['laravel', 'php', 'sanctum', 'socialite', 'spatie', 'pusher', 'firebase', 'fawaterak', 'aws-s3', 'mysql'],
    platforms: ['Mobile REST API', 'Admin Dashboard', 'Universal Web Links'],
    featured: true,
    year: '2024 - 2025',
    metrics: [
      { label: 'API Modules', value: '15+' },
      { label: 'Video Pipeline', value: 'Transcoded' },
      { label: 'Realtime Latency', value: '<50ms' },
    ],
    architectureLayer: [
      'Laravel 12 REST API Controllers (app/Http/Controllers/Api)',
      'Admin Dashboard & Web Controllers (app/Http/Controllers)',
      'Spatie Role & Permission Middleware',
      'AWS S3 & Background Transcoding Video Pipeline (app/Jobs)',
      'Firebase FCM Push Notifications & Pusher WebSockets',
      'Fawaterak Payment & Subscription Webhooks',
    ],
    databaseEntities: [
      { name: 'Users & Followers', fields: ['id', 'privacy_settings', 'followers_count', 'following_count', 'locale'] },
      { name: 'Posts & Ghost Posts', fields: ['id', 'user_id', 'is_ghost', 'likes_count', 'reposts_count', 'hashtags'] },
      { name: 'Locations & Check-ins', fields: ['id', 'place_id', 'latitude', 'longitude', 'geocoding_data', 'city'] },
      { name: 'Realtime Chats', fields: ['id', 'conversation_id', 'sender_id', 'media_url', 'read_receipts'] },
      { name: 'Promotions & Subscriptions', fields: ['id', 'campaign_tier', 'pricing_goal', 'payment_status', 'fawaterak_id'] },
    ],
    apiEndpointCount: 48,
  },
  {
    id: 'baby-track',
    slug: 'baby-track',
    title: 'Baby Track',
    categoryKey: 'mobile_backend',
    techIds: ['laravel', 'php', 'python', 'fastapi', 'breeze', 'spatie', 'fawaterak', 'firebase', 'vite', 'alpine', 'mysql'],
    platforms: ['Mobile API', 'Python ML Microservice', 'Admin Panel'],
    featured: true,
    year: '2024',
    metrics: [
      { label: 'ML Cry Accuracy', value: '94.2%' },
      { label: 'Cry Reasons', value: '5 Classes' },
      { label: 'Care Modules', value: '10+' },
    ],
    architectureLayer: [
      'Laravel 12 API Engine for Parents & Mobile App',
      'Python / FastAPI Machine Learning Cry Classification Microservice',
      'Laravel Breeze & Spatie RBAC Admin Dashboard',
      'Growth & Vaccination Schedule Calculators',
      'E-Commerce Device Shop & Order Lifecycle',
      'Firebase FCM Token Push Infrastructure',
    ],
    databaseEntities: [
      { name: 'Baby Profiles', fields: ['id', 'parent_id', 'name', 'birth_date', 'gender', 'growth_records'] },
      { name: 'Cry Analysis Logs', fields: ['id', 'audio_path', 'predicted_reason', 'confidence_score', 'feedback'] },
      { name: 'Care Quick Logs', fields: ['id', 'baby_id', 'log_type (feeding/sleep/diaper)', 'notes', 'timestamp'] },
      { name: 'Device Shop Orders', fields: ['id', 'parent_id', 'product_id', 'order_status', 'payment_status'] },
      { name: 'Vaccinations', fields: ['id', 'baby_id', 'vaccine_name', 'due_date', 'status'] },
    ],
    apiEndpointCount: 36,
  },
  {
    id: 'home-plate',
    slug: 'home-plate',
    title: 'Home Plate',
    categoryKey: 'ecommerce_delivery',
    techIds: ['laravel', 'php', 'sanctum', 'paymob', 'firebase', 'pusher', 'mpdf', 'spatie', 'tailwind', 'vite', 'alpine', 'mysql'],
    platforms: ['Customer App API', 'Vendor Portal', 'Driver App API', 'Admin Control'],
    featured: true,
    year: '2023 - 2024',
    metrics: [
      { label: 'User Roles', value: '4 Main Roles' },
      { label: 'Idempotency', value: '100% Guaranteed' },
      { label: 'Order PIN Check', value: 'Secure Verification' },
    ],
    architectureLayer: [
      'Multi-role Sanctum Authentication Engine',
      'Idempotent Order Creation & Price Computation Service',
      'Paymob Payment Gateway & Webhook Reconciliation',
      'Vendor & Driver Digital Wallet Withdrawal Engine',
      'Realtime Order Chat & Firebase FCM Alerts',
      'mPDF Automated Tax Receipt Generator',
    ],
    databaseEntities: [
      { name: 'Orders & Workflows', fields: ['id', 'customer_id', 'vendor_id', 'driver_id', 'pin_code', 'status', 'total'] },
      { name: 'Vendor Catalogs', fields: ['id', 'vendor_id', 'item_name', 'price', 'sizes', 'add_ons', 'availability'] },
      { name: 'Driver Wallets', fields: ['id', 'user_id', 'balance', 'pending_withdrawals', 'total_earnings'] },
      { name: 'Paymob Transactions', fields: ['id', 'order_id', 'transaction_ref', 'payment_status', 'fee_amount'] },
      { name: 'Order Chats', fields: ['id', 'order_id', 'sender_role', 'message', 'attachment_url'] },
    ],
    apiEndpointCount: 52,
  },
  {
    id: 'footeek',
    slug: 'footeek',
    title: 'Footeek E-Commerce Admin',
    categoryKey: 'enterprise_ops',
    techIds: ['laravel', 'php', 'spatie', 'excel', 'tailwind', 'vite', 'alpine', 'pest', 'mysql'],
    platforms: ['Enterprise Web Dashboard', 'Warehouse Operations'],
    featured: false,
    year: '2024',
    metrics: [
      { label: 'Modules Managed', value: '12 Centers' },
      { label: 'Export Engine', value: 'Maatwebsite' },
      { label: 'Variant Generator', value: 'Bulk Matrix' },
    ],
    architectureLayer: [
      'Laravel 12 Admin Operations Core',
      'Spatie Role-Based Access Control (RBAC)',
      'Product Matrix & Cross-selling Engine',
      'Inventory Movement & Stocktake Ledger',
      'Courier Assignment & Shipping Zone Logic',
      'Excel Bulk Import/Export Service',
    ],
    databaseEntities: [
      { name: 'Products & Variants', fields: ['id', 'sku', 'name', 'stock_quantity', 'variant_matrix', 'seo_metadata'] },
      { name: 'Stock Movement Logs', fields: ['id', 'product_id', 'warehouse_id', 'adjustment_type', 'quantity'] },
      { name: 'Fulfillment Orders', fields: ['id', 'customer_id', 'courier_id', 'shipping_zone', 'fulfillment_status'] },
      { name: 'Return Requests', fields: ['id', 'order_id', 'reason', 'refund_amount', 'moderation_status'] },
    ],
    apiEndpointCount: 40,
  },
  {
    id: 'gobite',
    slug: 'gobite',
    title: 'GoBite Restaurant Platform',
    categoryKey: 'ecommerce_delivery',
    techIds: ['laravel', 'php', 'socialite', 'spatie', 'excel', 'firebase', 'vite', 'pest', 'mysql'],
    platforms: ['Customer Ordering API', 'Admin Control Panel'],
    featured: false,
    year: '2024',
    metrics: [
      { label: 'Loyalty Engine', value: 'Points & Rewards' },
      { label: 'Social Login', value: 'Google / FB' },
      { label: 'Delivery Zones', value: 'City/Area Logic' },
    ],
    architectureLayer: [
      'Laravel REST API for Mobile/Web Customers',
      'Socialite Authentication & OTP Verification Flow',
      'City & Area Delivery Pricing Engine',
      'Loyalty Points Earning & Redemption Calculator',
      'Firebase FCM Push Token Dispatcher',
      'Support Ticket System',
    ],
    databaseEntities: [
      { name: 'Loyalty Balances', fields: ['id', 'user_id', 'points_earned', 'points_redeemed', 'points_balance'] },
      { name: 'Restaurant Menu', fields: ['id', 'category_id', 'item_name', 'price', 'variations', 'is_featured'] },
      { name: 'Delivery Locations', fields: ['id', 'city_id', 'area_name', 'delivery_fee', 'tax_rate'] },
      { name: 'Customer Tickets', fields: ['id', 'user_id', 'subject', 'status', 'last_reply'] },
    ],
    apiEndpointCount: 34,
  },
  {
    id: 'movepoint',
    slug: 'movepoint',
    title: 'MovePoint Field Operations',
    categoryKey: 'enterprise_ops',
    techIds: ['laravel', 'php', 'sanctum', 'spatie', 'excel', 'firebase', 'vite', 'phpunit', 'mysql'],
    platforms: ['Workforce Mobile API', 'Supervisor Portal'],
    featured: false,
    year: '2024',
    metrics: [
      { label: 'Workforce Roles', value: 'Emp / Sup / Rep' },
      { label: 'Lead Routing', value: 'Geo-Automated' },
      { label: 'Excel Auditing', value: 'Imports/Exports' },
    ],
    architectureLayer: [
      'Role-based Workforce REST API Controllers',
      'Employee Schedule & Monthly Target Monitor',
      'Request Approval Engine (Leave, Advance, Deposit)',
      'Supervisor Representative Assignment & Attachment Audit',
      'Geographic Sales Lead Referral & Routing Service',
      'Firebase FCM Alert Dispatcher',
    ],
    databaseEntities: [
      { name: 'Workforce Profiles', fields: ['id', 'user_type', 'supervisor_id', 'monthly_target', 'bank_account'] },
      { name: 'Employee Requests', fields: ['id', 'user_id', 'request_type', 'amount', 'receipt_path', 'status'] },
      { name: 'Sales Leads', fields: ['id', 'representative_id', 'governorate_id', 'phone', 'lead_status'] },
      { name: 'Training Modules', fields: ['id', 'representative_id', 'course_name', 'completion_status'] },
    ],
    apiEndpointCount: 38,
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate All-Stars',
    categoryKey: 'realestate_portal',
    techIds: ['laravel', 'php', 'sanctum', 'blade', 'excel', 'mpdf', 'tailwind', 'vite', 'mysql'],
    platforms: ['Public Marketing Website', 'Awards Contest Portal', 'Admin CMS'],
    featured: true,
    year: '2023 - 2024',
    metrics: [
      { label: 'Multilingual', value: 'Arabic & English' },
      { label: 'Voting System', value: 'Paid & Free Votes' },
      { label: 'Property Catalog', value: 'Projects & Units' },
    ],
    architectureLayer: [
      'Laravel Multilingual MVC Web Architecture (EN/AR)',
      'Real Estate Developer & Project Showcase Module',
      'Digital Contestant Application & Video Upload Pipeline',
      'OTP Voter Registration & Vote Purchase System',
      'Public CMS for FAQs, Judges, Sponsors & News',
      'Analytics Dashboard with PDF & Excel Reports',
    ],
    databaseEntities: [
      { name: 'Properties & Units', fields: ['id', 'developer_id', 'project_name', 'country', 'city', 'starting_price'] },
      { name: 'Contestants', fields: ['id', 'name', 'category', 'video_url', 'approved_status', 'total_votes'] },
      { name: 'Votes Ledger', fields: ['id', 'voter_id', 'contestant_id', 'vote_type', 'amount_paid', 'created_at'] },
      { name: 'Property Leads', fields: ['id', 'unit_id', 'user_name', 'phone', 'interest_details'] },
    ],
    apiEndpointCount: 32,
  },
];

export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const techUsage = (techId: string): number => {
  return projects.reduce((count, p) => {
    return p.techIds.includes(techId) ? count + 1 : count;
  }, 0);
};
