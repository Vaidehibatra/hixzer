fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

// fetch("./footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   });


// function myFun() {
//   let a = document.getElementById('headerimg1');
//   let b = document.getElementById('headerimg2');
  
//   if (a.src.includes('Sidebar link icon.png') && b.src.includes('file text.png')) {
//       a.src = './img/Sidebar2 link icon.png';
//       b.src = './img/file text2.png';
//   } else {
//       a.src = './img/Sidebar link icon.png';
//       b.src = './img/file text.png';
//   }
// }