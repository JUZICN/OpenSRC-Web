var count = localStorage.getItem("visitCount");
if (!count) {
  count = 1;
} else {
count = parseInt(count) + 1;
}
localStorage.setItem("visitCount", count);
var visitCountElement = document.getElementById("visit-count");
visitCountElement.innerHTML = "您已累计访问本站 " + count + " 次";