import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function run() {
  const ai = new GoogleGenAI();
  const base64 = fs.readFileSync("/tmp/ref.png").toString("base64");
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              mimeType: "image/png",
              data: base64
            }
          },
          {
            text: `Analyze this image in comprehensive detail:
1. What is this screenshot? (Is it a Google Maps / Google Business Profile / website / mobile layout / shop card?)
2. Transcribe ALL visible text, headings, ratings, stars, reviews count, category, address, timings, phone, services, tabs, buttons, chips, images.
3. List the color palette (hex codes or color names for background, borders, buttons, text, badges).
4. Describe the exact layout and visual hierarchy from top to bottom, including icons, button positions, photo carousels, action buttons (Directions, Save, Nearby, Send to phone, Share), overview tabs, etc.
5. What are the specific user interface elements that make this design unique?`
          }
        ]
      }
    ]
  });
  console.log(response.text);
}
run().catch(err => {
  console.error("Analysis error:", err);
  process.exit(1);
});
