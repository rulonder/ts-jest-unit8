describe("test unit encoding",()=>{

	it("encodes to unit8",()=>{
		const util = require('util');
		const enc = new util.TextEncoder('utf-8');
		 expect(Uint8Array.prototype.isPrototypeOf(enc.encode("fsdfsd"))).toBeTruthy()
	})
})
