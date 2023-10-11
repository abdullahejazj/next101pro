/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "imgur.com", "arc.io", "i.imgur.com"],
  },
  env: {
    API_KEY: "183c5bd92dfb902bd27a833eb1e701e2",
  },
};

module.exports = nextConfig;
