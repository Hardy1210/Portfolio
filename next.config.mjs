/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de caché para recursos estáticos
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica a todas las rutas
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cachea recursos estáticos de manera óptima
          },
        ],
      },
    ]
  },

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
}

export default nextConfig
{
  /*rewrite a la place de redirects pour cache /fr o la lange defini en locale */
}
