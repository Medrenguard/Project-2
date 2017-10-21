"use strict";
var u = new Url();
var a = document.querySelectorAll('a'); //pre
var lm = leftMenu;
var el1 = content;
var di;
var tmp1;
var count = 0;
function map(trig, h, notion, id) {
	if (trig === 0) {
		lm.innerHTML = '<ul>';
		for (var i2 = 0; i2 < h.length && h[i2][1]; i2++) {
			document.querySelector('#leftMenu ul').innerHTML += '<li><a tax="t=' + h[i2][0] + '" pr="2" data-index=' + i2 + '>' + h[i2][1] + '</a></li>';
			count++;
		};
		a = document.querySelectorAll('a');	
	} else if (trig === 1) {
		switch(h) {
			case 'text':
			tmp1 = text;
			break;
			case 'img':
			tmp1 = img;
			break;
			case 'audio':
			tmp1 = audio;
			break;
			case 'video':
			tmp1 = video;
			break;
			case 'anim':
			tmp1 = anim;
			break;
			case 'interactive':
			tmp1 = interactive;
			break;
		};
		di = document.querySelector('[tax="t='+notion+'"]').getAttribute('data-index');
		el1.innerHTML = '<b>' + tmp1[di][2] + '</b> <i>' + tmp1[di][3] + '</i> - ' + tmp1[di][4];
	};
};

updFields();

updA();

document.body.addEventListener('click', updA);

function updA() {
	a = document.querySelectorAll('a');
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function (e) {

			updUrl(e);

			updFields(e);

		};
	};
};
function updUrl(e) {
	if (e.target.getAttribute('pr') == 1) {
		history.pushState('','',u.path+'?'+e.target.getAttribute('tax'));
	} else if (e.target.getAttribute('pr') == 2) {
		history.pushState('','',u.path+'?c='+u.query.c+'&'+e.target.getAttribute('tax'));
	};
	u = new Url();
	count++;
};
function updFields(e) {
	switch(u.query.c){
		case 'text':
		map(0, text);
		break;
		case 'img':
		map(0, img);
		break;
		case 'audio':
		map(0, audio);
		break;
		case 'video':
		map(0, video);
		break;
		case 'anim':
		map(0, anim);
		break;
		case 'interactive':
		map(0, interactive);
		break;
	};
	if (e) {
		console.log(e.target);
	} else if (u.query.t) {
		map(1, u.query.c, u.query.t);
	};
};