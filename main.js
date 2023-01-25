//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
  //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //document.getElementById("navbar").style.top = "0";
  //} else {
    //document.getElementById("navbar").style.top = "-50px";
  //}
//}//

$(function () {
  $('button').clickFireworks({

    // canvas id
    id: 'fireworks',

    // append canvas to where, default is body
    appendTo: 'body',

    // canvas z-index, make it higher than anything on the page
    zIndex: 1000

  });
});

const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'Python', 'git',
  'Bootstrap', 'Node.js', 'Tailwind CSS',
   'MySQL', 'VueJS', 'Photoshop', 'Blender',
];

var tagCloud = TagCloud('.content', myTags);

function nav(){
  document.querySelector("#navbarSupportedContent").classList.toggle("active")
}