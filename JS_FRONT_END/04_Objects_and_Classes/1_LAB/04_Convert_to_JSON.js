function convertToJSON (firstName, lastName, hairColor) {

    const personInfo = {
        name: firstName,
        lastName,
        hairColor,
    }

    const jsonData = JSON.stringify(personInfo);
    console.log(jsonData);
}

convertToJSON('George', 'Jones', 'Brown');