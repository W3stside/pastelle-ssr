import { defineConfig } from '@shopify/hydrogen/config'

export default defineConfig({
  shopify: {
    storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
    storefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN,
    storefrontApiVersion: import.meta.env.VITE_SHOPIFY_API_VERSION,
  },
})
