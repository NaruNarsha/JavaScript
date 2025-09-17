// Q1. make a string out of an array
{
    console.log('Q1. make a string out of an array');
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
    console.log('');
}



// Q2. make an array out of a string :: 주어진 스트링을 배열로 만들기
{
    console.log('Q2. make an array out of a string');
    const fruits = 'apple, banana, orange, kiwi';
    const result = fruits.split(',');
//    const result = fruits.split(',', 2); // 2개만 자르기
    console.log(result);
    console.log('');
}



// Q3. make this array look like this: [5, 4, 3, 2, 1]
// :: 배열을 거꾸로 만들기
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();

    console.log('Q3. make this array look like this: [5, 4, 3, 2, 1]');
    console.log(result);
    console.log(array); // reverse()로 인해 배열 자체가 바뀜
    console.log('');
}


// split은 배열 자체를 수정.
// slice는 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때 사용.

// Q4. make new array without the first two elements
// :: 배열에서 앞의 두개를 제외한 새 배열 만들기
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5); // 0부터 2까지 자르기
    console.log('Q4. make new array without the first two elements');
    console.log(result);
    console.log(array); // slice()는 배열 자체를 바꾸지 않음
}



//----------------------------------------------------------------

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];


//----------------------------------------------------------------

// Q5. find a student with the score 90
//      - 배열에서 술어가 참이고 정의되지 않은 첫 번째 요소의 값을 반환합니다
//      - 술어는 요소, 요소 인덱스 및 요소가 포함된 배열을 인수로 사용합니다
//      배열의 각 요소에 대해 오름차순으로 한 번씩 호출 술어를 찾습니다
//          * 술어가 참으로 돌아오는 것을 찾을 때까지 순서를 매깁니다. 이러한 요소가 발견되면
//          * 즉시 해당 요소 값을 반환합니다. 그렇지 않으면 정의되지 않은 반환을 찾습니다.
{
    console.log('Q5. find a student with the score 90');

    // const result = students.find(function(student, index){
    //     console.log(student, index);
    //     return student.score === 90;
    // });

    const result = students.find((student) => student.score === 90);
    console.log(result);
    console.log('');
}



//----------------------------------------------------------------


// Q6. make an array of enrolled students
//      :: 수업에 등록된 학생들로만 이루어진 배열 만들기
{
    console.log('Q6. make an array of enrolled students');
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
    console.log('');
}




//----------------------------------------------------------------

// Q7. make an array containing only the students' scores
//      :: 학생들의 점수로만 이루어진 배열 만들기
//      result should be: [45, 80, 90, 66, 88]

{
    console.log("Q7. make an array containing only the students' scores");
    const result = students.map((student) => student.score);
    console.log(result);
    console.log('');
}



//----------------------------------------------------------------

// Q8. check if there is a student with the score lower than 50
//      :: 50점보다 낮은 점수를 가진 학생이 있는지 확인하기
{
    console.clear();
    console.log('Q8. check if there is a student with the score lower than 50');
    const result = students.some((student) => student.score < 50); // 하나라도 조건에 맞으면 true
    console.log(result);

    // every : 모든 요소가 조건에 맞아야 true
    const result2 = students.every((student) => student.score >= 50);
    console.log(result2);
    console.log('');
}


//----------------------------------------------------------------

// Q9. compute students' average score
//      :: 학생들의 평균 점수 구하기
{
    // reduce : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 단일 출력 값을 생성합니다.
    // 리듀서는 누산기(accumulator)와 배열의 각 요소(현재 값)를 인수로 사용합니다.
    // reduce는 배열의 각 요소에 대해 리듀서를 호출합니다(왼쪽에서 오른쪽으로).
    // 리듀서가 반환하는 값은 다음 호출에서 누산기로 사용됩니다.
    // 최종적으로 단일 값이 반환됩니다.
    console.clear();
    console.log("Q9. compute students' average score");
    // const result = students.reduce((prev, curr) => {
    //     console.log('-----');
    //     console.log(prev);
    //     console.log(curr);

    //     return prev + curr.score;
    // }, 0);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result);
    console.log(result / students.length);
}




//----------------------------------------------------------------
// Q10. make a string containing all the scores
//      :: 모든 점수를 포함하는 문자열 만들기
//      result should be: '45, 80, 90, 66, 88'

{
    console.clear();
    console.log('Q10. make a string containing all the scores');

    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50) // 50점 이상인 점수만
        .join();
    console.log(result);
}



//----------------------------------------------------------------
// Bonus! do Q10 sorted in ascending order
//      :: 오름차순으로 정렬하기
//      result should be: '45, 66, 80, 88, 90'
{
    console.clear();
    console.log('Bonus! do Q10 sorted in ascending order');

    const result = students.map((student) => student.score)
        .sort((a,b) => a - b) // 오름차순
        .join();
    console.log(result);
}