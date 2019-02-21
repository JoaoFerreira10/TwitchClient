import twitch from '../api/twitch';

jest.setTimeout(10000);
const limit10 = 10;


const game = 'gta'
describe('Twitch API testing', () => {

    it('it should return a list of streams', ()=>{
        return twitch.getInstance().getStreams()
        .then( data => {
            expect(data).toBeDefined();
        });
    });

    it('it should return a list of 10 streams', () => {
        return twitch.getInstance().getStreamsByDescription(game, '10')
        then(data =>{
            expect(data).toHaveLength(10);
        })
    })
});