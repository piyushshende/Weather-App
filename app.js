window.addEventListener('load', function() {
    let long;
    let lat;
    country = document.querySelectorAll('.country');
    // console.log(country)
    temp = document.querySelectorAll('.temp');
    description = document.querySelectorAll('.description');
    icon = document.querySelectorAll('.icon');
    if (this.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(lat, long);
            const lApi = `https://api.weatherapi.com/v1/current.json?key=4e0acdc7ad1e48bf978113712211307&q=${lat},${long}&aqi=no`;
            fetch(lApi)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    for (i = 0; i < country.length; i++) {
                        country[i].innerText = data.location.name;
                    }
                    // console.log(data);
                    for (i = 0; i < temp.length; i++) {
                        temp[i].innerText = data.current.temp_c;
                    }
                    for (i = 0; i < description.length; i++) {
                        description[i].innerText = data.current.condition.text;
                    }
                    image = document.createElement('img');
                    image.setAttribute('src', data.current.condition.icon);
                    // console.log(image);
                    for (i = 0; i < icon.length; i++) {
                        icon[i].appendChild(image);
                    }
                });
        });
    }

})
