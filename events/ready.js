console.log(`[INFO] ${bot.user.username} has succesfully started!`)
bot.user.setActivity(config.acitivityText, {type: config.acitivityType});
bot.user.setStatus(`${config.status}`)
