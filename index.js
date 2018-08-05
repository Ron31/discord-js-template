const config = require("./config.json")
const tokenFile = require("./token.json")
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true})
client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if(err) console.lor(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("[INFO] No commands loaded!")
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`[INFO] "${f}" loaded!`)
  client.commands.set(props.help.name, props)
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(./events/${file});
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
client.config = config;

client.login(tokenFile.token);
