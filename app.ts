// CLASSES
class ClassWithConstructor {
	id: number;
	name: string;
	constructor(_id: number, _name: string) {
		this.id = _id;
		this.name = _name;
	}
	getName():void {
		console.log(this.name);
	}
}

const classWithConstructor = new ClassWithConstructor(0, "apple");

console.log(classWithConstructor.getName());
