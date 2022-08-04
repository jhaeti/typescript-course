interface ComplexType {
    id: number;
    name: string;
}
const complexType: ComplexType = {
    id: 5,
    name: "Ti Jhae"
}

interface Point {readonly x: number; y: number; }
const point: Point = { x: 2, y: 3 }
// point.x = 5;    /* This does throw an error with readonly*/

console.log(point)