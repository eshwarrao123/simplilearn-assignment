# Design & Implementation Specification: Nexcent Landing Page

This document serves as the complete, authoritative UI/UX implementation specification and design system reference for recreating the **Nexcent Landing Page** based on the Figma source of truth and Style Guide.

---

## 1. Brand

* **Brand Name**: Nexcent
* **Logo**:
  * **Visual Mark**: Abstract green graphic icon formed by overlapping leaf/flow shapes.
  * **Wordmark**: Text "Nexcent" styled in `Inter` Bold / Semi-Bold in dark slate (`#263238`).
  * **Logo Combination**: Horizontal layout with icon on left (gap `8px`) and wordmark on right.
* **Brand Colors**: Primary Brand Green (`#4CAF4F` / `#28CB8B`) and Dark Slate (`#263238`).
* **Logo Dimensions & Treatment**:
  * Desktop Header Logo height: `24px` to `32px` (overall component aspect width ~`154px` x `32px`).
  * Footer Logo treatment: Inverted white logo (`#FFFFFF` wordmark with primary green graphic mark) for high contrast on dark slate background.

---

## 2. Color System

Exact color values extracted from the Figma Style Guide and design tokens:

### 2.1. Brand & Accent Colors
* **Primary Brand Green**: `#4CAF4F` (Also referenced as `#28CB8B` in style tokens)
* **Secondary Slate / Dark**: `#263238`
* **Info Accent**: `#2194F3`

### 2.2. Neutral Palette
* **Dark Text / Black**: `#263238` (Primary body heading & title color)
* **D_Grey (Dark Grey)**: `#4D4D4D` (Navigation links & dark secondary text)
* **Grey (Medium Grey)**: `#717171` (Body paragraphs, descriptions, subtitle text)
* **L_Grey (Light Grey)**: `#89939E` (Muted labels & subtle text)
* **Grey-blue**: `#ABBED1` (Borders, subtle dividers, shadow tint bases)
* **Silver**: `#F5F7FA` (Light section background color for Hero, Stats, Testimonials, CTA)
* **White**: `#FFFFFF` (Card background & main container canvas background)

### 2.3. Brand Green Shades (Darker Variations)
* **Shade 1**: `#43A046` (Primary button hover state)
* **Shade 2**: `#388E3B` (Active / pressed states)
* **Shade 3**: `#237D31` (Deep accent detail)
* **Shade 4**: `#1B5E1F` (High contrast green elements)
* **Shade 5**: `#103E13` (Ultra dark green text/stroke)

### 2.4. Brand Green Tints (Lighter Variations)
* **Tint 1**: `#66BB69`
* **Tint 2**: `#81C784`
* **Tint 3**: `#A5D6A7`
* **Tint 4**: `#C8E6C9` (Soft green borders / focus rings)
* **Tint 5**: `#E8F5E9` (Background fills for community feature icon containers)

### 2.5. Action & Status Colors
* **Warning**: `#FBC02D`
* **Error**: `#E53835`
* **Success**: `#2E7D31`

### 2.6. Applied Surface & Element Colors
* **Page Canvas Background**: `#FFFFFF`
* **Alternate Section Background**: `#F5F7FA` (Silver)
* **Footer Section Background**: `#263238` (Dark Slate)
* **Primary Text Color**: `#263238`
* **Secondary Text Color**: `#717171`
* **Footer Text Color**: `#F5F7FA` (Muted text `#ABBED1`)
* **Border Color**: `#E5E7EB` / `#D9DBE1` (Default light cards), `#4CAF4F` (Secondary button border)

---

## 3. Typography

All typography is rendered using the **Inter** font family.

### 3.1. Hierarchy Specifications

