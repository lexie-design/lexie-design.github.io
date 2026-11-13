const API_URL =
  'https://opencollegedata.org/colleges/michigan-state-university/2025-26.json';

const statsGrid = document.querySelector('#stats-grid');
const statusText = document.querySelector('#status');

loadCollegeData();

async function loadCollegeData() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const college = await response.json();

    if (!college.facts || !Array.isArray(college.facts)) {
      throw new Error('The API response did not contain college facts.');
    }

    const facts = new Map(
      college.facts.map((fact) => [fact.code, fact.value])
    );

    const applicants = getNumber(facts, 'C.116');
    const admitted = getNumber(facts, 'C.117');

    const acceptanceRate =
      applicants && admitted !== null
        ? (admitted / applicants) * 100
        : null;

    const averageGpa = getNumber(facts, 'C.1201');
    const actLow = getNumber(facts, 'C.914');
    const actHigh = getNumber(facts, 'C.916');
    const inStateTuition = getNumber(facts, 'G.104');
    const nonresidentTuition = getNumber(facts, 'G.105');

    const stats = [
      {
        label: 'First-year applications',
        value: formatNumber(applicants),
        detail: 'Students who applied'
      },
      {
        label: 'First-year students admitted',
        value: formatNumber(admitted),
        detail: 'Students offered admission'
      },
      {
        label: 'Admission rate',
        value:
          acceptanceRate === null
            ? 'Not reported'
            : `${acceptanceRate.toFixed(1)}%`,
        detail: 'Calculated from applications and admits'
      },
      {
        label: 'Average high school GPA',
        value: averageGpa === null ? 'Not reported' : averageGpa.toFixed(2),
        detail: 'Among students who submitted GPA'
      },
      {
        label: 'ACT middle 50% range',
        value:
          actLow === null || actHigh === null
            ? 'Not reported'
            : `${actLow}–${actHigh}`,
        detail: 'Composite score for score submitters'
      },
      {
        label: 'Annual tuition',
        value:
          inStateTuition === null
            ? 'Not reported'
            : formatCurrency(inStateTuition),
        detail:
          `In-state · ${
            nonresidentTuition === null
              ? 'Nonresident not reported'
              : `${formatCurrency(nonresidentTuition)} nonresident`
          }`
      }
    ];

    statsGrid.innerHTML = stats.map((stat) => `
      <article class="stat-card">
        <p class="stat-label">${escapeHTML(stat.label)}</p>
        <p class="stat-value">${escapeHTML(stat.value)}</p>
        <p class="stat-detail">${escapeHTML(stat.detail)}</p>
      </article>
    `).join('');

    statusText.textContent = `${college.college} · ${college.cds_year}`;
  } catch (error) {
    statusText.textContent = 'Data could not load';
    statsGrid.innerHTML = `
      <p class="error-message">
        The Open College Data API could not be reached. Check your connection
        and refresh the page.
      </p>
    `;
    console.error(error);
  }
}

function getNumber(facts, code) {
  const value = facts.get(code);

  if (value === null || value === undefined || value === '') {
    return null;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatNumber(value) {
  return value === null
    ? 'Not reported'
    : new Intl.NumberFormat('en-US').format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}