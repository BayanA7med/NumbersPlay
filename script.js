// توليد رقم عشوائي
let randomNumber = Math.random();

// تحويل الرقم إلى نص وعرضه باللغة العربية
let arabicNumber = randomNumber.toLocaleString('ar-EG');

// عرض الرقم
console.log(arabicNumber);