| Token Name | Font Size | Line Height | Weight | Tailwind Equivalent | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Headline 1** | `64px` (`4rem`) | `76px` (`4.75rem`) | `600` (SemiBold) | `text-6xl leading-[76px] font-semibold` | Hero main title, Large CTA heading |
| **Headline 2** | `36px` (`2.25rem`) | `44px` (`2.75rem`) | `600` (SemiBold) | `text-4xl leading-[44px] font-semibold` | Section titles (Our Clients, Community, Features, Blog) |
| **Headline 3** | `28px` (`1.75rem`) | `36px` (`2.25rem`) | `600` (SemiBold) | `text-3xl leading-[36px] font-semibold` | Card titles, Statistic numbers |
| **Headline 4** | `20px` (`1.25rem`) | `28px` (`1.75rem`) | `600` (SemiBold) | `text-xl leading-[28px] font-semibold` | Sub-card headings, Testimonial author, Blog card title |
| **Body 1** | `18px` (`1.125rem`) | `28px` (`1.75rem`) | `400` (Regular) | `text-lg leading-[28px] font-normal` | Prominent intro paragraphs |
| **Body 2** | `16px` (`1rem`) | `24px` (`1.5rem`) | `400` / `500` | `text-base leading-[24px]` | Standard body text, Navbar links, Testimonial body |
| **Body 3** | `14px` (`0.875rem`) | `20px` (`1.25rem`) | `400` / `500` | `text-sm leading-[20px]` | Card descriptions, Stat labels, Footer links |
| **Body 4** | `12px` (`0.75rem`) | `16px` (`1rem`) | `400` (Regular) | `text-xs leading-[16px] font-normal` | Copyright text, Helper labels |

### 3.2. Letter Spacing
* Default: `normal` (`0px`) across all typography variants.

---

## 4. Spacing and Layout

* **Artboard Canvas Width**: `1440px` (Desktop source of truth)
* **Max Container Content Width**: `1152px` (Calculated as `1440px` minus `144px` margins on left and right)
* **Horizontal Page Margins**: `144px` on desktop (`px-6 md:px-16 lg:px-36`)
* **Vertical Section Padding**: `80px` to `96px` (`py-20` to `py-24`)
* **Section Gap**: `48px` to `64px` between inner header block and section grid
* **Card Internal Padding**: `24px` to `32px` (`p-6` to `p-8`)
* **Grid Layouts**:
  * **Community Services**: 3 columns (`grid-cols-1 md:grid-cols-3 gap-8`)
  * **Achievements Grid**: 2x2 grid (`grid-cols-2 gap-x-8 gap-y-6`)
  * **Blog / Marketing Cards**: 3 columns (`grid-cols-1 md:grid-cols-3 gap-8`)
  * **Footer Layout**: 4 columns (`grid-cols-1 md:grid-cols-4 gap-10`)
* **Border Radius System**:
  * **Small / Buttons**: `4px` (`rounded`)
  * **Medium / Cards**: `8px` (`rounded-lg`)
  * **Icon Containers**: `18px` or `50%` circle (`rounded-2xl` / `rounded-full`)
  * **Overlapping Blog Float Box**: `8px` (`rounded-lg`)
* **Shadow System**:
  * **Card Soft Elevation**: `0px 2px 4px rgba(171, 190, 209, 0.2)`
  * **Hover / Overlapping Box Shadow**: `0px 8px 16px rgba(171, 190, 209, 0.35)`

---

## 5. Buttons

The Style Guide defines 3 primary sizes and 3 visual styles with state options:

### 5.1. Button Dimensions & Padding

| Size Variant | Height | Padding (Horizontal / Vertical) | Font Style |
| :--- | :--- | :--- | :--- |
| **Large (Normal)** | `52px` | `padding: 14px 32px` | Body 2 (`16px`), Medium (`500`) |
| **Medium** | `44px` | `padding: 10px 24px` | Body 3 (`14px`), Medium (`500`) |
| **Small** | `36px` | `padding: 8px 16px` | Body 3 (`14px`), Medium (`500`) |

### 5.2. Visual Variants

