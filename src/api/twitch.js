const key = 'id1rt9lw1pv2b5vnay6zv2eix771cb';

export default class twitch {

    static myInstance = null;

    static getInstance() {
        if (twitch.myInstance == null) {
            twitch.myInstance = new twitch();
        }

        return this.myInstance;
    }

    getStreams() {
        return fetch('https://api.twitch.tv/helix/streams',{
            headers: {
                'Client-id': key
            }
        }).then(data => data.json())
        .catch(err => alert("An error has ocurried: " + err));
    }

    getStreamsByDescription(search, limit) {
        return fetch('https://api.twitch.tv/kraken/search/streams?query=' + search + '&limit=' + limit,{
            headers: {
                'Client-id': key
            }
        }).then(data => data.json())
        .catch(err => alert("An error has ocurried: "+ err));
    }

}

/*export default fetch('https://api.twitch.tv/helix/streams',{
    headers: {
        'Client-id': key
    }
}).then(data => data.json());*/
//.then(data => console.log(data));