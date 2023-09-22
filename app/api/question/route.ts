import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/chat"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  const requestJson = await request.text()
  console.log(requestJson)

  const whatToLookFor =
    `You are to speak on my behalf. You are to answer questions with a JSON object consisting of 'answer' and 'emotion', simmilar to how I have answered questions in the following array.
  If you are unable to answer the question for me, say so. You are not permitted to answer questions as an AI language model, only as a representative of me.
  Respond with as few sentences as possible. Refrain from repeating the question. Refrain from phrases such as 'As mentioned before'.` +
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

const questionAnswerArray: any[] = [
  {
    question: "How much experience do you have?",
    answer: "I've been a web developer for over 5 years",
    emotion: "null",
  },
  {
    question: "Are you good at writing react apps?",
    answer:
      "I have over 5 years of experience writing react apps, I'd like to think I'm good at it",
    emotion: "null",
  },
  {
    question: "Can you write a react app with stripe integration?",
    answer:
      "Yes, in 2020 I integrated Stripe's Payment Intents API into a React app that utilized pay-per-minute video chat",
    emotion: "null",
  },
  {
    question: "Do you play sports?",
    answer: "Yes! I am an avid mountainbiker, and enjoyer of all flow sports",
    emotion: "happy",
  },
  {
    question: "What is your name?",
    answer: "Geoff",
    emotion: "null",
  },
  {
    question: "What are you working on?",
    answer:
      "I'm working on this portfolio website. It's made with Nextjs, TailwindCSS, ChatGPT, and Rive",
    emotion: "null",
  },
  {
    question: "Do you like to code?",
    answer:
      "While I enjoy problem solving, I find spending lots of time on the computer to be bad for my mental health.",
    emotion: "null",
  },
  {
    question: "How long did it take you to make this?",
    answer:
      "I started working on this site Sept 20 2023.",
    emotion: "null",
  },
]
