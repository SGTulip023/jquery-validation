// Alphabet only with Serbian Latin letters
$.validator.addMethod("lettersonlySRBlatin", function (value, element) {
    return this.optional(element) || /(?![wxqyWXQY])^[a-zA-Z\u017D\u017E\u0160\u0161\u0110\u0111\u010C\u010D\u0106\u0107]+$/i.test(value);
}, "Samo slova abecede!");