// GENERICS INTERFACES
interface GenericInterface<T> {
	(args: T): T
}

function identify<T>(args: T): T {
	return args
}

const a : GenericInterface<number> = identify

console.log(a(5))