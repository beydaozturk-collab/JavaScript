//let isim=prompt("İsiminizi giriniz:");
//console.log("Merhaba "+isim);
//document.writeln("<h1>Merhaba "+isim +"</h1>");

//let sayi1=prompt("İlk sayıyı giriniz;");
//let sayi2=prompt("İkinci sayıyı giriniz:");
//let toplam=Number(sayi1)+Number(sayi2);
//document.writeln("Cevap: "+ toplam);

//const dogruSifre="1234";
//let girilenSifre=prompt("Şifrenizi giriniz:");
//document.writeln("<h1>Girdiğiniz Şifre: " + girilenSifre +"</h1>");
//document.writeln("<h1>Doğru Şifre: " + dogruSifre +"</h1>");

let kategori=prompt("Hangi kategoride ürün alacaksınız?");
let urunAdi=prompt("Alacağınız ürünün adı nedir?");
let aciklama=prompt("Açıklama yazınız:");
let adet=prompt("Kaç adet alacaksınız?");
let fiyat=prompt("fiyat:");
let araToplam=Number(adet)*Number(fiyat);
let kdv1=0.18;
let kdv=Number(araToplam)*Number(kdv1);
let kargo=49;
let toplam=Number(araToplam)+Number(kdv)+Number(kargo);
document.writeln("<strong>Kategori:</strong>" +kategori +"</br>" );
document.writeln("<strong>Ürünün Adı:</strong>" +urunAdi +"</br>");
document.writeln("<strong>Kaç Adet Alınacak:</strong>" +adet +"</br>");
document.writeln("<hr>");
document.writeln("<strong>Kargo ücreti:</strong>" +kargo +"</br>" );
document.writeln("<strong>Eklenecek KDV:</strong>" +kdv1  +"</br>");
document.writeln("<strong> Ödenecek Tutar:</strong>" +toplam  +"</br>");