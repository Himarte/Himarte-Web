import type { Actions } from "./$types";
import transporter from "$lib/server/mail.server";
import { SENDER_EMAIL, EMAIL_RECEVER } from "$env/static/private";
import sanitizeHtml from "sanitize-html";

export const actions: Actions = {
    enviarEmail: async ({ request }) => {
        transporter.verify(function (error, success) {
            if (error) {
                console.error(error);
            } else {
                console.log("Servidor pronto para enviar emails");
                console.log(success);
            }
        });
        try {
            const formData = await request.formData();
            const nomeInteressado: any = formData.get("nome");
            const emailInteressado: any = formData.get("emailRemetente");
            const vagaInteressado: any = formData.get("vagaDesejada");
            const telefoneInteressado: any = formData.get("telefone");
            const mensagemInteressado: any = formData.get("mensagem");
            const curriculoInteressado: any = formData.get("curriculo");

            const nomeInteressadoSanitized = sanitizeHtml(nomeInteressado, {
                allowedTags: sanitizeHtml.defaults.allowedTags,
                allowedAttributes: {},
            });
            const emailInteressadoSanitized = sanitizeHtml(emailInteressado, {
                allowedTags: sanitizeHtml.defaults.allowedTags,
                allowedAttributes: {},
            });
            const vagaInteressadoSanitized = sanitizeHtml(vagaInteressado, {
                allowedTags: sanitizeHtml.defaults.allowedTags,
                allowedAttributes: {},
            });
            const telefoneInteressadoSanitized = sanitizeHtml(telefoneInteressado, {
                allowedTags: sanitizeHtml.defaults.allowedTags,
                allowedAttributes: {},
            });

            const sanitizedMensagemInteressado = sanitizeHtml(mensagemInteressado, {
                allowedTags: sanitizeHtml.defaults.allowedTags,
                allowedAttributes: {},
            });

            const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
    <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
      <h1 style="color: #333; text-align: center;">Contato via site HIMARTE</h1>
      <hr style="border: 0.5px solid #EB4F27;">
      <p><strong>Nome:</strong> ${nomeInteressadoSanitized}</p>
      <p><strong>Vaga:</strong> ${vagaInteressadoSanitized}</p>
      <p><strong>Email:</strong> ${emailInteressadoSanitized}</p>
      <p><strong>Telefone:</strong> ${telefoneInteressadoSanitized}</p>
      <p><strong>Mensagem:</strong> ${sanitizedMensagemInteressado}</p>
    </div>
  </div>
`;

            const send = async () => {
                const info = transporter.sendMail({
                    from: `${SENDER_EMAIL}`,
                    to: `${EMAIL_RECEVER}`,
                    subject: `Site Himarte - Vaga ${vagaInteressado}`,
                    html,
                    attachments: [
                        {
                            filename: "curriculo.pdf",
                            content: curriculoInteressado,
                        },
                    ],
                });
                console.log("Mensagem Enviada:", info);
            };

            // await send();

            return {
                status: 200,
                body: {
                    message: "Email enviado com sucesso",
                },
            };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                body: {
                    message: "Erro ao enviar email",
                },
            };
        }
    },
};
