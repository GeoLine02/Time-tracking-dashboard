const handleData = async () => {
  try {
    const data = await fetch("./data.json").then((response) => response.json());
    // buttons
    const daily = document.getElementById("daily");
    const monthly = document.getElementById("monthly");
    const weekly = document.getElementById("weekly");

    // arrays

    const h1Arrays = [];
    h1Arrays.push(document.getElementById("workCrHours"));
    h1Arrays.push(document.getElementById("playCrHours"));
    h1Arrays.push(document.getElementById("studyCrHours"));
    h1Arrays.push(document.getElementById("exerciseCrHours"));
    h1Arrays.push(document.getElementById("socialCrHours"));
    h1Arrays.push(document.getElementById("selfCareCrHours"));

    const spanArray = [];

    spanArray.push(document.getElementById("workPrvHours"));
    spanArray.push(document.getElementById("playPrvHours"));
    spanArray.push(document.getElementById("studyPrvHours"));
    spanArray.push(document.getElementById("exercisePrvHours"));
    spanArray.push(document.getElementById("socialPrvHours"));
    spanArray.push(document.getElementById("selfCarePrvHours"));

    // functions

    function dailyHours() {
      const dailyCrHoursArray = [];
      const dailyPrvHoursArray = [];

      for (let i = 0; i < data.length; i++) {
        dailyCrHoursArray.push(data[i].timeframes.daily.current);
        h1Arrays[i].innerHTML = dailyCrHoursArray[i] + `hrs`;
        dailyPrvHoursArray.push(data[i].timeframes.daily.previous);
        spanArray[i].innerHTML = `Last Day - ` + dailyPrvHoursArray[i] + `hrs`;
      }
    }
    dailyHours();

    function weeklyHours() {
      const weeklyCrHoursArraay = [];
      const weeklyPrvHoursArray = [];
      for (let i = 0; i < data.length; i++) {
        weeklyCrHoursArraay.push(data[i].timeframes.weekly.current);
        h1Arrays[i].innerHTML = weeklyCrHoursArraay[i] + `hrs`;
        weeklyPrvHoursArray.push(data[i].timeframes.weekly.previous);
        spanArray[i].innerHTML =
          `Last Week - ` + weeklyPrvHoursArray[i] + `hrs`;
      }
    }

    function monthlyHours() {
      const monthlyCrHoursArray = [];
      const monthlyPrvHoursArray = [];
      for (let i = 0; i < data.length; i++) {
        monthlyCrHoursArray.push(data[i].timeframes.monthly.current);
        h1Arrays[i].innerHTML = monthlyCrHoursArray[i] + `hrs`;
        monthlyPrvHoursArray.push(data[i].timeframes.monthly.previous);
        spanArray[i].innerHTML =
          `Last Month - ` + monthlyPrvHoursArray[i] + `hrs`;
      }
    }

    // // eventListeners
    daily.addEventListener("click", () => {
      dailyHours();
    });
    weekly.addEventListener("click", () => {
      weeklyHours();
    });
    monthly.addEventListener("click", () => {
      monthlyHours();
    });
    return;
  } catch (error) {
    console.log(error);
  }
};
handleData();
