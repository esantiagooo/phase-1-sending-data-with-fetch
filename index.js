// Add your code here
const submitData = function(userName, userEmail){
   const userDate = {
       name: `${userName}`,
       email: `${userEmail}`,
   };
   const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData),
    };

    fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((dataObj) => renderUserID(dataObj));
}