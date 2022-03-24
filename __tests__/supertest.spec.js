const supertest = require('supertest');
const server = require('../app');

describe("Supertest", () => {


  beforeAll(() => {
    server.listen(3010, () => console.log("Rodando a birosca em ambiente de teste"));
  });

  afterAll(() => {
    server.close();
  });

  it("primeiro teste de get", async () => {
    await supertest(server)
      .get("/")
      .expect(200, {
        message: "Hello World"
      });
  });

  it("segundo teste de post", async () => {
    await supertest(server)
      .post("/")
      .send({})
      .expect(400);
  });

  it("segundo teste de post", async () => {
    await supertest(server)
      .post("/")
      .send({
        message: "Hello World"
      })
      .expect(201);
  });


});