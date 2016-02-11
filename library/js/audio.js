function audioAPI () {
    var sounds,
        methods;

    sounds = new Howl({
      urls: ['../library/audio/mergedtracks.mp3'],
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
        var audioRef = ref || $(event.currentTarget).data('spriteName');

        sounds.play(audioRef);
        sounds.fade(0, 1, 400, null, audioRef);
    }

    function stopSound(event, ref) {
        sounds.fade(1, 0, 400, null, ref);
        sounds.stop(ref);
    }


    // Listen for dom interaction
    $(document).on('audio-selected', function(event, spriteName) {
        console.log(event);
        playSound(event, spriteName)
    });

    $(document).on('click', '.button', function(event) {
        playSound(event);
    });

}

audioAPI();
