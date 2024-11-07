export default function json2html(data) {
  // Start table with data-user attribute
  let html = `<table data-user="kaushikkajjam23@gmail.com"><thead><tr>`;

  // Get all unique keys for the table headers
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Generate the header row
  html +=
    headers.map((header) => `<th>${header}</th>`).join("") +
    "</tr></thead><tbody>";

  // Generate each row of the table body
  data.forEach((item) => {
    html += "<tr>";
    headers.forEach((header) => {
      html += `<td>${item[header] || ""}</td>`;
    });
    html += "</tr>";
  });

  // Close the table
  html += "</tbody></table>";

  return html;
}
