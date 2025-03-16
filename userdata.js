function getfulldata(){
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let cnic = document.getElementById('cnic').value
    let address = document.getElementById('address').value
    let contact = document.getElementById('contact').value

    if(name == '' || email == '' || age == '' || cnic == ''
        || address == '' || contact ==''
    ){
        alert('fill the inputs')
    }

    let objname = {
        name : name,
        email : email,
        Age : age,
        Cnic : cnic,
        address : address,
        contact : contact,
    }

    let fdata = db.collection('Studentdata').doc()

    fdata.set(objname)

    alert('Add data...')

}