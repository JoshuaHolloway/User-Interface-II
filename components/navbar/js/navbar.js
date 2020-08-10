const openSlideMenu = () => {
    document.getElementById('Side-Menu').style.width = '250px';
    // document.getElementById('Main').style.marginLeft = '250px';
    console.log('.Side-Menu pressed');
}

const closeSlideMenu = () => {
    document.getElementById('Side-Menu').style.width = '0px';
    // document.getElementById('Main').style.marginLeft = '0px';
    console.log('.Btn-Close pressed');
}