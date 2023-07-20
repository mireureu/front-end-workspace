function printValue(){
    const test1 = document.getElementById('customer').value;
    console.log(test1); 
    const test2 = document.getElementById('product').value;
    console.log(test2); 
    const test3 = document.getElementById('price').value;
    console.log(test3); 

    const resultDiv = document.getElementById('result1');
    resultDiv.innerHTML = `구매자: ${test1}<br>상품명: ${test2}<br>가격: ${test3}`;
}