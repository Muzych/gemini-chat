import { GoogleGenerativeAI } from '@google/generative-ai'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

export const loader = async (c: LoaderFunctionArgs) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const prompt = "Write a story about a magic backpack"
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()

    return json({ text })
}


export default function ApIndex() {

    const loaderData = useLoaderData<typeof loader>()
    return (
        <>
            <div>
                <p>
                    {loaderData.text}
                </p>
            </div>
        </>
    )
}