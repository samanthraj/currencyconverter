let countryList = {   AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};
let x = "usd";
let z = "inr";
changeflag();

let given = document.querySelector("#typed");
  let allselect = document.querySelectorAll(".dropdown select")
for(select of allselect){
 

   for(con in countryList){
    let options = document.createElement("option")
    options.innerText = con;
    options.value = con;
   

select.append(options);


   }


}



async function work(){
let  result =  changeflag()
let x =  result[0];
console.log(result);
let z =  result[1];
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${x}/${z}.json`;
let promise = await fetch(url);
console.log(promise)
let data = await promise.json();
console.log(data);
let erate = data.inr;

let curvalue =  erate*(given.value);
console.log(curvalue);
let output = document.querySelector("#output")
output.innerText= curvalue;

  
}

btn = document.querySelector("#exchange")

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    work();
   

  });
  
function changeflag(){

   
   let f = "AED";
   let k ="AED";
   
   
 
let left = document.querySelector(".left select")

left.addEventListener("change",()=>{
    console.log("changed");
    let f = countryList[left.value];
    let dynamicurl1  = `https://flagsapi.com/${f}/shiny/64.png`;
    console.log(f);

    x = left.value.toLowerCase()
    console.log(x)
    
let fsrc = document.querySelector("#firstsrc")
 let link1 = fsrc.setAttribute("src", dynamicurl1)

})
k = "AED";

let right = document.querySelector(".right select");

right.addEventListener("change",()=>{
    let k = countryList[right.value];
    let url2 =          `https://flagsapi.com/${k}/shiny/64.png`; 
   
    let ssrc = document.querySelector("#ssrc");
 link2 = ssrc.setAttribute("src",url2);
 console.log(ssrc.getAttribute("src"))
 let z = right.value.toLowerCase();
  
})
return[ x,z]
}









