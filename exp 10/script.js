function calculatePerformance() {
    const pv = parseFloat(document.getElementById("pv").value);
    const ev = parseFloat(document.getElementById("ev").value);
    const ac = parseFloat(document.getElementById("ac").value);
    const sac = parseFloat(document.getElementById("sac").value);
    const bac = parseFloat(document.getElementById("bac").value);

    const resultSV = document.getElementById("result-sv");
    const resultCV = document.getElementById("result-cv");
    const resultCPI = document.getElementById("result-cpi");
    const resultSPI = document.getElementById("result-spi");
    const resultEAC = document.getElementById("result-eac");
    const resultTEAC = document.getElementById("result-teac");
    const resultPerformance = document.getElementById("result-performance");

    if (!isNaN(pv) && !isNaN(ev) && !isNaN(ac) && !isNaN(sac) && !isNaN(bac)) {
        const sv = ev - pv;
        const cv = ev - ac;
        const cpi = ev / ac;
        const spi = ev / pv;
        const eac = bac / cpi;
        const teac = sac / spi;

        resultSV.textContent = sv;
        resultCV.textContent = cv;
        resultCPI.textContent = cpi;
        resultSPI.textContent = spi;
        resultEAC.textContent = eac;
        resultTEAC.textContent = teac;

        const budgetPerformance = (bac > eac) ? "Over" : "Under";
        const schedulePerformance = (sac > teac) ? "Behind" : "Ahead";

        resultPerformance.textContent = 'The project is $ {budgetPerformance} budget. (Over/Under) The project is ${schedulePerformance} schedule. (Ahead/Behind)';

    } else {
        alert("Please enter valid numeric values for all input fields.");
    }
}