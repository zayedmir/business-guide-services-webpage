// One-off asset generation: brand imagery for Business Guide Services.
// Run with: node scripts/generate-images.mjs
import { GoogleGenAI } from '@google/genai'
import { writeFile } from 'node:fs/promises'

const ai = new GoogleGenAI({
  apiKey: process.env.NETLIFY_AI_GATEWAY_KEY,
  httpOptions: { baseUrl: process.env.NETLIFY_AI_GATEWAY_BASE_URL?.replace(/\/$/, '') },
})

const STYLE =
  'Editorial corporate photography, natural light, deep navy blue and warm off-white palette with black accents, ' +
  'restrained and premium, shallow depth of field, no text, no logos, no watermarks, no readable writing, ' +
  'photorealistic, high detail.'

const jobs = [
  {
    file: 'hero-dubai.jpg',
    ratio: '16:9',
    prompt:
      'Dubai business district skyline at blue hour seen from a low wide angle, Sheikh Zayed Road towers with ' +
      'glass facades, deep navy sky, calm and authoritative mood, subtle warm window lights. ' + STYLE,
  },
  {
    file: 'service-government.jpg',
    ratio: '4:3',
    prompt:
      'Close-up of a tidy government-transactions desk in a Dubai office: neat stack of official documents, ' +
      'a metal stamp, a passport-sized folder, a pen, and a laptop slightly out of focus, hands of a ' +
      'professional in a dark navy suit organising the papers. ' + STYLE,
  },
  {
    file: 'service-trademark.jpg',
    ratio: '4:3',
    prompt:
      'Macro shot of an embossed legal certificate with a blank raised seal and a navy ribbon on a dark desk, ' +
      'magnifying glass resting beside it, conveying intellectual property protection. ' + STYLE,
  },
  {
    file: 'service-setup.jpg',
    ratio: '4:3',
    prompt:
      'Two business professionals in a modern Dubai office reviewing company formation paperwork across a light ' +
      'oak table, one wearing a white kandura, the other a navy suit, floor-to-ceiling window with soft city ' +
      'view behind them, collaborative and reassuring. ' + STYLE,
  },
  {
    file: 'office-team.jpg',
    ratio: '3:2',
    prompt:
      'Interior of a small premium consultancy office in Dubai: off-white walls, navy accent wall, a service ' +
      'counter with two seats for visitors, orderly document shelving, soft daylight through blinds, no people. ' + STYLE,
  },
  {
    file: 'group-auctions.jpg',
    ratio: '16:9',
    prompt:
      'Rows of clean used cars parked in an outdoor auction yard in the UAE under bright hazy daylight, ' +
      'orderly diagonal composition, desert light, no branding of any kind on the vehicles. ' + STYLE,
  },
  {
    file: 'group-realestate.jpg',
    ratio: '16:9',
    prompt:
      'Modern residential tower balconies and villa rooftops in Dubai at golden hour viewed from above, ' +
      'palm trees and calm water feature, premium real estate mood. ' + STYLE,
  },
]

async function run({ file, prompt, ratio }) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: prompt,
        config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: ratio } },
      })
      const parts = res.candidates?.[0]?.content?.parts ?? []
      for (const part of parts) {
        if (part.inlineData?.data) {
          await writeFile(`public/img/${file}`, Buffer.from(part.inlineData.data, 'base64'))
          console.log('OK', file)
          return
        }
      }
      throw new Error('no image part returned')
    } catch (err) {
      console.log('FAIL', file, 'attempt', attempt, String(err).slice(0, 300))
      if (attempt === 3) return
      await new Promise((r) => setTimeout(r, 3000 * attempt))
    }
  }
}

for (const job of jobs) await run(job)
console.log('DONE')
