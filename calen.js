const daysContainer = document.getElementById('days');
const monthName = document.getElementById('month-name');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const eventList = document.getElementById('event-list');

// Store events for each day
const events = {
  "2024-01-01": ["Año Nuevo"],
  "2024-01-15": ["Reunión de trabajo"],
  "2024-01-20": ["Cumpleaños de Juan"],
  // Agregar más eventos según sea necesario
};

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar(month, year) {
  daysContainer.innerHTML = '';
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  const totalDaysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();
  
  monthName.textContent = `${getMonthName(month)} ${year}`;
  
  // Fill in empty cells before the first day
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('calendar-day');
    daysContainer.appendChild(emptyCell);
  }

  // Fill in the days of the month
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('calendar-day');
    dayCell.textContent = day;
    dayCell.addEventListener('click', () => showEvents(year, month, day));
    daysContainer.appendChild(dayCell);
  }
}

function showEvents(year, month, day) {
  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const eventArray = events[dateString] || [];
  eventList.innerHTML = '';

  if (eventArray.length > 0) {
    eventArray.forEach(event => {
      const listItem = document.createElement('li');
      listItem.textContent = event;
      eventList.appendChild(listItem);
    });
  } else {
    eventList.innerHTML = '<li>No hay eventos para este día.</li>';
  }
}

function getMonthName(month) {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return months[month];
}

// Handle navigation between months
prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initialize the calendar
renderCalendar(currentMonth, currentYear);

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.classList.toggle("show");
}
