 function frequency(string) {
    // Code goes here
    let letraAnt = '';
    var arrayTmp = [];
    for (let index = 0; index < string.length; index++) {
        arrayTmp.push( string[index]);
    }

    var arrayOrder = arrayTmp.sort();

    let fontCount=0;
    let strinJson = '{';

    for(let item of arrayOrder){
        debugger
        const elemet = item;

        if(elemet == letraAnt)
        {
            fontCount++;
        }else{
            if(letraAnt != '')
            {
                strinJson += letraAnt + ":" + fontCount + ",";
            };

            fontCount = 1;
        }

        letraAnt = item;
    }

    strinJson += letraAnt + ":" + fontCount + '}';

    return strinJson;
   }

   console.log('Test 1:', frequency('cccbbbaaa'))
   // {a: 3, b: 3, c: 3}
   console.log('Test 2:', frequency('www.bedu.org'))
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
   console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
