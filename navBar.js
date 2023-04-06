const navbar = function () {
    return {
        isOpen: false,
        entries: [
            { label: 'home', url: '#home', id: 1 },
            { label: 'about', url: '#about', id: 2 },
            { label: 'skills', url: '#skills', id: 3 },
            { label: 'experience', url: '#experience', id: 4 },
            { label: 'contact', url: '#contact', id: 5 },
        ],
    };
};
window.navbar = navbar;
