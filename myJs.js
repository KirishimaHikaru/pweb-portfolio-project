  //Link navbar
function redirectToAbout() {
 window.location.href = 'about.html';
}
function redirectToIndex() {
 window.location.href = 'index.html';
}
  //Toggle picture
function toggle() {
  var element = document.getElementById("pic");
  if (element.style.display === "none") {
      element.style.display = "block"; // Tampilkan elemen
      const btn = document.querySelector("button");
      btn.innerHTML = "Hide<br>Picture";
    } else {
      element.style.display = "none"; // Sembunyikan elemen
      element.innerHTML = "Show!";
      const btn = document.querySelector("button");
      btn.innerHTML = "Show<br>Picture";
    }
}
  //Untuk memainkan sidebar
function showAside() {
  var accessor = prompt("Siapa yang mengakses ini?");
  if (accessor == "") {
    location.reload();
  }
  document.getElementById("samping").style.visibility = "visible";
  document.getElementById("moreInfoBtn").style.visibility = "hidden";
}
function closeNav(){
  document.getElementById("samping").style.visibility = "hidden";
  document.getElementById("moreInfoBtn").style.visibility = "visible";
}
  //Untuk menampilkan data kredensial
function gantinama() {
  document.getElementById("nama").innerHTML =
    "SALMAN ABDURROHMAN <br> AL FATHIN";
}
function gantinickname() {
  document.getElementById("nickname").innerHTML =
    "Known As 'Maman'";
}
function gantinim() {
  document.getElementById("nim").innerHTML =
    "2300018314";
}
function gantittl() {
  document.getElementById("ttl").innerHTML =
    "01 January 2006";
}
function ganticity() {
  document.getElementById("city").innerHTML =
    "YOGYAKARTA";
}
function gantiaddress() {
  document.getElementById("address").innerHTML =
    "Imogiri Selatan St., No. 5 Banguntapan, Bantul, DIY ";
}