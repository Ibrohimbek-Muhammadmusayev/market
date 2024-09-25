/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'global-ural.ru',
          },
          {
            protocol: 'https',
            hostname: 'vrasto.gr',
          },
          {
            protocol: 'https',
            hostname: 'avatars.mds.yandex.net',
          },
          {
            protocol: 'https',
            hostname: 'banner2.cleanpng.com',
          },
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
          },
          // {
          //   protocol: 'https',
          //   hostname: 'vrasto.com.ua',
          // },
        ],
      },
};

export default nextConfig;
