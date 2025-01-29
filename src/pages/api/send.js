import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    if (req.method === 'POST') {
        const datas = req.body;
        const {     
            dateDepart,
            nomcomplet,
            email,
            telephone,
            budget,
            typeproprietedepart,
            typeproprietedestination,
            obstacledepart,
            obstacledestination,
            adressedepart,
            adressedestination,
            message
        } = datas;
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'DEMANDE DE COTATION',
            html: ` <br />
                <p>Nom complet : ${nomcomplet}</p>
                <p>Email :  ${email}</p>
                <p>Telephone : ${telephone}</p>
                <p>Date de depart (30 Jrs max) :  ${dateDepart}</p>
                <p>Date flexible : ${nomcomplet}</p>
                <p>Budget ($) : ${budget}</p>
                <p>Adresse de départ : ${adressedepart}</p>
                <p>Adresse de destination : ${adressedestination}</p>
                <p>Type de propriété départ : ${typeproprietedepart}</p>
                <p>Type de propriété destination : ${typeproprietedestination}</p>
                <p>Obstacles au départ : ${obstacledepart}</p>
                <p>Obstacles à destination : ${obstacledestination}
                <p>Precision sur les besoins : ${message}</p>
                ` 
        });
        
        if (error) {
            return res.status(400).json(error);
        }
        res.status(200).json({ response : 'success complete' });
    }
};