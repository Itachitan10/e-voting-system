
fetch('http://localhost:3000/api1')
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
    console.log(element);
    });
    
    const total = `<p>${data.length} candidates registered</p>`;
    document.getElementById('totalcan').innerHTML += total;
  })
  .catch(err => console.error('Error:', err));




// Fetching voting data
fetch('http://localhost:3000/voting_data')
  .then(res => res.json())
  .then(data => {
    const totalVotes =  `<p>${data.length} votes casted</p>`;  
    document.getElementById('TotalVotes').innerHTML += totalVotes;
  })
  .catch(err => console.error('Error:', err));



document.getElementById('date').innerHTML = new Date()