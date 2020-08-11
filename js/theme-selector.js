// Set CSS varaible values with JS:
// https://davidwalsh.name/css-variables-javascript#:~:text=To%20set%20the%20value%20of,style%20.
const get_css_vals = (color) => {
    const val = (var_name) => getComputedStyle(document.documentElement)
    .getPropertyValue(var_name);

    const background = val(`--background-color-${color}`);
    const border = val(`--border-color-${color}`);
    const glow = val(`--glow-color-${color}`);
    return [background, border, glow];
};

const elem = name => document.getElementById(name);
const theme_1 = elem('theme-1');
const blue = elem('blue');
const body = elem('body');

const setup_theme_callback = (num, color) => {
    elem(`theme-${num}`).addEventListener('click', () => {
        [background, border, glow] = get_css_vals(color);
        body.style.backgroundColor = background;

        // this.style.boxShadow = '0 0 10px 4px var(--glow-color-primary);';

        // Turn off all other active-classes:
        for(let i = 1; i <= 8; ++i) {
            elem(`theme-${i}`).classList.remove('Active-Theme');
            // elem(`theme-${num}`).style.boxShadow = `none`;
        }
            

        // Now set the single active-class:
        console.log(elem(`theme-${num}`));
        elem(`theme-${num}`).classList.toggle('Active-Theme');
                                // box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
        // elem(`theme-${num}`).style.boxShadow = `0 0 40px 16px var(--glow-color-${color})`;
        // const active = document.querySelector('.Active-Theme');
        // console.log(active);
        // active.style.boxShadow = `0 0 10px 4px var(--glow-color-${color})`;

        const set_css_var_val = (css_var_name, new_val) => {
            document.documentElement.style
                .setProperty(css_var_name, new_val);
        };
        const get_css_var_val = (css_var_name) => {
            const css_var_val = getComputedStyle(document.documentElement)
            .getPropertyValue(css_var_name);
            return css_var_val;
        };

        set_css_var_val(`--glow-color-primary`, glow);
        console.log('--glow-color-primary: ' + get_css_var_val('--glow-color-primary'));

    });            
};

const colors = ['blue', 'yellow', 'pink', 'green', 'purple', 'tan', 'grey', 'brown'];


for (let i = 1; i <= colors.length; ++i)
    setup_theme_callback(i, colors[i - 1]);
