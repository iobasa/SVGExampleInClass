(() => {
    //try to get the object to do stuff with it.

    var waypoint = new Waypoint({
        // what element is this waypont looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('section2'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger an animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
        this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling ${direction}</p>`;
        }
      })

    var waypoint2 = new Waypoint({
        // what element is this waypont looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('section3'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger an animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        //   this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling ${direction}</p>`;
        },

        offset: 200
      })

    const svgGraphic = document.querySelector(".svg-wrapper");

    svgGraphic.addEventListener("click", () => {
        console.log(this.querySelector('.svg-graphic'));
    })

})();