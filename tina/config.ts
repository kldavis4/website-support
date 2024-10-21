import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  tinaioConfig: {
    //frontendUrlOverride: 'https://pr1993-app.tinajs.dev', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://pr1993-identity.tinajs.dev',
    //contentApiUrlOverride: 'https://pr1993-content.tinajs.dev',
    //assetsApiUrlOverride: 'https://assets.tinajs.io',
    //frontendUrlOverride: 'https://app.tina.io', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://identity.tinajs.io',
    //contentApiUrlOverride: 'https://content.tinajs.io',
    //assetsApiUrlOverride: 'https://assets.tinajs.dev',
    //frontendUrlOverride: 'https://app.tinajs.dev', // 'https://app.tina.io'
    //identityApiUrlOverride: 'https://identity.tinajs.dev',
    //contentApiUrlOverride: 'https://content.tinajs.dev'
    frontendUrlOverride: 'http://localhost:3002', // 'https://app.tina.io'
    identityApiUrlOverride: 'https://kldavis4-identity.tinajs.dev',
    contentApiUrlOverride: 'https://kldavis4-content.tinajs.dev',
    //assetsApiUrlOverride: 'https://kldavis4-assets.tinajs.dev'
    //assetsApiUrlOverride: 'https://assets-api-local-kldavis4.tinajs.dev'
  }
});
