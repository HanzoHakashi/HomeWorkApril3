

const likeBtn = document.getElementById('like');
let isLiked = false;

const likeClick = () => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    likeBtn.innerHTML = '<i class="bi bi-heart-fill"></i>';
    likeBtn.style.color = 'red';
    isLiked = true;
  } else {
    likeBtn.classList.remove('isLiked');
    likeBtn.innerHTML = '<i class="bi bi-heart"></i>';
    likeBtn.style.color = 'gray';
    isLiked = false;
  }
};
likeBtn.addEventListener('click', likeClick);


function likeImage(image) {
  var postDiv = image.parentElement;
  var likeIcon = postDiv.querySelector('.likeIcon');
  if (!likeIcon) {
    likeIcon = document.createElement('div');
    likeIcon.classList.add('likeIcon');
    likeIcon.innerHTML = '<i class="bi bi-heart-fill"></i>';
    
    postDiv.appendChild(likeIcon);
  }
   likeBtn.classList.add('isLiked');
   likeBtn.innerHTML = '<i class="bi bi-heart-fill"></i>';
   likeBtn.style.color = 'red';
   isLiked = true;
  likeIcon.style.color = 'red';
  likeIcon.style.top = (image.offsetHeight / 2 - likeIcon.offsetHeight / 2) + 'px';
  likeIcon.style.left = (image.offsetWidth / 2 - likeIcon.offsetWidth / 2) + 'px';
  likeIcon.classList.add('show');
  setTimeout(() => {
    likeIcon.classList.remove('show');
  }, 1000);
}

const bookmarkBtn = document.getElementById('bookmark');
let isBookmarked = false;

const bookmarkClick = () => {
  if (!isBookmarked) {
    bookmarkBtn.classList.add('isBookmarked');
    bookmarkBtn.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
    isBookmarked = !isBookmarked;
  } else {
    bookmarkBtn.classList.remove('isBookmarked');
    bookmarkBtn.innerHTML = '<i class="bi bi-bookmark"></i>';
    isBookmarked = !isBookmarked;
  }
};

bookmarkBtn.addEventListener('click', bookmarkClick);

const splashScreen = document.getElementById('splash-screen');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  splashScreen.style.display = 'none';
});


