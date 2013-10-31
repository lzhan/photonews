
/*jslint nomen:true, node:true, plusplus:true*/

var CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g),
    DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g);

function camelize(str) {
    return str.replace(CAMELIZE_REGEXP, function (match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
    }).replace(/^([A-Z])/, function (match, separator, chr) {
        return match.toLowerCase();
    });
}


function decamelize(str) {
    return str.replace(DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
}

function classify(str) {
    var parts = str.split("."),
        out = [],
        camelized,
        i,
        l;

    for (i = 0, l = parts.length; i < l; i++) {
        camelized = camelize(parts[i]);
        out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));
    }

    return out.join(".");
}

///////////////////////////////////////////////////////////////////////////////

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r&0x3 | 0x8);

        return v.toString(16);
    });
}

module.exports = {
    classify: classify,
    camelize: camelize,
    decamelize: decamelize,
    uuid: uuid
};
