if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = config.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
let author = message.author
let guild = message.guild

let commandFile = client.commands.get(cmd.slice(prefix.length));
if(commandFile) commandFile.run(prefix, messageArray, cmd, client, message, args, author, guild, lang)
