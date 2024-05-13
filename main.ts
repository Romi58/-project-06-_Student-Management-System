class Student {
    static idCounter: number = 0;
    id: number;
    name: string;
    courses: string[];
    balance: number;
  
    constructor(name: string) {
      this.id = ++Student.idCounter;
      this.name = name;
      this.courses = [];
      this.balance = 0;
    }
  
    enroll(course: string) {
      this.courses.push(course);
    }
  
    viewBalance() {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    payTuition(amount: number) {
      this.balance -= amount;
      console.log(`$${amount} paid for ${this.name}`);
      this.viewBalance();
    }
  
    showStatus() {
      console.log(`Student Name: ${this.name}`);
      console.log(`Student ID: ${this.id}`);
      console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
      this.viewBalance();
    }
  }
  
  class Course {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class StudentManagementSystem {
    students: Student[];
  
    constructor() {
      this.students = [];
    }
  
    addStudent(name: string) {
      const student = new Student(name);
      this.students.push(student);
      return student;
    }
  
    findStudentById(id: number) {
      return this.students.find(student => student.id === id);
    }
  
    enrollStudentInCourse(studentId: number, courseName: string) {
      const student = this.findStudentById(studentId);
      if (student) {
        student.enroll(courseName);
      } else {
        console.log('Student not found');
      }
    }
  
    payTuition(studentId: number, amount: number) {
      const student = this.findStudentById(studentId);
      if (student) {
        student.payTuition(amount);
      } else {
        console.log('Student not found');
      }
    }
  
    showStudentStatus(studentId: number) {
      const student = this.findStudentById(studentId);
      if (student) {
        student.showStatus();
      } else {
        console.log('Student not found');
      }
    }
  }
  
  // Example usage
  const sms = new StudentManagementSystem();
  const student1 = sms.addStudent('Alice');
  const student2 = sms.addStudent('Bob');
  
  sms.enrollStudentInCourse(student1.id, 'Math');
  sms.enrollStudentInCourse(student1.id, 'English');
  sms.enrollStudentInCourse(student2.id, 'History');
  
  sms.payTuition(student1.id, 100);
  sms.payTuition(student2.id, 150);
  
  sms.showStudentStatus(student1.id);
  sms.showStudentStatus(student2.id);
  