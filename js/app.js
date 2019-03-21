console.log('i am hungry');

function getData(){
    var random = Math.floor(Math.random()*87);
    var swApi = 'https://swapi.co/api/people/' + random;
    
    axios.get(swApi).then(function (response) {
        console.log(response.data);
        showData(response.data);
    
      })
      .catch(function (error) {
          noData();
      });

}

function showData(data){

    var charCont = document.createElement('div');
    charCont.id = 'charContainer';
    charCont.style.border = '5px dotted gold';
    charCont.style.display = 'flex';
    charCont.style.flexDirection = 'column';
    charCont.style.margin = '10px';
    charCont.style.padding = '10px';
    profile.appendChild(charCont);

    var nameElem = document.createElement('div');
    nameElem.id = 'character';
    nameElem.innerHTML = 'Name: ' + data.name;
    charCont.appendChild(nameElem);

    var birthElem = document.createElement('div');
    birthElem.id = 'birthDate';
    birthElem.innerHTML = 'Birth Year: ' + data.birth_year;
    charCont.appendChild(birthElem);

    var genderElem = document.createElement('div');
    genderElem.id = 'gender';
    genderElem.innerHTML = 'Gender: ' + data.gender;
    charCont.appendChild(genderElem);

    var heightElem = document.createElement('div');
    heightElem.id = 'birthDate';
    heightElem.innerHTML = 'Height: ' + data.height;
    charCont.appendChild(heightElem);

}

function noData(){

    var charCont = document.createElement('div');
    charCont.id = 'noDataContainer';
    charCont.style.border = '1px solid white';
    charCont.style.display = 'flex';
    charCont.style.flexDirection = 'column';
    charCont.style.margin = '10px';
    charCont.style.padding = '10px';
    charCont.innerHTML = 'dare mo imasen';
    profile.appendChild(charCont);
}


var createButton = document.createElement('button');
createButton.id = 'createChar';
createButton.innerHTML = 'Get Character';
makeChar.appendChild(createButton);

var randGen = document.getElementById('createChar');
randGen.addEventListener('click', getPerson);

function getPerson(){
    getData();
}

