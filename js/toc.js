(() => {
    const sidebar = document.querySelector('.toc-sidebar');
    const links = document.querySelectorAll('.toc-sidebar a');
    const sections = Array.from(links).map(link =>
        document.querySelector(link.getAttribute('href'))
    );

    // Inject toggle button (shown only on mobile via CSS)
    const toggle = document.createElement('button');
    toggle.className = 'toc-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = 'Innehållsförteckning <span class="toc-arrow">▾</span>';
    sidebar.insertBefore(toggle, sidebar.firstChild);

    toggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the dropdown when a link is tapped on mobile
    links.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(link => link.classList.remove('active'));
                    const active = document.querySelector(
                        `.toc-sidebar a[href="#${entry.target.id}"]`
                    );
                    if (active) active.classList.add('active');
                }
            });
        },
        { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach(section => {
        if (section) observer.observe(section);
    });
})();
