function showDiv() {}

function showAllDiv() {
    document.getElementById('Pony').style.display = "none";
    document.getElementById('Numbers').style.display = "none";
    document.getElementById('Radar').style.display = "none";
    document.getElementById('AccessGranted').style.display = "none";
    document.getElementById('AccessDenied').style.display = "none";
    document.getElementById('LevelRequired').style.display = "none";
    document.getElementById('Downloading').style.display = "none";
    document.getElementById('Initializing').style.display = "none";
    document.getElementById('Scan').style.display = "none";
    document.getElementById('Poke').style.display = "none";
    document.getElementById('Map').style.display = "none";
    document.getElementById('SystemFailure').style.display = "none";
    document.getElementById('Help').style.display = "none";
    document.getElementById('Breach').style.display = "none";
    document.getElementById('Hash').style.display = "none";
    document.getElementById('Evacuate').style.display = "none";
    document.getElementById('Password').style.display = "none";
    document.getElementById('Query').style.display = "none";
    document.getElementById('Console').style.display = "none";
    document.getElementById('Deploy').style.display = "none";
    document.getElementById('Irc').style.display = "none";
    document.getElementById('Help').style.display = "none";
    document.getElementById('Tracing').style.display = "none";
    document.getElementById('Neurotoxin').style.display = "none";
    document.getElementById('Rat').style.display = "none";
    document.getElementById('purge').pause();
    document.getElementById('caution').pause();
}
$(document).keyup(function(event) {
    if (event.which == 27) {
        showAllDiv();
    }
    if (event.which == 8) {
        showAllDiv();
    } else if (event.which == 37) {
        document.getElementById('Tracing').style.display = "block";
        uplink.play();
    } else if (event.which == 40) {
        document.getElementById('Rat').style.display = "block";
    } else if (event.which == 39) {
        document.getElementById('Irc').style.display = "block";
    } else if (event.which == 38) {
        document.getElementById('Neurotoxin').style.display = "block";
    } else if (event.which == 18) {
        document.getElementById('AccessGranted').style.display = "block";
        document.getElementById('AccessDenied').style.display = "none";
        accessgranted.play();
    } else if (event.which == 13) {
        document.getElementById('AccessDenied').style.display = "block";
        document.getElementById('AccessGranted').style.display = "none";
        document.getElementById('LevelRequired').style.display = "none";
        accessdenied.play();
    } else if (event.which == 16) {
        document.getElementById('AccessGranted').style.display = "block";
        document.getElementById('AccessDenied').style.display = "none";
        document.getElementById('LevelRequired').style.display = "none";
        accessgranted.play();
    } else if (event.which == 17) {
        document.getElementById('AccessGranted').style.display = "none";
        document.getElementById('AccessDenied').style.display = "none";
        document.getElementById('LevelRequired').style.display = "block";
        accessgranted.play();
    } else if (event.which == 49) {
        document.getElementById('Downloading').style.display = "block";
        criticaldata.play();
    } else if (event.which == 50) {
        document.getElementById('Initializing').style.display = "block";
        activating.play();
    } else if (event.which == 51) {
        document.getElementById('Scan').style.display = "block";
        uplink.play();
    } else if (event.which == 52) {
        document.getElementById('Console').style.display = "block";
        activating.play();
    } else if (event.which == 36) {
        showAllDiv();
        document.getElementById('Map').style.display = "block";
    } else if (event.which == 53) {
        document.getElementById('Poke').style.display = "block";
        nuclearbuzz.play();
        nuclearcodes.play();
    } else if (event.which == 54) {
        document.getElementById('Hash').style.display = "block";
        encrypting.play();
    } else if (event.which == 55) {
        document.getElementById('Query').style.display = "block";
        searching.play();
    } else if (event.which == 57) {
        document.getElementById('Deploy').style.display = "block";
        hawk.play();
    } else if (event.which == 56) {
        document.getElementById('Breach').style.display = "block";
        breach.play();
    } else if (event.which == 48) {
        document.getElementById('Evacuate').style.display = "block";
        document.getElementById('caution').play();
        breach1.play();
    } else if (event.which == 35) {
        document.getElementById('Password').style.display = "block";
        purgefacility.play();
        setTimeout(function() {
            document.getElementById("ConnectionLost").style.display = "block";
        }, 22000);
        setTimeout(function() {
            document.getElementById('Password').style.display = "none";
            document.getElementById("Countdown").style.display = "block";
            document.getElementById('purge').play();
        }, 4000);
        setTimeout(function() {
            countdown.play();
        }, 8000);
    } else if (event.which == 9) {
        document.getElementById('Help').style.display = "block";
        document.getElementById('section').style.display = "block";
    } else if (event.which == 113) {
        document.getElementById('Help').style.display = "block";
        document.getElementById('section').style.display = "block";
    } else if (event.which == 101) {
        document.getElementById('SystemFailure').style.display = "block";
    } else if (event.which == 97) {
        document.getElementById('Numbers').style.display = "block";
    } else if (event.which == 98) {
        document.getElementById('Radar').style.display = "block";
    } else if (event.which == 99) {
        document.getElementById('Pony').style.display = "block";
        ponies.play();
    } else if (event.which == 100) {}
});