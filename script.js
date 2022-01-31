// Themes begin
am4core.useTheme(am4themes_material);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 3;
chart.yAxisRadius = am4core.percent(33);
chart.yAxisInnerRadius = am4core.percent(-33);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chart.data = [
  // {
  //   category: "Module #1",
  //   start: "2022-04-07 20:00",
  //   end: "2022-04-7 23:00",
  //   color: colorSet.getIndex(1),
  //   task: "IIITL Cup prelims",
  // },
  // {
  //   category: "Module #4",
  //   start: "2022-04-07 20:00",
  //   end: "2022-04-10 24:00",
  //   color: colorSet.getIndex(2),
  //   task: "Treasure Hunt",
  // },
  {
    category: "Module #5",
    start: "2022-04-08 12:00",
    end: "2022-04-10 00:00",
    color: colorSet.getIndex(3),
    task: "Incognito_v3.0",
  },
  {
    category: "Module #2",
    start: "2022-04-08 20:00",
    end: "2022-04-08 23:00",
    color: colorSet.getIndex(4),
    task: "CodeByte",
  },
  {
    category: "Module #6",
    start: "2022-04-08 21:00",
    end: "2022-04-10 9:00",
    color: am4core.color("#fdd400"),
    task: "Hackofiesta",
  },
  {
    category: "Module #2",
    start: "2022-04-09 12:00",
    end: "2022-04-09 14:00",
    color: colorSet.getIndex(5),
    task: "CSS Battle",
  },
  {
    category: "Module #2",
    start: "2022-04-09 15:00",
    end: "2022-04-09 18:00",
    color: colorSet.getIndex(6),
    task: "Bug Smashing",
  },
  {
    category: "Module #2",
    start: "2022-04-09 20:00",
    end: "2022-04-10 00:00",
    color: colorSet.getIndex(7),
    task: "Appophilia",
  },
  {
    category: "Module #2",
    start: "2022-04-10 12:00",
    end: "2022-04-10 18:00",
    color: colorSet.getIndex(7),
    task: "Dream in Code",
  },
  {
    category: "Module #2",
    start: "2022-04-10 12:00",
    end: "2022-04-10 15:00",
    color: colorSet.getIndex(7),
    task: "BattleSnek",
  },
  {
    category: "Module #2",
    start: "2022-04-10 18:00",
    end: "2022-04-10 22:00",
    color: colorSet.getIndex(7),
    task: "WebManiac",
  },
];

chart.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
chart.fontSize = 20;
chart.background.fill = am4core.color("#000000");

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.disabled = true;
categoryAxis.renderer.grid.template.disabled = false;
categoryAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
// categoryAxis.renderer.grid.template.strokeOpacity = 0.2;
// categoryAxis.renderer.labels.template.paddingRight = 40;
categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");
categoryAxis.renderer.minGridDistance = 25;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 120;
categoryAxis.tooltip.label.fill = am4core.color("#ffffff");
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 1;
dateAxis.baseInterval = { count: 2, timeUnit: "hour" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = 0;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.3;
dateAxis.renderer.line.stroke = am4core.color("#ffffff");
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 20;
dateAxis.tooltip.label.fill = am4core.color("#ffffff");
dateAxis.tooltip.label.paddingTop = 7;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fill = "#ffffff";
labelTemplate.fillOpacity = 0.7;
labelTemplate.background.fill = am4core.color("#000000");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);
// change color of label text
// labelTemplate.adapter.add("fill", function (fill, target) {
//   return target.dataItem.index >= 0
//     ? chart.colors.getIndex(target.dataItem.index)
//     : fill;
// });

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(25);
series.columns.template.tooltipText =
  "{task}: [bold]{openDateX}[/] to [bold]{dateX}[/]";
series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color";
series.columns.template.propertyFields.stroke = "#000000";
series.columns.template.strokeOpacity = 0;
series.columns.template.fillOpacity = 0.85;

// var bullet = series.bullets.push(new am4charts.CircleBullet());
// bullet.circle.radius = 3;
// bullet.circle.strokeOpacity = 0;
// bullet.propertyFields.fill = am4core.color("#fff222");
// bullet.locationX = 0;

// var bullet2 = series.bullets.push(new am4charts.CircleBullet());
// bullet2.circle.radius = 3;
// bullet2.circle.strokeOpacity = 0;
// bullet2.propertyFields.fill = am4core.color("#fff222");
// bullet2.locationX = 1;

var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = am4core.color("#fff222");
imageBullet1.background.propertyFields.fill = am4core.color("#fff222");
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "image1";

var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet2.disabled = true;
imageBullet2.propertyFields.disabled = "disabled2";
imageBullet2.locationX = 0;
imageBullet2.circle.radius = 20;
imageBullet2.propertyFields.stroke = "color";
imageBullet2.background.propertyFields.fill = "color";
imageBullet2.image = new am4core.Image();
imageBullet2.image.propertyFields.href = "image2";

var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = "eventDate";
eventSeries.dataFields.categoryY = "category";
eventSeries.data = [
  {
    category: "",
    eventDate: "2022-04-8 10:00",
    letter: "OPEN",
    description: "Equinox'22 Openings",
  },
  {
    category: "",
    eventDate: "2022-04-10 18:00",
    letter: "CLOSE",
    description: "Equinox'22 Closings",
  },
];
eventSeries.strokeOpacity = 0;

var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet());
flagBullet.label.propertyFields.text = "letter";
flagBullet.locationX = 0;
flagBullet.tooltipHTML = "<b>{description}<b>";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center";
chart.scrollbarX.width = am4core.percent(85);

var cursor = new am4plugins_timeline.CurveCursor();
chart.cursor = cursor;
cursor.xAxis = dateAxis;
cursor.yAxis = categoryAxis;
cursor.lineY.disabled = true;
cursor.lineX.strokeDasharray = "1,4";
cursor.lineX.strokeOpacity = 1;

dateAxis.renderer.tooltipLocation2 = 0;
categoryAxis.cursorTooltipEnabled = false;
