
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

// 1. Triangle Output 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-triangle-b')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-triangle-h')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber * 0.5;
    const triangleOutput = document.getElementById('triangle-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber;
})

// 2. Rectangle Output 
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-rectangle-w')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-rectangle-i')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber;
    const triangleOutput = document.getElementById('rectangle-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber;
})

// 3.Rectangle Output 
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-parallelogram-b')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-parallelogram-h')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber;
    const triangleOutput = document.getElementById('parallelogram-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber;
})

// 4.Rectangle Output 
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-rhombus-d1')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-rhombus-d2')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber * 0.5;
    const triangleOutput = document.getElementById('rhombus-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber;
})

// 5.Rectangle Output 
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-pentagon-p')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-pentagon-b')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber * 0.5;
    const triangleOutput = document.getElementById('pentagon-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber;
})


// 6. Rectangle Output 
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const inputTriangleb = document.getElementById('input-ellipse-a')    
    const inputTrianglebString = inputTriangleb.value;
    const inputTrianglebNumber = parseInt(inputTrianglebString);
    const inputTriangleh = document.getElementById('input-ellipse-b')    
    const inputTrianglehString = inputTriangleh.value;
    const inputTrianglehNumber = parseInt(inputTrianglehString);
    const totalTriangleNumber = inputTrianglebNumber * inputTrianglehNumber * 3.14;
    const triangleOutput = document.getElementById('ellipse-output')
    const trianglOutputString = triangleOutput.innerText;
    const triangleOutputNumber = parseInt(trianglOutputString);
    triangleOutput.innerText = totalTriangleNumber.toFixed(2);
})