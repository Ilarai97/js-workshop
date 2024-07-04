 //call back function vaneko arko function ma argument vayera janxa like
 /* getSomething(function(){
    }) */

//jasle call back function accept garxa teslai chai higher order function vanxa 

//forEach ko kaam loop garne 
//return gardaina
//data loop garnu xa vane forEach use garne 

/*const  fruits = ["Mango", "Apple", "Watermelon"]
fruits.forEach(function(fruits){
    console.log(fruits)
})*/

/*fruit.filter(function(){
    }) */

//yesari haina    
/* const nums=[1,2,3,4,5]
nums.forEach(function(nums){
    console.log(nums*nums)
})*/

/* const num=[1,2,3,4,5]
const square =[]
num.forEach(function(num){
    square.push(num*num)
})
console.log(square) */

//wap to print firstname + lastname using for each 

/* const data = [
    {
        firstname:"Ila",
        lastname:"Rai",
        address:"Dharan"
    },
    {
        firstname:"Bidusha",
        lastname:"Dahal",
        address:"Itahari"
    },
    {
        firstname:"Anjala",
        lastname:"Bhujel",
        address:"Kathmandu"
    }
]
data.forEach((Object)=>{
    console.log(Object.firstname + " " + Object.lastname)
}) */

//map le loop garxa ani addition pani garxa 
//value return garxa
//main kaam vaneko data manipulation
//original array lai modify gardaina naya array dinxa 
//data manupulation garnu xa vane map use garne
// jaile return keyword halne natra va foreach use gareko jastai hunxa

/* const nums=[2,4,6,8]
const square =nums.map((num)=>{
    return num*num
})
console.log(nums)
console.log(square) */

/* const data = [
    {
        firstname:"Ila",
        lastname:"Rai",
        address:"Dharan"
    },
    {
        firstname:"Bidusha",
        lastname:"Dahal",
        address:"Itahari"
    },
    {
        firstname:"Anjala",
        lastname:"Bhujel",
        address:"Kathmandu"
    }
]
const result = data.map ((Object)=> {
    return {
        FullName: Object.firstname + " " + Object.lastname
    }
})
console.log(result) */

/* const num = [1,2,3,4,5]
const result = num.map ((Object)=>{
    return {
        text : "A",
        number : Object
    }
})
console.log(result) */

/* const data = [
    {
        firstname:"Ila",
        lastname:"Rai",
        address:"Dharan"
    },
    {
        firstname:"Bidusha",
        lastname:"Dahal",
        address:"Itahari"
    },
    {
        firstname:"Anjala",
        lastname:"Bhujel",
        address:"Kathmandu"
    }
]
const result = data.map((Object)=> {
    return {
    ...Object,
        Fullname : Object.firstname + " " + Object.lastname
    }
})
console.log(result) */

//spread operator vaneko ... ho 

//filter operator 

/* const numberData = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = numberData.filter ((number)=> {
    return number%2 !== 0
})
console.log(oddNumbers) */

/* const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const book = books.filter((object)=> {
    return object.publishedAt >2000
})
console.log(book) */

/* const lastTask = [1,2,null, undefined ,"Ila","haihai","hoihoi"]
const result = lastTask.filter ((task)=>{
    return task !== null && task !== undefined
})
console.log(result) */

/* const data = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]
const result = data.filter((Obj)=> { 
    return Obj.name.endsWith("sh") && Obj.status=="pass" &&  Obj.marks>500
})
console.log(result) */






const file =['index.html', 'app.js', 'app.java', 'test.js']
const lang = file.filter((Object)=>{
    return Object.endsWith(".js")
})
console.log(lang)



