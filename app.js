// Product data array
const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 20,
      description: "A timeless piece for your wardrobe. Made from 100% cotton.",
      image: "images/t-shirt.webp",
      category: "clothing"
    },
    {
      id: 2,
      name: "Samsung 55\" UHD TV",
      price: 700,
      description: "Stunning 4K Ultra HD display for an immersive viewing experience.",
      image: "images/tv.webp",
      category: "electronics"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 45,
      description: "A stylish denim jacket for all seasons.",
      image: "images/jacket.webp",
      category: "clothing"
    },
    {
      id: 4,
      name: "Sony WH-1000XM4 Headphones",
      price: 350,
      description: "Industry-leading noise cancellation for immersive sound.",
      image: "images/headphones.webp",
      category: "electronics"
    },
    {
      id: 5,
      name: "Flip Phone Galaxy",
      price: 999,
      description: "5G speed and the fastest chip in a smartphone.",
      image: "images/phone.webp",
      category: "electronics"
    },
    {
      id: 6,
      name: "White Dress",
      price: 35,
      description: "Perfect for a casual look with comfort.",
      image: "images/dress.webp",
      category: "clothing"
    }
  ];
  
  // Function to generate product elements based on category
  function generateProductElements(category) {
    const productContainer = document.querySelector(".products--list");
    productContainer.innerHTML = ""; // Clear the container for re-rendering
  
    const filteredProducts = category
      ? products.filter(product => product.category === category)
      : products;
  
    filteredProducts.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.classList.add("product", "card");
  
      productElement.innerHTML = `
        <img class="product--image" src="${product.image}" alt="${product.name}" />
        <h1 class="product--name">${product.name}</h1>
        <p class="product--description">${product.description}</p>
        <p class="product--price">$${product.price.toFixed(2)}</p>
        <button class="product--details">View Details</button>
      `;
  
      productContainer.appendChild(productElement);
    });
  }
  
  // Sorting function
  function sortProducts(criteria) {
    if (criteria === "price-asc") {
      products.sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      products.sort((a, b) => b.price - a.price);
    } else if (criteria === "name-asc") {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "name-desc") {
      products.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  
  // Event listener for sorting dropdown
  document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname;
    let category = null;
  
    if (page.includes("clothing")) {
      category = "clothing";
    } else if (page.includes("electronics")) {
      category = "electronics";
    }
  
    generateProductElements(category);
  
    const sortDropdown = document.getElementById("sort");
    sortDropdown.addEventListener("change", () => {
      const selectedOption = sortDropdown.value;
      sortProducts(selectedOption); // Sort the products array
      generateProductElements(category); // Re-render the sorted products
    });
  });
  