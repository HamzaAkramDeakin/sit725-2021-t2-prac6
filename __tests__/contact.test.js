const chai = require("chai");
const axios = require("axios");
const URL = "http://localhost:8080/api/contact";

describe("Route contact",()=>{
  // To store the contact ID
  let contactId;

  // To get all contacts
  describe("GET /api/contact", () => {
    it("should give an array with all the contacts", async () => {
      const result = await axios.get(URL);
      chai.expect(result.status).to.be.equal(200);
      chai.expect(result.data).to.be.an("array");
    });
  });

  // To create a new contact
  describe("POST /api/contact", () => {
    it("should create a new contact", async () => {
      const result = await axios.post(URL, {
        name: "James Bond",
        email:"jamesb@gmail.com",
        message:"I need help with some cleaning done"
      });
      contactId = result.data._id;
      chai.expect(result.status).to.be.equal(200);
      chai
        .expect(result.data)
        .to.have.property("name")
        .to.equal("James Bond");
    });
  });

  // To get one contact with particular Id
  describe("GET /api/contact/:id", () => {
    it("has to return one contact with the provided Id", async () => {
      const response = await axios.get(URL + '/' + contactId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("name").to.equal('James Bond');

    });
  });

  // To update one contact with particular Id
  describe("PUT /api/contact/:id", () => {
    it("should update the name of contact with given Id", async () => {
      const response = await axios.put(URL + "/" + contactId, {
        email: "jamesbond@gmail.com",
      });
      chai.expect(response.status).to.be.equal(200);
    });
  });

  // To delete one contact with particular Id
  describe("DELETE /api/contact/:id", () => {
    it("should delete contact with the given Id", async () => {
      const response = await axios.delete(URL + "/" + contactId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("deletedCount").to.equal(1);
    });
  });

})