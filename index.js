const Discord = require('discord.js');
const client = new Discord.Client();

//client.on('ready', () => {
//  console.log(`Logged in as ${client.user.tag}!`);
//});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Guild X | !help`, {type: "WATCHING"}); 
});

const channelId = '746522241310654467' // welcome channel
  const targetChannelId = '746695390920835203' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.channel.send('>>> Pong!');
  }
});

client.on('message', message => {
    if (message.content === '!help') {
      let help = new Discord.MessageEmbed()
      .setColor('#000000')
      .setTitle('GitHub')
      .setURL('https://discord.js.org/')
      .setAuthor('Requested by ' + message.author.username, 'https://cdn.discordapp.com/emojis/747924931412623440.png?v=1', 'https://discord.gg/p6XVHDX')
      .setDescription('Bot coded by itzplayz0001')
      .setThumbnail('https://avatars0.githubusercontent.com/u/66119667?s=400&u=bf31680a513e27652ff33e677ee7cccd9746c603&v=4')
      .addFields(
          { name: 'List of commands', value: '``!help`` - Shows list of commands\n``!ping`` - ping' },
          { name: 'Prefix', value: '``!``', inline: true },
      )
      .setTimestamp()
      .setFooter('Bot coded by itzplayz0001', message.author.avatarURL());
      message.channel.send(help);
    }
});

client.login(config.json);
