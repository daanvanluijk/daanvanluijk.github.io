const jsonColorPallettes = fetch('/Assets/colorpallettes.json').then(
    response => {
        return response.json();
    }
).then(result => OnJsonColorPallettesLoaded(result));

function OnJsonColorPallettesLoaded(result) {
    console.log(result.length);

    let randomI = Math.floor(Math.random() * result.length);
    console.log(result[randomI]["primarydark"]);
    document.documentElement.style.setProperty('--primarylight', result[randomI]["primarylight"]);
    document.documentElement.style.setProperty('--primarydark', result[randomI]["primarydark"]);
    document.documentElement.style.setProperty('--secondarylight', result[randomI]["secondarylight"]);
    document.documentElement.style.setProperty('--secondarydark', result[randomI]["secondarydark"]);
}