1. **Primary Button**:
   * **Background**: `#4CAF4F`
   * **Text**: `#FFFFFF`
   * **Border**: None
   * **Radius**: `4px`
   * **States**:
     * Default: Background `#4CAF4F`
     * Hover: Background `#43A046` (Shade 1)
     * Active/Focus: Background `#388E3B` (Shade 2) with Tint 4 focus ring
2. **Secondary Button**:
   * **Background**: `Transparent` / `#FFFFFF`
   * **Text**: `#4CAF4F`
   * **Border**: `1px solid #4CAF4F`
   * **Radius**: `4px`
   * **States**:
     * Default: Transparent background, green text & border
     * Hover: Background `#E8F5E9` (Tint 5)
3. **Tertiary Link Button**:
   * **Background**: `Transparent`
   * **Text**: `#4CAF4F`
   * **Border**: None
   * **States**:
     * Default: Green text with right arrow icon (`->`)
     * Hover: Text color shifts to `#388E3B` with right arrow sliding slightly right

---

## 6. Complete Page Hierarchy

### 6.1. Header / Navbar
* **Purpose**: Primary site navigation & authentication actions.
* **Layout**: Flex horizontal space-between, fixed/sticky height `84px`, max-width `1152px`.
* **Background**: `#F5F7FA` (matching Hero background).
* **Content**:
  * Logo: Green Icon + "Nexcent" wordmark.
  * Nav Links: `Home`, `Service`, `Feature`, `Product`, `Testimonial`, `FAQ`.
  * Actions: `Login` (Tertiary link style), `Sign up` (Primary button small/medium).
* **Alignment**: Center vertically, space-between horizontally.

### 6.2. Hero Section
* **Purpose**: Primary value proposition & user onboarding CTA.
* **Layout**: 2-column flex layout (`flex-col lg:flex-row items-center justify-between gap-12`), vertical padding `96px`.
* **Background**: Silver (`#F5F7FA`).
* **Content**:
  * Left Column:
    * Headline 1: "Lessons and insights" (Dark `#263238`) + line break + "from 8 years" (Primary Green `#4CAF4F`).
    * Body 2: "Where to grow your business as a photographer: site or social media?"
    * Button: "Register" (Primary Green Button, Large).
  * Right Column:
    * Image: Vector illustration of developer with laptop & wireframe UI.
* **Hero Indicators (Carousel Dots)**:
  * 3 small dots below the hero text. Dot 1 active (Solid `#4CAF4F`, width `24px` pill shape), Dot 2 & 3 inactive (Light green/grey circles `#A5D6A7`).

### 6.3. Our Clients
* **Purpose**: Establish trust through social proof.
* **Layout**: Centered header block + horizontal flex wrap logo row. Vertical padding `40px`.
* **Background**: `#FFFFFF`.
* **Content**:
  * Title (Headline 2): "Our Clients"
  * Subtitle (Body 2): "We have been working with some Fortune 500+ clients"
  * Logos: Row of 7 client brand logos displayed with equal spacing (`gap-12`).

### 6.4. Community Section
* **Purpose**: Categorize target audience and service offerings.
* **Layout**: Centered header + 3-column card grid (`grid-cols-1 md:grid-cols-3 gap-8`). Vertical padding `48px`.
* **Background**: `#FFFFFF`.
* **Content & Cards**:
  * Title (Headline 2): "Manage your entire community in a single system"
  * Subtitle (Body 2): "Who is Nextcent suitable for?"
  * **Card 1 (Membership Organisations)**:
    * Icon: 3 people standing icon inside Tint 5 (`#E8F5E9`) rounded container.
    * Title (Headline 3): "Membership Organisations"
    * Description (Body 3): "Our membership management software provides full automation of membership renewals and payments"
  * **Card 2 (National Associations)**:
    * Icon: Building/office icon inside Tint 5 rounded container.
    * Title (Headline 3): "National Associations"
    * Description (Body 3): "Our membership management software provides full automation of membership renewals and payments"
  * **Card 3 (Clubs And Groups)**:
    * Icon: Hands joined / high-five icon inside Tint 5 rounded container.
    * Title (Headline 3): "Clubs And Groups"
    * Description (Body 3): "Our membership management software provides full automation of membership renewals and payments"
