/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

if (process.env.MAINTENANCE_MODE === "1") {
  throw new Error("Deployment paused");
}
