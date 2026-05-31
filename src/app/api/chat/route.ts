import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de Plomberie Pro, une entreprise artisanale de plomberie basée à Tanger, Maroc.
Tu t'appelles "ProBot" et tu aides les clients avec leurs questions sur la plomberie, les services proposés, les tarifs et la prise de rendez-vous.

Informations sur l'entreprise :
- Nom : Plomberie Pro (Chakir Zarouk)
- Localisation : Tanger, Maroc
- Téléphone : +212 600 000 000
- Services : Dépannage d'urgence (30 min), Installation sanitaire, Rénovation de salle de bain, Chauffe-eau & Thermodynamique
- Disponibilité : 7j/7, 24h/24 pour les urgences

Règles de comportement :
1. Réponds toujours en français, sauf si le client écrit en arabe (réponds en darija/arabe).
2. Sois professionnel, chaleureux et concis.
3. Pour les urgences, oriente immédiatement vers le numéro de téléphone.
4. Ne cite pas de prix exacts sans inspection — propose plutôt un devis gratuit.
5. Encourage à contacter via WhatsApp ou téléphone pour les cas urgents.
6. Limite tes réponses à 3-4 phrases maximum pour rester lisible sur mobile.`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Clé API Gemini non configurée." },
        { status: 500 }
      );
    }

    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message invalide." }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Build conversation history for multi-turn chat
    const chatHistory = Array.isArray(history)
      ? history.map((msg: { role: string; text: string }) => ({
          role: msg.role as "user" | "model",
          parts: [{ text: msg.text }],
        }))
      : [];

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("[Chatbot API error]", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
