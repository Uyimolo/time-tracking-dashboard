///fetch json data from local json file
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    let index = 0;
    const times = document.querySelectorAll(".times");

    let changeValue = (timeStamp, previousTimeRange) => {
      times.forEach((time) => {
        time.innerHTML = `<p class="time"> ${json[index]["timeframes"][timeStamp].current}hrs  </p>
          <p class="previous-time"> ${previousTimeRange} - ${json[index]["timeframes"][timeStamp].previous}hrs</p>`;
        index += 1;
      });
      index = 0;
    };

    document.querySelectorAll(".timeframe").forEach((timeframe) => {
      timeframe.addEventListener("click", (e) => {
        const el = e.target;
        const classes = el.classList;
        if (classes.contains("daily")) {
          changeValue("daily", "Yesterday");
        } else if (classes.contains("weekly")) {
          changeValue("weekly", "Last Week");
        } else {
          changeValue("monthly", "Last Month");
        }
      });
    });
  });
