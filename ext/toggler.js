var sidebar = $('.side');
var btn = $('<span class="absalon-sidebar-hider-container"><span class="absalon-sidebar-hider">Toggle sidebar</span></span>');
btn.insertBefore(sidebar);

btn.on('click', function () {
    sidebar.toggle();
});