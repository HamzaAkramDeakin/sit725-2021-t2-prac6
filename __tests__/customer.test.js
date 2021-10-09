const chai = require("chai");
const axios = require("axios");
const URL = "http://localhost:8080/api/customer";

describe("Route customer",()=>{

  // To store the customer ID
  let customerId;

  // To get all customers
  describe("GET /api/customer", () => {
    it("should give an array with all the customers", async () => {
      const result = await axios.get(URL);
      chai.expect(result.status).to.be.equal(200);
      chai.expect(result.data).to.be.an("array");
    });
  });

  // To create a new customer
  describe("POST /api/customer", () => {
    it("should create a new customer", async () => {
      const result = await axios.post(URL, {
        firstName: "Ben",
        lastName: "Dover",
        email:"jamesb@gmail.com",
        password:"bendover",
      });
      customerId = result.data._id;
      chai.expect(result.status).to.be.equal(200);
      chai
        .expect(result.data)
        .to.have.property("firstName")
        .to.equal("Ben");
    });
  });

  // To get one customer with particular Id
  describe("GET /api/customer/:id", () => {
    it("has to return one customer with the provided Id", async () => {
      const response = await axios.get(URL + '/' + customerId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("firstName").to.equal('Ben');

    });
  });

  // To update one customer with particular Id
  describe("PUT /api/customer/:id", () => {
    it("should update the name of customer with given Id", async () => {
      const response = await axios.put(URL + "/" + customerId, {
        password: "bendover4u",
      });
      chai.expect(response.status).to.be.equal(200);
    });
  });

  // To delete one customer with particular Id
  describe("DELETE /api/customer/:id", () => {
    it("should delete customer with the given Id", async () => {
      const response = await axios.delete(URL + "/" + customerId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("deletedCount").to.equal(1);
    });
  });

})