var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var elements = document.getElementsByClassName('.socialMediaicons');
var image = document.createElement('<img src="">');

image.

for( i=0; i<elements.length; i++){
  elements[i].innerHTML('<img src="' + socialMedia.facebook + '" />');
}