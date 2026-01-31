async function loadAdmin() {
  const res = await fetch("http://localhost:5000/api/issues");
  const issues = await res.json();

  issues.forEach(i => {
    adminIssues.innerHTML += `
      <div class="card">
        <h3>${i.title}</h3>
        <select onchange="updateStatus('${i._id}', this.value)">
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>
    `;
  });
}

async function updateStatus(id, status) {
  await fetch(`http://localhost:5000/api/issues/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({ status })
  });
  alert("Updated");
}

loadAdmin();
