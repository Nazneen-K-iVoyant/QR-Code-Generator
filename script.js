// let imgBox = document.getElementById("imgBox") as HTMLDivElement;
// let qrImage = document.getElementById("qrImage") as HTMLImageElement | null; // Use union type to include null.
// let qrText = document.getElementById("qrText") as HTMLInputElement;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// function generateQR() {
//     if (qrImage && (qrText as HTMLInputElement).value.length>0) {
//         (qrImage as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (qrText as HTMLInputElement).value;
//         (imgBox as HTMLDivElement).classList.add("show-img")
//     }
// }
// function generateQR(){
//     fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText)
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Failed ti fetch QR Code")
//         } return response.json()
//     })
//     .then(data=>{
//         resolve(data)
//     })
// }
var imgBox = document.getElementById("imgBox");
var qrImage = document.getElementById("qrImage");
var qrText = document.getElementById("qrText");
function generateQR() {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, _c, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 4, , 5]);
                    if (!(qrImage && qrText && qrText.value.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value)];
                case 1:
                    response = _d.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    _a = qrImage;
                    _c = (_b = URL).createObjectURL;
                    return [4 /*yield*/, response.blob()];
                case 2:
                    _a.src = _c.apply(_b, [_d.sent()]);
                    imgBox.classList.add("show-img");
                    _d.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _d.sent();
                    console.error("Error generating QR code:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
