function solve (input = []) {

    const allStudentsObj = input.reduce((acc, studentInfo) => {
        const studentArr = studentInfo.split(', ');

        const [,name] = studentArr[0].split(': ');
        let [,grade] = studentArr[1].split(': ');
        let [,score] = studentArr[2].split(': ');

        grade = Number(grade);
        score = Number(score);

        if (score >= 3) {
            grade += 1;
            if (!acc.hasOwnProperty(grade)) {
                acc[grade] = [];
            }

            acc[grade].push({
                name,
                score,
            });
        }

        return acc;

    }, {});

        Object.keys(allStudentsObj)
            .sort((a, b) => a - b)
            .forEach((key) => {
                console.log(`${key} Grade`);

                let studentList = allStudentsObj[key]
                    .map((student) => student.name)
                    .join(', ');

                console.log(`List of students: ${studentList}`);

                let sum = 0;
                allStudentsObj[key].forEach((student) => {
                    sum += student.score;
                });

                const averageSum = (sum / allStudentsObj[key].length)
                    .toFixed(2);

                console.log(`Average annual score from last year: ${averageSum}`);
                console.log();
            });

}

solve([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
);