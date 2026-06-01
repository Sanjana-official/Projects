const username =
  document.getElementById("username");

const searchBtn =
  document.getElementById("searchBtn");

const result =
  document.getElementById("result");

searchBtn.addEventListener("click", getUser);

async function getUser(){

  const user =
    username.value.trim();

  if(user === "") return;

  result.innerHTML =
    "<p>Loading...</p>";

  try{

    const response =
      await fetch(
        `https://api.github.com/users/${user}`
      );

    if(!response.ok){
      throw new Error();
    }

    const data =
      await response.json();

    result.innerHTML = `
    
      <div class="profile">

        <img
          src="${data.avatar_url}"
          alt="${data.login}"
        >

        <div class="info">

          <h2>${data.name || data.login}</h2>

          <p>
            ${data.bio || "No bio available"}
          </p>

          <p>
            📍 ${data.location || "Unknown"}
          </p>

          <p>
            🔗
            <a href="${data.html_url}"
               target="_blank">
               GitHub Profile
            </a>
          </p>

          <div class="stats">

            <div class="stat">
              Repos: ${data.public_repos}
            </div>

            <div class="stat">
              Followers: ${data.followers}
            </div>

            <div class="stat">
              Following: ${data.following}
            </div>

          </div>

        </div>

      </div>

    `;

  }

  catch{

    result.innerHTML = `
      <p class="error">
        User not found
      </p>
    `;
  }

}