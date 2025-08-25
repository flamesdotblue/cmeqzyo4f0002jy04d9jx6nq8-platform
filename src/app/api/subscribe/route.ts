import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    let email = ''

    if (req.headers.get('content-type')?.includes('application/json')) {
      const body = await req.json()
      email = (body?.email || '').toString()
    } else if (req.headers.get('content-type')?.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData()
      email = (formData.get('email') || '').toString()
    } else {
      const formData = await req.formData().catch(() => null as any)
      if (formData) email = (formData.get('email') || '').toString()
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      })
    }

    console.log('[WAITLIST]', email)

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
}

export const runtime = 'edge'
