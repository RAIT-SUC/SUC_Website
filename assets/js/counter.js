let launchDate = new Date("June 03, 2022 15:30:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} d: ${hours} h: ${mins} m: ${secs} s`;

    // Set time on document
    document.getElementById("content-inside-area").innerText = time;
  }
  else{

    const start = () => {
      setTimeout(function() {
          confetti.start()
      }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
  };

  //  for stopping the confetti 

  const stop = () => {
      setTimeout(function() {
          confetti.stop()
      }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };
// after this here we are calling both the function so it works
  start();
  // stop();
  const redirect = () => {
    setTimeout(function(){
      window.location.href = "";
      stop();
    }, 5500);
  }
  redirect();
  }
}