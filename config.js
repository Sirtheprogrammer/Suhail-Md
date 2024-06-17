const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sirtheprogrammer:01319943591@cluster0.p2rjers.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://sirtheprogrammer:01319943591@cluster0.p2rjers.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sirtheprogrammer" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255654243266";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255654243266,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmFtRWVhbGFZUGJubnZkWjJhUGcwQzBVdDZNdXVNbU9ITG5mSFpoMGh4MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2NTQyNDMyNjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEyMDQwQUUwM0QxOEE5QjQ5NDI3MzBFQjRDMDhERUE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODM0OTU2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY1NDI0MzI2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOENEQjNGODFEMkI0NUUwRUQ3MzgxMDNBODE0QzQyMURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzQ5NTYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJyTzhkaTZaVHBPUmh6OFRMSmtOa1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjdlYWM1YzUtYWY0OC00NWI0LWE3YzAtMjM2NzU5ZDlmM2Y2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjQ4LFxuICAgICAgNzksXG4gICAgICA1MyxcbiAgICAgIDcsXG4gICAgICA5OCxcbiAgICAgIDIzNixcbiAgICAgIDc2LFxuICAgICAgMjIxLFxuICAgICAgMTI3LFxuICAgICAgMTkwLFxuICAgICAgMTY2LFxuICAgICAgMTY5LFxuICAgICAgMjE3LFxuICAgICAgMTcsXG4gICAgICA3OCxcbiAgICAgIDQ1LFxuICAgICAgMjQ3LFxuICAgICAgNzIsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTEwLFxuICAgICAgMjAwLFxuICAgICAgMTY5LFxuICAgICAgNDgsXG4gICAgICAyMzQsXG4gICAgICAxOTgsXG4gICAgICAxMzYsXG4gICAgICAxMSxcbiAgICAgIDUxLFxuICAgICAgMzYsXG4gICAgICAxNjgsXG4gICAgICAxNDQsXG4gICAgICAxMDUsXG4gICAgICAyMjMsXG4gICAgICAxNDgsXG4gICAgICAyNDUsXG4gICAgICAyMjcsXG4gICAgICAxMTcsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1BNQkQ4MTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY1NDI0MzI2NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzU3NzYwMDgxMjY2NDQ6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT0ZsL3dGRVBUZHI3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVsWmVBdGR0ZXptTUZzN2F5RU13cUhBR3J5cW5HWGRDNWRiR2tnNHpXSGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3laUHZ3M2xsMFJBSTlkYytibVU2YXFEWHhzZ2RpYU14RFdFQXRDRGY1NGpDeXU2Y1NlTCtsVDd6MjN2bTBWaEp4Yk5SZnY2SnBuc3dMNWx2Vy9qQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemVMNEVvSWlTcGJKcjlWNWhXT21LbUYyNWt3aFcyaWpCbXJSVVhsZ1VIMjlhR3ljM3pINURFVFZwT3dzWlAxUGkyWmE3QmNLaGZUQkJudjBKNDBKaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjU0MjQzMjY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM0OTU2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1EeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUR5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiV2poWlZEYlRJREFFTjQrODVNbXFKUDFCODAwTlFJNitCK3EyTWJXcDhjaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjAyNjAxNzE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNDk1NjE3NjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sirtheprogrammer』```", //*『sᴜʙsᴄʀɪʙᴇ • sirtheprogrammer_tech』*\n youtube.com/@sirtheprogrammer_tech"),
 
  author : process.env.PACK_AUTHER|| "sirtheprogrammer",
  packname: process.env.PACK_NAME || "prohacker",
  botname : process.env.BOT_NAME  || "sirtheprogrammer",
  ownername:process.env.OWNER_NAME|| "It'x sBRK255",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-wtlA8Q8y00pw0SFuX8iVT3BlbkFJUTlbzlarIdQV3QcgnzDM",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
