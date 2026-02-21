export const NAV_LINKS = [
  { label: 'Platform', href: '#modules' },
  { label: 'Capabilities', href: '#ai-capabilities' },
  { label: 'Integrations', href: '#how-it-works' },
  { label: 'Resources', href: '#value-props' },
  { label: 'Pricing', href: '#cta' },
] as const;

export const HERO = {
  badge: 'The Platform for Modern Business',
  heading: 'Run Your Entire Business on One Platform.',
  subheading:
    'A modular platform that manages leads, bookings, and inventory autonomously. Stop micromanaging, start growing.',
  primaryCta: 'Get Early Access',
  secondaryCta: 'View Interactive Demo',
} as const;

export const DASHBOARD_STATS = [
  {
    icon: 'Users' as const,
    label: 'Active Leads',
    value: '1,284',
    change: '+12%',
    positive: true,
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: 'CalendarCheck' as const,
    label: 'Bookings',
    value: '342',
    change: '+8%',
    positive: true,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-500',
  },
  {
    icon: 'Package' as const,
    label: 'Inventory Items',
    value: '892',
    change: '-3%',
    positive: false,
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
  {
    icon: 'IndianRupee' as const,
    label: 'Revenue (MTD)',
    value: '₹8.2L',
    change: '+24%',
    positive: true,
    bgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-600',
  },
] as const;

export const VALUE_PROPS = [
  {
    icon: 'Zap' as const,
    title: 'Automate Busywork',
    description:
      'Reduce manual admin tasks by 70% with autonomous agents.',
  },
  {
    icon: 'Database' as const,
    title: 'One Single Source',
    description:
      'Replace 5 disconnected tools with one cohesive operating system.',
  },
  {
    icon: 'TrendingUp' as const,
    title: 'Scale Without Chaos',
    description:
      'Add new branches and users instantly without breaking processes.',
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    icon: 'Plug' as const,
    number: 1,
    title: 'Connect',
    description: 'Integrate WhatsApp & Website.',
    color: 'blue' as const,
  },
  {
    icon: 'Settings' as const,
    number: 2,
    title: 'Configure',
    description: 'Select your Modules.',
    color: 'purple' as const,
  },
  {
    icon: 'Brain' as const,
    number: 3,
    title: 'Train',
    description: 'AI learns your inventory & rules.',
    color: 'green' as const,
  },
  {
    icon: 'Rocket' as const,
    number: 4,
    title: 'Launch',
    description: 'Go live in less than 24 hours.',
    color: 'amber' as const,
  },
] as const;

export const AI_CHAT_MESSAGES = [
  {
    sender: 'user' as const,
    initials: 'JD',
    text: 'Do we have the premium suite available next Tuesday?',
    time: '10:23 AM',
  },
  {
    sender: 'ai' as const,
    initials: 'V',
    text: 'Yes! We have 2 suites available. Shall I hold one for you?',
    time: '10:23 AM',
  },
  {
    sender: 'user' as const,
    initials: 'JD',
    text: 'Yes please! Book it for 2 nights.',
    time: '10:24 AM',
  },
  {
    sender: 'ai' as const,
    initials: 'V',
    text: "Perfect! I've reserved Premium Suite #5 for Tuesday-Thursday. Confirmation sent to your email. Is there anything else you need?",
    time: '10:24 AM',
  },
] as const;

export const AI_ACCORDION_ITEMS = [
  {
    title: 'Natural Language Processing',
    content:
      'Vritti AI understands context, intent, and nuance. It speaks like a human, not a robot—making every customer interaction feel personal and natural.',
    defaultOpen: true,
  },
  {
    title: 'Permission-Aware',
    content:
      'The AI respects role-based access controls, ensuring each user only sees and does what they are authorized to.',
    defaultOpen: false,
  },
  {
    title: 'Omnichannel',
    content:
      'Engage customers seamlessly across WhatsApp, web chat, email, and more—all from a single AI-powered interface.',
    defaultOpen: false,
  },
] as const;

export const AI_LEARNING_CARD = {
  title: 'Real-time Learning',
  description:
    'The AI continuously learns from every interaction, getting smarter about your business, products, and customer preferences over time.',
} as const;

export const MODULES = [
  {
    icon: 'Users' as const,
    title: 'Lead Management',
    suite: 'Sales Suite',
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    icon: 'Contact' as const,
    title: 'CRM',
    suite: 'Sales Suite',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/50',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
  },
  {
    icon: 'Package' as const,
    title: 'Inventory',
    suite: 'Ops Suite',
    bgColor: 'bg-violet-50 dark:bg-violet-950/50',
    borderColor: 'border-violet-200 dark:border-violet-800',
  },
  {
    icon: 'Building2' as const,
    title: 'Vendor Management',
    suite: 'Ops Suite',
    bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/50',
    borderColor: 'border-fuchsia-200 dark:border-fuchsia-800',
  },
  {
    icon: 'Calendar' as const,
    title: 'Booking System',
    suite: 'CX Suite',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/50',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
  },
  {
    icon: 'Headphones' as const,
    title: 'Customer Support',
    suite: 'CX Suite',
    bgColor: 'bg-teal-50 dark:bg-teal-950/50',
    borderColor: 'border-teal-200 dark:border-teal-800',
  },
] as const;

export const SUITES = [
  {
    icon: 'BarChart3' as const,
    title: 'Sales Suite',
    description:
      'Manage leads, close deals, and nurture customer relationships.',
    bgColor: 'bg-primary/10',
  },
  {
    icon: 'Layers' as const,
    title: 'Ops Suite',
    description:
      'Streamline inventory, vendor management, and operations.',
    bgColor: 'bg-blue-100/50',
  },
  {
    icon: 'Heart' as const,
    title: 'CX Suite',
    description:
      'Deliver exceptional experiences with bookings and support.',
    bgColor: 'bg-green-500/10',
  },
] as const;

export const CTA = {
  heading: 'Ready to modernize your operations?',
  subheading:
    'See how Vritti can automate your business in under 24 hours.',
  buttonText: 'Book a Personalized Demo',
} as const;

export const FOOTER_LINKS = {
  product: {
    title: 'Product',
    links: [
      { label: 'Modules', href: '#modules' },
      { label: 'AI Capabilities', href: '#ai-capabilities' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#cta' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
} as const;

