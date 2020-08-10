const theme_color = document.querySelector('.Color-Options-Container > .Active-Theme');

console.log('josh');
console.log(theme_color);
console.log(theme_color.id);


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


const theme_buttons = Array.from(document.querySelectorAll('.Color-Options-Container > button'));
console.log(theme_buttons);
theme_buttons.forEach(item => {
    item.addEventListener('click', event => {
        if (theme_color.id === 'Theme-Blue') {
            const new_css_var_val = get_css_var_val('--background-color-blue');
            set_css_var_val('--background-color-primary', new_css_var_val);

            // Set active class
            item.classList.toggle('Active-Theme');

            // TODO: Toggle this off when you select another element!
            // TODO: Toggle this off when you select another element!
            // TODO: Toggle this off when you select another element!
            // TODO: Toggle this off when you select another element!
            // TODO: Toggle this off when you select another element!
            
        } else if (theme_color.id === 'Theme-Yellow') {
    });
});


