import {defineConfig} from "sanity"

const config = defineConfig({
    projectId: "yf3pjenc",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-07-07",
    basePath: "/admin"
})

export default config;