import { expect } from "chai";
import save from "../lib";

describe("yourLib", () => {
	it("should export a function", () =>
		expect(save).to.be.instanceOf(Function));
});
