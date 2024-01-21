function mee6calculator() {
    var minxp = document.getElementById("minxp").value;
    var maxxp = document.getElementById("maxxp").value;

    var desiredlvl = document.getElementById("desired-level").value;
    var currentlvl = document.getElementById("current-lvl").value;
    var xpinlvl = document.getElementById("current-xp").value;

    // Magical math functions
    var currentxp = 5/6 * currentlvl * (2 * currentlvl * currentlvl + 27 * currentlvl + 91);
    var totalxp = parseInt(currentxp) + parseInt(xpinlvl);
    var desiredxp = 5/6 * desiredlvl * (2 * desiredlvl * desiredlvl + 27 * desiredlvl + 91);
    var totaldesiredxp = parseInt(desiredxp) - parseInt(totalxp);

    // Minimum, average, and maximum messages needed to send in order to reach specified level
    var minmsg = Math.ceil(totaldesiredxp / maxxp);
    var avg = parseInt(minxp) + parseInt(maxxp);
    var avgxp = avg / 2;
    var avgmsg = Math.ceil(totaldesiredxp / avgxp);
    var maxmsg = Math.ceil(totaldesiredxp / minxp);

    // Calculate mega and ultra potions needed
    var megaPotionsNeeded = Math.ceil(totaldesiredxp / 30000);
    var ultraPotionsNeeded = Math.ceil(totaldesiredxp / 450000);

    // Server Gold Needed calculations
        var serverGoldMega = megapotionsneeded * 2000;
        var serverGoldUltra = ultrapotionsneeded * 30000;
    
    // Total XP Gain from Potions calculations
        var totalXPMega = megapotionsneeded * 30000;
        var totalXPUltra = ultrapotionsneeded * 450000;

    // Display information to the user
    document.getElementById("result-average").innerHTML = avgmsg;
    document.getElementById("result-xp-needed").innerHTML = totaldesiredxp;
    //document.getElementById("result-minimum-messages-requirement").innerHTML = minmsg;
    //document.getElementById("result-maximum-messages-requirement").innerHTML = maxmsg;

    // Display potion information
    document.getElementById("result-mega-potions-needed").innerHTML = megaPotionsNeeded;
    document.getElementById("result-ultra-potions-needed").innerHTML = ultraPotionsNeeded;
    document.getElementById("result-server-gold-mega").innerHTML = serverGoldMega;
    document.getElementById("result-server-gold-ultra").innerHTML = serverGoldUltra;
    document.getElementById("result-total-xp-mega").innerHTML = totalXPMega;
    document.getElementById("result-total-xp-ultra").innerHTML = totalXPUltra;
}
