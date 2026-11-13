import { useId } from 'react';

const previews = {
  'home-plate': {
    title: 'Home Plate',
    section: 'Orders overview',
    accent: '#f5a65b',
    metrics: [
      ['ORDER FLOW', '—', 'Lifecycle'],
      ['FULFILLMENT', '—', 'Vendors & riders'],
      ['OPERATIONS', '—', 'Admin dashboard'],
    ],
    rows: [
      ['Customer order', 'Vendor fulfillment', 'In progress', '#f5a65b'],
      ['Rider handoff', 'Delivery workflow', 'In progress', '#75c6a5'],
      ['Support ticket', 'Customer service', 'Open', '#a990f5'],
    ],
    kind: 'orders',
    activityHeading: 'Order workflows',
    listHeading: 'Delivery operations',
  },
  farra: {
    title: 'Farra',
    section: 'Live dispatch',
    accent: '#7dd3c7',
    metrics: [
      ['ACTIVE RIDES', '248', '+18 today'],
      ['AVAILABLE', '36', 'Drivers'],
      ['COMPLETED', '1,092', 'This week'],
    ],
    rows: [
      ['FR-0842', 'Airport → Downtown', 'In transit', '#7dd3c7'],
      ['FR-0841', 'West End → Central', 'Assigned', '#a990f5'],
      ['FR-0840', 'North Park → Airport', 'Picking up', '#f5c46b'],
    ],
    kind: 'dispatch',
  },
  'baby-track': {
    title: 'Baby-Track',
    section: 'Monitoring overview',
    accent: '#a990f5',
    metrics: [
      ['ACTIVE PROFILES', '128', 'Monitored'],
      ['CHECK-INS', '96%', 'This week'],
      ['REPORTS', '24', 'Ready'],
    ],
    rows: [
      ['Profile 104', 'Daily summary ready', 'Reviewed', '#75c6a5'],
      ['Profile 103', 'New check-in received', 'Processing', '#a990f5'],
      ['Profile 102', 'Weekly report generated', 'Complete', '#75c6a5'],
    ],
    kind: 'monitoring',
  },
  movepoint: {
    title: 'MovePoint',
    section: 'ERP & CRM overview',
    accent: '#83a9ff',
    metrics: [
      ['RECRUITMENT', '—', 'Lifecycle'],
      ['SALES PIPELINE', '—', 'Lead tracking'],
      ['PAYROLL', '—', 'Operations'],
    ],
    rows: [
      ['Recruitment', 'Candidate workflow', 'In progress', '#83a9ff'],
      ['Sales pipeline', 'Lead tracking', 'In progress', '#a990f5'],
      ['Payroll', 'Payroll workflow', 'Managed', '#75c6a5'],
    ],
    kind: 'people',
    activityHeading: 'Business workflows',
    listHeading: 'Operations overview',
  },
  mvl: {
    title: 'MVL Lamousine',
    section: 'Booking overview',
    accent: '#e8c879',
    metrics: [
      ['TOTAL BOOKINGS', '186', '+14.6%'],
      ['AVAILABLE CARS', '32', 'Fleet status'],
      ['PENDING QUOTES', '12', 'Needs review'],
    ],
    rows: [
      ['MV-0186', 'Executive sedan', 'Confirmed', '#75c6a5'],
      ['MV-0185', 'Luxury SUV', 'Awaiting quote', '#e8c879'],
      ['MV-0184', 'Premium coupe', 'In progress', '#a990f5'],
    ],
    kind: 'bookings',
  },
  whatsapp: {
    title: 'WhatsApp Platform',
    section: 'Instances overview',
    accent: '#70d4a0',
    metrics: [
      ['ACCOUNT ACCESS', '—', 'QR authentication'],
      ['ACCESS TOKENS', '—', 'Secure sessions'],
      ['AUTOMATION', '—', 'Messaging workflows'],
    ],
    rows: [
      ['WhatsApp instance 01', 'Phone account', 'Connected', '#70d4a0'],
      ['WhatsApp instance 02', 'Phone account', 'Connected', '#a990f5'],
      ['QR authentication', 'Access workflow', 'Available', '#e8c879'],
    ],
    kind: 'campaigns',
    activityHeading: 'Instance activity',
    listHeading: 'Connected instances',
  },
  wander: {
    title: 'Wander',
    section: 'Community overview',
    accent: '#7dd3c7',
    metrics: [
      ['PROFILES', '—', 'Community'],
      ['CHECK-INS', '—', 'Location-based'],
      ['CONVERSATIONS', '—', 'Social features'],
    ],
    rows: [
      ['Location check-in', 'Nearby discovery', 'Available', '#7dd3c7'],
      ['Follow request', 'Privacy controls', 'Managed', '#a990f5'],
      ['Media post', 'Cloud storage', 'Shared', '#f5c46b'],
    ],
    kind: 'overview',
    activityHeading: 'Social activity',
    listHeading: 'Community features',
  },
  'real-estate': {
    title: 'Real Estate Management',
    section: 'Property overview',
    accent: '#e8c879',
    metrics: [
      ['LISTINGS', '—', 'Property records'],
      ['CLIENTS', '—', 'Client management'],
      ['OPERATIONS', '—', 'Workflows'],
    ],
    rows: [
      ['Property listing', 'Listing management', 'Managed', '#e8c879'],
      ['Client record', 'Client information', 'Managed', '#7dd3c7'],
      ['Operational workflow', 'Property operations', 'Supported', '#a990f5'],
    ],
    kind: 'overview',
    activityHeading: 'Property activity',
    listHeading: 'Management workflows',
  },
  'course-management': {
    title: 'Course Management',
    section: 'Courses overview',
    accent: '#a990f5',
    metrics: [
      ['COURSES', '—', 'English & Dutch'],
      ['STUDENTS', '—', 'Coordination'],
      ['SCHEDULING', '—', 'Course operations'],
    ],
    rows: [
      ['English course', 'Student coordination', 'Managed', '#a990f5'],
      ['Dutch course', 'Course scheduling', 'Managed', '#7dd3c7'],
      ['College teams', 'Internal operations', 'Supported', '#f5c46b'],
    ],
    kind: 'overview',
    activityHeading: 'Course activity',
    listHeading: 'Education workflows',
  },
};

