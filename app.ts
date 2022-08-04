interface IBase {
	id: number;
}

interface IDerivedFromBase extends IBase {
	name: string;
}

class Class implements IDerivedFromBase {
	name = "What";
	id = 3;
}
