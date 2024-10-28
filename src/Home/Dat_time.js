import React from "react";
import { useState} from 'react';


function  Dat_time() {
    let [date, setDate] = useState(() => {
      const date = new Date(); // Создаем дату
      const month = (date.getMonth()+1).toString(); // Получаем месяц
      const day = date.getDate().toString(); // Получаем день
      // Возвращаем строку формата даты для input type=date
      return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}` }-${day.length === 2 ? day : `0${day}`}`
    })
  
    return (
      <div className="App">
        <div className={'red'} id={'red'}></div>
        <input value={date} onChange={e => setDate(e.target.value)} id="date" className={'date'} type="date"  />
      </div>
    );
  };
  export default Dat_time;