
fetch('http://localhost:3000/api1')
  .then(res => res.json())
  .then(data => {
    filterData(data);
  })
  .catch(err => console.error('error', err));

// filter data
function filterData(info) {
  info.forEach(rdata => {
    const President = rdata.filter(data => data.position == "President");
    const Vice_President = rdata.filter(data => data.position == "Vice President");
    const Secretary = rdata.filter(data => data.position == "Secretary");
    const Treasurer = rdata.filter(data => data.position == "Treasurer");
    const Auditor = rdata.filter(data => data.position == "Auditor");
    const PIO = rdata.filter(data => data.position == "P.I.O");
    const Grade_Representative = rdata.filter(data => data.position == "Grade Representative");
    printData(President, Vice_President, Secretary, Treasurer, Auditor, PIO, Grade_Representative);
  });
}
function printData(President, Vice_President, Secretary, Treasurer, Auditor, PIO, Grade_Representative) {

  // President
  President.forEach((press) => {
    const presscon = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="president" value="${press.name}" data-grade="${press.grade}" data-section="${press.section}" required/>
        ${press.name} (${press.grade} - ${press.section})
      </label><br/>
    `;
    document.getElementById('press').innerHTML += presscon;
  });

  // Vice President
  Vice_President.forEach((vice) => {
    const vicePres = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="vice_president" value="${vice.name}" data-grade="${vice.grade}" data-section="${vice.section} required"/> 
        ${vice.name} (${vice.grade} - ${vice.section})
      </label><br/>
    `;
    document.getElementById('viceP').innerHTML += vicePres;
  });

  // Secretary
  Secretary.forEach((sec) => {
    const secre = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="secretary" value="${sec.name}" data-grade="${sec.grade}" data-section="${sec.section} required"/> 
        ${sec.name} (${sec.grade} - ${sec.section})
      </label><br/>
    `;
    document.getElementById('Sec').innerHTML += secre;
  });

  // Treasurer
  Treasurer.forEach((tre) => {
    const tresue = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="treasurer" value="${tre.name}" data-grade="${tre.grade}" data-section="${tre.section} required"/> 
        ${tre.name} (${tre.grade} - ${tre.section})
      </label><br/>
    `;
    document.getElementById('Tre').innerHTML += tresue;
  });

  // Auditor
  Auditor.forEach((audi) => {
    const audito = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="auditor" value="${audi.name}" data-grade="${audi.grade}" data-section="${audi.section} required"/> 
        ${audi.name} (${audi.grade} - ${audi.section})
      </label><br/>
    `;
    document.getElementById('Aud').innerHTML += audito;
  });

  // PIO
  PIO.forEach((pio) => {
    const pioCon = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="pio" value="${pio.name}" data-grade="${pio.grade}" data-section="${pio.section} required"/> 
        ${pio.name} (${pio.grade} - ${pio.section})
      </label><br/>
    `;
    document.getElementById('pio').innerHTML += pioCon;
  });

  // Grade Representative
  Grade_Representative.forEach((grade) => {
    const grad = `
      <label style="padding-top: 10px;">
        <input type="radio" class="index" name="grade_representative" value="${grade.name}" data-grade="${grade.grade}" data-section="${grade.section} required"/> 
        ${grade.name} (${grade.grade} - ${grade.section})
      </label><br/>
    `;
    document.getElementById('Grade').innerHTML += grad;
  });

  selectedData();
}
let contain = {
  president: "",
  vice_president: "",
  secretary_name: "",
  treasurer_name: "",
  auditor: "",
  pio: "",
  grade_representative: "",
 user_name: "",
  grade_section: "",
};



function selectedData() {
  document.querySelectorAll(".index").forEach((i) => {
    i.addEventListener("change", (e) => {
      const section1 = e.target.dataset.section;
      const selected = e.target.value;
      const grade = e.target.dataset.grade;
      const position = e.target.name; 

      if (position === "president") contain.president= selected;
      if (position === "vice_president") contain.vice_president = selected;
      if (position === "secretary") contain.secretary = selected;
      if (position === "treasurer") contain.treasurer= selected;
      if (position === "auditor") contain.auditor = selected;
      if (position === "pio") contain.pio = selected;
      if (position === "grade_representative") contain.grade_representative = selected;

      console.log(contain);
    });
  });
}
document.getElementById('submit').addEventListener('click', () => { 
  let name = document.getElementById('name').value.trim(); 
  let grade_section = document.getElementById('grade_section').value.trim();

  contain.user_name = name;
  contain.grade_section = grade_section;

  if (
    !contain.president ||
    !contain.vice_president ||
    !contain.secretary ||
    !contain.treasurer ||
    !contain.auditor ||
    !contain.pio ||
    !contain.grade_representative ||
    !name ||
    !grade_section
  ) {
    alert("Please paki fill out lahat fields and selected  candidate sa bawat position");
    return;
  }

  console.log("Final vote:", contain);

  fetch('http://localhost:3000/votes', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(contain)
  })
  .then(res => res.json())
  .then(data => {
    console.log("Vote submitted successfully:", data);
    if (confirm("Vote submitted successfully")) {
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
  })
  .catch(err => console.error('Submission error:', err));
});








