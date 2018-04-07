var imageURLs = [
    'https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif',
    'https://media.giphy.com/media/Jalikml2XiUgw/giphy.gif',
    'https://media.giphy.com/media/3oGRFvUEbJdLWlawLu/giphy.gif', 
    'https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif', 
    'https://media.giphy.com/media/Jd5YlXOVTcQtW/giphy.gif'
];

function getImageTag() {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" />';
    return img;
  }