* **Card Alignment & Styling**: White card background, centered text, rounded corners (`8px`), soft card shadow `0px 2px 4px rgba(171, 190, 209, 0.2)`.

### 6.5. Spending / Feature Section (Pixelgrade Feature)
* **Purpose**: Showcase core product capability.
* **Layout**: 2-column flex layout (`flex-col md:flex-row items-center gap-16`). Vertical padding `48px`.
* **Background**: `#FFFFFF`.
* **Content**:
  * Left Column: Illustration of figures interacting with mobile login interface.
  * Right Column:
    * Title (Headline 2): "The unseen of spending three years at Pixelgrade"
    * Paragraph (Body 3): "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    * Button: "Learn More" (Primary Green Button, Medium).

### 6.6. Statistics / Achievements Section
* **Purpose**: Highlight key platform metrics and reach.
* **Layout**: 2-column split layout (`flex-col lg:flex-row justify-between items-center gap-12`). Vertical padding `64px`.
* **Background**: Silver (`#F5F7FA`).
* **Content**:
  * Left Column:
    * Title (Headline 2): "Helping a local" (Dark `#263238`) + line break + "business reinvent itself" (Primary Green `#4CAF4F`).
    * Subtitle (Body 2): "We reached here with our hard work and dedication"
  * Right Column (2x2 Stat Grid):
    * Stat 1: Members Icon | Number: "2,245,341" (Headline 3) | Label: "Members" (Body 3)
    * Stat 2: Clubs Icon | Number: "46,328" (Headline 3) | Label: "Clubs" (Body 3)
    * Stat 3: Event Bookings Icon | Number: "828,867" (Headline 3) | Label: "Event Bookings" (Body 3)
    * Stat 4: Payments Icon | Number: "1,926,436" (Headline 3) | Label: "Payments" (Body 3)

### 6.7. Second Feature Section (Calendar & Design Feature)
* **Purpose**: Highlight secondary feature / design customization capability.
* **Layout**: 2-column flex layout (`flex-col md:flex-row items-center gap-16`). Vertical padding `48px`.
* **Background**: `#FFFFFF`.
* **Content**:
  * Left Column: Illustration of mobile security & password unlock UI.
  * Right Column:
    * Title (Headline 2): "How to design your site footer like we did"
    * Paragraph (Body 3): "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc sollicitudin arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In viverra erat hendrerit nisi tempor vulputate. Ut ut eros tempor, tempor ante ut, exerci..."
    * Button: "Learn More" (Primary Green Button, Medium).

### 6.8. Testimonial Section (Tesla Case Study)
* **Purpose**: In-depth customer story and endorsement.
* **Layout**: 2-column flex container (`flex-col lg:flex-row items-center gap-16`). Vertical padding `48px`.
* **Background**: Silver (`#F5F7FA`).
* **Content**:
  * Left Column: Square dark image card showcasing 3D Tesla emblem logo (`326px` x `326px`).
  * Right Column:
    * Quote (Body 2): "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
    * Author Name (Headline 4): "Tim Smith" (Primary Green `#4CAF4F`)
    * Author Title (Body 3): "British Dragon Boat Racing Association"
    * Customer Logos Row: Flex row of 6 client logos + Tertiary link: "Meet all customers ->" (Green text with arrow).

