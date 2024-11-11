/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de redirección (puedes usar `rewrite` en lugar de `redirect` para evitar cambios en la URL)
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/fr', // Mantén la URL como `/` mientras muestra el contenido de `/fr`
      },
    ]
  },

  // Configuración de ISR para regeneración incremental
  experimental: {
    isrFlushToDisk: false, // Opción para mejorar el rendimiento en Vercel
  },

  // Configura la compresión para optimizar el tamaño de los archivos en producción
  compress: true,

  // Genera mapas de código fuente solo en producción para facilitar la depuración
  productionBrowserSourceMaps: true,

  // Configuración de encabezados para todas las rutas
  async headers() {
    return [
      {
        source: '/api/(.*)', // Aplica `no-cache` solo a las rutas de la API o dinámicas
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache', // Evita almacenar en caché el contenido dinámico
          },
        ],
      },
      {
        source: '/(.*)', // Aplica a todas las demás rutas (archivos estáticos)
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 año de caché para archivos estáticos
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
