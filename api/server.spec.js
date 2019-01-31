const request = require('superTest');

const db = require('../data/dbConfig.js');
const songDb = require('../data/dbModel.js');
const server = require('./server.js');

afterEach(async () => {
    await db('songs').truncate()
});

describe('server.js', () => {
    describe('GET / endpoint', () => {
        it('should respond with status code 200 OK', async () => {
            let response = await request(server).get('/songs');

            expect(response.status).toBe(200);
        })

        it('should respond with JSON', async () => {
            let response = await request(server).get('/songs');

            expect(response.type).toMatch(/json/i);
        })

        it('should respond with array', async () => {
            const expected = [];
            let response = await request(server).get('/songs');

            expect(response.body).toMatchObject(expected);
        })

    })

    describe('Post /songs endpoint', () => {
        it('should return status code 201', async () => {
            let response = await request(server).post('/songs');

            expect(response.status).toBe(201);
        })

        it('should insert provided song', async () => {
            const song = await songDb.insert({ name: 'wow' })

            let songs = await db('songs');

            expect(songs).toHaveLength(1);
            expect(song.name).toEqual('wow');

            await songDb.insert({ name: 'final countdown' });
            songs = await db('songs');
            expect(songs).toHaveLength(2);
        })

    })

    describe('Delete /songs endpoint', () => {
        it('should return status code 200', async () => {
            let response = await request(server).delete('/songs');

            expect(response.status).toBe(200);
        })

        it('should Delete provided song by id', async () => {
            await songDb.insert({ name: 'wow' });
            await songDb.insert({ name: 'final countdown' });
            await songDb.remove(1)
            const songs = await db('songs');

            expect(songs).toHaveLength(1);
            expect(songs[0].name).toBe('final countdown');
        })

    })

})