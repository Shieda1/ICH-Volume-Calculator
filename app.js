// https://www.omnicalculator.com/health/ich-volume

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ICHvolumeRadio = document.getElementById('ICHvolumeRadio');
const lengthRadio = document.getElementById('lengthRadio');
const widthRadio = document.getElementById('widthRadio');
const slicethicknessRadio = document.getElementById('slicethicknessRadio');
const numberofslicesRadio = document.getElementById('numberofslicesRadio');

let ICHvolume;
let length = v1;
let width = v2;
let slicethickness = v3;
let numberofslices = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

ICHvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Length';
  variable2.textContent = 'Width';
  variable3.textContent = 'Slice thickness';
  variable4.textContent = 'Number of slices';
  length = v1;
  width = v2;
  slicethickness = v3;
  numberofslices = v4;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'ICH volume';
  variable2.textContent = 'Width';
  variable3.textContent = 'Slice thickness';
  variable4.textContent = 'Number of slices';
  ICHvolume = v1;
  width = v2;
  slicethickness = v3;
  numberofslices = v4;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'ICH volume';
  variable2.textContent = 'Length';
  variable3.textContent = 'Slice thickness';
  variable4.textContent = 'Number of slices';
  ICHvolume = v1;
  length = v2;
  slicethickness = v3;
  numberofslices = v4;
  result.textContent = '';
});

slicethicknessRadio.addEventListener('click', function() {
  variable1.textContent = 'ICH volume';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  variable4.textContent = 'Number of slices';
  ICHvolume = v1;
  length = v2;
  width = v3;
  numberofslices = v4;
  result.textContent = '';
});

numberofslicesRadio.addEventListener('click', function() {
  variable1.textContent = 'ICH volume';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  variable4.textContent = 'Slice thickness';
  ICHvolume = v1;
  length = v2;
  width = v3;
  slicethickness = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ICHvolumeRadio.checked)
    result.textContent = `ICH volume = ${computeICHvolume().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(slicethicknessRadio.checked)
    result.textContent = `Slice thickness = ${computeslicethickness().toFixed(2)}`;

  else if(numberofslicesRadio.checked)
    result.textContent = `Number of slices = ${computenumberofslices().toFixed(2)}`;
})

// calculation

// ICHvolume = (length * width * (slicethickness / 10) * numberofslices) / 2

function computeICHvolume() {
  return (Number(length.value) * Number(width.value) * (Number(slicethickness.value) / 10) * Number(numberofslices.value)) / 2;
}

function computelength() {
  return (Number(ICHvolume.value) * 2) / (Number(width.value) * (Number(slicethickness.value) / 10) * Number(numberofslices.value));
}

function computewidth() {
  return (Number(ICHvolume.value) * 2) / (Number(length.value) * (Number(slicethickness.value) / 10) * Number(numberofslices.value));
}

function computeslicethickness() {
  return ((Number(ICHvolume.value) * 2) / (Number(length.value) * Number(width.value) * Number(numberofslices.value))) * 10;
}

function computenumberofslices() {
  return (Number(ICHvolume.value) * 2) / (Number(length.value) * (Number(slicethickness.value) / 10) * Number(width.value));
}