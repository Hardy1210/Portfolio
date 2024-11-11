/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de redirección
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/fr',
      },
    ]
  },

  // Configuración de ISR para regeneración incremental
  experimental: {
    isrFlushToDisk: false,
  },

  // Configura la compresión para optimizar el tamaño de los archivos en producción
  compress: true,

  // Genera mapas de código fuente solo en producción para facilitar la depuración
  productionBrowserSourceMaps: true,

  // Configuración de encabezados para caché
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=86400, stale-while-revalidate=59',
          },
        ],
      },
    ]
  },
}

export default nextConfig

{
  /*rewrite a la place de redirects pour cache /fr o la lange defini en locale */
}
{
  /*async redirects() {
    return [
      {
        source: '/', // Ruta raíz
        destination: '/fr', // Ruta de idioma predeterminado
        permanent: true, // `true` hace que la redirección sea permanente (código de estado 308)
      },
    ]
  },
async headers() {
    return [
      {
        source: '/(.*)', // Aplica a todas las rutas
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 año de caché para archivos estáticos
          },
        ],
      },
    ]
  },

   */
}
