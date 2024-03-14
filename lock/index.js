const password = 'ryan';

function initialize() {
    console.log('Locking in 10 seconds...');
    setTimeout(() => {
        console.log('Locked.');
        document.documentElement.addEventListener('mouseleave', () => leftWindow());
        document.documentElement.addEventListener('mouseenter', () => returnedToWindow());
    }, 10000);
    document.getElementById('fullscreen').addEventListener('click', () => {
        openFullscreen();
    });
}

initialize();

function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function getPasswordValue() {
    document.getElementById('password').value;
}

function leftWindow() {
    if (document.getElementById('password').value === password) {
        return;
    }
    const timestampDate = new Date();
    const timestamp = formatTimeStamp(timestampDate.getTime())
    console.log('Mouse left window at: ', timestamp)
    addToLog('Mouse left window at ' + timestamp, timestampDate)
}

function returnedToWindow() {
    if (verifyPassword()) {
        return;
    }
    const timestampDate = new Date();
    const timestamp = formatTimeStamp(timestampDate.getTime())
    console.log('Mouse returned to window at: ', timestamp)
    addToLog('Mouse returned to window at ' + timestamp, timestampDate)
}

function formatTimeStamp(time, format = 'full') {
    let formatted;
    if (format === 'full') {
        formatted = new Date(parseFloat(time)).toLocaleDateString(getLocale(), {
            hour: "2-digit",
            minute: "2-digit"
        });
    } else if (format === 'full_with_seconds') {
        formatted = new Date(parseFloat(time)).toLocaleDateString(getLocale(), {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    } else if (format === 'date') {
        formatted = new Date(parseFloat(time)).toLocaleDateString(getLocale(), {
            hour: "2-digit",
            minute: "2-digit"
        }).split(', ')[0];
    } else if (format === 'time') {
        formatted = new Date(parseFloat(time)).toLocaleDateString(getLocale(), {
            hour: "2-digit",
            minute: "2-digit"
        }).split(', ')[1];
    } else if (format === 'chart') {
        let d = new Date(time);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        formatted = [year, month, day].join('-');
    }
    return formatted;
}

function getLocale() {
    //For some reason typescript doesn't have userLanguage as a property of navigator
    //See: https://techoverflow.net/2018/02/06/how-to-fix-error-ts2339-property-userlanguage-does-not-exist-on-type-navigator/
    //@ts-ignore
    return navigator.language || navigator.userLanguage;
}

function verifyPassword() {
    if (document.getElementById('password').value === password) {
        return true;
    }
    return false;
}

function addToLog(message, timestamp) {
    let existingLog = localStorage.getItem('ryansecuritylog');
    if (existingLog) {
        existingLog = JSON.parse(existingLog);
    } else {
        existingLog = [];
    }
    existingLog.push({ message: message, timestamp: timestamp });
    localStorage.setItem('ryansecuritylog', JSON.stringify(existingLog));
}

function getLog() {
    if (!verifyPassword()) {
        console.log('Permission denied.');
        return;
    }
    let existingLog = localStorage.getItem('ryansecuritylog');
    if (existingLog) {
        existingLog = JSON.parse(existingLog);
    } else {
        existingLog = [];
    }
    console.log(existingLog)
}

function clearLog() {
    if (!verifyPassword()) {
        console.log('Permission denied.');
        return;
    }
    localStorage.removeItem('ryansecuritylog');
    console.log('Cleared log.');
}

async function sendSMS() {
    const accountSid = 'AC7cafc22942dbbe5131a3db1f48eb50ea';
    const authToken = '274f4aaad47e8afa676cb781c489ef87';
    const auth = {
        username: accountSid,
        password: authToken
    }
    try {
        const newSMS = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
            method: 'POST',
            auth: auth,
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ' + ethereumjs.Buffer.Buffer.from(`${accountSid}:${authToken}`).toString('base64')
            },
            body: JSON.stringify({
                to: '+19147150900',
                messagingServiceSid: 'MG0a5d4ecb956704d9c73d1e54e180daec',
                body: 'Hello world!'
            })
        });
        console.log('newsms: ', newSMS)
    } catch (error) {
        console.log('Error sending SMS: ', error);
    }
}