const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`please write your city name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d9b6288cfce882e479f66a8db7960cb7`
            const response= await fetch(url);
            const data = await response.json();
            //  console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},   ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            Description.innerText=arrData[0].weather[0].description;
   
            // temp_status.innerText = arrData[0].weather[0].main;
            const temid = arrData[0].weather[0].id;
            const tempMod =arrData[0].weather[0].main;

             if(tempMod == "Clear"){
                temp_status.innerHTML="<i class='fab fa-skyatlas' style='color:#eccc68;filter:drop-shadow(0 0.5rem 1rem rgb(241, 234, 38));'></i>"
            }
              else if(tempMod=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;filter:drop-shadow(0 0.5rem 1rem var(--main-color));'></i>"
             }else if(tempMod=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;filter:drop-shadow(0 0.5rem 1rem var(--main-color));'></i>"
             } else if(tempMod=="Drizzle"){
                temp_status.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color:#a4b0be;filter:drop-shadow(0 0.5rem 1rem var(--main-color));'></i>"
             } 
              else if(tempMod=="Thunderstorm"){
                temp_status.innerHTML="<i class='fas fa-thunderstorm' style='color:#f1f2f6;filter:drop-shadow(0 0.5rem 1rem rgb(17,17,243));'></i>"
             }
             else
              { 
                temp_status.innerHTML="<i class='fas fa-sun-haze' style='color:#eccc68;filter:drop-shadow(0 0.5rem 1rem var(--main-color));'></i>"
              }
              if(temid == 701){ 
               temp_status.innerHTML="<i class='fas fa-fog' style='color:#eccc68;filter:drop-shadow(0 0.5rem 1rem var(--main-color));'></i>"
             }
             
                 datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText=`please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click',getInfo);