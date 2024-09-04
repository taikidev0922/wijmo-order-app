/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config, { isServer }) => {
    // クライアントのwebpack設定のみを変更
    if (!isServer) {
      config.watchOptions = {
        poll: 1000, // チェック間隔
        aggregateTimeout: 300, // 変更後の遅延
      };
    }
    return config;
  },
};

export default nextConfig;
