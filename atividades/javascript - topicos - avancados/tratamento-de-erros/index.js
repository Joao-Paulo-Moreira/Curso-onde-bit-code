function sum(a, b){
    const first_number = Number(a)
    const second_number = Number(b)

    if(isNaN(first_number) || isNaN(second_number)){
        throw new Error(`You have to select a number`)
    }

    return first_number + second_number
}

try{
    console.log(sum(5, 5))
    console.log(sum(true, 1))
    console.log(sum(false, 1))
    console.log(sum(undefined, 1))
    console.log(sum('1', 1))
}catch(error){
    console.log('An error occurred')
    console.log(error.message)
} finally{
    console.log('Calc finished')
}