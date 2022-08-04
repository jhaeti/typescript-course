// CLASSES

interface IPrint {
	print();
}

const object: IPrint = {
    print:  () => {
        console.log("From object")
    }
}
function printClass(a: IPrint) {
	a.print();
}

class ClassA implements IPrint {
    print() {
        console.log("ClassA.print()")
    }
}
class ClassB implements IPrint {
    print() {
        console.log("ClassB.print()")
    }
}

const classA = new ClassA()
const classB = new ClassB()


classA.print()
classB.print()
object.print()