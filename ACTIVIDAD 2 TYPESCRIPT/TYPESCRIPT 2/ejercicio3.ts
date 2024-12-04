class student {
    constructor(public name: string, public age: number) { }
}

class Teacher {
    constructor(public name: string, public subject: string) { }
}

class Course {
    public students: student[] = [];

    constructor(public name: string, public teacher: Teacher) { }

    addStudent(student: student) {
        this.students.push(student);
    }
}

const teacher = new Teacher('John Doe', 'Math');
const course = new Course('Algebra', teacher);
course.addStudent(new student('Alice', 20));
course.addStudent(new student('Bob', 22));

console.log(course); 12




























