const chai = require("chai");
const axios = require("axios");
const URL = "http://localhost:8080/api/services";

describe("Route services",()=>{
  
  // To store the service ID
  let serviceId;

  // To get all services
  describe("GET /api/services", () => {
    it("should give an array with all the services", async () => {
      const result = await axios.get(URL);
      chai.expect(result.status).to.be.equal(200);
      chai.expect(result.data).to.be.an("array");
    });
  });

  // To create a new service
  describe("POST /api/services", () => {
    it("should create a new service", async () => {
      const result = await axios.post(URL, {
        name: "Maintenance",
      });
      serviceId = result.data._id;
      chai.expect(result.status).to.be.equal(200);
      chai
        .expect(result.data)
        .to.have.property("name")
        .to.equal("Maintenance");
    });
  });

  // To get one service with particular Id
  describe("GET /api/services/:id", () => {
    it("has to return one service with the provided Id", async () => {
      const response = await axios.get(URL + '/' + serviceId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("name").to.equal('Maintenance');

    });
  });

  // To update one service with particular Id
  describe("PUT /api/services/:id", () => {
    it("should update the name of service with given Id", async () => {
      const response = await axios.put(URL + "/" + serviceId, {
        name: "Plumbing",
      });
      chai.expect(response.status).to.be.equal(200);
    });
  });

  // To delete one service with particular Id
  describe("DELETE /api/services/:id", () => {
    it("should delete service with the given Id", async () => {
      const response = await axios.delete(URL + "/" + serviceId);
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.data).to.have.property("deletedCount").to.equal(1);
    });
  });
})