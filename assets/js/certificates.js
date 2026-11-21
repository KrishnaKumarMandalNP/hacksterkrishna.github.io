(function () {
	var data = window.CERTIFICATES || [];
	var grid = document.getElementById('cert-grid');
	var filters = document.getElementById('cert-filters');
	var count = document.getElementById('cert-count');

	var icons = {
		Certification: 'fa-certificate',
		Training: 'fa-chalkboard-user',
		'UNDP Learning': 'fa-globe',
		Award: 'fa-trophy',
		Experience: 'fa-briefcase',
		Education: 'fa-graduation-cap'
	};

	function el(tag, className, text) {
		var node = document.createElement(tag);
		if (className) node.className = className;
		if (text) node.textContent = text;
		return node;
	}

	function card(item) {
		var article = el('article', 'card cert');
		article.dataset.category = item.category || 'Other';

		var top = el('div', 'cert-top');
		var icon = el('i', 'fa-solid ' + (icons[item.category] || 'fa-award') + ' card-icon');
		icon.setAttribute('aria-hidden', 'true');
		top.appendChild(icon);
		if (item.category) top.appendChild(el('span', 'badge', item.category));
		article.appendChild(top);

		article.appendChild(el('h3', '', item.title));
		var meta = [item.issuer, item.date].filter(Boolean).join(' · ');
		if (meta) article.appendChild(el('p', 'cert-meta', meta));
		if (item.note) article.appendChild(el('p', 'cert-note', item.note));

		var actions = el('div', 'cert-actions');
		if (item.file) {
			var view = el('a', 'btn btn-primary btn-sm');
			view.href = item.file;
			view.target = '_blank';
			view.rel = 'noopener';
			view.innerHTML = '<i class="fa-solid fa-file-pdf" aria-hidden="true"></i> View';
			view.setAttribute('aria-label', 'View ' + item.title + ' certificate (PDF)');

			var download = el('a', 'btn btn-ghost btn-sm');
			download.href = item.file;
			download.setAttribute('download', '');
			download.innerHTML = '<i class="fa-solid fa-download" aria-hidden="true"></i> Download';
			download.setAttribute('aria-label', 'Download ' + item.title + ' certificate (PDF)');

			actions.appendChild(view);
			actions.appendChild(download);
		} else {
			actions.appendChild(el('span', 'cert-pending', 'Certificate upload coming soon'));
		}
		if (item.verify) {
			var verify = el('a', 'btn btn-ghost btn-sm');
			verify.href = item.verify;
			verify.target = '_blank';
			verify.rel = 'noopener';
			verify.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Verify';
			verify.setAttribute('aria-label', 'Verify ' + item.title + ' with the issuer');
			actions.appendChild(verify);
		}
		article.appendChild(actions);
		return article;
	}

	function render(category) {
		grid.textContent = '';
		var shown = data.filter(function (item) { return category === 'All' || item.category === category; });
		shown.forEach(function (item) { grid.appendChild(card(item)); });
		var uploaded = shown.filter(function (item) { return item.file; }).length;
		count.textContent = shown.length + (shown.length === 1 ? ' item' : ' items') + ' · ' + uploaded + ' with PDF';
		if (!shown.length) grid.appendChild(el('p', 'cert-empty', 'Nothing here yet.'));
	}

	// Filter buttons for the categories that are actually used
	var categories = ['All'];
	data.forEach(function (item) {
		if (item.category && categories.indexOf(item.category) === -1) categories.push(item.category);
	});
	if (categories.length > 2) {
		categories.forEach(function (name, i) {
			var button = el('button', 'filter' + (i === 0 ? ' active' : ''), name);
			button.type = 'button';
			button.setAttribute('aria-pressed', i === 0);
			button.addEventListener('click', function () {
				filters.querySelectorAll('.filter').forEach(function (b) {
					b.classList.remove('active');
					b.setAttribute('aria-pressed', 'false');
				});
				button.classList.add('active');
				button.setAttribute('aria-pressed', 'true');
				render(name);
			});
			filters.appendChild(button);
		});
	}

	render('All');
})();
