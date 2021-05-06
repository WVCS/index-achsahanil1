function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


function topfunction () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function(){hidefunction ()};

function hidefunction () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    document.getElementById("topbutton").style.display = "block";
  else { document.getElementById("topbutton").style.display = "none"; }
}
