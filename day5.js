//reduce parameter ma 2 ta data aauxa 
//2 initialize gareko chai object ko value ho 

/* const num = [1,2,3,4,5]
const sum =num.reduce((obj,number)=>{
    return number + obj 
},2)
// 1+0 = 1
// 2+1 + 3
// 3+3 = 6 and so on 5 samma 
console.log(sum) */

/* const products = [
    {
        product : 'A',
        price : 200,
        qty : 2
    },
    {
        product : 'B',
        price : 300,
        qty : 7
    },
    {
        product : 'A',
        price : 1100,
        qty : 8
    }
]
const total = products.reduce((acc,quality)=>{
    return quality.price*quality.qty+acc 
},0)
const totalquantity = products.reduce((acc,num)=>{
    return num.qty + acc
},0)
console.log(total)
console.log(totalquantity) */

//make a function that accept above review and returns the average rating

/* const reviews = [
    {
        rating : 2
    },
    {
        rating : 4
    },
    {
        rating : 5
    }
]

function calculateRating (reviews){
    const totalRating = reviews.reduce((acc,review)=>{
        return review.rating + acc
    },0)
    const averageRating = totalRating / reviews.length
    console.log(averageRating)
}
calculateRating(reviews) */


//dom manipulation 

console.log("Hello")
const h1 = document.getElementsByTagName("h1")[0]
h1.textContent= "Bye world"

//casing
//camelCase --> ilaRai , iAmFromNepal  (js ma use hunxa dherai )
//snake_case --> ila_rai , i_am_from_nepal 
//kebab-case --> ila0-rai , i-am-from-nepal 
//PascalCase --> IlaRai , IAmFromNepal 