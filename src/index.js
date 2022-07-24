console.log('%c HI', 'color: firebrick')

//given img URLs
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', () => {

    //grab elements we will be manipulating
    const ul = document.getElementById('dog-breeds')
    const select = document.getElementById('breed-dropdown')
    const imgDiv = document.getElementById('dog-image-container')

    //get imgURL data
    fetch(imgUrl)
    .then(res => res.json())
    .then((jsondata) => {

        //access the JSON object's message property
        const workingArr = jsondata.message

        //forEach to append each element
        workingArr.forEach(element => {
            let img = document.createElement('img')
            img.src = element
            imgDiv.appendChild(img)
        });
    });

    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        const workingArr = data.message
        for (element in workingArr) {
            let li = document.createElement('li')
            li.textContent=element
            li.classList.add(element[0])
            ul.appendChild(li)
        }
    })


    ul.addEventListener('click', (e) => {
        let target = e.target
        target.style.backgroundColor = 'green'
    })

    //add remaining letters to dropdown
    const missingLetter = ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    missingLetter.forEach((letter) => {
        let option = document.createElement('option')
        option.textContent = letter
        option.value = letter
        select.appendChild(option)
    })

    //everytime dropdown changes value we'll filter the ul
    select.addEventListener('change', () => {
        let letter = select.value
        let listArr = document.querySelectorAll('li')
        listArr.forEach((item) => {
            item.className !== letter ? item.style.display = 'none' : item.style.display = 'block'
        })
    })
})






