const Discord = require('discord.js');
client.on('message', msg => {

    if (msg.content == 'Mjoin') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
    client.channels.get("517374070912974873").join();
    });
client.login(process.env.BOT_TOKEN);
