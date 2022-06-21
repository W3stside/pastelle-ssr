import React from 'react'
import { gql, useShopQuery } from '@shopify/hydrogen'
import { Product, QueryRoot } from '@shopify/hydrogen/storefront-api-types'

const QUERY = gql`
  query getFiveProducts {
    products(first: 5) {
      nodes {
        id
        title
        description
        descriptionHtml
        sizes: options {
          values
        }
        updatedAt
        featuredImage {
          url
        }
        media(first: 6) {
          nodes {
            ... on MediaImage {
              mediaContentType
              image {
                id
                url
                altText
                width
                height
              }
            }
            ... on Video {
              mediaContentType
              id
              previewImage {
                url
              }
              sources {
                mimeType
                url
              }
            }
            ... on ExternalVideo {
              mediaContentType
              id
              embedUrl
              host
            }
          }
        }
        color: metafield(namespace: "custom", key: "color") {
          value
        }
        artistInfo: metafield(namespace: "custom", key: "artistInfo") {
          value
        }
      }
    }
  }
`

export default function Home() {
  // Make server-only GraphQL queries to the Storefront API.
  const { data } = useShopQuery<QueryRoot>({ query: QUERY })

  return (
    <div>
      <h1>Welcome to Pastelle!</h1>

      <h3>Available shit</h3>
      {(data?.products.nodes || []).map((product: Product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      ))}
    </div>
  )
}
