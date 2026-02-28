(() => {
    const links = document.querySelectorAll('.toc-sidebar a');
    const sections = Array.from(links).map(link =>
        document.querySelector(link.getAttribute('href'))
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(link => link.classList.remove('active'));
                    const active = document.querySelector(
                        `.toc-sidebar a[href="#${entry.target.id}"]`
                    );
                    if (active) {
                        active.classList.add('active');
                        const sidebar = document.querySelector('.toc-sidebar');
                        if (sidebar && sidebar.scrollWidth > sidebar.clientWidth) {
                            const scrollTarget = active.offsetLeft - sidebar.clientWidth / 2 + active.offsetWidth / 2;
                            sidebar.scrollTo({ left: scrollTarget, behavior: 'smooth' });
                        }
                    }
                }
            });
        },
        { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach(section => {
        if (section) observer.observe(section);
    });
})();
