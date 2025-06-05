document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  let currentPageIndex = 0;

  // Function to change pages with a fade-out effect
  const changePage = () => {
    const currentPage = pages[currentPageIndex];
    const nextPageIndex = (currentPageIndex + 1) % pages.length;
    const nextPage = pages[nextPageIndex];

    // Apply transition
    currentPage.classList.add("hidden");
    nextPage.classList.remove("hidden");

    // Update current page index
    currentPageIndex = nextPageIndex;
  };

  // Add touch event listener
  document.getElementById("app").addEventListener("click", changePage);
});
