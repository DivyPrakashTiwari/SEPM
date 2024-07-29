function calculateCOCOMO() {
    // Get the number of estimated lines of code in KLOC
    const codeKLOC = parseFloat(document.getElementById("code-kloc").value);

    // Convert KLOC to lines of code (multiply by 1000)
    const codeLines = codeKLOC * 1000;

    // COCOMO formula constants (you may adjust these as needed)
    const organic_a = 2.4;
    const organic_b = 1.05;
    const organic_c = 2.5;
    const semiDetached_a = 3.0;
    const semiDetached_b = 1.12;
    const semiDetached_c = 2.5;
    const embedded_a = 3.6;
    const embedded_b = 1.20;
    const embedded_c = 2.5;

    // Calculate values for Organic mode
    const organic_effort = organic_a * Math.pow(codeLines / 1000, organic_b);
    const organic_months = organic_c * Math.pow(organic_effort, 0.38);
    const organic_people = organic_effort / organic_months;

    // Calculate values for Semi-Detached mode
    const semiDetached_effort = semiDetached_a * Math.pow(codeLines / 1000, semiDetached_b);
    const semiDetached_months = semiDetached_c * Math.pow(semiDetached_effort, 0.35);
    const semiDetached_people = semiDetached_effort / semiDetached_months;

    // Calculate values for Embedded mode
    const embedded_effort = embedded_a * Math.pow(codeLines / 1000, embedded_b);
    const embedded_months = embedded_c * Math.pow(embedded_effort, 0.32);
    const embedded_people = embedded_effort / embedded_months;

    // Display the results
    document.getElementById("organic-months").textContent = organic_months.toFixed(2);
    document.getElementById("organic-people").textContent = organic_people.toFixed(2);

    document.getElementById("semi-detached-months").textContent = semiDetached_months.toFixed(2);
    document.getElementById("semi-detached-people").textContent = semiDetached_people.toFixed(2);

    document.getElementById("embedded-months").textContent = embedded_months.toFixed(2);
    document.getElementById("embedded-people").textContent = embedded_people.toFixed(2);
}