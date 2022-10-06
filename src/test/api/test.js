const request= require('supertest');
import app from '../../app'

describe('pruebas sobre la API de personas: retornar status 200', ()=>{
    describe('GET /api/persons', ()=>{
        it('La ruta funciona', async ()=>{
            const response= (await request(app).get('/api/persons'));

            expect(response.status).toBe(200);

        })
    })
})
