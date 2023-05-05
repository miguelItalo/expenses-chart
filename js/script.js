const weekDays = [
      {
        day: "mon",
        amount: 17.45
      },
      {
        day: "tue",
        amount: 34.91
      },
      {
        day: "wed",
        amount: 52.36
      },
      {
        day: "thu",
        amount: 31.07
      },
      {
        day: "fri",
        amount: 23.39
      },
      {
        day: "sat",
        amount: 43.28
      },
      {
        day: "sun",
        amount: 25.48
      }
]
window.addEventListener('DOMContentLoaded', () =>{
      const week = document.querySelector('.week')
      let index
      let maior = 0
      for(let i = 0; i < weekDays.length; i++){
            week.innerHTML += weekContent(i)
            if(weekDays[i].amount > maior){
                  maior = weekDays[i].amount
                  index = i
            }
      }

      const graphDays = document.querySelectorAll('.day')
      graphDays.forEach((day, i) => {
            const gasto = document.querySelectorAll('.gasto')
            const graph = document.querySelectorAll('.graph')

            day.addEventListener('mouseover', () => {
                  console.log(gasto[i])
                  gasto[i].style.display = 'block';
                  graph[i].style.backgroundColor = '#FF9B87';
            })
            
            day.addEventListener('mouseout', () => {
                  gasto[i].style.display = 'none';
                  graph[i].style.backgroundColor = '#EC755D'
                  graph[index].style.backgroundColor = 'hsl(186, 34%, 60%)'
            })
            
            graph[index].style.backgroundColor = 'hsl(186, 34%, 60%)'
      })
})


function weekContent(i){
      return `
            <div class="day">
            <section class="gasto">${weekDays[i].amount}</section>
                  <div class="graph" style="height:${(weekDays[i].amount * 100) / 70}%"></div>
                  <p>${weekDays[i].day}</p>
            </div>
      `
}
