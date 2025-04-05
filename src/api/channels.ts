const API_BASE_URL = "http://localhost:3001";

export interface Channel {
  id: number;
  name: string;
  status: "active" | "closed" | "unclaimed";
  createdAt: string;
  updatedAt: string;
}

export async function fetchChannels(params?: { status?: Channel["status"] }): Promise<Channel[]> {
  const response = await fetch(`${API_BASE_URL}/channels?status=${params?.status}`);
  if (!response.ok) {
    throw new Error("Failed to fetch channels");
  }
  return response.json();
}

export async function createChannel(name: string) {
  const response = await fetch(`${API_BASE_URL}/channels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ channel: { name } }),
  });
  if (!response.ok) {
    throw new Error("Failed to create channel");
  }
}

export async function fetchChannel(channelId: number) {
  const response = await fetch(`${API_BASE_URL}/channels/${channelId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch channel");
  }
  return response.json();
}

export async function claimChannel(channelId: number) {
  const response = await fetch(`${API_BASE_URL}/channels/${channelId}/claim`, {
    method: "PUT",
  });
  if (!response.ok) {
    throw new Error("Failed to claim channel");
  }
}
