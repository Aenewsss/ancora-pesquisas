'use server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!)

export async function handleAction(state: any, form: FormData) {
    try {
        const nome = form.get('nome')?.toString()
        const email = form.get('email')?.toString()
        const telefone = form.get('telefone')?.toString()
        const mensagem = form.get('mensagem')?.toString()
        const assunto = form.get('assunto')?.toString()
        const municipio = form.get('municipio')?.toString()
        const qtt_eleitores = form.get('qtt_eleitores')?.toString()
        const tipo_pesquisa = form.getAll('tipo_pesquisa')?.toString()

        console.log(nome, email, telefone, mensagem, assunto, municipio, qtt_eleitores, tipo_pesquisa)

        const msg = {
            to: 'ancora.pesquisas06@gmail.com',
            from: 'ancora.pesquisas06@gmail.com',
            templateId: 'd-501ca4fd75354d7a8ff87c48c590d79e',
            dynamicTemplateData: {
                nome,
                email,
                telefone,
                mensagem,
                assunto,
                municipio,
                qtt_eleitores,
                tipo_pesquisa,
            }
        }
        try {
            const result = await sgMail.send(msg)
            return { error: false, data: '' }
        } catch (error) {
            return { error: true, data: null }
        }
    } catch (error) {
        return { error: true, data: null }
    }
}