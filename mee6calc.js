function mee6calculator() {
    
    //if commenting out the input boxes for minxp and maxxp, make sure to have minxp and maxxp defined.

    //var minxp = document.getElementById("minxp").value;
    //var maxxp = document.getElementById("maxxp").value;
    var minxp = 15
    var maxxp = 25


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
    var megapotionsneeded = Math.ceil(totaldesiredxp / 30000);
    var ultrapotionsneeded = Math.ceil(totaldesiredxp / 450000);

    // Server Gold Needed calculations
    var servergoldmega = megapotionsneeded * 2000;
    var servergoldultra = ultrapotionsneeded * 30000;

    // Total XP Gain from Potions calculations
    var totalXPmega = megapotionsneeded * 30000;
    var totalXPultra = ultrapotionsneeded * 450000;

        // Show or hide Mega Potions results based on conditions
        if (megapotionsneeded > 0) {
            document.getElementById("result").style.display = "block";
        } else {
            document.getElementById("result").style.display = "none";
        }

        // Show or hide Mega Potions results based on conditions
        if (megapotionsneeded > 0) {
            document.getElementById("mega-potions-results").style.display = "block";
        } else {
            document.getElementById("mega-potions-results").style.display = "none";
        }

        // Show or hide Ultra Potions results based on conditions
        if (ultrapotionsneeded > 0) {
            document.getElementById("ultra-potions-results").style.display = "block";
        } else {
            document.getElementById("ultra-potions-results").style.display = "none";
        }


    // Display information to the user
    document.getElementById("result-xp-needed").innerHTML = totaldesiredxp.toLocaleString();
    document.getElementById("result-mega-potions-needed").innerHTML = megapotionsneeded.toLocaleString();
    document.getElementById("result-ultra-potions-needed").innerHTML = ultrapotionsneeded.toLocaleString();
    document.getElementById("result-server-gold-mega").innerHTML = servergoldmega.toLocaleString();
    document.getElementById("result-server-gold-ultra").innerHTML = servergoldultra.toLocaleString();
    document.getElementById("result-total-xp-mega").innerHTML = totalXPmega.toLocaleString();
    document.getElementById("result-total-xp-ultra").innerHTML = totalXPultra.toLocaleString();
}

window.onload = function() {
    function toggleExpandableSection(sectionId) {
        var content = document.getElementById(sectionId);
        content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
    }

    function displayAct(actDetails) {
        alert(actDetails);  // You can customize this to display or handle the selected Act
    }
};