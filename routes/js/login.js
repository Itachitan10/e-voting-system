
const button = document.getElementById('Login');


button.onclick = function login() {
  const teacherName = document.getElementById("teacher-name").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!teacherName || !password) {
    document.getElementById("error-message").innerText = " All fields must be filled out!";
    return;
  }


  if (teacherName === "teacher" && password === "password") {

    window.location.href = "/dashboard";
  } else {
    document.getElementById("error-message").innerText = " Invalid login credentials!";
  }


  fetch("http://localhost:3000/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      teacherName: teacherName,
      password: password
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to save data.");
    }
    return res.json();
  })
  .then(data => {
    console.log("Saved successfully:", data);
  })
  .catch(error => {
    console.error("Error saving data:", error);
  });
}