function MetricCard({ metric, accent }) {
  return (
    <g>
      <rect x={0} y={0} width={280} height={88} rx={12} fill="#171923" stroke="#292c36" />
      <text x={15} y={23} fill="#858998" fontSize={9} fontWeight={600} letterSpacing="1.1">{metric[0]}</text>
      <text x={15} y={55} fill="#f3f4f6" fontSize={22} fontWeight={650}>{metric[1]}</text>
      <text x={263} y={54} fill={accent} fontSize={9} textAnchor="end">{metric[2]}</text>
    </g>
  );
}

function TrendChart({ accent }) {
  const bars = [26, 40, 31, 51, 42, 62, 48, 73, 55, 66, 81, 60, 76, 91, 67, 83, 72, 98];
  return (
    <g transform="translate(0 0)">
      {[0, 1, 2].map((line) => (
        <line key={line} x1={0} y1={28 + line * 35} x2={445} y2={28 + line * 35} stroke="#292c36" strokeDasharray="3 5" />
      ))}
      {bars.map((height, index) => (
        <rect
          key={index}
          x={12 + index * 23}
          y={118 - height}
          width={12}
          height={height}
          rx={5}
          fill={accent}
          opacity={index > 13 ? 0.9 : 0.4 + index * 0.025}
        />
      ))}
    </g>
  );
}

