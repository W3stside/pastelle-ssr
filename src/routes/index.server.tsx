import React from "react";
import { gql, useShopQuery } from "@shopify/hydrogen";

const QUERY = gql`
  {
    shop {
      name
    }
    products(first: 5) {
      nodes {
        id
        handle
        descriptionHtml
      }
    } 
  }
`;


export default function Home() {
  // Make server-only GraphQL queries to the Storefront API.
  const { data } = useShopQuery<any>({query: QUERY});

  return (
    <div>
      <h1>Welcome to {data?.shop?.name}!</h1>

      <h3>Available shit</h3>
      {(data?.products?.nodes || []).map((product: any) => (
        <div>
          <p>{product.title}</p>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}/>
        </div>
      ))}
    </div>
  );
}
