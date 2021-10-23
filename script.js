const linksSocialMedia = {
  github: 'JpAndriotti',
  facebook: 'jp.andriotti',
  instagram: 'jupa_andriotti',
  twitter: 'MagnificosPatos'
}

function changeSocialMediaLinks() {
  socialLinks = document.querySelector('#socialLinks')
  for (let li of socialLinks.children) {
    /* Para cada li referente a cada filho do socialLinks (ul) no HTML */
    const socialName = li.getAttribute('class')
    li.children[0].href = `https://www.${socialName}.com/${linksSocialMedia[socialName]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      console.log(userName.textContent)

      userBio.textContent = data.bio

      userProfile.href = data.html_url

      userImage.src = data.avatar_url

      userLoginGithub.textContent = data.login
    })
}

getGitHubProfileInfos()
