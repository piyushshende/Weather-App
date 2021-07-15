window.addEventListener('load', function() {
    let long;
    let lat;
    dcountry = document.querySelector('.desktop .country');
    dtemp = document.querySelector('.desktop .temp');
    ddescription = document.querySelector('.desktop .description');
    dicon = document.querySelector('.desktop .icon');
    mcountry = document.querySelector('.mobile .country');
    mtemp = document.querySelector('.mobile .temp');
    mdescription = document.querySelector('.mobile .description');
    micon = document.querySelector('.mobile .icon');
    let localizedName = '';
    if (this.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(lat, long);
            const lApi = `https://api.weatherapi.com/v1/current.json?key=4e0acdc7ad1e48bf978113712211307&q=${lat},${long}&aqi=no`;
            fetch(lApi)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    dcountry.innerText = data.location.name;
                    mcountry.innerText = data.location.name;
                    console.log(data);
                    dtemp.innerText = data.current.temp_c;
                    mtemp.innerText = data.current.temp_c;
                    ddescription.innerText = data.current.condition.text;
                    mdescription.innerText = data.current.condition.text;
                    image = document.createElement('img');
                    image.setAttribute('src', data.current.condition.icon);
                    console.log(image);
                    dicon.appendChild(image);
                    micon.appendChild(image);
                });
        });
    }

})
