module.exports = function check(str, bracketsConfig) {
    switch (str.length % 2) {
        case 0:
            for (let i = str.length - 1; i >= 0; i--) {
                for (let j = 0; j < bracketsConfig.length; j++) {
                    if (str[i] == bracketsConfig[j][0] || str[i] == bracketsConfig[j][1]) {
                        let temp = bracketsConfig[j].join('')
                        str = str.replace(temp, '')
                    }
                }
            }
            if (str.length == 0)
                return true
            break;
    }
    return false
}

