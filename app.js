window.addEventListener('load', function() {
    let long;
    let lat;
    country = document.querySelector('.country');
    temp = document.querySelector('.temp');
    description = document.querySelector('.description');
    icon = document.querySelector('.icon');
    let localizedName = '';
    if (this.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(lat, long);
            const lApi = `http://api.weatherapi.com/v1/current.json?key=4e0acdc7ad1e48bf978113712211307&q=${lat},${long}&aqi=no`;
            // location = lApi.
            fetch(lApi)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    country.innerText = data.location.name;
                    console.log(data);
                    temp.innerText = data.current.temp_c;
                    description.innerText = data.current.condition.text;
                    image = document.createElement('img');
                    image.setAttribute('src', data.current.condition.icon);
                    console.log(image);
                    icon.appendChild(image);
                })
        });
    }
})