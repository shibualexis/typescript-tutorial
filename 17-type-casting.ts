export{}

const inputEl1 = document.querySelector("#inputEl") as HTMLInputElement;
inputEl1.value = "Test";

const inputEl2:HTMLInputElement = document.querySelector("#inputEl") as HTMLInputElement;
inputEl2.value = "Test";


interface ErrorContainer{
    [prop:string]:string | number
}

const errorBag: ErrorContainer = {
    "errorMsg":"Page Not Found!",
    "errorCode":404
}