interface IBase {
	id: number;
}
class Base implements IBase {
	id: number;
	constructor(_id: number) {
		this.id = _id;
	}
}
class Derived extends Base {
	name: string;
	constructor(_id: number, _name: string) {
		super(_id);
		this.id = _id;
		this.name = _name;
	}
}

const myClass = new Derived(2, "Ti Jhae");
console.log(myClass);
