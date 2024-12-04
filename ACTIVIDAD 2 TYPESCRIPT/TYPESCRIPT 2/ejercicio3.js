var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    return student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    return Teacher;
}());
var Course = /** @class */ (function () {
    function Course(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    return Course;
}());
var teacher = new Teacher('John Doe', 'Math');
var course = new Course('Algebra', teacher);
course.addStudent(new student('Alice', 20));
course.addStudent(new student('Bob', 22));
console.log(course);
12;
