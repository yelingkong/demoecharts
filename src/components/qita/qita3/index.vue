<template>
  <div class="ruler-wrapx">
    <div class="ruler-wrap" id="ruler">
      <div class="start">{{ start }}</div>
      <div class="end">{{ end }}</div>
      <input class="range-slider" type="hidden" value="0,24"/>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import jQuery from 'jquery'

!function ($, t, i, s) {
  "use strict";
  var o = function () {
    return this.init.apply(this, arguments)
  };
  o.prototype = {
    defaults: {
      onstatechange: function () {
      },
      ondragend: function () {
      },
      onbarclicked: function () {
      },
      isRange: !1,
      showLabels: !0,
      showScale: !0,
      step: 1,
      format: "%s",
      theme: "theme-green",
      width: 300,
      disable: !1,
      snap: !1
    },
    template: '<div class="slider-container">			<div class="back-bar">                <div class="selected-bar"></div>                <div class="pointer low"></div><div class="pointer-label low">123456</div>                <div class="pointer high"></div><div class="pointer-label high">456789</div>                <div class="clickable-dummy"></div>            </div>            <div class="scale"></div>		</div>',
    init: function (t, i) {
      this.options = $.extend({}, this.defaults, i), this.inputNode = $(t), this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + "," + this.options.from : "" + this.options.from), this.domNode = $(this.template), this.domNode.addClass(this.options.theme), this.inputNode.after(this.domNode), this.domNode.on("change", this.onChange), this.pointers = $(".pointer", this.domNode), this.lowPointer = this.pointers.first(), this.highPointer = this.pointers.last(), this.labels = $(".pointer-label", this.domNode), this.lowLabel = this.labels.first(), this.highLabel = this.labels.last(), this.scale = $(".scale", this.domNode), this.bar = $(".selected-bar", this.domNode), this.clickableBar = this.domNode.find(".clickable-dummy"), this.interval = this.options.to - this.options.from, this.render()
    },
    render: function () {
      return 0 !== this.inputNode.width() || this.options.width ? (this.options.width = this.options.width || this.inputNode.width(), this.domNode.width(this.options.width), this.inputNode.hide(), this.isSingle() && (this.lowPointer.hide(), this.lowLabel.hide()), this.options.showLabels || this.labels.hide(), this.attachEvents(), this.options.showScale && this.renderScale(), void this.setValue(this.options.value)) : void console.log("jRange : no width found, returning")
    },
    isSingle: function () {
      return "number" == typeof this.options.value ? !0 : -1 === this.options.value.indexOf(",") && !this.options.isRange
    },
    attachEvents: function () {
      this.clickableBar.click($.proxy(this.barClicked, this)), this.pointers.on("mousedown touchstart", $.proxy(this.onDragStart, this)), this.pointers.bind("dragstart", function (t) {
        t.preventDefault()
      })
    },
    onDragStart: function (t) {
      if (!(this.options.disable || "mousedown" === t.type && 1 !== t.which)) {
        t.stopPropagation(), t.preventDefault();
        var s = $(t.target);
        this.pointers.removeClass("last-active"), s.addClass("focused last-active"), this[(s.hasClass("low") ? "low" : "high") + "Label"].addClass("focused"), $(i).on("mousemove.slider touchmove.slider", $.proxy(this.onDrag, this, s)), $(i).on("mouseup.slider touchend.slider touchcancel.slider", $.proxy(this.onDragEnd, this))
      }
    },
    onDrag: function (t, i) {
      i.stopPropagation(), i.preventDefault(), i.originalEvent.touches && i.originalEvent.touches.length ? i = i.originalEvent.touches[0] : i.originalEvent.changedTouches && i.originalEvent.changedTouches.length && (i = i.originalEvent.changedTouches[0]);
      var s = i.clientX - this.domNode.offset().left;
      this.domNode.trigger("change", [this, t, s])
    },
    onDragEnd: function (t) {
      this.pointers.removeClass("focused").trigger("rangeslideend"), this.labels.removeClass("focused"), $(i).off(".slider"), this.options.ondragend.call(this, this.options.value)
    },
    barClicked: function (t) {
      if (!this.options.disable) {
        var i = t.pageX - this.clickableBar.offset().left;
        if (this.isSingle()) this.setPosition(this.pointers.last(), i, !0, !0); else {
          var s = Math.abs(parseFloat(this.pointers.first().css("left"), 10)),
            o = this.pointers.first().width() / 2,
            e = Math.abs(parseFloat(this.pointers.last().css("left"), 10)),
            n = this.pointers.first().width() / 2, a = Math.abs(s - i + o), h = Math.abs(e - i + n), l;
          l = a == h ? s > i ? this.pointers.first() : this.pointers.last() : h > a ? this.pointers.first() : this.pointers.last(), this.setPosition(l, i, !0, !0)
        }
        this.options.onbarclicked.call(this, this.options.value)
      }
    },
    onChange: function (t, i, s, o) {
      var e, n;
      e = 0, n = i.domNode.width(), i.isSingle() || (e = s.hasClass("high") ? parseFloat(i.lowPointer.css("left")) + i.lowPointer.width() / 2 : 0, n = s.hasClass("low") ? parseFloat(i.highPointer.css("left")) + i.highPointer.width() / 2 : i.domNode.width());
      var a = Math.min(Math.max(o, e), n);
      i.setPosition(s, a, !0)
    },
    setPosition: function (t, i, s, o) {
      var e, n, a = parseFloat(this.lowPointer.css("left")), h = parseFloat(this.highPointer.css("left")) || 0,
        l = this.highPointer.width() / 2;
      if (s || (i = this.prcToPx(i)), this.options.snap) {
        var r = this.correctPositionForSnap(i);
        if (-1 === r) return;
        i = r
      }
      t[0] === this.highPointer[0] ? h = Math.round(i - l) : a = Math.round(i - l), t[o ? "animate" : "css"]({left: Math.round(i - l)}), this.isSingle() ? e = 0 : (e = a + l, n = h + l);
      var d = Math.round(h + l - e);
      this.bar[o ? "animate" : "css"]({
        width: Math.abs(d),
        left: d > 0 ? e : e + d
      }), this.showPointerValue(t, i, o), this.isReadonly()
    },
    correctPositionForSnap: function (t) {
      var i = this.positionToValue(t) - this.options.from,
        s = this.options.width / (this.interval / this.options.step), o = i / this.options.step * s;
      return o + s / 2 >= t && t >= o - s / 2 ? o : -1
    },
    setValue: function (t) {
      var i = t.toString().split(",");
      i[0] = Math.min(Math.max(i[0], this.options.from), this.options.to) + "", i.length > 1 && (i[1] = Math.min(Math.max(i[1], this.options.from), this.options.to) + ""), this.options.value = t;
      var s = this.valuesToPrc(2 === i.length ? i : [0, i[0]]);
      this.isSingle() ? this.setPosition(this.highPointer, s[1]) : (this.setPosition(this.lowPointer, s[0]), this.setPosition(this.highPointer, s[1]))
    },
    renderScale: function () {
      for (var t = this.options.scale || [this.options.from, this.options.to], i = Math.round(100 / (t.length - 1) * 10) / 10, s = "", o = 0; o < t.length; o++) s += '<span style="left: ' + o * i + '%">' + ("|" != t[o] ? "<ins>" + t[o] + "</ins>" : "") + "</span>";
      this.scale.html(s), $("ins", this.scale).each(function () {
        $(this).css({marginLeft: -$(this).outerWidth() / 2})
      })
    },
    getBarWidth: function () {
      var t = this.options.value.split(",");
      return t.length > 1 ? parseFloat(t[1]) - parseFloat(t[0]) : parseFloat(t[0])
    },
    showPointerValue: function (t, i, o) {
      var e = $(".pointer-label", this.domNode)[t.hasClass("low") ? "first" : "last"](), n,
        a = this.positionToValue(i);
      if ($.isFunction(this.options.format)) {
        var h = this.isSingle() ? s : t.hasClass("low") ? "low" : "high";
        n = this.options.format(a, h)
      } else n = this.options.format.replace("%s", a);
      var l = e.html(n).width(), r = i - l / 2;
      r = Math.min(Math.max(r, 0), this.options.width - l), e[o ? "animate" : "css"]({left: r}), this.setInputValue(t, a)
    },
    valuesToPrc: function (t) {
      var i = 100 * (parseFloat(t[0]) - parseFloat(this.options.from)) / this.interval,
        s = 100 * (parseFloat(t[1]) - parseFloat(this.options.from)) / this.interval;
      return [i, s]
    },
    prcToPx: function (t) {
      return this.domNode.width() * t / 100
    },
    isDecimal: function () {
      return -1 !== (this.options.value + this.options.from + this.options.to).indexOf(".")
    },
    positionToValue: function (t) {
      var i = t / this.domNode.width() * this.interval;
      if (i = parseFloat(i, 10) + parseFloat(this.options.from, 10), this.isDecimal()) {
        var s = Math.round(Math.round(i / this.options.step) * this.options.step * 100) / 100;
        if (0 !== s) for (s = "" + s, -1 === s.indexOf(".") && (s += "."); s.length - s.indexOf(".") < 3;) s += "0"; else s = "0.00";
        return s
      }
      return Math.round(i / this.options.step) * this.options.step
    },
    setInputValue: function (t, i) {
      if (this.isSingle()) this.options.value = i.toString(); else {
        var s = this.options.value.split(",");
        t.hasClass("low") ? this.options.value = i + "," + s[1] : this.options.value = s[0] + "," + i
      }
      this.inputNode.val() !== this.options.value && (this.inputNode.val(this.options.value).trigger("change"), this.options.onstatechange.call(this, this.options.value))
    },
    getValue: function () {
      return this.options.value
    },
    getOptions: function () {
      return this.options
    },
    getRange: function () {
      return this.options.from + "," + this.options.to
    },
    isReadonly: function () {
      this.domNode.toggleClass("slider-readonly", this.options.disable)
    },
    disable: function () {
      this.options.disable = !0, this.isReadonly()
    },
    enable: function () {
      this.options.disable = !1, this.isReadonly()
    },
    toggleDisable: function () {
      this.options.disable = !this.options.disable, this.isReadonly()
    },
    updateRange: function (t, i) {
      var s = t.toString().split(",");
      this.interval = parseInt(s[1]) - parseInt(s[0]), i ? this.setValue(i) : this.setValue(this.getValue())
    }
  };
  var e = "jRange";
  $.fn[e] = function (i) {
    var s = arguments, n;
    return this.each(function () {
      var a = $(this), h = $.data(this, "plugin_" + e), l = "object" == typeof i && i;
      h || (a.data("plugin_" + e, h = new o(this, l)), $(t).resize(function () {
        h.setValue(h.getValue())
      })), "string" == typeof i && (n = h[i].apply(h, Array.prototype.slice.call(s, 1)))
    }), n || this
  }
}(jQuery, window, document);
export default {
  name: "kedu",
  data: function () {
    return {
      start: "0:00",
      end: "23:59"
    }
  },
  mounted() {
    var that = this;
    $(document).ready(function () {
      $('.range-slider').jRange({
        from: 0,
        Default: "theme-green",
        to: 24,
        step: 0.1,
        scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, '00'],
        format: '%s',
        width: '100%',
        showLabels: true,
        isRange: true,
        onstatechange: function (e) {
          console.log(e)
          let start = e.split(',')[0];
          let end = e.split(',')[1];
          that.getdata(start, 0)
          that.getdata(end, 1)
        },
        ondragend: function (e) {
          console.log(e)
        }
      });
    });
  },
  methods: {
    getdata(data, type) {
      var that = this;
      let data1 = data.split('.')[0];
      if (data1 == '24') {
        that.end = '23:59';
      } else {
        console.log(data1)
        console.log(123445455544)
        let data2 = data.toString().replace(/\d+\.(\d*)/, "$1");
        let datas = parseInt(data2) / 100 * 60;
        if (parseInt(datas).toString().length < 2) {
          data1 = data1 + ':0' + parseInt(datas).toString()

        } else {
          data1 = data1 + ':' + parseInt(datas).toString()
        }
        console.log(datas)
        if (type == 0) {
          that.start = data1;
        } else {
          that.end = data1;
        }
      }

    }
  },
}
</script>

