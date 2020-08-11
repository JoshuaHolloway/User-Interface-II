


// Set CSS varaible values with JS:
// https://davidwalsh.name/css-variables-javascript#:~:text=To%20set%20the%20value%20of,style%20.
const get_css_var_val = (css_var_name) => {
    const css_var_val = getComputedStyle(document.documentElement)
    .getPropertyValue(css_var_name);
    return css_var_val;
};
const set_css_var_val = (css_var_name, new_val) => {
    document.documentElement.style
        .setProperty(css_var_name, new_val);
};
const set_theme = (color) => {
    const str = `--background-color-${color}`;
    const new_css_var_val = get_css_var_val(str);
    set_css_var_val('--background-color-primary', new_css_var_val);
    document.querySelector('body').style.backgroundColor = get_css_var_val('--background-color-primary');
    // console.log('new_css_var_val = ' + new_css_var_val);
    // console.log('--background-color-primary = ' + get_css_var_val('--background-color-primary'));
};

const theme_buttons = Array.from(document.querySelectorAll('.Color-Options-Container > button'));
console.log(theme_buttons);
theme_buttons.forEach(item => {
    item.addEventListener('click', event => {

        // -A button has been pressed.
        // -Disable current active classes, and set the specific one afterwards
        // theme_buttons.forEach(item => {
        //     item.classList.toggle('');
        // });

        //Toggle currently active theme:
        console.log('About to toggle:');
        const current_active_theme_color_elem = document.querySelector('.Color-Options-Container > .Active-Theme');
        console.log('current_active_theme_color_elem:');
        console.log(current_active_theme_color_elem);
        current_active_theme_color_elem.classList.toggle('Active-Theme');


        //console.log('theme_color.id = ' + theme_color.id);



        if (current_active_theme_color_elem.id === 'Theme-Blue') {
            set_theme('blue');

            // Set active class
            //item.classList.toggle('Active-Theme');
            // const theme_color = document.querySelector('.Color-Options-Container > .Active-Theme');
            // console.log('josh');
            // console.log(theme_color);
            // console.log(theme_color.id);
            // TODO: Toggle this off when you select another element!
            // TODO: Toggle this off when you select another element!           
        } else if (current_active_theme_color_elem.id === 'Theme-Yellow') {
            console.log('Theme-Yellow');
            set_theme('yellow');
        }
    });
});