### 6.9. Marketing / Articles Section (Community Updates)
* **Purpose**: Showcase blog content and thought leadership.
* **Layout**: Centered header + 3-column overlapping card grid (`grid-cols-1 md:grid-cols-3 gap-8`). Vertical padding `48px`.
* **Background**: `#FFFFFF`.
* **Content**:
  * Title (Headline 2): "Caring is the new marketing"
  * Subtitle (Body 2): "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more." (Max-width `628px`).
  * **Card 1**:
    * Photo: Person with beanie looking at monitor.
    * Overlapping Text Box: "Creating Streamlined Safeguarding Processes with OneRen" (Headline 4).
    * Link: "Readmore ->" (Tertiary link).
  * **Card 2**:
    * Photo: Hands typing on laptop next to coffee cup.
    * Overlapping Text Box: "What are your safeguarding responsibilities and how can you manage them?" (Headline 4).
    * Link: "Readmore ->" (Tertiary link).
  * **Card 3**:
    * Photo: Overhead laptop & notebook setup.
    * Overlapping Text Box: "Revamping the Membership Model with Triathlon Australia" (Headline 4).
    * Link: "Readmore ->" (Tertiary link).
* **Card Overlapping Structure**: Top photo height ~`286px`, overlapping bottom text container positioned `-mt-16` / absolute overlap with white background, rounded corners (`8px`), shadow `0px 8px 16px rgba(171, 190, 209, 0.35)`, padding `16px`.

### 6.10. CTA Section (Call To Action)
* **Purpose**: Drive final conversion for demo request.
* **Layout**: Centered vertical flex stack, heavy vertical padding (`py-12`).
* **Background**: Silver (`#F5F7FA`).
* **Content**:
  * Title (Headline 1 / 2): "Pellentesque suscipit" + line break + "fringilla libero eu." (Dark `#263238`, centered, max-width `640px`).
  * Button: "Get a Demo ->" (Primary Green Button with right arrow icon, Large).

### 6.11. Footer
* **Purpose**: Comprehensive site footer & email newsletter signup.
* **Layout**: 4-column layout (`grid-cols-1 md:grid-cols-4 gap-10`), padding `py-16`.
* **Background**: Dark Slate (`#263238`).
* **Content**:
  * Column 1 (Brand & Socials):
    * Nexcent Logo (White variant).
    * Copyright text: "Copyright © 2020 Nexcent ltd." + line break + "All rights reserved" (Body 4, `#F5F7FA`).
    * Social Icons Row: 4 circular social links (Instagram, Dribbble, Twitter, YouTube).
  * Column 2 (Company Links):
    * Header (Headline 4): "Company" (White `#FFFFFF`).
    * List: `About us`, `Blog`, `Contact us`, `Pricing`, `Testimonials`.
  * Column 3 (Support Links):
    * Header (Headline 4): "Support" (White `#FFFFFF`).
    * List: `Help center`, `Terms of service`, `Legal`, `Privacy policy`, `Status`.
  * Column 4 (Newsletter Signup):
    * Header (Headline 4): "Stay up to date" (White `#FFFFFF`).
    * Form Input: Dark translucent input (`bg-white/10` or `#515B60`), rounded `8px`, placeholder "Your email address", with paper plane send icon aligned right inside input.

---

## 7. Exact Content Inventory

All copy extracted directly from Figma without alteration:

### 7.1. Navigation Labels
* `Home`
* `Service`
* `Feature`
* `Product`
* `Testimonial`
* `FAQ`
* `Login`
* `Sign up`

### 7.2. Headings & Subtitles
* Hero Headline: "Lessons and insights from 8 years"
* Hero Subtitle: "Where to grow your business as a photographer: site or social media?"
* Hero CTA: "Register"
* Clients Title: "Our Clients"
* Clients Subtitle: "We have been working with some Fortune 500+ clients"
* Community Title: "Manage your entire community in a single system"
* Community Subtitle: "Who is Nextcent suitable for?"
* Feature 1 Title: "The unseen of spending three years at Pixelgrade"
* Feature 1 Paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
* Stats Title: "Helping a local business reinvent itself"
* Stats Subtitle: "We reached here with our hard work and dedication"
* Feature 2 Title: "How to design your site footer like we did"
* Feature 2 Paragraph: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc sollicitudin arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In viverra erat hendrerit nisi tempor vulputate. Ut ut eros tempor, tempor ante ut, exerci..."
* Testimonial Body: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
* Testimonial Author: "Tim Smith"
* Testimonial Author Role: "British Dragon Boat Racing Association"
* Testimonial Link: "Meet all customers ->"
* Blog Title: "Caring is the new marketing"
* Blog Subtitle: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."
* CTA Heading: "Pellentesque suscipit fringilla libero eu."
* CTA Button: "Get a Demo ->"

