(function () {
    pagination(true);
})();

(function () {
    var dropdowns = document.querySelectorAll('[data-nav-dropdown]');
    if (!dropdowns.length) return;

    var mq = window.matchMedia('(max-width: 767px)');

    function setExpanded(dropdown, open) {
        var btn = dropdown.querySelector('.gh-nav-dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function closeAll() {
        dropdowns.forEach(function (d) {
            d.classList.remove('is-open');
            setExpanded(d, false);
        });
    }

    dropdowns.forEach(function (dropdown) {
        var btn = dropdown.querySelector('.gh-nav-dropdown-toggle');
        if (!btn) return;

        btn.addEventListener('click', function (e) {
            if (!mq.matches) return;
            e.preventDefault();
            e.stopPropagation();
            var open = !dropdown.classList.contains('is-open');
            closeAll();
            if (open) {
                dropdown.classList.add('is-open');
                setExpanded(dropdown, true);
            }
        });

        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    document.addEventListener('click', function () {
        if (mq.matches) closeAll();
    });

    if (mq.addEventListener) {
        mq.addEventListener('change', function () {
            if (!mq.matches) closeAll();
        });
    } else if (mq.addListener) {
        mq.addListener(function () {
            if (!mq.matches) closeAll();
        });
    }
})();

(function () {
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();
