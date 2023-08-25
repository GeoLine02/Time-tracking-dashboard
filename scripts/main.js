const handleData = async () => {
  try {
    const data = await fetch("./data.json").then((response) => response.json());
    // buttons
    const daily = document.getElementById("daily");
    const monthly = document.getElementById("monthly");
    const weekly = document.getElementById("weekly");

    function dailyCrHours() {
      const h1Arrays = [];
      h1Arrays.push(document.getElementById("workCrHours"));
      h1Arrays.push(document.getElementById("playCrHours"));
      h1Arrays.push(document.getElementById("studyCrHours"));
      h1Arrays.push(document.getElementById("exerciseCrHours"));
      h1Arrays.push(document.getElementById("socialCrHours"));
      h1Arrays.push(document.getElementById("selfCareCrHours"));

      const dailyCrHoursArray = [];

      for (let i = 0; i < data.length; i++) {
        dailyCrHoursArray.push(data[i].timeframes.daily.current);
      }

      for (let i = 0; i < h1Arrays.length; i++) {
        h1Arrays[i].innerHTML = dailyCrHoursArray[i] + `hrs`;
      }
    }
    dailyCrHours();

    function dailyPrvHours() {
      const spanArray = [];

      spanArray.push(document.getElementById("workPrvHours"));
      spanArray.push(document.getElementById("playPrvHours"));
      spanArray.push(document.getElementById("studyPrvHours"));
      spanArray.push(document.getElementById("exercisePrvHours"));
      spanArray.push(document.getElementById("socialPrvHours"));
      spanArray.push(document.getElementById("selfCarePrvHours"));

      // dialy previous hours

      const dailyPrvHoursArray = [];

      for (let i = 0; i < data.length; i++) {
        dailyPrvHoursArray.push(data[i].timeframes.daily.previous);
      }
      console.log(dailyPrvHoursArray);

      for (let i = 0; i < spanArray.length; i++) {
        spanArray[i].innerHTML = `Last Day - ` + dailyPrvHoursArray[i] + `hrs`;
      }
    }
    dailyPrvHours();

    function weeklyCrHours() {
      const h1Arrays = [];
      h1Arrays.push(document.getElementById("workCrHours"));
      h1Arrays.push(document.getElementById("playCrHours"));
      h1Arrays.push(document.getElementById("studyCrHours"));
      h1Arrays.push(document.getElementById("exerciseCrHours"));
      h1Arrays.push(document.getElementById("socialCrHours"));
      h1Arrays.push(document.getElementById("selfCareCrHours"));

      const weeklyCrHoursArraay = [];
      for (let i = 0; i < data.length; i++) {
        weeklyCrHoursArraay.push(data[i].timeframes.weekly.current);
      }
      for (let i = 0; i < h1Arrays.length; i++) {
        h1Arrays[i].innerHTML = weeklyCrHoursArraay[i] + `hrs`;
      }
    }

    // // eventListeners
    daily.addEventListener("click", () => {
      dailyCrHours();
      dailyPrvHours();
    });
    weekly.addEventListener("click", () => {
      weeklyCrHours();
      // functions
    });
  } catch (error) {
    console.log(error);
  }
};
handleData();
