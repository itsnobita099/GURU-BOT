let {Function,runtime} = require('../lib');
/*
Credit: SUHAID-BRO/hermit-md 
 Function({
pattern: 'autobio ?(.*)',
fromMe: false
*/
let on_aano = false
Function({on:"text",fromMe:false},async (m)=>{
if (on_aano=== true || on_aano === null) return;
if (m.message.toLowerCase() == "autobio off") {
on_aano = null
clearInterval(bioSetter)
await m.send("_Autobio disabled. Remove plugin for completing removal process!_")

}
on_aano = true
async function setAbout(){
let status = "❬  ❍ "+new Date().toLocaleDateString()+" , ⛻ "+new Date().toLocaleTimeString('HI', { timeZone: 'Asia/Kolkata' }) + " ❭  𝐎ɴᴄᴇ 𝐔ᴘᴏɴ 𝐀 𝐓ɪᴍᴇ - 𝐈 𝐖ᴀs 𝐒ʜᴇᴇᴛ & 𝐈ɴɴᴏᴄᴇɴᴛ & 𝐓ʜᴀɴ 𝐒ʜɪᴛ 𝐇ᴀᴘᴘᴇɴᴅ !! ❤‍🩹 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝚰𝚻𝐒 | 𝐍𝐎𝚩𝚰𝚻𝚫💖✅"
await m.client.updateProfileStatus(status)
return "Done"
}
m.jid = m.client.user.id
await m.send("_Autobio On ✅_");
let bioSetter = setInterval(setAbout,10000)

})
