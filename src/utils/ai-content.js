"use server";

export default async function AIContent({ text, customInstructions = "", contentGen = false }) {
    let basePrompt;
    if (contentGen) {
        basePrompt = `You are a senior and experienced content writer. Write a detailed, fact-checked article with proper headings and bullet points. Topic: ${text}. Instructions: ${customInstructions}`;
    } else {
        basePrompt = `You are a senior content reviewer. Simplify the following content: ${text}. Instructions: ${customInstructions}`;
    }

    try {
        const res = await fetch(`https://openrouter.ai/api/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Blog Content AI"
            },
            body: JSON.stringify({
                model: "mistralai/mistral-7b-instruct:free",
                messages: [{ role: "user", content: basePrompt }],
                max_tokens: contentGen ? 1700 : 600
            })
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("OpenRouter API Error:", error);
            throw new Error("Failed to fetch AI content.");
        }

        const data = await res.json();
        const returnValue = data.choices[0].message.content;
        console.log(returnValue, ' ← AI content');
        return returnValue;

    } catch (error) {
        console.error("AIContent Error:", error.message);
    }
}
