import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, convertToCoreMessages } from "ai";
import aboutMe from "../../../utils/aboutMe";

export const runtime = "edge";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: google("gemini-2.0-flash-001"),
    system: aboutMe(),
    temperature: 0.5,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}