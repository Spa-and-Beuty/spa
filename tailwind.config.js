/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        horizontalScroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        horizontalScroll: "horizontalScroll 20s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundSize: {
        "10%": "10%",
      },
      backgroundImage: {
        about: `url('/assets/images/about-bg.png')`,
        service: `url('/assets/images/service-bg.png')`,
        contact: `url('/assets/images/demo-1-contact-bg.png')`,
        tryOurOil: `url('/assets/images/CTA-bg-image.jpg')`,
        footer: `url('/assets/images/footer-bg.png')`,
        testimonial: `url('/assets/images/contact-bg-flower.png')`,
        title: `url('/assets/images/titlebar-bg.jpg')`,
        expert: `url('/assets/images/masking-bg.png')`,
        fullScreenTestimonial: "url('/assets/images/testimonial-bg.png')",
        serviceAd: "url('/assets/images/service-ads-bg.png')",
      },
      colors: {
        "global-color": "#e7a391",
        "darkish-color": "#666",
        "secondary-color": "#f6f3ed",
        "light-color": "#f6f6f6",
        "white-color": " #ffffff",
        "white-color-rgb": "255, 255, 255",
        "blackish-color": "#0a132e",
        "blackish-color-rgb": "10, 19, 46",
        "link-color-normal": "#0a132e",
        "link-color-hover": "#e7a391",
        "global-color-rgb": "231, 163, 145",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
