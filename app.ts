// GENERICS INTERFACES
interface GenericInterface<T> {
	(args: T): T
}

function identify(args: number): number {
	return args
}

const a : GenericInterface<number> = identify

console.log(a(5))