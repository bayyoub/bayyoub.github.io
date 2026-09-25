# QSMD research website

Static Next.js website for Dr. Bader A. Alayyoub and QSMD at Kuwait University.

## Publish with GitHub Pages

Create a **public** repository named `<your-github-username>.github.io` and put these source files on its `main` branch. In repository **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. Every push to `main` then builds and publishes the website at `https://<your-github-username>.github.io/`.

The GitHub Free plan requires a public repository for Pages. The site itself is public on the web, including when the source repository is private on a paid plan. Do not put private data in the site source.

## Edit content

- Home: `app/page.tsx`
- Research: `app/research/page.tsx`
- Publications: `app/publications/data.ts`
- People: `app/team/page.tsx`
- Joining and contact: `app/join/page.tsx`
- Shared navigation, footer, and email: `app/layout.tsx`
- Colors and spacing: `app/globals.css`
- Logos: `public/qsmd-logo.png` and `public/ku-seal.png`

You can use GitHub's pencil icon to edit these files in a browser and commit a change. GitHub Actions will publish the revision automatically. More involved layout changes can be made locally with `pnpm install`, `pnpm dev`, and `pnpm exec next build --webpack`.

This copy assumes a repository named `<your-github-username>.github.io`. A differently named project repository needs a matching Next.js `basePath` and asset path changes before publishing.
