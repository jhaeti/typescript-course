// CLASS

class ClassWithPublicProp {
    private id: number = 0;
    readonly name: string= "klsdf"; /* This make the name property to have readonly access*/
}

const publicAccess = new ClassWithPublicProp()
// publicAccess.id = 15 /* This yield an error when the private modifier is set on a property in a class */

console.log(publicAccess)