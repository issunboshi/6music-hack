function audioAPI () {
    var sounds,
        methods;
    sounds = new Howl({
      urls: ['/library/audio/mergedtracks.mp3'],
      sprite: {
          bass: [0, 64000],
          ep: [64000, 128000],
          flutes1: [128000, 192000],
          flutes2: [192000, 256000],
          hiPanel1: [256000, 320000],
          hiPanel2: [320000, 384000],
          loFlute: [384000, 448000],
          loPad: [448000, 512000],
          sineHi: [512000, 576000]
      },
      loop: true,
    });


    // methods: {
    //     playClick: function (sprite) {
    //         sound.play(sprite);
    //     },
    //     stopClick: function () {
    //         sound.unload();
    //     },
    //     toggleLoop: function() {
    //         sound.loop(true);
    //     }
    // }

    // Listen for dom interaction
    $('body').on('click', function() {
        sounds.play('flutes1');
        console.log('triggered');
    });

}

audioAPI();
