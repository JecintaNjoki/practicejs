// SIMPLE CODING QUESTIONS JAVASCRIPT
// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible.Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.
let num = 10;
while(num <= 10000){
	if(num%2 === 0){
			console.log(num);
		};
	num ++;
};
console.log(num)

let nums = 0;
while(nums <= 9){
	if(nums%2 === 0){
			console.log(nums);
		};
	nums ++;
};
console.log(nums)


// 2. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have
//  one array with negative and positive numbers and another with integers and decimals. 
// You could also try using arrays of different lengths. 
// If you’re feeling comfortable with this,try the slightly more challenging bonus challenge below. 
// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

function allnumbers(all){
	let sum=0
	for(let i=0;i < all.length;i++){
		sum+=all[i]
	}
	return sum
}
let all=[15,21,31,14,25]
console.log(allnumbers(all))


function numbers(numss){
	let sum=0
	for(let i=0;i < numss.length;i++){
		sum+=nums[i]
	}
	return sum
}
let numss=[-11,22,43,-24,5]
console.log(numbers(numss))
 
// 3. Create a function that reverses an array
// This challenge is particularly helpful if you’re planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you’re working with large databases. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
let classes = ["Hopperlab","AnitaB", "Adalab","Lovelace","Chefs"];
let arrayreversed = classes.reverse();
console.log( arrayreversed);


// 4. Create a length converter function
// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries. Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.
// function converter(miles){
	let kilometers=5
	let factor=0.621371
	let miles=kilometers*factor
	
	
	console.log(miles)
	// console.log(miles)
	// converter()





