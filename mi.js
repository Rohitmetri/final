document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const closeBtn = document.querySelector('.close-btn');
  const mainTopics = document.querySelectorAll('.main-topic');
  const body = document.body;
  const contentWrapper = document.querySelector('.content-wrapper');
  const logo = document.querySelector('.logo'); // Select the logo element

  console.log('Script loaded'); // Debugging log

  // Open/close sidebar
  sidebarToggle.addEventListener('click', function () {
    console.log('Sidebar toggle clicked'); // Debugging log
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
    contentWrapper.classList.toggle('shifted'); // Add/remove the shifted class for sink effect
    sidebarToggle.style.display = 'none'; // Hide the toggle button when sidebar is open
    logo.style.display = 'none'; // Hide the logo when sidebar is open
  });

  // Close sidebar
  closeBtn.addEventListener('click', function () {
    console.log('Close button clicked'); // Debugging log
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
    contentWrapper.classList.remove('shifted'); // Remove the shifted class
    sidebarToggle.style.display = 'block'; // Show the toggle button when sidebar is closed
    logo.style.display = 'block'; // Show the logo when sidebar is closed
  });

  // Toggle subtopics
  mainTopics.forEach((topic) => {
    topic.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Main topic clicked'); // Debugging log
      const subtopics = this.nextElementSibling;
      subtopics.classList.toggle('active');
    });
  });
});