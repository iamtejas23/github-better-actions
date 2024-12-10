const request = require('supertest');
const app = require('../app'); // Import the app directly

describe('Test App Endpoints', () => {
    test('GET / should return Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Hello, World!');
    });

    test('GET /health should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('OK');
    });
});