function DispatchMap({ accent }) {
  return (
    <g>
      {[0, 1, 2, 3].map((line) => (
        <path key={`h${line}`} d={`M0 ${24 + line * 31} H445`} stroke="#292c36" strokeWidth="8" strokeLinecap="round" />
      ))}
      {[0, 1, 2, 3, 4].map((line) => (
        <path key={`v${line}`} d={`M${30 + line * 91} 0 V144`} stroke="#292c36" strokeWidth="8" strokeLinecap="round" />
      ))}
      <path d="M37 117 C84 110 75 55 142 60 S219 120 261 88 S334 30 405 39" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeDasharray="7 7" />
      {[[37, 117], [142, 60], [261, 88], [405, 39]].map(([x, y], index) => (
        <g key={index}>
          <circle cx={x} cy={y} r={10} fill={accent} opacity=".2" />
          <circle cx={x} cy={y} r={4} fill={accent} />
        </g>
      ))}
    </g>
  );
}

function WaveChart({ accent }) {
  return (
    <g>
      {[0, 1, 2, 3].map((line) => (
        <line key={line} x1={0} y1={28 + line * 31} x2={445} y2={28 + line * 31} stroke="#292c36" strokeDasharray="3 5" />
      ))}
      <path d="M6 87 C26 87 28 45 47 45 S68 110 88 110 S108 62 128 62 S148 91 168 91 S188 33 208 33 S228 99 248 99 S268 58 288 58 S308 107 328 107 S348 46 368 46 S388 77 408 77 S428 55 440 55" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M6 87 C26 87 28 45 47 45 S68 110 88 110 S108 62 128 62 S148 91 168 91 S188 33 208 33 S228 99 248 99 S268 58 288 58 S308 107 328 107 S348 46 368 46 S388 77 408 77 S428 55 440 55 V140 H6 Z" fill={accent} opacity=".08" />
    </g>
  );
}

function Avatar({ initials, index }) {
  const colors = ['#493859', '#304452', '#514634', '#34473f'];
  return (
    <g>
      <circle cx={0} cy={0} r={12} fill={colors[index % colors.length]} />
      <text x={0} y={3} fill="#e7e8ef" fontSize={7} textAnchor="middle">{initials}</text>
    </g>
  );
}

function VehicleIllustration({ accent }) {
  return (
    <g>
      <path d="M28 105 L42 80 Q47 71 59 69 L102 63 Q111 62 118 70 L139 92 Q148 94 151 104 L150 119 H27 Z" fill="#252936" stroke="#414553" strokeWidth="2" />
      <path d="M54 76 L63 72 L101 68 L114 83 H49 Z" fill={accent} opacity=".35" />
      <circle cx="54" cy="118" r="10" fill="#101219" stroke="#606575" strokeWidth="3" />
      <circle cx="127" cy="118" r="10" fill="#101219" stroke="#606575" strokeWidth="3" />
      <path d="M18 127 H162" stroke="#303441" strokeWidth="2" />
      <text x="88" y="146" fill="#a2a7b5" fontSize="8" textAnchor="middle">PREMIUM FLEET</text>
    </g>
  );
}