### 7.3. Cards & Articles Content
* Card 1 Title: "Membership Organisations"
* Card 1 Text: "Our membership management software provides full automation of membership renewals and payments"
* Card 2 Title: "National Associations"
* Card 2 Text: "Our membership management software provides full automation of membership renewals and payments"
* Card 3 Title: "Clubs And Groups"
* Card 3 Text: "Our membership management software provides full automation of membership renewals and payments"
* Article 1 Title: "Creating Streamlined Safeguarding Processes with OneRen"
* Article 1 Link: "Readmore ->"
* Article 2 Title: "What are your safeguarding responsibilities and how can you manage them?"
* Article 2 Link: "Readmore ->"
* Article 3 Title: "Revamping the Membership Model with Triathlon Australia"
* Article 3 Link: "Readmore ->"

### 7.4. Statistics Data
* Stat 1: Number `2,245,341` | Label `Members`
* Stat 2: Number `46,328` | Label `Clubs`
* Stat 3: Number `828,867` | Label `Event Bookings`
* Stat 4: Number `1,926,436` | Label `Payments`

### 7.5. Footer Content
* Copyright Text: "Copyright © 2020 Nexcent ltd. All rights reserved"
* Column Titles: `Company`, `Support`, `Stay up to date`
* Company Links: `About us`, `Blog`, `Contact us`, `Pricing`, `Testimonials`
* Support Links: `Help center`, `Terms of service`, `Legal`, `Privacy policy`, `Status`
* Input Placeholder: "Your email address"

---

## 8. Asset Inventory

All required assets categorized for implementation:

| Asset Filename | Type | Section | Export Source / Format | Aspect Ratio / Dimensions | Direct Figma Export Required? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `logo.svg` | SVG | Header / Brand | Vector SVG | ~`154x32` | **Yes** |
| `logo-white.svg` | SVG | Footer / Brand | Vector SVG | ~`154x32` | **Yes** |
| `hero-illustration.svg` | SVG | Hero | Vector SVG | ~`391x407` | **Yes** |
| `client-logo-1.svg` to `client-logo-7.svg` | SVG | Our Clients | Vector SVG | ~`48x48` each | **Yes** |
| `icon-membership.svg` | SVG | Community | Vector SVG | ~`65x56` | **Yes** |
| `icon-associations.svg` | SVG | Community | Vector SVG | ~`65x56` | **Yes** |
| `icon-clubs.svg` | SVG | Community | Vector SVG | ~`65x56` | **Yes** |
| `feature-illustration-1.svg` | SVG | Feature 1 | Vector SVG | ~`442x433` | **Yes** |
| `feature-illustration-2.svg` | SVG | Feature 2 | Vector SVG | ~`442x433` | **Yes** |
| `icon-members.svg` | SVG | Statistics | Vector SVG | `48x48` | **Yes** |
| `icon-clubs-stat.svg` | SVG | Statistics | Vector SVG | `48x48` | **Yes** |
| `icon-events.svg` | SVG | Statistics | Vector SVG | `48x48` | **Yes** |
| `icon-payments.svg` | SVG | Statistics | Vector SVG | `48x48` | **Yes** |
| `tesla-image.png` | PNG | Testimonials | Raster PNG / 3D Asset | `326x326` | **Yes** |
| `article-1.jpg` | JPG / WebP | Community Updates | Photo | `368x286` | High-res Unsplash / Figma export |
| `article-2.jpg` | JPG / WebP | Community Updates | Photo | `368x286` | High-res Unsplash / Figma export |
| `article-3.jpg` | JPG / WebP | Community Updates | Photo | `368x286` | High-res Unsplash / Figma export |
| `social-instagram.svg` | SVG | Footer | Vector SVG | `32x32` | **Yes** |
| `social-dribbble.svg` | SVG | Footer | Vector SVG | `32x32` | **Yes** |
| `social-twitter.svg` | SVG | Footer | Vector SVG | `32x32` | **Yes** |
| `social-youtube.svg` | SVG | Footer | Vector SVG | `32x32` | **Yes** |
| `icon-arrow-right.svg` | SVG | UI Primitives | Vector SVG | `16x16` | **Yes** |
| `icon-send.svg` | SVG | Footer | Vector SVG | `18x18` | **Yes** |

