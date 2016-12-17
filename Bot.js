var PlugAPI = require('plugapi');
var bot = new PlugAPI({
    email: 'liam021002@gmail.com',
    password: 'Liamminecrafter9'
});

bot.connect('cm-chillaxmusic'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});

bot.on('command:ping', function(data) {
   return data.respond('Pong!')
});

bot.on('command:skip', function(data) {
    if (data.havePermission(PlugAPI.ROOM_ROLE.BOUNCER)) {
        bot.moderateForceSkip(function() {
           data.respond('Skipped the song');
        });
    }
     // OR
     data.havePermission(PlugAPI.ROOM_ROLE.BOUNCER, function() {
        bot.moderateForceSkip(function() {
           data.respond('Skipped the song');
        });
     });
})
