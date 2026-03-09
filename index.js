const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR with WhatsApp');
});

client.on('ready', () => {
    console.log('Bot is online!');
});

client.on('message', msg => {

    if (msg.body === '!ping') {
        msg.reply('Pong!');
    }

    if (msg.body === '!help') {
        msg.reply('Commands:\n!ping\n!help');
    }

});

client.initialize();
