import { NextResponse } from "next/server"
import { Redis } from "@upstash/redis"

// Initialize Redis client
const redis = new Redis({
  url: process.env.REDIS_URL || process.env.KV_URL || "",
  token: process.env.REDIS_TOKEN || process.env.KV_REST_API_TOKEN || "",
})

export async function GET(request: Request) {
  try {
    // Get the API key from the request header
    const apiKey = request.headers.get("x-api-key")

    // Simple API key check (you should use a more secure method in production)
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get total download count
    const totalDownloads = (await redis.get("resume_download_count")) || 0

    // Get recent downloads (last 10)
    const recentDownloadIds = await redis.lrange("resume_downloads", 0, 9)

    // Get details for each download
    const recentDownloads = await Promise.all(
      recentDownloadIds.map(async (id) => {
        return await redis.hgetall(id)
      }),
    )

    return NextResponse.json({
      totalDownloads,
      recentDownloads,
    })
  } catch (error) {
    console.error("Error fetching download stats:", error)
    return NextResponse.json({ error: "Failed to fetch download stats" }, { status: 500 })
  }
}
