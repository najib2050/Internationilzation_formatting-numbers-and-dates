const number=123456.789;
//number formatting
const num = new Intl.NumberFormat('en-us').format(number) 
const num2=new Intl.NumberFormat("de-De").format(number)

console.log(num)  //"123,456.789"
console.log(num2) //"123.456,789"
//curency formatting
const enUsCurrency= new Intl.NumberFormat("en-us", {style:"currency", currency:"USD"}).format(number)
console.log(enUsCurrency) //"$123,456.79"
const jCurrency= new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(number)
console.log(jCurrency) //"￥123,457"
const kenyanCurrency=new Intl.NumberFormat("EN-KE",{style:"currency", currency:"KES"}).format(number)
console.log(kenyanCurrency) //"Ksh 123,456.79"
const somaliCurrency= new Intl.NumberFormat("en-so",{style:"currency", currency:"SOS"}).format(number)
console.log(somaliCurrency) //"SOS 123,457"
// Date format
const date= new Date()
console.log(date)
const usDate=new Intl.DateTimeFormat("en-us").format(date)
console.log(usDate) //"9/8/2024"
// relative time formatting rtf
const rtf=new Intl.RelativeTimeFormat("en",{numeric:"auto"})
console.log(rtf.format(-1,"day")) //"yesterday"
console.log(rtf.format(-2,"day")) //"2 days ago"
console.log(rtf.format(-3,"day")) //""3 days ago""

// plural rules
 const pr=new Intl.PluralRules('en-us')
 console.log(pr.select(1)) //"one"
console.log(pr.select(2)) //"other"
console.log(pr.select(3)) //"other"