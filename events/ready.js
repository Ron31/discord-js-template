console.log(`[INFO] ${client.user.username} has succesfully started!`)
client.user.setActivity(config.acitivityText, {type: config.acitivityType});
client.user.setStatus(`${config.status}`)
