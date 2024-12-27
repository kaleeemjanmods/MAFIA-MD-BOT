const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ʍԹԲɿԹ-ԹԺȝȝʅ*

> *MAFIA MD REPO:*
*|* *https://github.com/MAFIA-ADEEL/MAFIA-MD-BOT.git*

> *JOIN MY YT CHANNEL:*
*|* *https://youtube.com/@mafiamdbot*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VakJs4YJkK7BYQF1Wp1g*
*╰──────────────●●►*

> *MAFIA-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "ADEEL",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'MAFIA MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/MAFIA-ADEEL/MAFIA-MD-BOT.git" ,
thumbnailUrl: "https://i.imghippo.com/files/RYX5040mys.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
