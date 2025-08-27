let resources = 0;
let upgradeCost = 10;

document.getElementById('gatherButton').addEventListener('click', () => {
    resources++;
    document.getElementById('resourceCount').textContent = resources;
});

document.getElementById('upgradeButton').addEventListener('click', () => {
    if (resources >= upgradeCost) {
        resources -= upgradeCost;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        document.getElementById('resourceCount').textContent = resources;
        alert('Upgrade acquistato!');
    } else {
        alert('Non hai abbastanza risorse!');
    }
});

