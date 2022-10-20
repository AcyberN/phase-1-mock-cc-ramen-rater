// write your code here
fetch ('http://localhost:3000/ramens')
    .then(response=>response.json())
    .then(data=>renderRamen(data))


const menu= document.querySelector('#ramen-menu')
const detailImage= document.querySelector('.detail-image')
const detailName= document.querySelector('.name')
const detailRestaurant= document.querySelector('.restaurant')
const detailRating= document.querySelector('#rating-display')
const comment= document.querySelector('#comment-display')

//FORM
const form= document.querySelector('#new-ramen')



function renderRamen(ramens){
    ramens.forEach(ramen=>{
        image= document.createElement('img')
        image.src= ramen.image
        menu.appendChild(image)
    

     image.addEventListener('click', (e)=>{
        
        detailImage.src= ramen.image
        detailName.textContent= ramen.name 
        detailRestaurant.textContent=ramen.restaurant
        detailRating.textContent=ramen.rating
        comment.textContent= ramen.comment
     } )  
    })
}




form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // console.log(e.target.new_name.value)

    const Newobject= {
        detailName: e.target.new_name.value,
        detailImage: e.target.new_image.value,
        detailRestaurant: e.target.new_restaurant.value,
        detailRating: e.target.new_rating.value,
        comment: e.target.new_comment.value
    }
    
    console.log(Newobject)

fetch ('http://localhost:3000/ramens'),
{
    Method: 'POST',
    Headers: {
        'Content-Type': 'application/json'
    },
    Body: JSON.stringify(Newobject)

}
.then(response =>response.json())
.then(data=> {
    detailImage.src= data.image
    detailName.textContent= data.name 
        detailRestaurant.textContent=data.restaurant
        detailRating.textContent=data.rating
        comment.textContent= data.comment
})
}
)