<style lang="less">
.ruler-wrapx {
  padding-top: 150px;
}

.ruler-wrap {
  position: relative;
  width: 94%;
  height: 45px !important;
  flex-shrink: 0;
  margin-top: 15px;

  .start {
    position: absolute;
    left: 0;
    top: -20px;
    color: #fff;
    font-size: 16px;
  }

  .end {
    position: absolute;
    right: 0;
    top: -20px;
    color: #fff;
    font-size: 16px;
  }
}

#gradient {
  .horizontal(@startColor: #555, @endColor: #333) {
    background-color: @endColor;
    background-image: -moz-linear-gradient(left, @startColor, @endColor); // FF 3.6+
    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(@startColor), to(@endColor)); // Safari 4+, Chrome 2+
    background-image: -webkit-linear-gradient(left, @startColor, @endColor); // Safari 5.1+, Chrome 10+
    background-image: -o-linear-gradient(left, @startColor, @endColor); // Opera 11.10
    background-image: linear-gradient(to right, @startColor, @endColor); // Standard, IE10
    background-repeat: repeat-x;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)", argb(@startColor), argb(@endColor))); // IE9 and down
  }
  .vertical(@startColor: #555, @endColor: #333) {
    background-color: mix(@startColor, @endColor, 60%);
    background-image: -moz-linear-gradient(top, @startColor, @endColor); // FF 3.6+
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(@startColor), to(@endColor)); // Safari 4+, Chrome 2+
    background-image: -webkit-linear-gradient(top, @startColor, @endColor); // Safari 5.1+, Chrome 10+
    background-image: -o-linear-gradient(top, @startColor, @endColor); // Opera 11.10
    background-image: linear-gradient(to bottom, @startColor, @endColor); // Standard, IE10
    background-repeat: repeat-x;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", argb(@startColor), argb(@endColor))); // IE9 and down
  }
  .directional(@startColor: #555, @endColor: #333, @deg: 45deg) {
    background-color: @endColor;
    background-repeat: repeat-x;
    background-image: -moz-linear-gradient(@deg, @startColor, @endColor); // FF 3.6+
    background-image: -webkit-linear-gradient(@deg, @startColor, @endColor); // Safari 5.1+, Chrome 10+
    background-image: -o-linear-gradient(@deg, @startColor, @endColor); // Opera 11.10
    background-image: linear-gradient(@deg, @startColor, @endColor); // Standard, IE10
  }
  .vertical-three-colors(@startColor: #00b3ee, @midColor: #7a43b6, @colorStop: 50%, @endColor: #c3325f) {
    background-color: mix(@midColor, @endColor, 80%);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(@startColor), color-stop(@colorStop, @midColor), to(@endColor));
    background-image: -webkit-linear-gradient(@startColor, @midColor @colorStop, @endColor);
    background-image: -moz-linear-gradient(top, @startColor, @midColor @colorStop, @endColor);
    background-image: -o-linear-gradient(@startColor, @midColor @colorStop, @endColor);
    background-image: linear-gradient(@startColor, @midColor @colorStop, @endColor);
    background-repeat: no-repeat;
    filter: e(%("progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", argb(@startColor), argb(@endColor))); // IE9 and down, gets no color-stop at all for proper fallback
  }
  .radial(@innerColor: #555, @outerColor: #333) {
    background-color: @outerColor;
    background-image: -webkit-gradient(radial, center center, 0, center center, 460, from(@innerColor), to(@outerColor));
    background-image: -webkit-radial-gradient(circle, @innerColor, @outerColor);
    background-image: -moz-radial-gradient(circle, @innerColor, @outerColor);
    background-image: -o-radial-gradient(circle, @innerColor, @outerColor);
    background-repeat: no-repeat;
  }
  .striped(@color: #555, @angle: 45deg) {
    background-color: @color;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .15)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .15)), color-stop(.75, rgba(255, 255, 255, .15)), color-stop(.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(@angle, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(@angle, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(@angle, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(@angle, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  }
}

.slider-container {
  width: 300px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  .back-bar {
    height: 10px;
    position: relative;

    .selected-bar {
      position: absolute;
      height: 100%;
    }

    .pointer {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
      cursor: col-resize;
      opacity: 1;
      z-index: 2;

      &.last-active {
        z-index: 3;
      }
    }

    .pointer-label {
      position: relative;
      top: -17px;
      font-size: 8px;
      white-space: nowrap;
      line-height: 1;
    }

    .pointer-label.high {
      position: absolute;
      right: 0;
      display: none;
      margin-top: -8px;
    }

    .pointer-label.low {
      position: absolute;
      display: none;
      left: 0;
      margin-top: -8px;
    }

    .focused {
      z-index: 10;
    }
  }

  .clickable-dummy {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .scale {
    top: 0px;
    position: relative;

    span {
      position: absolute;
      height: 10px;
      border-left: 1px solid #999;
      font-size: 0;
    }

    ins {
      font-size: 9px;
      text-decoration: none;
      position: absolute;
      left: 0;
      top: 14px;
      color: #fff;
      line-height: 1;
    }
  }

  &.slider-readonly {
    .clickable-dummy, .pointer {
      cursor: auto;
    }
  }
}

.theme-green {
  .back-bar {
    height: 2px;
    background-color: #eeeeee;
    #gradient > .vertical(#eeeeee, #dddddd);

    .selected-bar {
      border-radius: 2px;
      #gradient > .vertical(RGBA(107, 217, 230, 1.00), RGBA(107, 217, 230, 1.00));
    }

    .pointer {
      top: -12px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-radius: 10px;
      width: 4px;
      height: 23px;
      background: #63F2FF;
    }

    .pointer-label {
      color: #fff;
      font-size: 16px;
    }

    .focused {
      color: #fff;
      font-size: 16px;
    }
  }

  .scale {
    span {
      border-left: 1px solid #e5e5e5;
    }

    ins {
      color: #999;
    }
  }
}

</style>
