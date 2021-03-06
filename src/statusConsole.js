const colors = require('colors');

const StatusConsole = function (message, file, line, styles, type) {
    const params = [];
    let fileInfo = '';

    // If no line or file are given an error will be triggered
    if (!message || (!file && line) || (file && !line)) {
        console.trace(
            `\n${'STATUS-CONSOLE >> '.bgRed} ${'message'.magenta}, ${'file'.magenta} or ${'line'.magenta} parameter missing. ${' syntax: function(message, file, line) '.inverse} \n`
         )
        return;
    } else if (file && line) {
        params.push(file, line);
        fileInfo = `${file}:${String(line)}`.underline
    }
    params.push(message);

    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] !== 'string') {
            console.trace(' STATUS-CONSOLE >> '.bgRed.bold, `Every parameters must be a string. \n`.bold)
            return;
        }
    }

    const messageInfo = ` ${type.toUpperCase().bold} ${fileInfo} >> `;
    colors.setTheme({
        custom: [...styles]
    });
    console.log(`${messageInfo.custom} ${message}`);
}

StatusConsole.success = function (message, file, line) {
    new StatusConsole(message, file, line, ['black', 'bgGreen'], 'success')
}

StatusConsole.error = function (message, file, line) {
    new StatusConsole(message, file, line, ['white', 'bgRed'], 'error')
}

StatusConsole.warn = function (message, file, line) {
    new StatusConsole(message, file, line, ['black', 'bgYellow'], 'warn')
}

StatusConsole.info = function (message, file, line) {
    new StatusConsole(message, file, line, ['black', 'bgWhite'], 'info')
}

module.exports = StatusConsole;