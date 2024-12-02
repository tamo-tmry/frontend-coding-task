import { defineConfig, UserConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()] as UserConfig["plugins"],
    test: {
        environment: "jsdom",
    },
})
