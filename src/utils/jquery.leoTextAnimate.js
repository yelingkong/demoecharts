;(function ($, window, document, undefined) {
  var leoTextAnimate = function (eles, opts) {
    this.element = $(eles);
    this.string = $(eles).html();
    this.defaults = {speed: 1000, autorun: true, delay: 0, fixed: '', start: ''};
    this.options = $.extend({}, this.defaults, opts);
    this.height = $(eles).height();
  }
  leoTextAnimate.prototype = {
    init: function () {
      if (this.element.find('.TextAnimate').length <= 0) {
        var html = method.getHtml(this.options, this.string);
        console.log(html)
        this.element.html(html);
      }
      this.reset();
      if (this.options.autorun) {
        if (this.options.delay == 0) {
          this.run();
        } else {
          var $this = this;
          setTimeout(function () {
            $this.run();
          }, this.options.delay);
        }
      }
    }, reload: function () {
      if (this.options.text) {
        this.string = this.options.text;
        this.element.html(this.options.text);
      }
      this.init();
    }, reset: function () {
      var $this = this.element.find('.TextAnimate');
      $this.css({
        'overflow': 'hidden',
        'display': 'inline-block',
        'vertical-align': 'top',
        'height': this.height
      }).find("span").css({
        'display': 'inline-block',
        'vertical-align': 'top',
        'position': 'relative',
        'top': '0px',
        'transform': 'translateY(0px)',
        '-ms-transform': 'translateY(0px)',
        '-moz-transform': 'translateY(0px)',
        '-webkit-transform': 'translateY(0px)',
        '-o-transform': 'translateY(0px)',
        '-ms-transition': '0s',
        '-moz-transition': '0s',
        '-webkit-transition': '0s',
        '-o-transition': '0s',
        'transition': '0s'
      }).find("i").css({'display': 'block', 'font-style': 'normal', 'height': this.height});
    }, run: function () {
      var speed = this.options.speed;
      var height = this.height;
      this.reset();
      this.element.find("span").each(function () {
        var $this = $(this);
        var length = $this.find('i').index($this.find('.on'));
        var to = -length * height + 'px';
        if (to != $this.css("top")) {
          if (!window.applicationCache) {
            $this.animate({top: to}, speed);
          } else {
            $this.css({
              'transform': 'translateY(' + to + ')',
              '-ms-transform': 'translateY(' + to + ')',
              '-moz-transform': 'translateY(' + to + ')',
              '-webkit-transform': 'translateY(' + to + ')',
              '-o-transform': 'translateY(' + to + ')',
              '-ms-transition': speed / 1000 + 's',
              '-moz-transition': speed / 1000 + 's',
              '-webkit-transition': speed / 1000 + 's',
              '-o-transition': speed / 1000 + 's',
              'transition': speed / 1000 + 's'
            });
          }
        }
      });
    }
  }
  var method = {
    getNumber: function (options, string) {
      if (!this.inArr(options.fixed, string)) {
        var text = '<span>';
        if (options.start !== '') {
          text += '<i>' + options.start + '</i>';
        }
        for (var i = 0; i < 10; i++) {
          text += '<i' + (i == string ? ' class="on"' : '') + '>' + i + '</i>';
        }
        return text + '</span>';
      } else {
        return '<span><i class="on">' + string + '</i></span>';
      }
    }, getLowerCase: function (options, string, code) {
      if (!this.inArr(options.fixed, string)) {
        var text = '<span>';
        if (options.start !== '') {
          text += '<i>' + options.start + '</i>';
        }
        for (var i = 0; i < 26; i++) {
          text += '<i' + (97 + i == code ? ' class="on"' : '') + '>' + String.fromCharCode(97 + i) + '</i>';
        }
        return text + '</span>';
      } else {
        return '<span><i class="on">' + string + '</i></span>';
      }
    }, getUpperCase: function (options, string, code) {
      if (!this.inArr(options.fixed, string)) {
        var text = '<span>';
        if (options.start !== '') {
          text += '<i>' + options.start + '</i>';
        }
        for (var i = 0; i < 26; i++) {
          text += '<i' + (65 + i == code ? ' class="on"' : '') + '>' + String.fromCharCode(65 + i) + '</i>';
        }
        return text + '</span>';
      } else {
        return '<span><i class="on">' + string + '</i></span>';
      }
    }, getUnicode: function (options, string, code) {
      if (!this.inArr(options.fixed, string)) {
        var text = '<span>';
        if (options.start !== '') {
          text += '<i>' + options.start + '</i>';
        }
        for (var i = (code - this.getRand(2, 7)); i < (code + this.getRand(3, 10)); i++) {
          text += '<i' + (i == code ? ' class="on"' : '') + '>' + String.fromCharCode(i) + '</i>';
        }
        return text + '</span>';
      } else {
        return '<span><i class="on">' + string + '</i></span>';
      }
    }, getHtml: function (options, string) {
      var html = '<div class="TextAnimate">'
      for (var i = 0; i < string.length; i++) {
        var text = string.substr(i, 1);
        var code = text.charCodeAt();
        if (code > 47 && code < 58) {
          html += this.getNumber(options, text);
        } else if (code > 64 && code < 91) {
          html += this.getUpperCase(options, text, code);
        } else if (code > 96 && code < 123) {
          html += this.getLowerCase(options, text, code);
        } else {
          html += this.getUnicode(options, text, code);
        }
      }
      return html + '</div>';
    }, getRand: function (minnum, maxnum) {
      return Math.floor(minnum + Math.random() * (maxnum - minnum));
    }, inArr: function (arr, str) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(str) !== -1) {
          return true;
        }
      }
      return false;
    }
  }
  $.fn.leoTextAnimate = function (options, options2) {
    $(this).each(function () {
      var plugin = $._data(this, "leoTextAnimate");
      if (options2) {
        var opts = $.extend(true, {}, $.fn.leoTextAnimate.defaults, typeof options2 === "object" ? options2 : {});
      } else {
        var opts = $.extend(true, {}, $.fn.leoTextAnimate.defaults, typeof options === "object" ? options : {});
      }
      plugin = new leoTextAnimate(this, opts);
      $._data(this, "leoTextAnimate", plugin);
      if (plugin[options]) {
        return plugin[options].apply(plugin, Array.prototype.slice.call(arguments, 1));
      } else if (typeof options === 'object' || !options) {
        return plugin.init();
      } else {
        $.error('Method ' + options + ' does not exist on jQuery.leoTextAnimate');
      }
      return this;
    });
  };
})(jQuery, window, document);
