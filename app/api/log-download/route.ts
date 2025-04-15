import { NextResponse } from "next/server"
import { Redis } from "@upstash/redis"

// Initialize Redis client
const redis = new Redis({
  url: process.env.KV_REST_API_URL || "", // Use the REST API URL
  token: process.env.REDIS_TOKEN || process.env.KV_REST_API_TOKEN || "",
})

export async function POST(request: Request) {
  try {
    const timestamp = new Date().toISOString()
    const clientIp = request.headers.get("x-forwarded-for") || "unknown"

    // Create a unique key for this download event
    const downloadId = `download:${Date.now()}`

    // Store download information in Redis
    await redis.hset(downloadId, {
      timestamp,
      ip: clientIp,
      userAgent: request.headers.get("user-agent") || "unknown",
    })

    // Add to a list of all downloads for easy retrieval
    await redis.lpush("resume_downloads", downloadId)

    // Increment total download counter
    await redis.incr("resume_download_count")

    console.log("Resume download logged to Redis:", timestamp)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error logging download:", error)
    return NextResponse.json({ success: false, error: "Failed to log download" }, { status: 500 })
  }
}