function convertToRoman(num) {

let romanNum = [
    [ 1000, 'M' ],
    [ 900, 'CM' ],
    [ 500, 'D' ],
    [ 400, 'CD' ],
    [ 100, 'C' ],
    [ 90, 'XC' ],
    [ 50, 'L' ],
    [ 40, 'XL' ],
    [ 10, 'X' ],
    [ 9, 'IX' ],
    [ 5, 'V' ],
    [ 4, 'IV' ],
    [ 1, 'I' ]
  ];
  
  let romanNumeral = '';

  function conv(currentNumbers) {
  for (let i = 0; i < romanNum.length; i++) {
    if ( currentNumbers >= romanNum[i][0] ) {
      romanN = romanNumeral + romanNum[i][1].repeat(Math.floor(currentNumbers / romanNum[i][0]));
      conv(currentNumbers % romanNum[i][0]);
      break;
    }
  }};
  conv(num);
  return romanNumeral;
}

convertToRoman(3220);