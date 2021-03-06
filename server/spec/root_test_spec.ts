import * as request from "request";
import * as customRequest from "../implementations/customRequest";
import * as injectedModule from "../app/module"
import * as index from "../index"

var base_url = "http://localhost:3000/test";

describe("test server.", () => {

    describe("http get of root.", () => {
        it("root should return 200 status code.", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("root should returns 'Hello World' in it's body", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe("Hello World");
                done();
            });
        });
    });

    describe("http get of root using async await.", () => {
        it("root should return 200 status code.", async (done) => {
            let obj = await customRequest.CustomRequest.get(base_url);
            expect(obj.response.statusCode).toBe(200);
            index.closeServer();
            done();
        });
    });
});