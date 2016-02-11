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
      loop: true
    });


    function playSound(event, ref) {
        sounds.play(ref);
        sounds.fade(0, 1, 400, ref, function() {
            return;
        });
    }

    function stopSound(event, ref) {
        sounds.stop(ref);
    }


    // Listen for dom interaction
    // $('body').on('audio-triggered', playSound);
    $('body').on('audio-triggered', function(event, param) {
        console.log(event)
    });

    $('body').trigger('audio-triggered', ['loPad']);

}

audioAPI();
