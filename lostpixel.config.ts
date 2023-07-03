import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  generateOnly: true,
  failOnDifference: process.env.FAIL_ON_DIFFERENCE === "true" ? true : false,
};
