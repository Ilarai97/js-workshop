const day = ['sunday','monday','tuesday','wednesday']
console.log(day.length)

/*const data=day.slice(1,2)
console.log(data)
day.splice(1,1,'haha')
console.log(day)*/

// splice ma xai 1,1 garyo vane first element le kun element replace garxa 
//vanxa like haha will replace monday yesma ani second  le chai paxi ko element katxa


/*const data=[1,2,3,4,5,6]
/data.splice(1,3,'hello','bye','world')
console.log(data)*/
//2,3,4 katera hello bye ra world bata replace garxa

/*const vowel=['i','l','a'] 
// a=1 , b=2 , c=3 hudai janxa alphabatical order ma 
function greet(name){
   console.log("hello"+name)
} */

/*const text = 'I am from nepal'
const splittedData = text.split(" ") 
// yaha space huna parxa "" vitra 
console.log (splittedData) */

/*const languages = ['Js','php','C']
languages.splice (1,0, 'Html')
console.log(languages)*/

/*const person = {
    name : "Ila",
    address : "Dharan",
    nationality : "Neplease"
}*/

/*console.log(person.address)
console.log(person.name)
person.age=22
console.log(person) */
//jasle pani change garna sakxa 

/*const person= Object.freeze({
    name : "Ila",
    Age:"20",
    Address : "Dharan"
})
 console.log(Object.keys(person))
 console.log(Object.values(person)) */
  
 //array vitra object hunxa ani object vitra pani array hunxa 

/* const data = {
    name: ['Ila','Bidusha']
 }
 data.name.push('Jala')
 console.log(data) */

 /*const test = [
    {
        name : "Ila"
    },
    {
        name : "Bidusha"
    }
 ]
 test.push({
    name:"Jala"
 })
console.log(test) */

const test2 = {
    name : ['Ila', 'Bidusha', 'Jala']
}
test2.name.splice(0,3,'1','2','3')
console.log(test2)

