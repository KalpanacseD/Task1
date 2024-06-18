class StudentName {
    constructor(StudentList) {
        this.StudentList = StudentList;
    }

    printStudents() {
        this.StudentList.forEach((student, index) => {
            console.log(`Student ${index + 1}: ${student}`);
        });
    }
}


const studentname = new StudentName([
     'kalpana','anbu','Dinesh','kumar','rahul','vino', 'kney','deepa','keerthi','raj'
     
]);


studentname.printStudents();
