
// Swal.fire('DUMMY WEATHER APP')

//Code Start

window.getWeather = (event) => {

    event.preventDefault()

    // console.log("Function is running")

    // let apiKey = "9a2fa1d23bd03f187e478c39b3ea14d4"
    let cityName = document.querySelector("#cityName").value

    // let now = moment().format('dddd MMMM Do hh:mm A')

    // Make a request for a user with a given ID
    axios.post(`/weather`,{

        cityName: cityName

    })
        .then(function (response) {
            // handle success
            console.log(response.data);



            // Swal.fire({
            //     title: 'Successfully Data',
            //     showDenyButton: true,
            //     showCancelButton: true,
            //     confirmButtonText: 'Save',
            //     denyButtonText: `Don't save`,
            // }).then((result) => {
            //     /* Read more about isConfirmed, isDenied below */
            //     // if (result.isConfirmed) {
            //     //     Swal.fire(`Current Temperature of ${response.data.city} is ${response.data.temperature} 
            //     //      Humidity: ${response.data.humidity}
            //     //      windSpeed: ${response.data.windSpeed} 
            //     //      temperature: ${response.data.temperature}
            //     //      min: ${response.data.min} 
            //     //      max: ${response.data.max} 
            //     //      `)

            //     // } else if (result.isDenied) {
            //     //     Swal.fire('Changes are not saved', '', 'info')
            //     // }
            // })
            document.querySelector("#result").innerHTML = response.data.message
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);

            

            // Swal.fire({
            //     title: 'Error',
            //     showDenyButton: true,
            //     showCancelButton: true,
            //     confirmButtonText: 'Save',
            //     denyButtonText: `Don't save`,
            // }).then((result) => {
            //     /* Read more about isConfirmed, isDenied below */
            //     if (result.isConfirmed) {
            //         Swal.fire("Error is getting Weather Data")
            //     } else if (result.isDenied) {
            //         Swal.fire('Changes are not saved', '', 'info')
            //     }
            // })
            // document.querySelector("#result").innerHTML = "Error is getting Weather Data"
        })

};