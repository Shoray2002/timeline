// Themes begin
am4core.useTheme(am4themes_material);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 4;
chart.yAxisRadius = am4core.percent(25);
chart.yAxisInnerRadius = am4core.percent(-25);
chart.maskBullets = true;

var colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chart.data = [
  {
    category: "Module #1",
    start: "2022-04-08",
    end: "2022-04-10",
    color: colorSet.getIndex(0),
    task: "Hackofiesta",
  },
  {
    category: "Module #1",
    start: "2022-04-08",
    end: "2022-04-10",
    color: colorSet.getIndex(0),
    task: "Development",
  },
  {
    category: "Module #2",
    start: "2022-04-08",
    end: "2022-04-10",
    color: colorSet.getIndex(5),
    task: "Gathering requirements",
  },
  {
    category: "Module #2",
    start: "2022-04-08",
    end: "2022-04-10",
    color: colorSet.getIndex(5),
    task: "Producing specifications",
  },
];

chart.dateFormatter.dateFormat = "yyyy-MM-dd";
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
chart.fontSize = 18;
chart.background.fill = am4core.color("#00f2c7");

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = false;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 120;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 1, timeUnit: "hour" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.1;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = am4core.color("#201148");
dateAxis.tooltip.label.paddingTop = 7;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.7;
labelTemplate.background.fill = am4core.color("#00f2c7");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(20);
series.columns.template.tooltipText =
  "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color"; // get color from data
series.columns.template.propertyFields.stroke = "#00f2c7";
series.columns.template.strokeOpacity = 0;

var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 3;
bullet.circle.strokeOpacity = 0;
bullet.propertyFields.fill = "color";
bullet.locationX = 0;

var bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.circle.radius = 3;
bullet2.circle.strokeOpacity = 0;
bullet2.propertyFields.fill = "color";
bullet2.locationX = 1;

var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
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
    eventDate: "2022-04-10",
    letter: "A",
    description: "Something happened here",
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
