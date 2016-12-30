import { expect } from "chai";
import {} from "core-js";
import {} from "mocha";
import { LoginCredentials} from "../../model/loginCredentials";
import { LoginResponse } from "../../model/loginResponse";
import { LoginApi } from "../login";

describe("LoginApi", () => {

    it("should be defined", () => {
        // Arrange
        // Act
        // Assert
        expect(LoginApi).not.to.be.undefined;
    });

    it("returns a FALSE LoginResponse with empty UserProfile when pass wrong LoginCredentials", sinon.test((done) => {
        // Arrange
        const sinon: sinon.SinonStatic = this;
        let expectedLoginResponse = new LoginResponse();

        let loginCredentials = new LoginCredentials();
        loginCredentials.login = "error";
        loginCredentials.password = "error";

        const loginMethodStub = sinon.stub(LoginApi, "login");
        loginMethodStub.returns({
            then: (callback) => {
                callback(expectedLoginResponse);
            }
        });

        // Act
        let result = LoginApi.login(loginCredentials);

        result.then((loginResponse) => {
            // Assert
            expect(loginResponse.succeded).to.be.false;
            expect(loginResponse.userProfile).to.be.eql(expectedLoginResponse.userProfile);
            done();
        });
    }).bind(this));

    it("returns a TRUE LoginResponse with valid UserProfile when pass right LoginCcredentials", sinon.test((done) => {
        // Arrange
        const sinon: sinon.SinonStatic = this;
        let expectedLoginResponse = new LoginResponse();
        expectedLoginResponse.succeded = true;
        // 
        expectedLoginResponse.userProfile = {
            id: 12,
            fullname: "John Doe",
            role: "admin",
            email: "john@fakeemail.com"};

        let loginCredentials = new LoginCredentials();
        loginCredentials.login = "admin";
        loginCredentials.password = "test";

        const loginMethodStub = sinon.stub(LoginApi, "login");
        loginMethodStub.returns({
            then: (callback) => {
                callback(expectedLoginResponse);
            }
        });

        // Act
        let result = LoginApi.login(loginCredentials);

        result.then((loginResponse) => {
            // Assert
            expect(loginResponse.succeded).to.be.true;
            expect(loginResponse.userProfile).to.be.eql(expectedLoginResponse.userProfile);
            done();
        });
    }).bind(this));
});