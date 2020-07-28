var refden, reftemp, prod,C, d15, lower_limit, upper_limit ;
  document.querySelector('.btn-primary').addEventListener('click', function() {
    refden = document.getElementById('density').value 
    reftemp = document.getElementById('temp').value
    document.getElementById('density').value = ""
    document.getElementById('temp').value = ""
    
    prod = document.querySelector('.product').value

    if (prod === 'MS'){
      C = 0.9
      lower_limit = 720
      upper_limit = 775
    } else if (prod === 'HSD') {
      C = 0.7
      lower_limit = 820
      upper_limit = 855
    } else {
      C = 0.7
      lower_limit = 700
      upper_limit = 855
    }

    d15 = parseInt(refden) + C*(parseInt(reftemp)-15)
    if (isNaN(d15)) {
      document.getElementById('answer').textContent = 'Please enter density properly'
    } else {
      if (d15 < lower_limit || d15 > upper_limit) {
        document.getElementById('resulthead').textContent = 'Your density at 15 deg C is: '
        document.getElementById('answer').textContent = d15 + '  (Your density seems outside of permissible range of)  ' + prod 
      } else {
        document.getElementById('resulthead').textContent = 'Your density at 15 deg C is:'
        document.getElementById('answer').textContent = d15
      }

      
      
    }
    
    
  });


