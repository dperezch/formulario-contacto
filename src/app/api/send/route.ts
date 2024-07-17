import { NextResponse } from "next/server";
import { sendMail } from "@/app/utils/sendEmail";

export async function POST(request: Request) {
  const formBody = await request.json();

  try {
    await sendMail(formBody);
    return NextResponse.json(
      {
        message: "Mensaje enviado con éxito",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al enviar el mensaje",
      },
      { status: 500 }
    );
  }
}
