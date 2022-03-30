const token = "const { Client } = require('discord.js');
const bot = new Client;
const token = "OTU4MzUyOTA5NzgxODM1ODA5.YkMFsw.UbtHAEWJfGQGphCGWyUqpFRL7oU"; // TOKEN BOT KAMU
var PREFIX = "im!"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online, Subscribe Yt Rama Putra')

    bot.user.setActivity("Prefix : im!", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("You Can't Registration In PM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Please Provide A Name For Setting")
                const nick = "[WARGA]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Your Name Is Too Long Please Give A Short Name ")
            try {
                    message.member.roles.add("") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accept,**Welcome To Indo Metaverse**");
                } catch(e) {
                    return message.channel.send("Error, Please Retype CMD.")
                            }
            break;
    }
})



