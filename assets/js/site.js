(function () {
	var header = document.querySelector('.site-header');
	var nav = document.getElementById('site-nav');
	var toggle = document.querySelector('.nav-toggle');

	// Solid header once the page is scrolled (always solid on inner pages)
	var solid = header.classList.contains('solid');
	function onScroll() { header.classList.toggle('scrolled', solid || window.scrollY > 40); }
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });

	// First-visit intro: remove it when the wipe ends; a click or key skips it
	var intro = document.querySelector('.intro-screen');
	if (intro && document.documentElement.classList.contains('intro')) {
		var finish = function () {
			document.documentElement.classList.remove('intro-lock');
			if (intro.parentNode) intro.parentNode.removeChild(intro);
			document.removeEventListener('keydown', skip);
		};
		// skipping also cancels the timed hero entrance so content shows at once
		var skip = function () {
			document.documentElement.classList.remove('intro');
			finish();
		};
		intro.addEventListener('animationend', function (e) { if (e.animationName === 'intro-exit') finish(); });
		intro.addEventListener('click', skip);
		document.addEventListener('keydown', skip);
		setTimeout(finish, 2500);
	} else if (intro) {
		intro.parentNode.removeChild(intro);
	}

	// Light/dark toggle (remembered per visitor)
	var themeButton = document.querySelector('.theme-toggle');
	if (themeButton) {
		themeButton.addEventListener('click', function () {
			var root = document.documentElement;
			var current = root.dataset.theme ||
				(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
			var next = current === 'light' ? 'dark' : 'light';
			root.dataset.theme = next;
			try { localStorage.setItem('theme', next); } catch (e) {}
		});
	}

	// Mobile menu
	function setMenu(open) {
		nav.classList.toggle('open', open);
		toggle.setAttribute('aria-expanded', open);
		toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		var use = toggle.querySelector('use');
		use.setAttribute('href', use.getAttribute('href').split('#')[0] + (open ? '#xmark' : '#bars'));
		if (open) header.classList.add('scrolled'); else onScroll();
	}
	toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
	nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

	// Reveal on scroll + highlight the current section in the nav
	if ('IntersectionObserver' in window) {
		var revealer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					revealer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

		var links = {};
		nav.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
		var spy = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				var link = links[entry.target.id];
				if (link && entry.isIntersecting) {
					Object.keys(links).forEach(function (id) { links[id].classList.remove('active'); });
					link.classList.add('active');
				}
			});
		}, { rootMargin: '-45% 0px -50% 0px' });
		Object.keys(links).forEach(function (id) {
			var section = document.getElementById(id);
			if (section) spy.observe(section);
		});
	} else {
		document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
	}

	// Years since start, and copyright year
	var year = new Date().getFullYear();
	document.getElementById('year').textContent = year;
	document.querySelectorAll('[data-since]').forEach(function (el) {
		el.textContent = (year - Number(el.dataset.since)) + '+';
	});
})();
