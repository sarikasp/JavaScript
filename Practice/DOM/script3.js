var h1 = document.querySelector('h1')
var uiList =document.querySelector('#listParent')
var listA = document.querySelectorAll('li')
// console.log(uiList)
// console.log(listA)


// var changetoColor = function(){
//     h1.style.color = "#ff0066"
//     h1.style.background = '#39ac39'
// }
// changetoColor()


// call back function in javascript 

// h1.addEventListener('click',changetoColor)

// h1.addEventListener('click',function(){
//     h1.style.color = "#ff0066"
//     h1.style.background = '#39ac39'
// })




// h1.addEventListener('click',(event)=>{
//     console.log(event.target.tagName)  // H1
// })



// for(let i = 0 ; i < listA.length;i++){
//     uiList.addEventListener('mouseover',()=>{
//         listA[i].textContent =   listA[i].textContent.toLowerCase()
//     })

//     uiList.addEventListener('mouseout',()=>{
//         listA[i].textContent =  listA[i].textContent.toUpperCase()
//     })
// }



uiList.addEventListener('mouseover', (event)=>{
    if(event.target.tagName == 'LI'){
        event.target.textContent =  event.target.textContent.toUpperCase()
        console.log(event.target)
    }
})
uiList.addEventListener('mouseout', (event)=>{
    if(event.target.tagName == 'LI'){
        event.target.textContent =  event.target.textContent.toLowerCase()
    }
})

