// @@description test all the questions routes

const supertest = require("supertest");
const createServer = require("../");

const app = createServer();

// @@description get questions
describe("get all questions", () => {
  it("should return an array of 5 question objects", async () => {
    await supertest(app)
      .get("/api/v1/questions")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(5);
      });
  });
});

// @@description post answers
describe("test answer submissions", () => {
  it("should return a string", async () => {
    await supertest(app)
      .post("/api/v1/questions")
      .send({answers: []})
      .expect(200)
      .then((response) => {
        expect(typeof response.text).toBe("string");
      });
  });

  it("should return introvert", async () => {
    await supertest(app)
      .post("/api/v1/questions")
      .send({
        answers: [
          "introvert",
          "extrovert",
          "extrovert",
          "introvert",
          "introvert",
          "introvert",
        ],
      })
      .expect(200)
      .then((response) => {
        expect(response.text).toBe("you are an introvert");
      });
  });

  it("should return extrovert", async () => {
    await supertest(app)
      .post("/api/v1/questions")
      .send({answers: [
        "extrovert",
        "extrovert",
        "extrovert",
        "introvert",
        "introvert",
      ],
      })
      .expect(200)
      .then((response) => {
        expect(response.text).toBe("you are an extrovert");
      });
  });
});
