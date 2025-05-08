document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  // sample data in json format
  const sampleData = [
    {
      title: "Chair",
      image: "250px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
      category: "Home",
      price: 29.99,
      link: "https://example.com/result/Chair",
    },
    {
      title: "Cat Toy",
      image: "Kitten_playing_with_a_ball_(30052653846).jpg",
      category: "Pets",
      price: 9.99,
      link: "https://example.com/result/Cat_Toy",
    },
    {
      title: "Seat Cover",
      image:
        "Bucket_seat_with_Schroth_six-point_harness_in_a_2010_Porsche_997_GT3_RS_3.8.jpg",
      category: "Car",
      price: 99.25,
      link: "https://example.com/result/Seat_Cover",
    },
    {
      title: "Shirt",
      image: "Charvet_shirt.jpg",
      category: "Clothing",
      price: 19.01,
      link: "https://example.com/result/shirt",
    },
    {
      title: "How to Read",
      image: "250px-Atlas_-_book.jpg",
      category: "Books",
      price: 0.01,
      link: "https://example.com/result/Book1",
    },
    {
      title: "TV",
      image: "Samsung_LED_TV.jpg",
      category: "Electronics",
      price: 1999.99,
      link: "https://example.com/result/TV",
    },
    {
      title: "Desk",
      image: "330px-Bureau_table_MET_DP108643.jpg",
      category: "Home",
      price: 129.99,
      link: "https://example.com/result/Desk",
    },
    {
      title: "Dog Toy",
      image: "Dogs_playing.JPG",
      category: "Pets",
      price: 0.99,
      link: "https://example.com/result/Dog_Toy",
    },
    {
      title: "Wheel Cover",
      image: "Triumph_Dolomite_drophead_(1940)_(9489766872).jpg",
      category: "Car",
      price: 49.49,
      link: "https://example.com/result/Wheel_Cover",
    },
    {
      title: "Shoes",
      image: "S3_safety_footwear.jpg",
      category: "Clothing",
      price: 39.67,
      link: "https://example.com/result/Shoes",
    },
    {
      title: "Not How to Read",
      image: "250px-The_House_of_Leaves_-_Burning_4.jpg",
      category: "Books",
      price: 0.01,
      link: "https://example.com/result/Book2",
    },
    {
      title: "Game System",
      image: "Nintendo-Switch-Console-Docked-wJoyConRB.jpg",
      category: "Electronics",
      price: 799.79,
      link: "https://example.com/result/Game_System",
    },
  ];

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    const category = document.getElementById("category").value;
    const sortBy = document.getElementById("sort-by").value;

    let results = searchData(query, category);
    results = sortData(results, sortBy);
    displayResults(results);
  });

  function sortData(data, sortBy) {
    const sorted = [...data];

    switch (sortBy) {
      case "A-Z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
    }
    return sorted;
  }

  function searchData(query, category) {
    return sampleData.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase() === query ||
        item.title.toLowerCase().includes(query);

      const matchesCategory = category === "" || item.category === category;

      return matchesQuery && matchesCategory;
    });
  }

  function displayResults(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<p class="no-results">No results found.</p>';
      return;
    }

    results.forEach((item) => {
      const card = document.createElement("div");
      card.className = "result-card";
      card.innerHTML = `
                    <a href="#" class="result-link">
                    <h3>${item.title}</h3>
                    <img src=${item.image}>
                    <small>Category: ${item.category} | Price: $${item.price}</small>
                    <span class="url">${item.link}</span>
                    </a>
            `;
      resultsContainer.appendChild(card);
    });
  }
});
