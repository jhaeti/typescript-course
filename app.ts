// GENERICS
function identity<T>(args:T): T {
	return args
}

const a = identity("stringshd")
const b = identity<number>(4)
const c = identity<boolean>(false)