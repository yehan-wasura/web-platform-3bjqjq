$(function() {
    $(document).keyup(function(event) {
        if (event.keyCode != 8) Typer.addText(event);
        else {
            Typer.removeText();
            event.preventDefault();
        }
    }).mousewheel(function(e) {
        Typer.speed += Math.ceil(Typer.speedStep) * e.deltaY;
        Typer.speed = (Typer.speed < Math.floor(Typer.speedMin)) ? Math.floor(Typer.speedMin) : (Typer.speed > Math.floor(Typer.speedMax)) ? Math.floor(Typer.speedMax) : Typer.speed;
        console.log(Typer.speed);
    });
});
var Typer = {
    text: null,
    accessCountimer: null,
    index: 0,
    speedMax: 12,
    speedMin: 1,
    writeCount: 0,
    speedStep: 0.5,
    speed: 2,
    file: "",
    accessCount: 0,
    deniedCount: 0,
    secCount: 0,
    coldCount: 0,
    secCount: 0,
    radarCount: 0,
    windowCount: 0,
    ponyCount: 0,
    tagList: [],
    typeIntervalCounter: 0,
    typeInterval: false,
    init: function() {
        accessCountimer = setInterval(function() {
            Typer.updLstChr();
        }, 500);
        $.get(Typer.file, function(data) {
            Typer.text = data;
        });
    },
    content: function() {
        return $("#console").html();
    },
    write: function(str) {
        $("#console").append(str);
        return false;
    },
    removeText: function() {
        if (Typer.text) {
            Typer.index = (Typer.index > 0) ? Typer.index - Typer.speed * 2 : 0;
            Typer.addText(event);
        }
    },
    achievementGet: function() {
        var snd = new Audio("../ASSETS/achievements/AchievementUnlocked.mp3");
        snd.play();
        $('.box').animate({
            'bottom': '0px'
        }, 200);
        $(".box").delay(3200).animate({
            'bottom': '-100px'
        }, 200);
    },
    addTextAuto: function(key) {
        Typer.writeCount++;
        if (Typer.text) {
            if (Typer.index <= 0) {
                $("#console").html('');
            }
            Typer.index = Typer.index % Typer.text.length
            var cont = Typer.content();
            if (cont.substring(cont.length - 1, cont.length) == "_")
                $("#console").html($("#console").html().substring(0, cont.length - 1));
            var text = Typer.text.substr(Typer.index, Typer.speed)
            var rtn = new RegExp("\n", "g");
            var rtt = new RegExp("\\t", "g");
            text = text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;");
            $("#console").append(text);
            var usedTags = new RegExp("<img.*?>", "g"),
                systemTags = new RegExp("{(.*?)}", "g");
            var foundTag = usedTags.exec(Typer.text.substring(Typer.index)),
                foundSystemTag = systemTags.exec(Typer.text.substring(Typer.index));
            if (foundTag instanceof Array && foundTag.index <= Typer.speed) {
                Typer.index += foundTag.index + foundTag[0].length;
                $("#console").append(foundTag[0]);
            } else if (foundSystemTag instanceof Array && foundSystemTag.index <= Typer.speed) {
                Typer.index += foundSystemTag.index + foundSystemTag[0].length;
                $("#console").append(foundSystemTag[1]);
            } else Typer.index += Typer.speed;
            $('body').scrollTop($("#console").height());
            window.scrollBy(0, 50);
        }
        if (key.preventDefault && key.keyCode != 122) {
            key.preventDefault()
        };
        if (key.keyCode != 122) {
            key.returnValue = false;
        }
    },
    updLstChr: function() {
        var cont = this.content();
        if (cont.substring(cont.length - 1, cont.length) == "_")
            $("#console").html($("#console").html().substring(0, cont.length - 1));
        else
            this.write("_");
    },
    addText: function(key) {
        Typer.writeCount++;
        document.getElementById("LetterCount").innerHTML = "You typed: " + Typer.writeCount + " characters";
        getTypingSound = localStorage.getItem("typingsound") || '0';
        if (Typer.writeCount == 1500) {
            getAchievement = localStorage.getItem("lazy") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("lazy", "1");
                document.getElementById("achievementname").innerHTML = "Lazy College Senior";
                document.getElementById("icon").src = "../ASSETS/achievements/lazycollegesenior.png";
                document.getElementById("getAchievement1").innerHTML = "<img title='Lazy&#13;Type 1500 Characters' src=\"../ASSETS/achievements/progress/lazy/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 3000) {
            getAchievement = localStorage.getItem("shakespeare") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("shakespeare", "1");
                document.getElementById("achievementname").innerHTML = "Settle down Shakespeare";
                document.getElementById("icon").src = "../ASSETS/achievements/shakespeare.png";
                document.getElementById("getAchievement2").innerHTML = "<img title='Shakespeare&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/shakespeare/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 8000) {
            getAchievement = localStorage.getItem("dostoyevsky") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("dostoyevsky", "1");
                document.getElementById("achievementname").innerHTML = "Woah there Dostoyevsky";
                document.getElementById("icon").src = "../ASSETS/achievements/dostoyevsky.png";
                document.getElementById("getAchievement3").innerHTML = "<img title='Dostoyevsky&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/dostoyevsky/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 14000) {
            getAchievement = localStorage.getItem("aynrand") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("aynrand", "1");
                document.getElementById("achievementname").innerHTML = "Keep it up Ayn Rand";
                document.getElementById("icon").src = "../ASSETS/achievements/aynrand.png";
                document.getElementById("getAchievement4").innerHTML = "<img title='Ayn Rand&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/aynrand/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 20000) {
            getAchievement = localStorage.getItem("monkeys") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("monkeys", "1");
                document.getElementById("achievementname").innerHTML = "1000 Monkeys typing";
                document.getElementById("icon").src = "../ASSETS/achievements/1000monkeys.png";
                document.getElementById("getAchievement5").innerHTML = "<img title='1000 Monkeys, 1000 Typewriters&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/monkeys/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 50000) {
            getAchievement = localStorage.getItem("watson") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("watson", "1");
                document.getElementById("achievementname").innerHTML = "You are IBM Watson";
                document.getElementById("icon").src = "../ASSETS/achievements/ibmwatson.png";
                document.getElementById("getAchievement6").innerHTML = "<img title='IBM Watson&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/watson/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 100000) {
            getAchievement = localStorage.getItem("celestia") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("celestia", "1");
                document.getElementById("achievementname").innerHTML = "You are Celestia";
                document.getElementById("icon").src = "../ASSETS/achievements/celestia.png";
                document.getElementById("getAchievement7").innerHTML = "<img title='Princess Celestia&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/celestia/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 1000000) {
            getAchievement = localStorage.getItem("impossibru") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("impossibru", "1");
                document.getElementById("achievementname").innerHTML = "IMPOSSIBRU";
                document.getElementById("icon").src = "../ASSETS/achievements/impossibru.png";
                document.getElementById("getAchievement8").innerHTML = "<img title='IMPOSSIBRU&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/impossibru/1.png\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (Typer.writeCount == 1000000) {
            getAchievement = localStorage.getItem("hax") || '0';
            if (getAchievement == 0) {
                localStorage.setItem("hax", "1");
                document.getElementById("achievementname").innerHTML = "HAAAAAAAAAAX";
                document.getElementById("icon").src = "../ASSETS/achievements/hax.gif";
                document.getElementById("getAchievement9").innerHTML = "<img title='HAAAAAAAX&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/hax/1.gif\">";
                Typer.achievementGet();
            } else {
                return undefined;
            }
        }
        if (key.keyCode == 109) {
            Typer.accessCount++;
            if (Typer.accessCount >= 1) {
                Typer.makeAccess();
            }
        } else if (Typer.text) {
            if (Typer.index <= 0) {
                $("#console").html('');
            }
            Typer.index = Typer.index % Typer.text.length
            var cont = Typer.content();
            if (cont.substring(cont.length - 1, cont.length) == "_")
                $("#console").html($("#console").html().substring(0, cont.length - 1));
            var text = Typer.text.substr(Typer.index, Typer.speed)
            var rtn = new RegExp("\n", "g");
            var rtt = new RegExp("\\t", "g");
            text = text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;");
            $("#console").append(text);
            var usedTags = new RegExp("<img.*?>", "g"),
                systemTags = new RegExp("{(.*?)}", "g");
            var foundTag = usedTags.exec(Typer.text.substring(Typer.index)),
                foundSystemTag = systemTags.exec(Typer.text.substring(Typer.index));
            if (foundTag instanceof Array && foundTag.index <= Typer.speed) {
                Typer.index += foundTag.index + foundTag[0].length;
                $("#console").append(foundTag[0]);
            } else if (foundSystemTag instanceof Array && foundSystemTag.index <= Typer.speed) {
                Typer.index += foundSystemTag.index + foundSystemTag[0].length;
                $("#console").append(foundSystemTag[1]);
            } else Typer.index += Typer.speed;
            $('body').scrollTop($("#console").height());
            window.scrollBy(0, 50);
        }
        if (key.preventDefault && key.keyCode != 122) {
            key.preventDefault()
        };
        if (key.keyCode != 122) {
            key.returnValue = false;
        }
    },
    updLstChr: function() {
        var cont = this.content();
        if (cont.substring(cont.length - 1, cont.length) == "_")
            $("#console").html($("#console").html().substring(0, cont.length - 1));
        else
            this.write("_");
    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
        startTime()
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}