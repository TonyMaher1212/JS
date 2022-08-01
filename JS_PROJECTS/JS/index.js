
let id= prompt("please your name:")

document.write("<h1>" + "emloyee data" + "<h1/>")

let employee = 
[
    { id:'0' , name: 'John', age:'30' , grade: '60' , weight:'80kg' }, 
    { id:'1' , name: 'ayman', age:'34' , grade: '80' , weight:'110kg' }, 
    { id:'2' , name: 'Tony', age:'25' , grade: '30' , weight:'90kg' },
    { id:'3' , name: 'shalaby', age:'50' , grade: '100' , weight:'73kg' }
];


document.write("<p>" + employee[id].id + "<p/>")

document.write("<p>" + employee[id].name + "<p/>")

document.write("<p>" + employee[id].age + "<p/>")

document.write("<p>" + employee[id].grade + "<p/>")

let grade_desc =""

if (employee[id].grade < 50)
{
    grade_desc = ["fail"]
    document.write('<div class="fail">' + grade_desc + '<div/>')
}
else if (employee[id].grade >= 50 && employee[id].grade <= 60)
{
    grade_desc = ["pass"]
    document.write('<div class="pass">' + grade_desc + '<div/>')
}
else if (employee[id].grade >= 61 && employee[id].grade <= 80)
{
    grade_desc = ["good"]
    document.write('<div class="good">' + grade_desc + '<div/>')
}
else if (employee[id].grade >= 81 && employee[id].grade <= 99)
{
    grade_desc = ["excellent"]
    document.write('<div class="excellent">' + grade_desc + '<div/>')
}
else 
{
    grade_desc = ["full mark"]
    document.write('<div class="full_mark">' + grade_desc + '<div/>')
}



document.write("<p>" + employee[id].weight + "<p/>")

