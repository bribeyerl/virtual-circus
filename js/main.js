document.getElementById('highwire').addEventListener('click', showHighwire)
document.getElementById('clowns').addEventListener('click', showClowns)
document.getElementById('trapeze').addEventListener('click', showTrapeze)
document.getElementById('animals').addEventListener('click', showAnimals)


function showHighwire() {
    document.getElementById('player').src = 'https://www.youtube.com/embed/rCuzSZfEgyE'
}

function showClowns() {
    document.getElementById('player').src = 'https://www.youtube.com/embed/2XN5mhdWoM0'
}

function showTrapeze() {
    document.getElementById('player').src = 'https://www.youtube.com/embed/VcLZ-W-Siwk'
}

function showAnimals() {
    document.getElementById('player').src = 'https://www.youtube.com/embed/wBeA67_Mcik'
}