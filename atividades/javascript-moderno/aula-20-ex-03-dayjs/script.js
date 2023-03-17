const dayjs = require('dayjs')

function birthday(date){
    const birthdayDate = dayjs(date);
    const today = dayjs(); 

    const years = today.diff(birthdayDate, 'years')
    const nextBirthday = birthdayDate.add(years + 1, 'year')
    const daysToNextBrithday = nextBirthday.diff(today, 'day') + 1

    console.log(years)
    console.log(nextBirthday.format('DD/MM/YYYY'))
    console.log(daysToNextBrithday)
}

birthday('2000-1-21')

