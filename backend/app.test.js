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

describe("POST /figures/add", () => {
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
      expect(response.statusCode).toBe(201)
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
        const response = await request(app).post("/figures/add").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })

})});