---

## 9. Responsive Behavior

| Screen Size | Breakpoint | Layout & Component Adjustments |
| :--- | :--- | :--- |
| **Desktop** | `1024px+` (`lg`) | Full 1440px layout, max content width 1152px, horizontal margins `144px`. Full header links inline, 3-column community grid, 2-column feature splits, 3-column blog grid, 4-column footer. |
| **Tablet** | `768px - 1023px` (`md`) | Horizontal padding reduced (`48px`). 2-column feature splits stack or convert to compact flex, blog cards wrap into 2 columns + 1 centered, footer adjusts to 2x2 grid. Header nav collapses links into dropdown or hamburger drawer. |
| **Mobile** | `< 768px` (`sm`) | Horizontal padding `20px` - `24px`. Full single-column stacking for Hero, Services, Feature splits, Statistics (1 or 2 cols), Testimonials, Blog cards, and Footer. Navbar uses hamburger toggle menu. Typography scales down (Headline 1 `64px` -> `36px`, Headline 2 `36px` -> `24px`). |

---

## 10. Recommended Component Architecture

Architecture appropriate for Next.js App Router (SDE-1 assessment scope):

```
components/
├── layout/
│   ├── Header.tsx              # Sticky nav bar, logo, links, desktop/mobile drawer
│   └── Footer.tsx              # Brand info, social links, navigation columns, newsletter form
├── ui/
│   ├── Button.tsx              # Primary, secondary, tertiary link variants & size props
│   ├── SectionHeader.tsx       # Reusable Title + Subtitle section header component
│   └── IconContainer.tsx       # Tint 5 rounded icon wrapper
├── sections/
│   ├── HeroSection.tsx         # Hero banner, text, CTA, illustration, pagination indicators
│   ├── ClientShowcase.tsx      # Logo grid component
│   ├── CommunitySection.tsx   # 3-column services grid & cards
│   ├── FeatureSection.tsx      # Reusable split feature component (used for Feature 1 & 2)
│   ├── StatsSection.tsx        # 2x2 achievements counter grid
│   ├── TestimonialSection.tsx  # Tesla case study, quote, author info, client logos
│   ├── BlogSection.tsx         # Community updates cards with overlapping text containers
│   └── CTASection.tsx          # Full-width demo callout
└── data/
    └── landingData.ts          # Static typed content objects (nav links, stats, cards, articles, footer links)
```

---

## 11. Design Tokens Reference (Tailwind Ready)

```javascript
// tailwind.config.ts extension reference
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4CAF4F',
          secondary: '#263238',
          info: '#2194F3',
          shade1: '#43A046',
          shade2: '#388E3B',
          shade3: '#237D31',
          tint1: '#66BB69',
          tint4: '#C8E6C9',
          tint5: '#E8F5E9',
        },
        neutral: {
          black: '#263238',
          dgrey: '#4D4D4D',
          grey: '#717171',
          lgrey: '#89939E',
          greyblue: '#ABBED1',
          silver: '#F5F7FA',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        lg: '8px',
        '2xl': '18px',
      },
      boxShadow: {
        card: '0px 2px 4px rgba(171, 190, 209, 0.2)',
        'card-hover': '0px 8px 16px rgba(171, 190, 209, 0.35)',
      },
      maxWidth: {
        content: '1152px',
      }
    }
  }
}
```
