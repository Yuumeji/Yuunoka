const Discord = require ("discord.js");
const client = new Discord.Client();
var prefix = "y!";
client.login("NDM1NTI1MTI4NDIwNTg5NTY5.Dbc1Nw.dF3yKDBfDvtChZZ05v04S9tCiC4");


client.on ('message', message => { 
    if(message.content === "Coucou"){
        message.reply("Hoya petit chaton !");
        console.log('Le bot dit Hoya petit chaton!');
    
    }
});

bot.on("guildMemberAdd", member => {
     member.guild.channels.find("name", " general").send('Bienvenue ${member}')
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send('${member} vien de nous quitter...')
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(Chaton)
})
