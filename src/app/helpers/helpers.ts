export class Helpers {
    public static readonly emailValidationPattern = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    public static readonly dateValidationPattern = '^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$'
    // public static concatStrings(text: Array<string>) {
    //     let finalText = '';
    //     text.forEach(element => {
    //         finalText = finalText.concat(element);
    //     });
    //     return finalText;
    // }

    // // public static appendPhonePrefix(contactNumber: string) {
    // //     const prefix = '385';
    // //     const contactNumberWithPrefix = this.concatStrings([prefix, contactNumber]);
    // //     return contactNumberWithPrefix;
    // // }

    // // public static prettyPhoneNumber(phone: string) {
    // //     const space = ' ';
    // //     if (phone[0] !== '0') {
    // //         return phone.substring(0, 3) + space + phone.substring(3, 5) + space + phone.substring(5, 8) + space + phone.substring(8, phone.length);
    // //     }
    // //     return phone.substring(0, 2) + space + phone.substring(2, 5) + space + phone.substring(5, phone.length);
    // // }

    // // public static checkOib(oib: string) {
    // //     if (oib === null) {
    // //         return false;
    // //     }
    // //     if (oib.length !== 11) {
    // //         return false;
    // //     }
    // //     const b = parseInt(oib, 10);
    // //     if (isNaN(b)) {
    // //         return false;

    // //     }
    // //     let a = 10;
    // //     for (let i = 0; i < 10; i++) {
    // //         a = a + parseInt(oib.substr(i, 1), 10);
    // //         a = a % 10;
    // //         if (a === 0) {
    // //             a = 10;
    // //         }
    // //         a *= 2;
    // //         a = a % 11;
    // //     }
    // //     let controlNumber = 11 - a;
    // //     if (controlNumber === 10) {
    // //         controlNumber = 0;
    // //     }
    // //     return controlNumber === parseInt(oib.substr(10, 1), 10);
    // // }

}
