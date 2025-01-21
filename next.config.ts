import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    };
    return config;
  },
  // Отключаем experimental.turbo, так как это может конфликтовать с hot reload
  experimental: {
    // turbo опция удалена
  },

 // images: {
  //  remotePatterns: [
  //  {
   //     protocol: "http",
   //    hostname: "host.docker.internal", // Укажите домен вашего сервера
    //    port: "8080",
    //    pathname: "/img/**", // Укажите путь для изображений
    //  },
    //],
 // },
};

export default nextConfig;