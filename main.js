"use strict";
var u = new Url();
var a = document.querySelectorAll('a'); //pre
var lm = leftMenu;
var el1 = content;
var count = 0;
function map(h, notion, id) {
	lm.innerHTML = '<ul>';
	for (var i2 = 0; h[i2][1]; i2++) {
		document.querySelector('#leftMenu ul').innerHTML += '<li><a tax="t=' + h[i2][0] + '" pr="2">' + h[i2][1] + '</a></li>';
		count++;
	};
	a = document.querySelectorAll('a');
};

switch(u.query.c){
	case 'text':
	map(text);
	break;
	case 'img':
	map(img);
	break;
	case 'audio':
	map(audio);
	break;
	case 'video':
	map(video);
	break;
	case 'anim':
	map(anim);
	break;
	case 'interactive':
	map(interactive);
	break;
};

document.body.addEventListener('click', updA);

function updA() {
	for (var i = 0; i < a.length; i++) {
		a[i].removeEventListener('click', feed)
	};
	a = document.querySelectorAll('a');
	for (var i = 0; i < a.length; i++) {
		a[i].addEventListener('click', feed)
	};
};
function feed(e) {
	if (event.target.getAttribute('pr') == 1) {
		history.pushState('','',u.path+'?'+this.getAttribute('tax'));
	} else if (event.target.getAttribute('pr') == 2) {
		history.pushState('','',u.path+'?c='+u.query.c+'&'+this.getAttribute('tax'));
	};
	u = new Url();
	count++;
	//

	switch(u.query.c){
		case 'text':
		map(text);
		break;
		case 'img':
		map(img);
		break;
		case 'audio':
		map(audio);
		break;
		case 'video':
		map(video);
		break;
		case 'anim':
		map(anim);
		break;
		case 'interactive':
		map(interactive);
		break;
	};
};
updA();