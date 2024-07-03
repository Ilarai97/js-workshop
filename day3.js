// // const temperature = 27
// // if (temperature>30){
// //     console.log('Hot')
// // }
// // else if (temperature>20){
// //     console.log('Moderate')
// // }
// // else(temperature>10){
// //     console.log('Cold')
// // }

// /*const grade = 70
// if(grade>90){
//     console.log('A')
// }
// else if (grade>80){
//     console.log('B+')
// }
// else if (grade>70){
//     console.log('B+')
// }
// else{
//     console.log('Fail')
// } */

// /*const days=["sunday", "monday","tuesday", "wednesday","thursday", "friday" , "saturday" ]
// for ( let abc of days)
// console.log(abc) */

// /*const data={
//     Name : "Ila" ,
//     Address : "Dharan",
//     Age : "20"
// }

// // for(let keys in data){
// //     console.log(keys)
// // }

// for(let  value in  data){
//     console.log(value+' is '+ data[value])
// } */

// /* function add(a,b){
//     console.log(a+b)
// }
// add(1,2)
// // natra va yesari tala dkeo jastai pani lekna sakinxa 
// const add = function(a,b){
//     console.log(a+b)
// }
// // natra va arrow function use garera
// const add = (a,b)=>{
//     console.log(a+b)
// }
// //anonymous function use garera
// ()=>{
//     console.log("Hello world")
// } */

// const numbers=[1,2,3,4,5]
// function n(numbers){
//     for(let num of numbers){
//         console.log(num*num)
//     }
// }
//  n(numbers)
const data={
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}
function name(data){
    console.log(data.code[0]._id)
    console.log(data.code[0].userId)
    console.log(data.code[0].title)
}
name(data)
