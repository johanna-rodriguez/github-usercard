/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
const divCards = document.querySelector("div.cards");
const dataURL = "https://api.github.com/users/johanna-rodriguez"

function getData(url){
    axios.get(url)
    .then(res=>{
      divCards.appendChild(cardCreator(res))
      console.log(res)
    })
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/




/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


getData(dataURL)



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ['tetondan',
'dustinmyers',
'justsml',
'luishrd',
'bigknell'];
followersArray.forEach(user=>{
  const url = "https://api.github.com/users/" + user
  getData(url)
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator(res){
  const mainDiv = document.createElement('div')
  mainDiv.classList.add('card')

  const img = document.createElement('img')
  img.setAttribute('src',res.data.avatar_url)
  mainDiv.appendChild(img);

  const divCardInfo = document.createElement('div')
  divCardInfo.classList.add('card-info')
  mainDiv.appendChild(divCardInfo);

  const name = document.createElement('h3')
  name.classList.add('name')
  name.textContent = res.data.name
  divCardInfo.appendChild(name)

  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = res.data.login
  divCardInfo.appendChild(username)

  const location = document.createElement('p')
  location.textContent = 'Location: ' + res.data.location
  divCardInfo.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent = 'Profile: '
  divCardInfo.appendChild(profile)
  
  const profileAnchor = document.createElement('a')
  profileAnchor.setAttribute('href',res.data.html_url)
  profileAnchor.textContent = res.data.html_url
  profile.appendChild(profileAnchor)

  const followers = document.createElement('p')
  followers.textContent = 'Followers: ' + res.data.followers
  divCardInfo.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = 'Following: ' + res.data.following
  divCardInfo.appendChild(following)

  const bio = document.createElement('p')
  bio.textContent = 'Bio: ' + res.data.bio
  divCardInfo.appendChild(bio)

  return mainDiv
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
