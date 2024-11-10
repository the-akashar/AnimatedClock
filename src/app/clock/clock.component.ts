import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  ngOnInit(): void {
    const hourEl = document.querySelector('.hour')
    const minuteEl = document.querySelector('.minute')
    const secondEl = document.querySelector('.second')
    const timeEl = document.querySelector('.time')
    const dateEl = document.querySelector('.date')
    const toggle = document.querySelector('.toggle')

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle?.addEventListener('click',(e)=>{
  console.log('clicked');
  const html = document.querySelector('html');
  if(html?.classList.contains('dark')){
    html.classList.remove('dark');
    (e.target as HTMLElement).innerHTML = 'Dark Mode';
  } else {
    html?.classList.add('dark');
    (e.target as HTMLElement).innerHTML='Light Mode';
  }
 })


 function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const  ampm=hours >= 12 ? 'PM' : 'AM';

    if(hourEl)(hourEl as HTMLElement).style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    if(minuteEl)(minuteEl as HTMLElement).style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    if(secondEl)(secondEl as HTMLElement).style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    (timeEl as HTMLElement).innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    (dateEl as HTMLElement).innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;


 }

 // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num:number, in_min:number, in_max:number, out_min:number, out_max:number) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

}



  
}
