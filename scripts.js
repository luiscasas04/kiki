document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer'); //
    var playerWindow = document.getElementById('playerWindow');// bottom window for audio
    var playerThumbnail = document.getElementById('playerThumbnail');
    var playerSongInfo = document.getElementById('playerSongInfo');

    var lastPlayedPosition = 0;
    var currentSongUrl = '';

    function togglePlayPause(songUrl, songInfo, thumbnailUrl) {
        if (audioPlayer.paused || currentSongUrl !== songUrl) {
            audioPlayer.src = songUrl;
            audioPlayer.currentTime = 0;
            audioPlayer.play();
            playerWindow.style.display = 'block';
            currentSongUrl = songUrl;

            // Update player details
            playerThumbnail.src = thumbnailUrl;
            playerSongInfo.textContent = songInfo;
        } else {
            lastPlayedPosition = audioPlayer.currentTime;
            audioPlayer.pause();
        }
    }

    function showPlayButton(thumbnail) {
        var playButton = thumbnail.querySelector('.playButton');
        playButton.style.display = 'block';
    }

    function hidePlayButton(thumbnail) {
        var playButton = thumbnail.querySelector('.playButton');
        playButton.style.display = 'none';
    }

    function playMusic(songUrl, songInfo, thumbnailUrl) {
        audioPlayer.src = songUrl;
        audioPlayer.play();
        playerWindow.style.display = 'block';
        currentSongUrl = songUrl;

        // stops song when you click on thumbnail
        playerThumbnail.src = thumbnailUrl;
        playerSongInfo.textContent = songInfo;
    }

    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('mouseover', function () {
            showPlayButton(thumbnail);
        });

        thumbnail.addEventListener('mouseout', function () {
            hidePlayButton(thumbnail);
        });

        thumbnail.addEventListener('click', function () {
            var songUrl = thumbnail.getAttribute('data-song-url');
            var songInfo = thumbnail.getAttribute('data-song-info');
            var thumbnailUrl = thumbnail.getAttribute('data-thumbnail-url');
            togglePlayPause(songUrl, songInfo, thumbnailUrl);
        });
    });
});

