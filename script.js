document.getElementById('calculateBtn').addEventListener('click', function () {
  const achievedCgpa = parseFloat(document.getElementById('achieved-cgpa').value);
  const minCgpa = parseFloat(document.getElementById('min-cgpa').value);
  const maxCgpa = 4; // Fixed maximum CGPA

  if (isNaN(achievedCgpa) || isNaN(minCgpa)) {
    alert("Please enter valid values for all fields.");
    return;
  }

  if (achievedCgpa < minCgpa || achievedCgpa > maxCgpa) {
    alert(`Achieved CGPA must be between the minimum (${minCgpa}) and maximum (${maxCgpa}) CGPA.`);
    return;
  }

  // Modified Bavarian Formula
  const germanGrade = ((maxCgpa - achievedCgpa) / (maxCgpa - minCgpa)) * 3 + 1;

  // Interpretation
  let interpretation = "";
  if (germanGrade <= 1.5) {
    interpretation = "Very Good";
  } else if (germanGrade <= 2.5) {
    interpretation = "Good";
  } else if (germanGrade <= 3.5) {
    interpretation = "Satisfactory";
  } else {
    interpretation = "Pass";
  }

  // Update the results
  document.getElementById('german-cgpa').value = germanGrade.toFixed(2);
  document.getElementById('interpretation').value = interpretation;
});
