(function () {
	var translations = document.querySelector('.translations');
	var ul = document.createElement('ul');
	ul.className = translations.className;
	var startIndex = Math.floor(translations.childNodes.length / 2) + 2;
	for (var i = startIndex; i < translations.childNodes.length; i += 1) {
		ul.appendChild(translations.childNodes[i]);
	}
	translations.parentNode.appendChild(ul);
})();