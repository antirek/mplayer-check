'use strict';

var child_process = require('child_process');
var EventEmitter = require('events').EventEmitter;

function Player () {

    var cmd_mplayer_exec = 'mplayer';
    var decoder = null;
    var emitter = new EventEmitter();   

    var init = function (filepath) {        
        decoder = child_process.spawn(cmd_mplayer_exec, ['-nolirc', filepath]);
        decoder.stdout.pipe(process.stdout);
        decoder.stderr.pipe(process.stderr);
    };

    var play = function (filepath) {
        return init(filepath);
    };

    return {
        play: play
    };
};

var player = new Player();

var filename = "https://cs4-4v4.vk-cdn.net/p16/addd3f474a7ca8.mp3?extra=vfplwVwu9dzdlJcPkJ1E90x4hfDUgkWxCc_vNTHvo4OeFU36vBSjjGRw55S56UtJaveu9Raa1KIZwxNJ5R8EbcVmG_WhryLfhg";

player.play(filename);