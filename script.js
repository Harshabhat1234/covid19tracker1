$(document).ready(function(){
    var url = "https://data.covid19india.org/data.json"

    $.getJSON(url,function(data){
        console.log(data)

     var total_active, total_cases, total_deaths, total_recovered ;
     var states =[]
     var confirmed = []
     
     var recovered =[]
     $.each(data.statewise, function(id,obj){
        states.push(obj.state)
        confirmed.push(obj.confirmed)
        recovered.push(obj.recovered)
        
        })
        states.shift();
        confirmed.shift();
        
        recovered.shift();
       

     total_active = data.statewise[0].active
     total_cases = data.statewise[0].confirmed
     total_recovered = data.statewise[0].recovered
     total_deaths = data.statewise[0].deaths
     $("#active").append(total_active)
     $("#confirmed").append(total_cases)
     $("#recovered").append(total_recovered)
     $("#deaths").append(total_deaths)



    var myChart= document.getElementById("myChart").getContext('2d')
    var chart = new Chart(myChart,{
        type: 'line',
        data: {
            labels: states,
            datasets: [
                {
                    label: "Confirmed cases",
                    data: confirmed,
                    backgroundColor: "#f1c40f",
                    minBarLength: 100

                },
                {
                    label: "Recovered",
                    data: recovered,
                    backgroundColor: "#2ec771",
                    minBarLength: 100

                },
                // {
                //     label: "Death",
                //     data: deaths,
                //     backgroundColor: "#e74c3c",
                //     minBarLength: 100

                // }


            ]
        },
        options: {}
    })
    });
})