/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GPT_API_KEY: string
  readonly VITE_GPT_API_BASE_URL: string
  readonly VITE_GPT_API_MODEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}