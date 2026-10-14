// lib/livekit.ts — LiveKit Cloud integration (proton-zmkj9cgf)
import { AccessToken } from "livekit-server-sdk";

export async function generateLiveKitToken(
  roomName: string = "proton-consultation",
  identity: string = `user-${Date.now()}`
): Promise<string> {
  const apiKey = process.env.LIVEKIT_API_KEY || "";
  const apiSecret = process.env.LIVEKIT_API_SECRET || "";
  if (!apiKey || !apiSecret) throw new Error("LiveKit env vars missing");
  const token = new AccessToken(apiKey, apiSecret, { identity });
  token.addGrant({ room: roomName, roomJoin: true, canPublish: true, canSubscribe: true });
  token.addGrant({ roomAdmin: true, roomCreate: true });
  return await token.toJwt();
}

export const LIVEKIT_CONFIG = {
  url: process.env.LIVEKIT_URL || "wss://proton-zmkj9cgf.livekit.cloud",
};
