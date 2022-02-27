var uangPembeli = parseInt(prompt("Masukan uang kamu "));
var totalHarga  = parseInt(prompt("Masukan jumlah total blanjaan kamu"));
var hasil       = uangPembeli - totalHarga;

if (uangPembeli < totalHarga) {
  alert("Uang kamu kurang " + hasil + "rupiah silahkan masukan kembali uang kamu");
  var keputusan = confirm("Tambah Atau tidak?");
  if (keputusan == true) {
    var uangPembeli2 = parseInt(prompt("Masukan kembali uang kamu \n (total harga barang kamu = " + totalHarga + "rupiah)" ));
    var hasil2 = uangPembeli2 - totalHarga;
    if (uangPembeli2 > totalHarga) {
      alert("Oke kembalian kamu lagi " + hasil2 + "rupiah");
    }else if(uangPembeli2 == totalHarga){
      alert("Uang kamu sama dengan total harga blanjaan kamu  \n (" + uangPembeli2 +"rupiah - " + totalHarga + "rupiah = " + hasil2+ "rupiah)");
    }else{
      alert("Oke kamu tidak dapat melakukan pembelian ini");
    }
  }else if(keputusan == false){
    alert("Terimakasih Dan silahkan pergi \n  Ini kami kembalikan uang anda sejumlah " + uangPembeli + "rupiah");
  }
}else if(uangPembeli == totalHarga){
  alert("Uang kamu sama dengan total harga blanjaan kamu  \n (" + uangPembeli + "rupiah - " + totalHarga + "rupiah = " + hasil+ "rupiah)");
}else{
  alert("Kembalian uang kamu lagi " + hasil + "rupiah \n (" + uangPembeli + "rupiah - " + totalHarga + "rupiah = " + hasil+ "rupiah)");
}
document.getElementById('text').innerHTML = "Terimakasih telah mencoba mesin kami";
document.getElementById('emot').innerHTML =
"😇🙏"
document.getElementById('copy-right').innerHTML =
"©2022-Bayu Code"