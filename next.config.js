/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'pages' // ← 改成真实的仓库名；如果是 username.github.io 根仓库，就置空 ''

module.exports = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // 删掉 distDir 这一行！不要设置 distDir
  images: { unoptimized: true },
  basePath: isProd && repo ? `/${repo}` : '',
  assetPrefix: isProd && repo ? `/${repo}/` : '',
}
