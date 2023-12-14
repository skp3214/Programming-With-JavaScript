// const {default:TestRunner}=require('jest-runner');
const addFive=require('./addFive');

test('return the number plus 5',()=>{
    expect(addFive(3)).toBe(8);
})
