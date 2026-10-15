import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Found in sanity.json or your Sanity dashboard
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Set to false if you want real-time updates instantly
});
