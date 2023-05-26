import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

export async function POST(request: Request) {

  const requestJson = await request.text()
  console.log(requestJson)

    try {
      await new SESClient({ region: "us-east-1" }).send(
        new SendEmailCommand({
          Source: "gefyoung@gmail.com",
          Destination: {
            ToAddresses: ["gefyoung@gmail.com"],
          },
          Message: {
            Subject: {
              Data: "personal site email",
            },
            Body: {
              Text: {
                Data: "" + requestJson,
              },
            },
          },
        })
      )
    } catch (err) {
      console.log("SES-ERR:::", err)
    }

  return new Response(JSON.stringify({ statusCode: 200 }))
}
