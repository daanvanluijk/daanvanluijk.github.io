const jsonColorPallettes = fetch('/Assets/colorpallettes.json').then(
    response => {
        return response.json();
    }
).then(result => OnJsonColorPallettesLoaded(result));

function OnJsonColorPallettesLoaded(result) {
    if (document.getElementById("colorscript")) {
            ChangeColor(result[document.getElementById("colorscript").getAttribute("color")]);
            return;
    }
    let randomI = Math.floor(Math.random() * Object.keys(result).length);
    console.log(randomI);
    let value = result[Object.keys(result)[randomI]];
    ChangeColor(value);
}

function ChangeColor(value) {
    document.documentElement.style.setProperty('--primarylight', value["primarylight"]);
    document.documentElement.style.setProperty('--primarydark', value["primarydark"]);
    document.documentElement.style.setProperty('--secondarylight', value["secondarylight"]);
    document.documentElement.style.setProperty('--secondarydark', value["secondarydark"]);
}
