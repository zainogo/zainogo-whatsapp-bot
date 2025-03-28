
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot attivo!');
});

client.on('group_join', async (notification) => {
    const chat = await notification.getChat();
    const welcomeMessage = `📌 *Regole del gruppo ZainoGo • Chat*

🎒 Benvenuto nella community ufficiale di ZainoGo!
Qui puoi conoscere altri ragazzi, fare domande, confrontarti, condividere idee ed emozioni.

Per mantenere un ambiente positivo e sicuro, ti chiediamo di rispettare queste semplici regole:

1️⃣ Rispetto prima di tutto – ogni opinione è valida se espressa con educazione 🤝
2️⃣ No spam, no messaggi fuori tema – restiamo sul tema viaggi, esperienze e socializzazione ✈️
3️⃣ Evita linguaggi offensivi o provocatori – questo è uno spazio accogliente e inclusivo 🧠❤️
4️⃣ Vietata qualsiasi forma di pubblicità o promozione personale 🚫📢
5️⃣ Segui il canale ZainoGo • Info per restare aggiornato su viaggi e novità 📲
🔗 https://whatsapp.com/channel/0029VbA2eoXEAKWMpyAKth2U

Per qualsiasi dubbio o proposta, scrivici in privato 💬
Il tuo zaino è pronto… e tu?`;

    chat.sendMessage(welcomeMessage);
});

client.initialize();
