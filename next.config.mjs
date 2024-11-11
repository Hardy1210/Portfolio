/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/', // Ruta raíz
        destination: '/fr', // Ruta de idioma predeterminado
        permanent: true, // `true` hace que la redirección sea permanente (código de estado 308)
      },
    ]
  },
}

export default nextConfig
{
  /*rewrite a la place de redirects pour cache /fr o la lange defini en locale */
}
