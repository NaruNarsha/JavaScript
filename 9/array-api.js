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