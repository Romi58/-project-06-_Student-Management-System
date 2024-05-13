var Student = /** @class */ (function () {
    function Student(name) {
        this.id = ++Student.idCounter;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("$".concat(amount, " paid for ").concat(this.name));
        this.viewBalance();
    };
    Student.prototype.showStatus = function () {
        console.log("Student Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.id));
        console.log("Courses Enrolled: ".concat(this.courses.join(', ')));
        this.viewBalance();
    };
    Student.idCounter = 0;
    return Student;
}());
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    return Course;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (name) {
        var student = new Student(name);
        this.students.push(student);
        return student;
    };
    StudentManagementSystem.prototype.findStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    StudentManagementSystem.prototype.enrollStudentInCourse = function (studentId, courseName) {
        var student = this.findStudentById(studentId);
        if (student) {
            student.enroll(courseName);
        }
        else {
            console.log('Student not found');
        }
    };
    StudentManagementSystem.prototype.payTuition = function (studentId, amount) {
        var student = this.findStudentById(studentId);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log('Student not found');
        }
    };
    StudentManagementSystem.prototype.showStudentStatus = function (studentId) {
        var student = this.findStudentById(studentId);
        if (student) {
            student.showStatus();
        }
        else {
            console.log('Student not found');
        }
    };
    return StudentManagementSystem;
}());
// Example usage
var sms = new StudentManagementSystem();
var student1 = sms.addStudent('Alice');
var student2 = sms.addStudent('Bob');
sms.enrollStudentInCourse(student1.id, 'Math');
sms.enrollStudentInCourse(student1.id, 'English');
sms.enrollStudentInCourse(student2.id, 'History');
sms.payTuition(student1.id, 100);
sms.payTuition(student2.id, 150);
sms.showStudentStatus(student1.id);
sms.showStudentStatus(student2.id);
