/*let sayi1=17;
let sayi2=15;

let cikarma=sayi1-sayi2;
let toplama=sayi1+sayi2;
let carpma=sayi1*sayi2;
let bolme=sayi1/sayi2;
let mod=sayi1%sayi2;
let us_alma=sayi1**sayi2;

document.writeln("<h3>BASİT HESAP MAKİNESİ</h3><br>",
    "<b>Birinci Sayı: 17<br>İkinci Sayı: 15</b><br>",                                                                                                                                                               
    "Toplama işleminin sonucu: ",toplama,"<br>",
    "Çıkarma işleminin sonucu: ",cikarma,"<br>",
    "Çarpma işleminin sonucu: ",carpma,"<br>",
    "Bölme işleminin sonucu: ",bolme,"<br>",
    "Mod alma işleminin sonucu: ",mod,"<br>",
    "Üs alma işleminin sonucu: ",us_alma,"<br>",
    "Aşağı yuvarlama işleminin sonucu: ",Math.floor(sayi1),"<br>",                                                                  
    "Yukarı yuvarlama işleminin sonucu: ",Math.ceil(sayi1),"<br>",
    "Yakın sayıya yuvarlama işleminin sonucu: ",Math.round(sayi1),"<br>"

);  */                       

/*let bulunanPara=1000;
let yatırılanPara=500;
let fatura=200;
let bakiye=bulunanPara+yatırılanPara-fatura;
bakiye*=1.1;
document.writeln("Bakiye: 1000<br>","Efenin hesaba yatırdığı para:500<br>","Fatura: 200<br>",
    "Efenin son durumdaki parası: ",bakiye);*/

/*let yas=35;
let maas=35000;
let krediNotu=750;
let kriteler=(yas>=20 && maas>=25000 && krediNotu>=700);
document.writeln(`Temel kriterlere uygunluk:${temelKriterler}`+"<br>");
document.writeln("Temel Kriterlere Uygun");*/

/*let ad="Beyda";
let soyad="Öztürk";
let memleket="Diyarbakır";
let musteriProfili=`
    Ad Soyad: ${ad}${soyad}<br>
    Memleket: ${memleket}<br>
    Hesap Numarası: ${"MUST"+"-"+ad.substring(0,2).toUpperCase()+"2026"}
    `;
    document.writeln(musteriProfili);*/

    let ad="İrem";
    let soyadi="Deneme";
    let sifre=123456;
    let durumu=true;
    let email="İdeneme@gelisim.edu.tr"
    let ekbilgi=null;

    document.writeln("<h3><u>Kayıt Bilgisi Öğrenme</u></h3><br>",
        "Adı: ",ad,"-",typeof(ad),"<br>",
        "Soyadı: ",soyadi,"-",typeof(soyadi),"<br>",
        "Şifre: ",sifre,"-",typeof(sifre),"<br>",
        "Durumu: ",durumu,"-",typeof(durumu),"<br>",
        "E-maili: ",email,"-",typeof(email),"<br>",
        "Ek Bilgi: ",ekbilgi,"-",typeof(ekbilgi),"<br>"
    )