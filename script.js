var rollV, nameV, genderV, addressV, consultDateV, consultReasonV, petnameV;

function readForm() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    consultDateV = document.getElementById("consultDate").value;
    petnameV = document.getElementById("petname").value;
    consultReasonV = document.getElementById("consultReason").value;
    console.log(rollV, nameV, genderV, addressV, consultDateV, petnameV,consultReasonV);
}

document.getElementById("insert").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("patient/" + rollV)
        .set({
            rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
            consultDate: consultDateV,
            petname: petnameV,
            consultReason: consultReasonV
        });
    alert("Dados Inseridos");
    clearForm();
};

document.getElementById("read").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("patient/" + rollV)
        .on("value", function (snap) {
            document.getElementById("roll").value = snap.val().rollNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("address").value = snap.val().address;
            document.getElementById("consultDate").value = snap.val().consultDate;
            document.getElementById("petname").value = snap.val().petname;
            document.getElementById("consultReason").value = snap.val().consultReason;
        });
};

document.getElementById("update").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("patient/" + rollV)
        .update({
            name: nameV,
            gender: genderV,
            address: addressV,
            consultDate: consultDateV,
            petname: petnameV,
            consultReason: consultReasonV
        });
    alert("Dados Atualizados");
    clearForm();
};

document.getElementById("delete").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("patient/" + rollV)
        .remove();
    alert("Dados Excluídos");
    clearForm();
};

function clearForm() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("consultDate").value = "";
    document.getElementById("petname").value = "";
    document.getElementById("consultReason").value = "";
}
