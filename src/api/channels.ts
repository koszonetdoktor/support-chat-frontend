const API_BASE_URL = "http://localhost:3001";

export interface Channel {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export async function fetchChannels(): Promise<Channel[]> {
  const response = await fetch(`${API_BASE_URL}/channels`);
  if (!response.ok) {
    throw new Error("Failed to fetch channels");
  }
  return response.json();
}