function PreviewBody({ preview, config }) {
  if (preview === 'farra') {
    return (
      <>
        <rect x={0} y={0} width={445} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <DispatchMap accent={config.accent} />
        <rect x={460} y={0} width={280} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={478} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Active dispatch</text>
        {config.rows.map((row, index) => (
          <g key={row[0]} transform={`translate(478 ${48 + index * 39})`}>
            <circle cx={7} cy={6} r={5} fill={row[3]} />
            <text x={20} y={5} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
            <text x={20} y={19} fill="#858998" fontSize={7}>{row[1]}</text>
          </g>
        ))}
      </>
    );
  }

  if (preview === 'baby-track') {
    return (
      <>
        <rect x={0} y={0} width={445} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={16} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Weekly activity</text>
        <WaveChart accent={config.accent} />
        <rect x={460} y={0} width={280} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={478} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Recent updates</text>
        {config.rows.map((row, index) => (
          <g key={row[0]} transform={`translate(478 ${50 + index * 37})`}>
            <circle cx={6} cy={0} r={4} fill={row[3]} />
            <text x={18} y={0} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
            <text x={18} y={13} fill="#858998" fontSize={7}>{row[1]}</text>
          </g>
        ))}
      </>
    );
  }

  if (preview === 'movepoint') {
    return (
      <>
        <rect x={0} y={0} width={740} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={16} y={24} fill="#dfe1e8" fontSize={10} fontWeight="600">Business workflows</text>
        <text x={18} y={49} fill="#858998" fontSize={8}>MODULE</text>
        <text x={377} y={49} fill="#858998" fontSize={8}>WORKFLOW</text>
        <text x={603} y={49} fill="#858998" fontSize={8}>STATUS</text>
        {config.rows.map((row, index) => (
          <g key={row[0]} transform={`translate(18 ${74 + index * 31})`}>
            <circle cx={6} cy={0} r={4} fill={row[3]} />
            <text x={22} y={3} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
            <text x={359} y={3} fill="#a1a5b1" fontSize={8}>{row[1]}</text>
            <circle cx={591} cy={0} r={3} fill={row[3]} />
            <text x={601} y={3} fill="#c5c8d0" fontSize={8}>{row[2]}</text>
            <line x1={0} y1={15} x2={700} y2={15} stroke="#292c36" />
          </g>
        ))}
      </>
    );
  }

  if (preview === 'mvl') {
    return (
      <>
        <rect x={0} y={0} width={740} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={16} y={24} fill="#dfe1e8" fontSize={10} fontWeight="600">Featured fleet</text>
        {[0, 1, 2].map((index) => (
          <g key={index} transform={`translate(${18 + index * 240} 12)`}>
            <rect x={0} y={24} width={220} height={132} rx={10} fill="#1d202a" stroke="#2d303a" />
            <VehicleIllustration accent={index === 1 ? '#a990f5' : config.accent} />
            <text x={156} y={63} fill="#e7e8ef" fontSize={8}>{index === 0 ? 'Executive' : index === 1 ? 'Luxury SUV' : 'Premium'}</text>
            <text x={156} y={78} fill="#8f94a2" fontSize={7}>{index === 0 ? 'Sedan' : index === 1 ? '7 seats' : 'Coupe'}</text>
            <text x={156} y={118} fill={config.accent} fontSize={8}>View details ↗</text>
          </g>
        ))}
      </>
    );
  }

  if (preview === 'whatsapp') {
    return (
      <>
        <rect x={0} y={0} width={445} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={16} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Account access</text>
        <rect x={16} y={39} width={413} height={112} rx={10} fill="#1d2029" stroke="#292c36" />
        <circle cx={222} cy={91} r={31} fill="#202c28" />
        <path d="M208 84 Q211 76 221 77 Q234 78 235 89 Q236 101 225 105 L212 103 L205 107 L208 98 Q204 91 208 84 Z" fill={config.accent} opacity=".9" />
        <text x={222} y={130} fill="#a1a5b1" fontSize={8} textAnchor="middle">QR-based authentication</text>
        <rect x={460} y={0} width={280} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={478} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Connected instances</text>
        {config.rows.map((row, index) => (
          <g key={row[0]} transform={`translate(478 ${49 + index * 39})`}>
            <circle cx={5} cy={0} r={4} fill={row[3]} />
            <text x={17} y={1} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
            <text x={17} y={14} fill="#858998" fontSize={7}>{row[2]}</text>
          </g>
        ))}
      </>
    );
  }

  if (['wander', 'real-estate', 'course-management'].includes(preview)) {
    return (
      <>
        <rect x={0} y={0} width={445} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={16} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">{config.activityHeading}</text>
        <rect x={16} y={39} width={413} height={112} rx={10} fill="#1d2029" stroke="#292c36" />
        <path d="M39 113 C93 109 88 71 145 77 S218 122 266 91 S335 62 399 53" fill="none" stroke={config.accent} strokeWidth={3} strokeLinecap="round" />
        {[39, 145, 266, 399].map((x, index) => (
          <circle key={x} cx={x} cy={[113, 77, 91, 53][index]} r={5} fill={config.accent} />
        ))}
        <rect x={460} y={0} width={280} height={173} rx={12} fill="#171923" stroke="#292c36" />
        <text x={478} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">{config.listHeading}</text>
        {config.rows.map((row, index) => (
          <g key={row[0]} transform={`translate(478 ${50 + index * 37})`}>
            <circle cx={5} cy={0} r={4} fill={row[3]} />
            <text x={18} y={1} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
            <text x={18} y={14} fill="#858998" fontSize={7}>{row[1]}</text>
          </g>
        ))}
      </>
    );
  }

  return (
    <>
      <rect x={0} y={0} width={445} height={173} rx={12} fill="#171923" stroke="#292c36" />
      <text x={16} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Order activity</text>
      <TrendChart accent={config.accent} />
      <rect x={460} y={0} width={280} height={173} rx={12} fill="#171923" stroke="#292c36" />
      <text x={478} y={23} fill="#dfe1e8" fontSize={10} fontWeight="600">Latest orders</text>
      {config.rows.map((row, index) => (
        <g key={row[0]} transform={`translate(478 ${49 + index * 39})`}>
          <text x={0} y={0} fill="#dfe1e8" fontSize={8}>{row[0]}</text>
          <text x={0} y={13} fill="#858998" fontSize={7}>{row[1]}</text>
          <circle cx={258} cy={0} r={3} fill={row[3]} />
          <text x={267} y={3} fill="#a1a5b1" fontSize={7} textAnchor="end">{row[2]}</text>
        </g>
      ))}
    </>
  );
}

