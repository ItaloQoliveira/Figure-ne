const {MongoClient} = require('mongodb');
import request from 'supertest'
import app from './app.js'
require('dotenv').config()

describe('mongodb test', () => {
  let connection;
  let db;
    // testando a conexao com o banco de dados, criando uma nova collection nele para testes de escrita e leitura.
  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__ /*process.env.BD_URL_test*/, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });
  it('should create a doc in a collection', async () => {
    const users = db.collection('users');
  
    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);
  
    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
  beforeEach(async () => {
    await db.collection('COLLECTION_NAME').deleteMany({});
  });

});

 // agora farei requisicoes pro figures add para testar a inclusao de uma figure

describe("POST /figures", () => {
  describe("given nome, serie, preco, altura, url and email", () => {

    test("should respond with a 201 status code", async () => {
      const response = await request(app).post("/figures/add").send({
        nome: "nome",
        serie: "serie",
        preco:"preco",
        altura:"altura",
        url:"url",
        email: "email"
      })
      expect(response.statusCode).toBe(200)
    })
  
 //agora testando se funciona sem algum dado, por exemplo enviando apenas um nome
  describe("when some attribute is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {nome: "nome"},
        {serie: "serie"},
        {preco:"preco"},
        {altura: "altura"},
        {url: "url"},
        {email: "email"}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("/figures").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })

})});

describe('GET /figures/email', function() {
  it('should respond with a json and a status code of 200', function() {
    return request(app)
      .get('/figures/teste')
      .expect('Content-Type', /json/)
      .expect(200)
      
  });
});

describe('PUT /figures failure', function() {
  it('should respond with a status code of 400', function() {
    return request(app)
      .put('/figures')
      .send({ email:'teste@teste.com'})
      .expect(400)
      
  });
});
describe('PUT /figures', function() {
  it('should respond with a status code of 200', function() {
     return request(app)
      .put('/figures')
      .send({
        "_id": "6184a19e7e7cbbc98b6a7fad",
        "nome": "Gwen ",
        "serie": "League of Legends",
        "preco": "999999999999",
        "altura": "145",
        "url": "https://cdn.discordapp.com/attachments/597489801536733204/906285710007476276/Eynd27_WQAsPZjg.png"
        
      })
      .expect(204)
      
  });
});

describe('POST /figures', function() {
  it('should respond with a status code of 400', function() {
     return request(app)
      .post('/figures')
      .send({
        "nome": "teste ",
        "serie": "teste",
        "preco": "999999999999",
        "altura": "100",
        "email": "teste@teste.com.br"
        
      })
      .expect(400)
      
  });
});

describe('POST /figures', function() {
  it('should respond with a status code of 400', function() {
     return request(app)
      .post('/figures')
      .send({
        "nome": "teste ",
        "serie": "teste",
        "preco": "999999999999",
        "email": "teste@teste.com.br"
        
      })
      .expect(400)
      
  });
});