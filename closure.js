// function createCounter() {
//     let count = 0;
//     const message1=`Inside message ${count}`
//     function message(){
//         console.log(message1)
//     }
//     function log(){
//         count=count+1
//         console.log("Inside log",count)
//     }
//     return [message,log]
//   }

//   const [message,log]= createCounter();
//   log()
//   message()
//   log()
//   log()
//   log()
//   message()
function createCounter() {
  let count = 0;

  setInterval(function () {
    const currentCount = count;
    setTimeout(() => {
      console.log(currentCount); // This captures `currentCount` at the time setTimeout was created
    }, 2000);

    count++;
  }, 1000);
}

createCounter();
// function createCounter() {
//     let count = 0;

//     setInterval(function () {
//       setTimeout(() => {
//         console.log(count); // Now it logs the latest value of `count`
//       }, 1000);

//       count++;
//     }, 1000);
//   }

// createCounter();
let obj1 =
{
  "LOGIN_DATA": {
    "DataCookie": {
      "fn": "Pranjal",
      "em": "k********************@gmail.com",
      "phcc": "91",
      "iso": "IN",
      "mb1": "8707341795",
      "admln": "0",
      "admsales": 0,
      "cd": "10/OCT/2024",
      "cmid": "30",
      "ctid": "73704",
      "ev": "",
      "glid": "142310425",
      "usts": "",
      "utyp": "N",
      "uv": "V"
    },
    "LoginCookie": {
      "id": "142310425",
      "admln": "0",
      "admsales": 0,
      "au": "73ce6bf491b531c9177553391ed5d0b5",
      "vcd": "10/OCT/2024"
    },
    "access": 2,
    "glid": "142310425",
    "im_iss": {
      "t": "eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ.eyJpc3MiOiJVU0VSIiwiYXVkIjoiOCowKjMqMSo5KiIsImV4cCI6MTcyODYzMTc4MCwiaWF0IjoxNzI4NTQ1MzgwLCJzdWIiOiIxNDIzMTA0MjUiLCJjZHQiOiIxMC0xMC0yMDI0In0.9OBpP63OezDCLAhvNZp06NFVZhgBzkZa5lgjO2dHGnE",
      "time": 0
    }
  },
  "TC_DATA": {
    "TC_Fn": "Pranjal",
    "Tc_ct": "",
    "Tc_em": "",
  },
  "message": "Success"
}

