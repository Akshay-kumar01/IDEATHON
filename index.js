function showHidden() {
    // i = 0;
    let items = document.getElementsByClassName("hidden");
    for (i = 0; i < items.length; i++) {
      items[i].classList.toggle("unhidden");
    }
    var arrow = document.getElementById("buttonArrow");
    arrow.classList.toggle("fa-chevron-down");
    arrow.classList.toggle("fa-chevron-up");
    var text = document.getElementById("elementText");
    if (text.innerHTML == "See More") {
      text.innerHTML = "See Less";
      // console.log(text.innerHTML);
    } else {
      text.innerHTML = "See More";
      // console.log(text.innerHTML);
    }
  }
  
  function liked(id) {
    var likeColor = document.getElementById(id);
    // var thumb = document.getElementById("likeicon")
    // likeColor.classList.toggle("btn");
    likeColor.classList.toggle("liked");
  }
  
  function more() {
    var item = document.getElementById("more");
    if (item.style.display == "block") {
      item.style.display = "none";
      moreLess.innerHTML = "Read More";
    } else {
      item.style.display = "block";
      moreLess.innerHTML = "Read Less";
    }
  }
  
  var index = 0;
  
  const Data = [
    {
      pfp: `https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
      name: "Rohan Singh",
      text:
        "Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolore incidunt ducimusin voluptates et quo magni voluptatum esse?Numquam unde rerum sapiente dicta excepturi.Recusandae quidem nemo minus doloremqueaccusamus?",
      likes: "78",
      data: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqp8kDJWL6H5tJS2_Cu0lP6BflkXH7YyUBfQ&usqp=CAU"
          class="picture">`
    },
    {
      pfp:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGxuUEX2iT0PAHOvg5iHxPg6q2MUx2kcRgg&usqp=CAU",
      name: "Arti Singh",
      text:
        "Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolore incidunt ducimusin voluptates et quo magni voluptatum esse?Numquam unde rerum sapiente dicta excepturi.Recusandae quidem nemo minus doloremqueaccusamus?",
      likes: "29",
      data: `<iframe width="560" height="315" src="https://www.youtube.com/embed/yTRTAenYbhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      pfp:
        "https://i.pinimg.com/736x/95/9e/0a/959e0a748e7b239b40d44c2d5cd1cbae.jpg",
      name: "PP-ParrotParadise",
      text:
        "Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolore incidunt ducimusin voluptates et quo magni voluptatum esse?Numquam unde rerum sapiente dicta excepturi.Recusandae quidem nemo minus doloremqueaccusamus?",
      likes: "29K",
      data: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Xs6vgwFKO-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
  ];
  
  function Template(element) {
    return `<div class="containerBox">
          <div class="top"><img
                          src="${element.pfp}"
                          alt="" class="pfp">
                  <h5 class="name"><a href="#" class="nameUd">${element.name}</a>
                  </h5>
                  <button class="tdots"><i class="fa fa-ellipsis-h"></i></button>
          </div>
          <p class="text">${
            element.text
          }<span id="more"></span><a onclick="more();"
                          style="text-decoration: none; color: blue; cursor: pointer;" id="moreLess">Read
                          More</a></p>
          ${element.data}
          <div><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                          class="like"><span class="likeTxt">${
                            element.likes
                          }</span></div>
          <hr>
          <div class="actionFlex">
                  <button class="btn" onclick="liked(this.id);" id="likeBtn${index++}">
                          <i class="fa fa-thumbs-o-up" id="likeIcon"></i> <b>Like</b>
                  </button>
                  <button class="btn">
                          <i class="fa fa-comment-o"></i><b>
                                  Comment</b>
                  </button>
                  <button class="btn">
                          <i class="fa fa-share-square-o"></i><b>
                                  Share</b>
                  </button>
          </div>
  </div> `;
  }
  // console.log(`${Data.map(catlogTemplate).join("")}`)
  document.getElementById("containerData").innerHTML = `${Data.map(Template).join(
    ""
  )}`;
  
  function genRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  var promoNum = genRand(0, 3);
  let promoSection = document.getElementById("promo");
  if (promoNum == 0) {
    promoSection.innerHTML = `<li><img src="https://scontent.fdel52-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/213500240_23847581715730126_8264936113505586491_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=67cdda&_nc_ohc=7W3WgAkYrQcAX9XlR8F&_nc_ht=scontent.fdel52-1.fna&oh=7fe321efbdaf425741923bd7f4120fd7&oe=60F8C2AE">How To Start Your Food Business Fro...</li>
  <li><img src="https://scontent.fdel52-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/186101677_6255049889601_1810786449573518094_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=67cdda&_nc_ohc=pfRTCvPljG8AX9zvphS&_nc_ht=scontent.fdel52-1.fna&oh=c950d4dec3714252ff0f31530084693f&oe=60F93CAE">Learn
          Character Design and ...</li>`;
  } else if (promoNum == 1) {
    promoSection.innerHTML = `<li><img src="https://scontent.fdel52-1.fna.fbcdn.net/v/t45.5328-4/c0.120.960.960a/p960x960/159517255_5374579349248996_3700873510111989516_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=c48759&_nc_ohc=GyvJvpOv0kQAX_IhIqe&_nc_ht=scontent.fdel52-1.fna&oh=24e14c1847bfc93b422e1d1610ef4841&oe=60F9CD10">Bombay
          Shirt Company</li>
  <li><img src="https://scontent.fdel52-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/186101677_6255049889601_1810786449573518094_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=67cdda&_nc_ohc=pfRTCvPljG8AX9zvphS&_nc_ht=scontent.fdel52-1.fna&oh=c950d4dec3714252ff0f31530084693f&oe=60F93CAE">Learn
          Character Design and ...</li>`;
  } else
    promoSection.innerHTML = `<li><img src="https://scontent.fdel52-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c0.11.526.274a/p526x296/30553904_23842839024980289_5113066992890281984_n.png.jpg?_nc_cat=111&ccb=1-3&_nc_sid=67cdda&_nc_ohc=4LKqMJC2J6cAX-HnSmd&_nc_ht=scontent.fdel52-1.fna&oh=c6298d2cc6d3f95ba410dd56f929e849&oe=60F9A63B">Amazing Experiment Fidgit Spi...</li>
  <li><img src="https://external.fdel52-1.fna.fbcdn.net/safe_image.php?d=AQH_acxKbO1rHhk9&w=500&h=261&url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41THE0EvUEL._SR600%252c315_PIWhiteStrip%252cBottomLeft%252c0%252c35_SCLZZZZZZZ_FMpng_BG255%252c255%252c255.jpg&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQHtAZjcp44kXa7s">Headphone by OlsenMark...</li>`;
  