async function loadIssues() {
  const res = await fetch("http://localhost:5000/api/issues");
  const issues = await res.json();

  issues.forEach(i => {
    issuesDiv.innerHTML += `
      <div class="card">
        <h3>${i.title}</h3>
        <p>${i.description}</p>
        <p class="status">${i.status}</p>
        <img src="${i.image}" width="100%">
      </div>
    `;
  });
}

loadIssues();
