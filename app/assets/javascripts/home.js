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
