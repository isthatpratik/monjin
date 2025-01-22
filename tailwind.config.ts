import type { Config } from "tailwindcss";
 
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			onest: [
  				'Onest',
  				'sans-serif'
  			],
  			figtree: [
  				'Figtree',
  				'sans-serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
		boxShadow: {
			'monjin': '0px 6px 0px rgba(0,0,0,0.3)'
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			blob1: 'blob1 7s infinite ease-in-out',
  			blob2: 'blob2 7s infinite ease-in-out',
  			blob3: 'blob3 7s infinite ease-in-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
			  scaleIn: "scaleIn 200ms ease",
			  scaleOut: "scaleOut 200ms ease",
			  fadeIn: "fadeIn 200ms ease",
			  fadeOut: "fadeOut 200ms ease",
			  enterFromLeft: "enterFromLeft 250ms ease",
			  enterFromRight: "enterFromRight 250ms ease",
			  exitToLeft: "exitToLeft 250ms ease",
			  exitToRight: "exitToRight 250ms ease",
  		},
  		keyframes: {
  			blob1: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(20px, -40px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-15px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			blob2: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(-10px, -25px) scale(0.9)'
  				},
  				'66%': {
  					transform: 'translate(0px, 20px) scale(1.1)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			blob3: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(15px, -25px) scale(0.9)'
  				},
  				'66%': {
  					transform: 'translate(20px, -15px) scale(1.1)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
			  enterFromRight: {
				from: { opacity: "0", transform: "translateX(200px)" },
				to: { opacity: "1", transform: "translateX(0)" },
			},
			enterFromLeft: {
				from: { opacity: "0", transform: "translateX(-200px)" },
				to: { opacity: "1", transform: "translateX(0)" },
			},
			exitToRight: {
				from: { opacity: "1", transform: "translateX(0)" },
				to: { opacity: "0", transform: "translateX(200px)" },
			},
			exitToLeft: {
				from: { opacity: "1", transform: "translateX(0)" },
				to: { opacity: "0", transform: "translateX(-200px)" },
			},
			scaleIn: {
				from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
				to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
			},
			scaleOut: {
				from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
				to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
			},
			fadeIn: {
				from: { opacity: "0" },
				to: { opacity: "1" },
			},
			fadeOut: {
				from: { opacity: "1" },
				to: { opacity: "0" },
			},
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"), 
    addVariablesForColors,
  ],

} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
	Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
	":root": newVars,
  });
}
