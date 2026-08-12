// =============================================================================
// TypeScript interfaces for landing-page.json
// This file contains ONLY type definitions — no page content.
// All actual content lives in src/data/landing-page.json
// =============================================================================

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** A small icon reference that does NOT need explicit dimensions in layout */
export interface IconData {
  src: string;
  alt: string;
}

export interface LinkData {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export type NavigationItem = LinkData;

export interface NavActions {
  login: LinkData;
  signup: LinkData;
}

export interface NavData {
  logo: ImageData;
  links: NavigationItem[];
  actions: NavActions;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export interface HeroIndicator {
  id: number;
  active: boolean;
}

export interface HeroData {
  headlinePart1: string;
  headlinePart2: string;
  subtitle: string;
  cta: LinkData;
  image: ImageData;
  indicators: HeroIndicator[];
}

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

export interface ClientsData {
  title: string;
  subtitle: string;
  logos: ClientLogo[];
}

// ---------------------------------------------------------------------------
// Community
// ---------------------------------------------------------------------------

export interface CommunityCard {
  id: string;
  icon: IconData;
  title: string;
  description: string;
}

export interface CommunityData {
  title: string;
  subtitle: string;
  cards: CommunityCard[];
}

// ---------------------------------------------------------------------------
// Feature sections
// ---------------------------------------------------------------------------

export type ImagePosition = "left" | "right";

export interface FeatureSectionData {
  id: string;
  imagePosition: ImagePosition;
  image: ImageData;
  title: string;
  body: string;
  cta: LinkData;
}

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

export interface Statistic {
  id: string;
  icon: IconData;
  value: string;
  label: string;
}

export interface StatsData {
  headlinePart1: string;
  headlinePart2: string;
  subtitle: string;
  items: Statistic[];
}

// ---------------------------------------------------------------------------
// Testimonial
// ---------------------------------------------------------------------------

export interface TestimonialData {
  image: ImageData;
  quote: string;
  authorName: string;
  authorRole: string;
  clientLogos: ClientLogo[];
  meetAllLink: LinkData;
}

// ---------------------------------------------------------------------------
// Blog / Marketing Articles
// ---------------------------------------------------------------------------

export interface Article {
  id: string;
  image: ImageData;
  title: string;
  link: LinkData;
}

export interface BlogData {
  title: string;
  subtitle: string;
  articles: Article[];
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

export interface CTAData {
  headlinePart1: string;
  headlinePart2: string;
  button: LinkData;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  heading: string;
  links: LinkData[];
}

export interface NewsletterData {
  heading: string;
  placeholder: string;
  submitLabel: string;
  submitIcon: string;
}

export interface FooterData {
  logo: ImageData;
  copyright: string;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  newsletter: NewsletterData;
}

// ---------------------------------------------------------------------------
// Root type — mirrors the shape of landing-page.json exactly
// ---------------------------------------------------------------------------

export interface LandingPageData {
  meta: {
    title: string;
    description: string;
  };
  nav: NavData;
  hero: HeroData;
  clients: ClientsData;
  community: CommunityData;
  featureSections: FeatureSectionData[];
  stats: StatsData;
  testimonial: TestimonialData;
  blog: BlogData;
  cta: CTAData;
  footer: FooterData;
}
