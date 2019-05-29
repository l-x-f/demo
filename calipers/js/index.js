$(function() {
  // 卡尺类型切换
  $("#calipersStyle").change(function() {
    var dis = $("#card .card-warp span").css("display") || "block";
    if (dis === "block") {
      $("#card .card-warp span p").css({
        top: "unset",
        transform: "unset"
      });
    } else {
      $("#card .card-warp span p").css({
        right: "0",
        transform: "unset"
      });
    }
  });
  $("#centerStyle").change(function() {
    var dis = $("#card .card-warp span").css("display") || "block";

    if (dis === "block") {
      $("#card .card-warp span p").css({
        top: "50%",
        transform: "translateY(-50%)"
      });
    } else {
      $("#card .card-warp span p").css({
        right: "50%",
        transform: "translateX(-50%)"
      });
    }
  });
  // 左右切换
  $("#rowLeft").click(function() {
    var dis = $("#card .card-warp span").css("display") || "block";
    if (dis !== "block") return;
    $("#rowRight").removeClass("button");
    $(this).addClass("button");
    $("#card .card-warp span p").css({
      right: "unset",
      left: "-40px"
    });
  });
  $("#rowRight").click(function() {
    var dis = $("#card .card-warp span").css("display") || "block";
    if (dis !== "block") return;
    $("#rowLeft").removeClass("button");
    $(this).addClass("button");
    $("#card .card-warp span p").css({
      left: "unset",
      right: "-40px"
    });
  });

  // 大小设置
  $("#width").blur(function() {
    let val = $(this).val();
    $("#card .card-warp span ").css({ width: val });
  });
  $("#height").blur(function() {
    let val = $(this).val();
    $("#card .card-warp span ").css({ height: val });
  });

  // 横竖切换
  $("#row").change(function() {
    $("#card .card-warp span").css({
      display: "block"
    });
    $("#card .card-warp span p").css({
      top: "unset",
      left: "unset",
      bottom: "0",
      right: "-40px"
    });
  });
  $("#col").change(function() {
    $("#card .card-warp span").css({
      display: "inline-block"
    });
    $("#card .card-warp span p").css({
      left: "unset",
      right: "unset",
      bottom: "unset",
      top: "-40px"
    });
  });

  // 上下切换
  $("#colTop").click(function() {
    var dis = $("#card .card-warp span").css("display") || "block";
    if (dis !== "inline-block") return;

    $("#colBottom").removeClass("button");
    $(this).addClass("button");

    $("#card .card-warp span p").css({
      bottom: "unset",
      top: "-40px"
    });
  });
  $("#colBottom").click(function() {
    var dis = $("#card .card-warp span").css("display") || "block";
    if (dis !== "inline-block") return;

    $("#colTop").removeClass("button");
    $(this).addClass("button");

    $("#card .card-warp span p").css({
      top: "unset",
      bottom: "-40px"
    });
  });
});
