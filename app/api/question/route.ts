import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/chat"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  const requestJson = await request.text()
  console.log(requestJson)

  const questionAnswerArray: any[] = [
    {
      question: "How much experience do you have?",

      answer: "I've been a web developer for over 5 years",
    },
  ]

  const whatToLookFor =
    `You are to speak on my behalf. You are to answer questions simmilar to how I have answered questions in the following array of qustion and answer pairs.
  If you are unable to answer the question for me, say so.` +
    JSON.stringify(questionAnswerArray)
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "The following array consists of a user's tweets." + whatToLookFor,
    },
    { role: "user", content: "" + requestJson },
  ]
  try {
    const gptRes = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    })
    console.log(gptRes)
    const answer = gptRes.choices[0].message
    return new Response(JSON.stringify({ statusCode: 200, body: answer }))
  } catch (err) {
    throw Error("" + err)
  }

  
}
