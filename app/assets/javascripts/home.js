// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
  function displayLineChart() {
    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "Prime and Fibonacci",
                fillColor: "rgba(35,20,18,0.2)",
                strokeColor: "rgba(35,20,18,1)",
                pointColor: "rgba(35,20,18,1)",
                pointStrokeColor: "#fff",
                data: [2900, 0, 1000, 700, 1100, 1300, 1700, 1900, 2300, 2000]
            },
        ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {

      // 値の開始値などを自分で設定するか
      scaleOverride : true,
      // 以下の 3 オプションは scaleOverride: true の時に使用
      // Y 軸の値のステップ数
      // e.g. 10 なら Y 軸の値は 10 個表示される
      scaleSteps : 10,
      // Y 軸の値のステップする大きさ
      // e.g. 10 なら 0, 10, 20, 30 のように増えていく
      scaleStepWidth : 500,
      // Y 軸の値の始まりの値
      scaleStartValue : 0,
      // グリッドライン ( Y 軸の横ライン ) の表示
scaleShowGridLines : false,

      // 色（文字列）- X軸、Y軸の色
      scaleLineColor : "rgba(0, 20, 0, 1)",
      // 文字列 - グリッド線の色
      scaleGridLineColor : "rgba(0, 20, 0, 1)",
      // Y軸のラベル変更
      scaleLabel : "<%=value%>円",
      // グラフ線曲線化の無効
      bezierCurve : false,
      // アニメーションの有効
      animation : true

     };
    var lineChart = new Chart(ctx).Line(data, options);
  }



$(function(){
  var pieData = [
      {
          label:"食費",
          value: 30,
          color:"#862153"
      },
      {
          label:"交通費",
          value: 20,
          color:"#F38630"
      },
      {
          label:"ローン",
          value : 20,
          color : "#E0E4CC"
      },
      {
        　label:"娯楽",
          value : 20,
          color : "#ab58e0"
      },
      {
          label:"エンジェル",
          value : 10,
          color : "#69D2E7"
      }
  ];
  // オプション
  var options = {
    showTooltips : "ture",
      // 値を区切る線の表示
      segmentShowStroke : true,
      // 値を区切る線の色
      segmentStrokeColor : "#fff",
      // 値を区切る線の幅
      segmentStrokeWidth : 5,
      // 表示の時のアニメーション
      animation : true,
      // アニメーションの速度 ( ステップ数 )
      animationSteps : 60,
      // アニメーションの種類, 以下が用意されている
      // linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
      // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
      // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
      // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc,
      // easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack,
      // easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
      animationEasing : "easeOutQuad",
      // 回転で表示するアニメーションの有無
      animateRotate : true,
      // 中央から拡大しながら表示するアニメーションの有無
      animateScale : true,
      // アニメーション終了後に実行する処理
      // animation: false の時にも実行されるようです
      // e.g. onAnimationComplete : function() {alert('complete');}
      onAnimationComplete : null,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\">&nbsp;&nbsp;&nbsp;</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  }
  var chart = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData, options);
});