export default function ProjectPreview({ project, className = '' }) {
  const preview = project.preview || 'home-plate';
  const config = previews[preview] || previews['home-plate'];
  const previewId = useId().replace(/:/g, '');

  return (
    <svg
      className={`project-preview-svg ${className}`}
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`${project.title} illustrative interface preview`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${previewId}-background`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#11131a" />
          <stop offset="1" stopColor="#1c1a28" />
        </linearGradient>
        <linearGradient id={`${previewId}-accent`} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor={config.accent} stopOpacity=".17" />
          <stop offset="1" stopColor={config.accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill={`url(#${previewId}-background)`} />
      <rect x="0" y="0" width="1200" height="52" fill="#14161d" />
      <circle cx="24" cy="26" r="5" fill="#f27878" />
      <circle cx="43" cy="26" r="5" fill="#e9bd69" />
      <circle cx="62" cy="26" r="5" fill="#70c69a" />
      <rect x="465" y="14" width="270" height="24" rx="8" fill="#1d2029" />
      <text x="600" y="30" fill="#8c909d" fontSize="9" textAnchor="middle">project.preview / interface</text>
      <rect x="0" y="52" width="208" height="708" fill="#14161d" />
      <rect x="17" y="70" width="31" height="31" rx="10" fill={config.accent} opacity=".2" />
      <path d="M27 86 L32 80 L38 86 L32 92 Z" fill={config.accent} />
      <text x="59" y="90" fill="#eff0f4" fontSize="12" fontWeight="650">{config.title}</text>
      <text x="19" y="132" fill="#777d8a" fontSize="8" fontWeight="600" letterSpacing="1">WORKSPACE</text>
      {['Overview', 'Activity', 'Customers', 'Reports'].map((item, index) => (
        <g key={item} transform={`translate(16 ${148 + index * 38})`}>
          {index === 0 ? <rect width="176" height="30" rx="8" fill={`url(#${previewId}-accent)`} /> : null}
          <circle cx="14" cy="15" r="4" fill={index === 0 ? config.accent : '#656b78'} opacity={index === 0 ? 1 : .8} />
          <text x="28" y="19" fill={index === 0 ? '#f0eff5' : '#858a98'} fontSize="9">{item}</text>
        </g>
      ))}
      <line x1="16" y1="316" x2="192" y2="316" stroke="#292c36" />
      <text x="19" y="339" fill="#777d8a" fontSize="8" fontWeight="600" letterSpacing="1">MANAGE</text>
      {(preview === 'home-plate'
        ? ['Orders', 'Vendors', 'Riders']
        : preview === 'movepoint'
          ? ['Recruitment', 'Sales', 'Payroll']
          : preview === 'whatsapp'
            ? ['Instances', 'Access', 'Automation']
            : preview === 'wander'
              ? ['Profiles', 'Check-ins', 'Messages']
              : preview === 'real-estate'
                ? ['Listings', 'Clients', 'Operations']
                : ['Courses', 'Students', 'Schedule']
      ).map((item, index) => (
        <g key={item} transform={`translate(30 ${365 + index * 34})`}>
          <circle cx="0" cy="0" r="3" fill="#626875" />
          <text x="13" y="3" fill="#858a98" fontSize="9">{item}</text>
        </g>
      ))}
      <circle cx="32" cy="708" r="13" fill="#383142" />
      <text x="32" y="711" fill="#e7ddff" fontSize="7" textAnchor="middle">RK</text>
      <text x="53" y="706" fill="#e4e5eb" fontSize="8">Rabie K.</text>
      <text x="53" y="719" fill="#777d8a" fontSize="7">Administrator</text>
      <rect x="208" y="52" width="992" height="708" fill="#101219" />
      <text x="237" y="94" fill="#f1f2f5" fontSize="19" fontWeight="650">{config.section}</text>
      <text x="237" y="115" fill="#858998" fontSize="9">Illustrative view of project workflows.</text>
      <rect x="1016" y="74" width="145" height="31" rx="8" fill="#1b1e27" stroke="#2c303b" />
      <circle cx="1033" cy="89" r="4" fill={config.accent} />
      <text x="1045" y="92" fill="#c4c7d0" fontSize="8">Project view</text>
      <g transform="translate(237 142)">
        {config.metrics.map((metric, index) => (
          <g key={metric[0]} transform={`translate(${index * 250} 0) scale(.83 1)`}>
            <MetricCard metric={metric} accent={config.accent} />
          </g>
        ))}
      </g>
      <g transform="translate(237 253)">
        <PreviewBody preview={preview} config={config} />
      </g>
      <rect x="237" y="453" width="740" height="160" rx="12" fill="#171923" stroke="#292c36" />
      <text x="254" y="478" fill="#dfe1e8" fontSize="10" fontWeight="600">{config.listHeading || 'Recent orders'}</text>
      <text x="942" y="478" fill={config.accent} fontSize="8" textAnchor="end">View all ↗</text>
      {config.rows.map((row, index) => (
        <g key={row[0]} transform={`translate(254 ${505 + index * 32})`}>
          <circle cx="6" cy="0" r="4" fill={config.accent} opacity=".75" />
          <text x="20" y="3" fill="#dfe1e8" fontSize="8">{row[0]}</text>
          <text x="190" y="3" fill="#969ba8" fontSize="8">{row[1]}</text>
          <text x="545" y="3" fill="#b9bdc7" fontSize="8">{row[2]}</text>
          <line x1="0" y1="15" x2="700" y2="15" stroke="#292c36" />
        </g>
      ))}
      <rect x="997" y="453" width="164" height="160" rx="12" fill="#171923" stroke="#292c36" />
      <text x="1014" y="478" fill="#dfe1e8" fontSize="9" fontWeight="600">Project scope</text>
      <circle cx="1033" cy="524" r="16" fill={config.accent} opacity=".13" />
      <circle cx="1033" cy="524" r="6" fill={config.accent} />
      <text x="1059" y="520" fill="#e6e7ed" fontSize="9">Interface</text>
      <text x="1059" y="534" fill={config.accent} fontSize="8">illustration</text>
      <line x1="1014" y1="556" x2="1144" y2="556" stroke="#292c36" />
      <text x="1014" y="578" fill="#858998" fontSize="8">Representative layout</text>
      <text x="1014" y="594" fill="#666c78" fontSize="7">ILLUSTRATIVE UI PREVIEW</text>
      <rect x="208" y="52" width="992" height="708" fill="none" stroke="#292c36" />
    </svg>
  );
}
