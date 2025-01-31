var height = 6; ////kung ilang beses pwedeng hulaan ung word
var width = 5; //kung ilang letters yung nasa word

var row = 0; //yung guess like isang row
var col = 0; //yung pwesto ng letter

var gameOver = false;
var wordList = ["gamay", "katas", "lapis", "tukoy", "dahon", "lakas", "lanta", "pinto", "patag", "banal", "bilog", "salot", "bango", "hapdi", "itlog", "hayop", "hiram", "bahay", "bagay", "gabay", "himas", "tinig", "galit", "himig", "lunti", "ampon", "agham", "alpas", "bagyo", "balot", "bukod", "dakot", "gabok", "hilom", "hinto", "idolo", "kabog", "lahat", "sopas", "dapat", "patag", "tapis", "kanta", "sarap", "hapas", "tubig", "kamay", "likha", "mukha", "pusok", "sigaw", "sukal", "tanod", "yakap", "banda", "bigay", "buhay", "ganda", "ganti", "gigil", "hapis", "husga", "kamot", "kulog", "laban", "lakas", "lamig", "linaw", "lipad", "mahal", "yugto", "pilak", "upuan", "tubig", "pukaw", "talim", "gapos"]

var guessList = ["hubad", "gamay", "kanto", "bigay", "bayag", "giliw", "dilig", "bulag", "bukal", "kupal", "banal", "topak", "lapag", "lapis", "bayaw", "galit", "libog", "batay", "patis", "kanta", "sikat", "sakit", "pista", "buwan", "puno", "pinto", "banta", "tamat", "laban", "puno", "santa", "tahon", "pinta", "sinta", "lutas", "lata", "lapan", "pinto", "sopas", "dapat", "patag", "tapis", "kanta", "sarap", "hapas", "tubig", "kamay", "turan", "pinto", "yapos", "batik", "salat", "bingo", "lamba", "balah", "kalis", "basil", "halas", "tagpi", "latch", "panas", "sirao", "lipad", "patag", "tabas", "tufas", "vagas", "sikat", "sinap", "hasik", "taong", "bayan", "sabak", "sinta", "galip", "abito", "tubig", "tangy", "galit", "lapis", "minta", "hindi", "tamad", "pabil", "bikal", "sipit", "kabid", "katip", "bukas", "talas", "sarap", "tahas", "tapas", "salad", "halas", "lapad", "bopis", "gapon", "hiyas", "hapan", "tikal", "balis", "labis", "gagas", "tapis", "tanis", "tapir", "bilas", "galas", "tapat", "sakas", "salay", "palah", "katas", "lahad", "sulat", "bikas", "siyas", "tapis", "lanta", "tigas", "tapis", "tufas", "lugan", "bakat", "sikas", "panas", "sitan", "hulas", "saing", "balas", "yapis", "paksi", "sares", "kusis", "talon", "gitas", "tabis", "hulas", "soslo", "yakal", "kapit", "lapis", "kabit", "sitas", "sila", "sila", "sitas", "balas", "gitas", "halas",
    "alway", "salot", "bango", "bilog", "bukas", "bukas", "dahon", "dapat", "hugas", "hapat", "hapo", "hataw", "inain", "kalas", "kanto", "katas", "kendi", "lakas", "lapis", "lakas", "laban", "lanta", "matas", "mayo", "mista", "masid", "masin", "patak", "patag", "pinta", "pitas", "pinto", "pilos", "pinto", "salad", "sarap", "sakit", "sakit", "salat", "sikat", "sisiw", "sinta", "sarap", "sigas", "tapas", "tapas", "tapos", "tinta", "tangy", "tabas", "tahid", "tulak", "tukat", "tawas", "talas", "takda", "talim", "tulod", "talon", "tulas", "takat", "tubal", "tatas", "talon", "tinta", "talik", "tulip", "tugma", "tahal", "tulay", "takaw", "tunga", "tugod", "wakas", "wagas", "wawas", "wakat", "wapis", "walas", "walis", "yapo", "yakal", "yapos", "yapan", "yapis", "yakap", "yatos", "yapon", "yakal", "takda", "talag", "habol", "hahas", "hakas", "halas", "lapat", "litas", "labas", "ladya", "katas", "kula", "baba", "kamay", "kapwa", "matal", "takam", "tupad", "tanis", "tulos", "tamis", "tao", "tamat", "bomba", "sarap", "kalam", "lagas", "pahar", "paris", "gusto", "laban", "lamas", "limos", "pako", "gamit", "apoy", "sugo", "panis",
    "tatay", "bahay", "butas", "tubig", "laban", "sulat", "gatas", "bukas", "bitin", "tulog", "halik", "sipag", "pinto", "libro", "hagis", "gupit", "hangin", "sakit", "sulit", "kanta", "galaw", "sagot", "tamis", "tinig", "bayad", "kahon", "hindi", "bilog", "sabon", "balik", "himig", "hapag", "bilis", "halos", "putik", "saksi", "pusod", "tropa", "tukso", "gamit", "sundo", "tukod", "daloy", "patal", "dapit", "lumik", "pukaw", "tabas", "lakas", "gamot", "durog", "palda", "sampa", "damit", "laban", "sipon", "sibat", "balat", "pugon", "tikoy", "bitag", "sulat", "sabog", "buhay", "likod", "hilaw", "kilay", "hapdi", "bilad", "salat", "sulat", "sakit", "balde", "sampa", "linis", "tulay", "suntok", "pangan", "buhol", "pasok", "tabak", "pakpak", "kabis", "ligaw", "tinig", "dalas", "basag", "tagpo", "gulay", "tapon", "hubog", "tusok", "laman", "simoy", "tukod", "patay", "daloy", "pilak", "bayag", "lukot", "sibol", "tamod", "limot", "lukso", "sipit", "basyo", "hawak", "pugad", "pasan", "sapin", "takip", "subok", "hawla", "kamay", "butas", "pasma", "sipol", "tikis", "luhod", "kulay", "dikit", "usok", "sabik", "alpas", "kabog", "tunog", "hiwas", "lunod", "asido", "layaw", "abono", "batid", "pader", "palay", "simba", "lamig", "hiwat", "sinta", "hugas", "bulak", "tatak", "sinag", "patak", "bayaw", "salub", "kagat", "hulog", "kalay", "tiyag", "usisa", "iwang", "liyab", "tagay", "dasal", "patol", "buhat", "sindi", "higop", "dagan", "hagup", "suyod", "singk", "talas", "kitid", "dagit", "sipag", "sibat", "sayad", "punas", "ibayo", "hibla", "lusog", "walis", "kulub", "lubid", "takbo", "humal", "bugaw", "pakan", "hugis", "tolda", "paksi", "sulat", "tamby", "pakin", "subay", "labas", "lukob", "buhos", "lagan", "tinig", "lihim", "higad", "tapik", "duhan", "kanal", "piliw", "bukas", "batid", "yakap", "baliw", "patis", "nanay", "tatay", "patas", "katas", "hapdi", "halik", "hilot", "hapag", "gilas", "lumpo", "hayop", "tanga", "puday", "itlog", "hiram", "bahay", "bagay", "gabay", "himas", "aslag", "galit", "himig", "lunti", "ampon", "agham", "alpas", "bagyo", "balot", "bukod", "dakot", "gabok", "hilom", "hinto", "idolo", "kabog", "lahat", "likha", "mukha", "pusok", "sigaw", "sukal", "tanod", "yakap", "banda", "bigay", "buhay", "ganda", "ganti", "gigil", "hapis", "husga", "kamot", "kulog", "laban", "lakas", "lamig", "linaw", "lipad", "mahal", "yugto", "pilak", "upuan", "tubig", "pukaw", "talim", "gapos"]

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
console.log(word);

window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
    console.log(guess);

    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = "Umulit muli";
        document.getElementById("answer").style.color = "white";
        return;
    }
    
    //start processing guess
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; //deduct the letter count
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    console.log(letterCount);
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //start new row
    col = 0; //start at 0 for new row
}