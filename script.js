window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQAK9l1rJb6HlSsthh8Mb4IUnTlcyzbr5K6AcDsLTXmOgtVdWSAIai8q6aX2SNPmWpiEPeVx-atOicZ98kY0zzT42gEqRNMdEPwTi7P0VsraFj3Az0N2SPjDYFfn5XEGO7Aea6IzTeOmdluvp3kJq75pd-9xrhNokJ-XuJOWoQBvGFHJMhb6OGk';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    })

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    player.connect();

    document.getElementById('togglePlay').onclick = function() {
        player.togglePlay();
    };

};
