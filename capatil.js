const capital = (str)=>{
    let arr = []
      let letter;
    for(let i = 0; i< str.length; i++)
      {
          
        if(i === 0){
          letter = str.charAt(i).toUpperCase()
          arr.push(letter)
          
        }
        else{
          letter = str.charAt(i).toLowerCase()
          arr.push(letter)
        }
      }
        arr = arr.join("")
       return arr
    }

    module.exports = capital;