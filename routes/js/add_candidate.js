// List of positions
const positions = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Auditor",
  "P.I.O",
  "Grade Representative",
];


let positionsDiv = document.getElementById("positions");


positions.forEach((pos) => {
  let div = document.createElement("div");
  div.className = "position-box";
  div.innerHTML = `
      <h2>${pos}</h2>
      <input type="text" id="${pos}-name" placeholder="Candidate Name">
      <select id="${pos}-grade">
          <option value="">Select Grade</option>
          <option value="SNED">SNED</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
      </select>
      <input type="text" id="${pos}-section" placeholder="Enter Section">
  `;
  positionsDiv.appendChild(div);
});


document.getElementById("submitAllBtn").addEventListener("click", () => {
  let allCandidates = [];


  positions.forEach((pos) => {
      const name = document.getElementById(`${pos}-name`).value;
      const grade = document.getElementById(`${pos}-grade`).value;
      const section = document.getElementById(`${pos}-section`).value;

 
      if (name && grade && section) {
          allCandidates.push({
              position: pos,
              name: name,
              grade: grade,
              section: section,
          });
      }
  });


  if (allCandidates.length === positions.length) {
      console.log("All candidates submitted: ", allCandidates);
      alert("All candidates registered successfully!");
      sendData(allCandidates);
  } else {
      alert("Please make sure all fields are completed for each candidate.");
  }
});


function sendData(allCandidates) {
  fetch("http://localhost:3000/candidates", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(allCandidates),
  })
      .then((res) => res.json())
      .then((response) => {
          console.log("Server response:", response);
      })
      .catch((err) => {
          console.error("Error sending data:", err);
      });
}
