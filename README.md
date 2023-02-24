## Catdocs

- Documentation of a cat-themed project using [VSCodium](https://vscodium.com/).
- Forkable on [Github](https://github.com/Catventurist/Catdocnuxt).
- Based on [Docus](https://docus.dev) template. 

## Adjustments

- Disable telemetry on `nuxt.config.ts`:
```bash [js]
telemetry: false
```
- Change **pinceau** color scheme on `tokens.config.ts`:
```bash [js]
primary: palette('purple')
```
- Disable formatting on `0.index.md` breaking the **block-hero** component.

## Guides

More info can be found on the `.md` document pages.

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
yarn build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
yarn generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
yarn preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).
