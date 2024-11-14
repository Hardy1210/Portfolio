// src/app/api/send/route.ts

import { EmailTemplate } from '@/app/_components/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  const { userEmail, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Your Name <mail.hardylino.com>',
      to: [userEmail],
      subject: 'Nuevo mensaje de contacto',
      react: EmailTemplate({ message }),
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
    }
  }
}

{
  /*
import { EmailTemplate } from '@/app/_components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <harv2222@gmail.com>',
      to: ['harv2222@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
} */
}
