/***
 * Agenda
 * 1. Creating Classes
 * 2. Class properties and constructor
 * 3. Class methods
 * 4. Creating instance of class
 * 5. Member visibility.
 * 6. Static members. 
 */

/**
 ============================================
 Class creating
 ============================================
 */
class Employee {

}

/**
 ============================================
 Class properties
 add ! mark if you don't have default value
 ============================================
 */
class EmployeeInfo {
    id: number = 123;
    name!: string
}

const userName = new EmployeeInfo();
userName.id = 197;
userName.name = "testing class";
console.log("Username after asigning values:", userName);

/**
 ============================================
 Class constructors
 ============================================
 */

class EmployeeInfo_constructors<T> {
    id: number;
    name: string;
    salary: Array<T>;
    constructor(id: number, name: string, salary: Array<T>) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    };
}
let user = new EmployeeInfo_constructors(1, "jhon", ["10000", "20000"]);
console.log("User value using constructor:", user);


/**
 ============================================
 Class methods
 ============================================
 */

class EmployeeInfo_classMethod<T> {
    id: number;
    name: string;
    salary: Array<T>;
    constructor(id: number, name: string, salary: Array<T>) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    };
    // method
    getName(): string {
        return this.name;
    }
}

let userName_methods = new EmployeeInfo_classMethod(1, "jhon", ["10000", "20000"]);
let nameuser = userName_methods.getName();
console.log("User value using method:", nameuser);


/**
 ============================================
 Create instance of class
 ============================================
 */

let userName_instance = new EmployeeInfo_classMethod(1, "jhon", ["10000", "20000"]);

/**
============================================
Member visibility
1. We use # to make the variable as private.
2. Private variable can't access out side of class.
============================================
*/

class member_visibility {
    #id: number;
    protected name: string
    constructor(id: number, name: string) {
        this.#id = id;
        this.name = name;
    }
    getId(): number {
        return this.#id;
    }
}
let newinstance = new member_visibility(1, "test")

//Access private variable through the function..
console.log(newinstance.getId(), "Access private variable through the function..")

/***
 ==============================
Extending the class and protected functionality.
The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.
==============================
* ****************** */
class manager extends member_visibility {
    constructor(id: number, name: string) {
        // Super has to use if we extend the class
        super(id, name);
    };
    getManager() {
        return this.name;
    }
}
let mike = new manager(1, "mike");
console.log("called function from inheritence/extension", mike.getId())

/**
============================================
Static members. 
Static members are accessible with the class name.
============================================
*/
class static_member {
    #id: number;
    name: string;
    constructor(id: number, name: string) {
        this.#id = id;
        this.name= name;
    }

    static getId():number{
        return 50
    }
    get empId():number{
        return this.#id;
    }
    set empId(id:number){
        this.#id = id;
    }
}

let static_member_instance = new static_member(1,"member instance");
static_member_instance.empId=100;
static_member_instance.empId;


console.log("static function can be called using class name no need to create instance :",static_member.getId())
console.log(static_member_instance.empId,"get and set methods")