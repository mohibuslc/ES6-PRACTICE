
// Explain constructor method 
class fatherName {

    constructor() {

        this.stuFatherName = "Mr. Robinson";
    }
}
// extends Method 

class Student extends fatherName {
    constructor(sId, sName) {

        super(); // super function 

        this.studentId = sId;
        this.studentName = sName;

    }
    getInformation() {

        return this.studentId + " " + this.studentName + " " + this.stuFatherName;

    }

};
const student = new Student("001", " Karim ahmed");

console.log(student.getInformation());










