//selecting our h1 using the element id
console.log(document.getElementById('main-heading'))


//selecting the content of our h1 using the element id
alert(document.getElementById('main-heading').textContent)

//change h1 content
document.getElementById('main-heading').textContent = 'No Break Today'

//
let sports = "<ul><li>football<li/><li>cricket</li><li>basketball</li></ul>"
document.getElementById('sports').innerHTML = sports

document.title = "Break Time Very Soon"

//changing styles of h1 using element id
let h1 = document.getElementById('main-heading');

h1.style.color ='black'

/* if we were in the css
h1 {
color : black
}
*/

// changing image
let image = document.getElementsByClassName('Image-change')[0]
console.log(image)
image.setAttribute('src', 'floral.webp')


let button = document.getElementById('change-me')

button.addEventListener('click' ,function (){
   // alert('This button has been clicked')

   image.setAttribute('src','flow.jpg')
})

button.addEventListener('dblclick',function(){
    image.setAttribute('src','floral.webp')
})