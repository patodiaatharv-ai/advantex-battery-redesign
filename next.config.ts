import type { NextConfig } from "next";

// GitHub Pages serves this repo at /advantex-battery-redesign/ (a project
// page, not a custom domain or a <user>.github.io root repo), so every
// internal link and asset needs that prefix baked in. Vercel and local
// dev/build don't set GITHUB_ACTIONS, so basePath stays empty there and
// nothing else about those setups changes.
const REPO_NAME = "advantex-battery-redesign";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPagesBuild ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
