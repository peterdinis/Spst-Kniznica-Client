import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
}
})