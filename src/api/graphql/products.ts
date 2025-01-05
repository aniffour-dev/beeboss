import { gql } from "graphql-request";
import { client } from "@/api/graphql/graphql-client";
import { ReactNode } from "react";

export interface Product {
  images: any;
  description: ReactNode;
  name: string;
  slug: string;
  image: {
    sourceUrl: string;
    seo: {
      metaDesc: string;
      canonical: string;
      metaKeywords: string;
      opengraphDescription: string;
      opengraphAuthor: string;
      opengraphImage: {
        sourceUrl: string;
      };
      schema: {
        pageType: string;
        articleType: string;
      };
      title: string;
      twitterDescription: string;
      twitterImage: {
        sourceUrl: string;
      };
    };
  };
  onSale: boolean;
}

interface ProductsQueryResult {
  products: {
    edges: {
      node: Product;
    }[];
  };
}

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          name
          slug
          image {
            sourceUrl
            seo {
              metaDesc
              canonical
              metaKeywords
              opengraphDescription
              opengraphAuthor
              opengraphImage {
                sourceUrl
              }
              schema {
                pageType
                articleType
              }
              title
              twitterDescription
              twitterImage {
                sourceUrl
              }
            }
          }
          onSale
        }
      }
    }
  }
`;

export async function fetchProducts(): Promise<Product[]> {
  try {
    const data = await client.request<ProductsQueryResult>(GET_PRODUCTS);
    return data.products.edges.map(edge => edge.node);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
