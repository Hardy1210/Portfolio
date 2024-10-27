import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}', // Incluye utilidades si aplican clases Tailwind
    './src/styles/**/*.{js,ts,jsx,tsx,mdx,css,scss}', // Para cualquier archivo CSS/SCSS en styles
  ],
  theme: {
    //agregar las fduentes necesarias
    //las variables estan designadas en el fichero Font.tsx
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    extend: {
      //para evitar que el navBar oculte el H2 despues de selectionar el elemento
      scrollMargin: {
        '4': '1rem', // Valor de 1rem (16px)
        '16': '4rem', // Valor de 4rem (64px), ajusta este valor según la altura de tu header
      },
      screens: {
        'custom-xs': { max: '344px' }, //mobiles galaxy fold
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // a definir para el color de texto global foreground: ''
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
        slideUp: 'slideUp 0.3s ease-out forwards',
        //el fade es utilizado por la modal navBar y el fondo de ProjectModal
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
        expand: 'expand 0.3s ease-out forwards', // Puedes modificar la duración aquí
        collapse: 'collapse 0.3s ease-in forwards',
        //animation de entrada y cierre de la modal pero no en 3D
        modalOpen: 'modalOpen 0.5s ease forwards',
        modalClose: 'modalClose 0.5s ease forwards',
        //animation de la modal en 3D
        modalOpen3D: 'modalOpen3D 0.2s ease-out forwards',
        modalClose3D: 'modalClose3D 0.2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        expand: {
          '0%': { marginTop: '-100%', opacity: '0' }, // El navbar empieza contraído
          '100%': { marginTop: '0', opacity: '1' }, // Se expande completamente
        },
        collapse: {
          '0%': { marginTop: '0', opacity: '1' }, // El navbar está visible
          '100%': { marginTop: '-100%', opacity: '0' }, // Se contrae completamente
        },
        //animation de la modal inclinandose pero no es efecto 3D--cuidado que tienes que poner el nombre
        //designado por el parametro
        modalOpen: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        modalClose: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(10deg) scale(0.9)', opacity: '0' },
        },
        //animation 3D de la modal
        modalOpen3D: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) perspective(600px) rotateX(10deg)', // Inicia con el desplazamiento y rotación
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) perspective(600px) rotateX(0deg)', // Se endereza y desaparece el desplazamiento
          },
        },
        modalClose3D: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) perspective(600px) rotateX(0deg)', // El modal está en su posición inicial
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px) perspective(600px) rotateX(10deg)', // Vuelve al desplazamiento y rotación
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
