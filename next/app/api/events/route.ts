import { listeners } from "@/lib/strapi/nextjs/server";

// This is required to enable streaming
export const dynamic = "force-dynamic";

export const GET = listeners.GET({
  url: "http://localhost:1337/events-subscription",
});
