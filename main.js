"use strict";
var u = new Url();
var a = document.querySelectorAll('a.nv'); //pre
var lm = leftMenu;
var el1 = content;
var el2;
var el3;
var subTitle;
var di;
var tmp1;

function alertError() {
	el1.innerHTML = '<span class="error">Упс! Такой страницы не существует.</span>';
};

function inputImg() {
	if (el2[di][5]) {
		return '<figure class="mImg"><a href="img/' + el2[di][0] + '-m.jpg" target="_blank"><img src="img/' + el2[di][0] + '-m.jpg"></a><figcaption>' + el2[di][5] + '</figcaption></figure>';
	} else {
		return '';
	}
};

function findThisArr(value) {
	switch(value) {
		case 'text':
		tmp1 = text;
		subTitle = 'Текст';
		break;
		case 'img':
		tmp1 = img;
		subTitle = 'Графика';
		break;
		case 'audio':
		tmp1 = audio;
		subTitle = 'Аудио';
		break;
		case 'video':
		tmp1 = video;
		subTitle = 'Видео';
		break;
		case 'interactive':
		tmp1 = interactive;
		subTitle = 'Интерактивность';
		break;
	};
	return tmp1;
};

function map(trig, h, notion, id) {
	el2 = findThisArr(h);
	el3 = document.querySelector('[tax="t='+notion+'"]');
	if (trig === 0) {
		if (el2) {
			lm.innerHTML = '<div class="sub-title">' + subTitle + '</div><ul>';
			for (var i2 = 0; i2 < el2.length && el2[i2][1]; i2++) {
				document.querySelector('#leftMenu ul').innerHTML += '<li><a class="nv" tax="t=' + el2[i2][0] + '" pr="2" data-index=' + i2 + '>' + el2[i2][1] + '</a></li>';
			};
		} else {
			alertError();
		};
	} else if (trig === 1) {
		if (el3) {
			di = el3.getAttribute('data-index');
			el1.innerHTML = inputImg() + '<p><b>' + el2[di][2] + '</b> <i>' + el2[di][3] + '</i> - ' + el2[di][4] + '</p>';
		} else {
			alertError();
		};
	};
	a = document.querySelectorAll('a.nv');
};

updFields();

updA();

document.body.addEventListener('click', updA);

function updA() {
	a = document.querySelectorAll('a.nv');
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
};

function updFields(e) {
	if (!e) {
		if (u.query.c) {
			map(0, u.query.c);
		};
		if (u.query.t) {
			map(1, u.query.c, u.query.t);
		};
	} else {
		if (e.target.getAttribute('pr') == 1) {
			map(0, u.query.c);
			if (content.querySelector('.error')) {
				content.innerHTML = '';
			};
		} else if (e.target.getAttribute('pr') == 2) {
			map(1, u.query.c, u.query.t);
		};
	}
};