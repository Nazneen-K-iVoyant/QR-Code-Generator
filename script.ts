// let imgBox = document.getElementById("imgBox") as HTMLDivElement;
// let qrImage = document.getElementById("qrImage") as HTMLImageElement | null; // Use union type to include null.
// let qrText = document.getElementById("qrText") as HTMLInputElement;

// function generateQR() {
//     if (qrImage && (qrText as HTMLInputElement).value.length>0) {
//         (qrImage as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (qrText as HTMLInputElement).value;
//         (imgBox as HTMLDivElement).classList.add("show-img")
//     }
// }


let imgBox = document.getElementById("imgBox") as HTMLDivElement;
let qrImage = document.getElementById("qrImage") as HTMLImageElement | null;
let qrText = document.getElementById("qrText") as HTMLInputElement;

async function generateQR() {
    try {
        if (qrImage && qrText && (qrText as HTMLInputElement).value.length > 0) {
            const response = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (qrText as HTMLInputElement).value);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            (qrImage as HTMLImageElement).src = URL.createObjectURL(await response.blob());
            (imgBox as HTMLDivElement).classList.add("show-img");
        }
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
}


/*
That can be used to store resources locally
- Imagine you have used a fetch api to pull some images or files and you want to keep reusing them but you dont want to go back to the server, so what you do is create an objectUrl which kind of creates a file locally in the storage in the browser storage and you can reference this in your application  to make more interactive user web application instead of going back to the server
*/