const keyDownStatus = 159;
const keyUpStatus = 143;

let VF;
let staffDiv;
const synth = new Tone.Synth().toDestination();
let noteDisplayed = '';

function parseVexNote(note) {
    const split = note.split('/');
    return split[0] + split[1];
}

function drawRandomNote() {
    staffDiv.innerHTML = '';

    // Randomly choose clef
    const clefs = ["treble", "bass"];
    const clef = clefs[Math.floor(Math.random() * clefs.length)];

    const renderer = new VF.Renderer(staffDiv, VF.Renderer.Backends.SVG);
    renderer.resize(200, 120);
    const context = renderer.getContext();

    const stave = new VF.Stave(10, 10, 180);
    stave.addClef(clef).setContext(context).draw();

    // Set note range based on clef
    let notes, octaves;
    if (clef === "treble") {
        notes = ["C", "D", "E", "F", "G", "A", "B"];
        octaves = [4, 5];
    } else {
        notes = ["C", "D", "E", "F", "G", "A", "B"];
        octaves = [2, 3];
    }
    const noteLetter = notes[Math.floor(Math.random() * notes.length)];
    const octave = octaves[Math.floor(Math.random() * octaves.length)];

    let key = `${noteLetter}/${octave}`;
    const noteData = { clef: clef, keys: [key], duration: "q" };
    const note = new VF.StaveNote(noteData);

    if (Math.random() < 0.3) {
        const accidental = Math.random() < 0.5 ? "#" : "b";
        key = `${noteLetter}${accidental}/${octave}`;
        note.setKey(0, key);
        note.addAccidental(0, new VF.Accidental(accidental));
    }
    const parsedNote = parseVexNote(key);
    noteDisplayed = parsedNote;
    console.log(`Drawing note: ${parsedNote} (${clef} clef)`);
    VF.Formatter.FormatAndDraw(context, stave, [note]);
}

function displayNote(note) {
    const label = document.getElementById('note-label');
    if (label) {
        label.textContent = note
    };
}

function setNoteDisplayColor(color) {
    const label = document.getElementById('note-label');
    if (label) {
        label.style.color = color;
    }
}

function handleNoteIncorrect() {
    setNoteDisplayColor('red');
}

function handleNoteCorrect() {
    setNoteDisplayColor('green');
    drawRandomNote();
}

function checkNote(note) {
    if (noteDisplayed === note) {
        handleNoteCorrect();
    } else {
        handleNoteIncorrect('red');
    }
}

function playNote(note) {
    synth.triggerAttackRelease(note, "8n");
}

function initializeMidi() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

        function onMIDISuccess(midiAccess) {
            for (var input of midiAccess.inputs.values()) {
                input.onmidimessage = getMIDIMessage;
            }
        }
        function onMIDIFailure() {
            console.log('Could not access your MIDI devices.');
            alert('Could not access you MIDI devices. Please ensure your MIDI device is connected and try again.');
            return;
        }

        function getMIDIMessage(midiMessage) {
            const [status, noteNumber, velocity] = midiMessage.data;
            console.log(`Status: ${status}, Note Number: ${noteNumber}, Velocity: ${velocity}`);
            if (status === keyDownStatus && velocity > 0) { // Note on
                const note = Tone.Frequency(noteNumber, "midi").toNote();
                displayNote(note);
                setNoteDisplayColor(null);
                playNote(note);
                checkNote(note);
            }
        }
    } else {
        alert('This browser does not support WebMIDI. Please use a compatible browser like Chrome or Firefox.');
        return;
    }
}

function clearNoteDisplay() {
    const label = document.getElementById('note-label');
    if (label) {
        label.textContent = '';
        label.style.color = '';
    }
}

function initializeNoteDisplay() {
    VF = Vex.Flow;
    staffDiv = document.getElementById("staff");
    drawRandomNote();
}

function nextButtonClicked() {
    drawRandomNote();
    clearNoteDisplay();
}

function answerButtonClicked() {
    alert(`The note is: ${noteDisplayed}`);
}

function chartButtonClicked() {
    // toggle displaying the ./chart.png image in the #chart div
    const chartDiv = document.getElementById('chart');
    if (chartDiv.style.display === 'none' || chartDiv.style.display === '') {
        chartDiv.style.display = 'block';
        const img = document.createElement('img');
        img.src = './chart.png';
        img.alt = 'Note Chart';
        chartDiv.innerHTML = ''; // Clear previous content
        chartDiv.appendChild(img);
    } else {
        chartDiv.style.display = 'none';
    }
}

function initializeApp() {
    initializeMidi();
    initializeNoteDisplay();
    document.getElementById('next-button').addEventListener('click', () => {
        nextButtonClicked();
    });
    document.getElementById('answer-button').addEventListener('click', () => {
        answerButtonClicked();
    });
    document.getElementById('chart-button').addEventListener('click', () => {
        chartButtonClicked();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    initializeApp();
    // Add keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextButtonClicked();
        } else if (e.key.toLowerCase() === 'a') {
            answerButtonClicked();
        } else if (e.key.toLowerCase() === 'c') {
            chartButtonClicked();
        }
    });
});