;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1020.555264 531.919872 6.426624 531.919872l510.79168-532.944896 219.219968 232.01792 0-95.927296 132.383744 0 0 222.536704-12.926976 0L1020.555264 531.919872 1020.555264 531.919872zM868.822016 975.353856 604.053504 975.353856 604.053504 710.582272 427.541504 710.582272l0 264.771584L162.772992 975.353856 162.772992 534.07232l706.050048 0L868.82304 975.353856 868.822016 975.353856z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.359952 509.48369c-125.273145 0-227.134067-101.916181-227.134067-227.136114 0-125.272122 101.860922-227.186256 227.134067-227.186256 125.217886 0 227.134067 101.915158 227.134067 227.186256C749.494019 407.567509 647.577838 509.48369 522.359952 509.48369L522.359952 509.48369zM522.359952 105.653295c-97.426937 0-176.695305 79.266321-176.695305 176.694281 0 97.430006 79.268368 176.643116 176.695305 176.643116 97.428983 0 176.643116-79.212086 176.643116-176.643116C699.003068 184.919617 619.788935 105.653295 522.359952 105.653295L522.359952 105.653295zM196.865693 862.823134l30.03506-270.186605 140.260487-56.128345 18.764366 46.880727-112.200408 44.856627-20.458961 184.138834L802.613844 812.384371l-20.458961-184.138834-112.147196-44.856627 18.763342-46.880727 140.210345 56.128345 30.03199 270.186605L196.865693 862.823134 196.865693 862.823134z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingyue_jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M382.277 351.286v0z"  ></path>' +
    '' +
    '<path d="M645.517 352.243h-263.24c-0.528 0-0.956-0.428-0.956-0.956s0.428-0.956 0.956-0.956h263.241c0.529 0 0.956 0.428 0.956 0.956s-0.428 0.956-0.957 0.956z"  ></path>' +
    '' +
    '<path d="M513.897 482.906v0z"  ></path>' +
    '' +
    '<path d="M513.897 483.862c-0.529 0-0.956-0.428-0.956-0.956v-263.24c0-0.528 0.427-0.956 0.956-0.956s0.956 0.428 0.956 0.956v263.24c0 0.528-0.428 0.956-0.956 0.956z"  ></path>' +
    '' +
    '<path d="M876.95 970.289c-6.711 0-13.391-2.187-18.911-6.47l-340.329-263.466-347.885 263.662c-9.38 7.103-21.957 8.219-32.392 3.046-10.511-5.218-17.146-15.924-17.146-27.657v-768.246c0-68.118 55.42-123.536 123.536-123.536h540.474c68.118 0 123.536 55.42 123.536 123.536v768.246c0 11.778-6.711 22.545-17.282 27.732-4.314 2.111-8.974 3.152-13.603 3.152zM243.823 109.393c-34.066 0-61.769 27.703-61.769 61.769v706.085l317.197-240.409c11.114-8.445 26.497-8.369 37.565 0.196l309.249 239.413v-705.286c0-34.066-27.702-61.769-61.769-61.769h-540.473z"  ></path>' +
    '' +
    '<path d="M637.597 390.532h-247.073c-17.056 0-30.884-13.829-30.884-30.884 0-17.056 13.829-30.884 30.884-30.884h247.074c17.056 0 30.884 13.829 30.884 30.884-0.001 17.056-13.829 30.884-30.885 30.884z"  ></path>' +
    '' +
    '<path d="M514.061 514.069c-17.056 0-30.884-13.829-30.884-30.884v-247.074c0-17.056 13.829-30.884 30.884-30.884 17.056 0 30.884 13.829 30.884 30.884v247.074c0 17.055-13.828 30.884-30.884 30.884z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M430 486 70 486c-33 0-60-27-60-60L10 66C10 33 37 6 70 6l360 0c33 0 60 27 60 60l0 360C490 459 463 486 430 486z"  ></path>' +
    '' +
    '<path d="M430 1014 70 1014c-33 0-60-27-60-60L10 594c0-33 27-60 60-60l360 0c33 0 60 27 60 60l0 360C490 987 463 1014 430 1014z"  ></path>' +
    '' +
    '<path d="M954 486 594 486c-33 0-60-27-60-60L534 66c0-33 27-60 60-60l360 0c33 0 60 27 60 60l0 360C1014 459 987 486 954 486z"  ></path>' +
    '' +
    '<path d="M758 756.6m-184 0a92 92 0 1 0 368 0 92 92 0 1 0-368 0Z"  ></path>' +
    '' +
    '<path d="M972.2 984.4l-2 2.2c-4.4 4.6-11.6 4.8-16.2 0.6l-79.2-74c-4.6-4.4-4.8-11.6-0.6-16.2l2-2.2c4.4-4.6 11.6-4.8 16.2-0.6l79.2 74C976.4 972.4 976.6 979.8 972.2 984.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)