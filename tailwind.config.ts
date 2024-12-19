import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  //esto indica donde estas utilizando los estilos
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
      backgroundImage: {
        //fondo de layer para light mode
        'custom-gradient':
          'linear-gradient(to bottom right, rgba(238, 238, 238, 1) 0%, rgba(226, 226, 226, 1) 51%, rgba(186, 184, 184, 1) 100%)',
        //fondo de layer para dark mode
        'dark-custom-modal-image':
          'linear-gradient(90deg, rgba(218,104,56,1) 0%, rgba(240,212,85,1) 100%)',
        'dark-custom-modal-image-2':
          'linear-gradient(125deg, rgba(255,158,64,1) 0%, rgba(249,199,92,1) 27%, rgba(127,192,146,1) 91%, rgba(63,198,159,1) 100%)',
        'dark-custom-modal-image-3':
          'linear-gradient(125deg, rgba(206,104,255,1) 6%, rgba(232,166,255,1) 28%, rgba(255,149,224,1) 75%, rgba(255,117,154,1) 99%)',
        'dark-custom-modal-image-4':
          'linear-gradient(125deg, rgba(234,179,8,1) 8%, rgba(255,203,78,1) 22%, rgba(255,164,90,1) 73%, rgba(244,102,0,1) 95%)',

        'modal-variant': 'linear-gradient(to top left,#000000,#434343)',
      },
      //drop shadow de logo enverse
      dropShadow: {
        inverse: '0 6px 6px rgba(255, 255, 255, 0.3)', // Clase personalizada
        'custom-shadow': '0 6px 6px rgba(14, 14, 14, 0.244)',
      },
      filter: {
        'all-white': 'invert(100%) grayscale(100%) brightness(200%)',
        'transform-to-white':
          'grayscale(100%) invert(100%) brightness(250%) contrast(120%)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        //background modal dark
        'modal-bg-dark': '#202020',
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
        //animacion de bloques de layout fade in up
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        //animation de rotacion de album de spotify
        spin: 'spin 70s linear infinite',
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
        //animation de fade in up en los bloques
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        //animation de rotacion de album de spotify
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      //accecibilidad
      variants: {
        extend: {
          animation: ['motion-safe'],
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
}
export default config
