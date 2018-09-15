module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];
    let template = {};

    for (let bracketsPair of bracketsConfig) {
        template[bracketsPair[0]] = bracketsPair[1];
    }

    for (let bracket of str) {
        let lastOpenBracket;

        if (bracket in template) {
            if (stack.length !== 0) {
                lastOpenBracket = stack[stack.length - 1];
                template[lastOpenBracket] == bracket ? (stack.pop()) : (stack.push(bracket));
            } else {
                stack.push(bracket);
            }

        } else {
            lastOpenBracket = stack[stack.length - 1];
            if (template[lastOpenBracket] == bracket) {
                stack.pop();
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }
    return true;
};
