function schoolGrades (arr){

    let students = new Map();
    
    for(let str of arr) {
        let tokens = str.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number)
      
        if(!students.has(name)){
            students.set(name, []);
        }

        let existing = students.get(name);
        for (let grade of grades) {
            existing.push(grade)
        }   
    }

    let sorted = Array.from(students);
    sorted.sort(compareAverage);

    for(let [name, grade] of sorted) {
        console.log(`${name}: ${grade.join(', ')}`)
    }

    function compareAverage([nameA, gradeA], [nameB, gradeB]) {
        let avgA = 0;
        gradeA.forEach(x => avgA += x);
        avgA /= gradeA.length;

        let avgB = 0;
        gradeB.forEach(x => avgB += x);
        avgB /= gradeB.length;

        return avgA - avgB;
    }

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])