document.addEventListener('DOMContentLoaded', function() {
  const likeButton = document.getElementById('likeButton')
  const likeCount = document.getElementById('likeCount')
  const csrfToken = document.cookie.match(/csrftoken=([^ ;]+)/)[1]

  if (likeButton) {
    likeButton.addEventListener('click', function() {
      let liked = likeButton.classList.contains('liked')
      const articleId = likeButton.dataset.articleId

      fetch(`/articles/${articleId}/like/`, {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ liked: !liked })  
      })
      .then(response => response.json())
      .then(data => {
        likeCount.innerText = data.likes

        if (liked) {
          likeButton.src = likeButton.src.replace('liked.png', 'like.png')
          likeButton.classList.remove('liked')
        } else {
          likeButton.src = likeButton.src.replace('like.png', 'liked.png')
          likeButton.classList.add('liked')
        }
      })
      .catch(error => console.error('Error:', error))
    })
  }
})


const fileInput = document.getElementById('file-input')
const fileName = document.getElementById('file-name')

if (fileInput && fileName) {
  fileInput.addEventListener('change', evt => {
    const fileToUpload = evt.target.files[0].name
    if(fileToUpload) {
      fileName.innerText = fileToUpload;
    } else {
      fileName.innerText = ""
    }
  })
}



document.addEventListener('DOMContentLoaded', function() {
  const photoMenu = document.querySelectorAll('.photoMenu')

  for (let i = 0; i < photoMenu.length; i++) {
    photoMenu[i].addEventListener('mouseenter', function() {
      const deleteButton = this.querySelector('.deleteButton')
      deleteButton.style.display = 'block'
    })

    photoMenu[i].addEventListener('mouseleave', function() {
      const deleteButton = this.querySelector('.deleteButton')
      deleteButton.style.display = 'none'
    })
  }
})







