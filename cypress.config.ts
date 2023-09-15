import dotenv from "dotenv";
import { defineConfig } from "cypress";

const ENVIRONMENT = "local"

dotenv.config({ path: `.env.${ENVIRONMENT}` });
dotenv.config();
export default defineConfig({
  projectId: "testing_thesis",
  video: true,

  env: {
    apiUrl: process.env.BE_URL,
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
      exclude: "cypress/**/*.*",
    },
    defaultUser: process.env.DEFAULT_USER,
    defaultPassword: process.env.DEFAULT_PASSWORD,
  },
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    baseUrl: process.env.FE_URL,
  },
});
