console.log('test');
//1 - Fetch load and display function 

const loadCategory = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.log(error));

};
const displayCategory = (categories) => {
  const categories_Container = document.getElementById('categories');


  categories.forEach((item) => {
    // Create a button 
    const button = document.createElement('button');
    button.className = "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white btn-outline flex flex-col items-center gap-2 category-btn";
    //implement button active fn
    button.id = `btn-${item.id}`;

    button.innerHTML = `
       
        <img class='w-10 h-10 object-contain' src="${item.category_icon}" alt="${item.category}" />
        <span  class='text-sm md:text-base lg:text-xl font-medium'>${item.category}</span>
      `;
    button.onclick = () => { loadCategories(item.category, item.id) };




    // Append 
    categories_Container.appendChild(button);
  });
};

loadCategory();


// const loadAllPets = () => {
//   fetch('https://openapi.programming-hero.com/api/peddy/pets')
//     .then(res => res.json())
//     .then(data => displayAllPets(data.pets))
//     .catch(error => console.log(error));

//without loader  };
const loadAllPets = () => {
  const loader = document.getElementById('loader');
  const allPets_Container = document.getElementById('allPets');
  // 1st hidden loader and content
  loader.classList.remove('hidden');
  allPets_Container.classList.add('hidden');
  const startTime = Date.now(); 

  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res) => res.json())
    .then((data) => {
      // 1st 
      const endTime = Date.now(); 
      const elapsedTime = endTime - startTime;
      const delay = Math.max(1000 - elapsedTime, 0); 
      // 2nd 
      setTimeout(() => {
        displayAllPets(data.pets);
        loader.classList.add('hidden'); 
        allPets_Container.classList.remove('hidden'); 
      }, delay);
    })
    .catch((error) =>  console.error(error));
};

const displayAllPets = (allPets) => {
  // console.log(allPets);
  const allPets_Container = document.getElementById('allPets');
  allPets_Container.innerHTML = "";
  // sort the data by price 
  allPets.sort((a, b) => (b.price || 0) - (a.price || 0));
  //implement no content here 
  if (allPets.length == 0) {
    allPets_Container.classList.remove('grid');
    allPets_Container.innerHTML = `
  <div class="min-h-[300px] bg-orange-300 rounded flex flex-col gap-5 justify-center items-center">
  <img class="w-[200px]" src="https://img.icons8.com/?size=80&id=63921&format=png" alt="img"/>
  <h2 class="text-center text-xl font-bold">No Content Here in this Category</h2>
  
  </div>
  `;
    return;
  } else {
    allPets_Container.classList.add('grid');
  }
  allPets.forEach((item) => {
    console.log(item);
    const div = document.createElement('div');
    div.innerHTML = `
  <!-- Card 1 -->
  <div class="bg-white  rounded-lg overflow-hidden mb-10 border border-slate-300 p-3">
    <img class="w-full h-[300px] object-cover rounded-lg" src="${item.image}" alt="Mister Tartosh">
    <div class="p-4   space-y-1">
      <h2 class="text-2xl font-bold pb-3">${item.pet_name}</h2>
      
      <div class="flex text-[#13131399] ">
      <img src="images/Frame1.png"/>
      ${item.breed && item.breed.length > 0 ? ` <p class="text-sm text-gray-500 pl-1"> Breed: ${item.breed}</p>` : `<span class="text-sm text-gray-500 pl-1">Not Available</span>`}
      </div>

     <div class="flex">
      <img src="images/Frame2.png"/>
   ${item.date_of_birth && item.date_of_birth.length > 0 ?
        `<p class="text-sm text-gray-500 pl-1">Birth: ${item.date_of_birth}</p>` :
        `<span class="text-sm text-gray-500 pl-1">Not Available</span>`
      }
      </div>
      <div class="flex">
      <img src="images/Frame3.png"/>
      ${item.gender && item.gender.length > 0 ? ` <p class="text-sm text-gray-500 pl-1">Gender: ${item.gender}</p>` : `<span class="text-sm text-gray-500 pl-1">Not Available</span>`}
      </div>

        <div class="flex">
      <img src="images/price.png"/>
       ${item.price != null && item.price > 0 ?
        `<p class="text-sm text-gray-500 pl-1">Price: ${item.price}$</p>` :
        `<span class="text-sm text-gray-500 pl-1">Not Available</span>`
      }
      </div>
      <div class="border-b  border-slate-400 pt-5"></div>

      <div class="mt-4 flex justify-between pt-3">
        <button onclick="appendImg('${item.image}')" class="bg-white text-[#0E7A81] border font-bold px-4 py-2 rounded hover:bg-red-400 hover:text-white transition-colors duration-1000 ease-in-out"> <img class="w-8 " src="images/likebtn.png"/></button>
        <button onclick="openCountdownModal()" class="bg-white hidden lg:block text-[#0E7A81] border font-bold px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-1000 ease-in-out">Adopt</button>
        <button onclick="modalDisplay('${item.petId}')" class="bg-white text-[#0E7A81] border font-bold px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-1000 ease-in-out">Details</button>
      </div>
    </div>
  </div>
  
`;
    allPets_Container.appendChild(div);

  });
};

loadAllPets();

//3 categories data load ---------------------------------------------------------
const loadCategories = (cateID, id) => {
  const loader = document.getElementById('loader');
  const allPets_Container = document.getElementById('allPets');

  // 1st hidden loader and content
  loader.classList.remove('hidden');
  allPets_Container.classList.add('hidden');
  const startTime = Date.now(); 

  fetch(`https://openapi.programming-hero.com/api/peddy/category/${cateID}`)
    .then((res) => res.json())
    .then((data) => {
      // 1st 
      const endTime = Date.now(); 
      const elapsedTime = endTime - startTime;
      const delay = Math.max(1000 - elapsedTime, 0); 
      // 2nd 
      setTimeout(() => {
        displayAllPets(data.data); // Display fetched data
        removeActiveClass(); // Remove active class from all buttons
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active"); // Add active class to the clicked button

        // Hide loader and show content
        loader.classList.add('hidden');
        allPets_Container.classList.remove('hidden');
      }, delay);
    })
    .catch(error => console.log(error));
};


// remove bg ---------------------
const removeActiveClass = () => {
  const button = document.getElementsByClassName('category-btn');
  for (const btn of button) {
    btn.classList.remove("active");
  };
};
//Modal functionality  create -------------------------------------------------------------------------------------------
const modalDisplay = (modalId) => {
  // console.log(modalId);
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${modalId}`)
    .then(res => res.json())
    .then(data => modalOutput(data.petData))
    .catch(error => console.log(error));

};
const modalOutput = (modalData) => {
  console.log(modalData);
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
<div class="">
<img class ="w-full" src="${modalData.image}" />
<h2 class ="font-bold text-xl">${modalData.pet_name}</h2>
<div class="grid grid-cols-2 gap-5 pt-5">
<div class="flex text-[#13131399] ">
      <img src="images/Frame1.png"/>
      ${modalData.breed && modalData.breed.length > 0 ? ` <p class="text-sm text-gray-500 pl-1"> Breed : ${modalData.breed}</p>` : `<span class="text-sm text-gray-500 pl-1">Not Available</span>`}
      </div>

     <div class="flex">
      <img src="images/Frame2.png"/>
   ${modalData.date_of_birth && modalData.date_of_birth.length > 0 ?
      `<p class="text-sm text-gray-500 pl-1">Birth : ${modalData.date_of_birth}</p>` :
      `<span class="text-sm text-gray-500 pl-1">Not Available</span>`
    }
      </div>
      <div class="flex">
      <img src="images/Frame3.png"/>
      ${modalData.gender && modalData.gender.length > 0 ? ` <p class="text-sm text-gray-500 pl-1">Gender : ${modalData.gender}</p>` : `<span class="text-sm text-gray-500 pl-1">Not Available</span>`}
      </div>

        <div class="flex">
      <img src="images/price.png"/>
       ${modalData.price != null && modalData.price > 0 ?
      `<p class="text-sm text-gray-500 pl-1">Price : ${modalData.price}$</p>` :
      `<span class="text-sm text-gray-500 pl-1">Not Available</span>`
    }
      </div>
      <div class="flex">
      <img src="images/Frame3.png"/>
      ${modalData.vaccinated_status && modalData.vaccinated_status.length > 0 ? ` <p class="text-sm text-gray-500 pl-1">vaccinated status : ${modalData.vaccinated_status}</p>` : `<span class="text-sm text-gray-500 pl-1">Not Available</span>`}
      </div>

</div>
<div class="border-b  border-slate-600 pt-5"></div>
<h2 class ="font-bold text-xl pt-3">Details Information</h2>
<p class="text-gray-500 pt-5">${modalData.pet_details}</p>
</div>

`;
  document.getElementById('customModal').showModal();
};

// Countdown modal --------------------------------------------------------------------------------------
let countdownInterval;
function openCountdownModal() {
  const modal = document.getElementById('countdownModal');
  const timerElement = document.getElementById('countdownTimer');
  let countdown = 3;
  modal.showModal();
  // Start countdown
  timerElement.textContent = countdown;
  countdownInterval = setInterval(() => {
    countdown--;
    timerElement.textContent = countdown;
    // Close modal
    if (countdown === 0) {
      clearInterval(countdownInterval);
      modal.close();
    }
  }, 1000);
}
// clear function
function clearCountdown() {
  const modal = document.getElementById('countdownModal');
  clearInterval(countdownInterval); 
  modal.close(); 
}

// Append Img Function 

const appendImg =(image)=>{
  console.log(image);
const imgContainer = document.getElementById('imgContainer');

const img = document.createElement('div');
img.innerHTML = `<div class="rounded-xl p-3  "><img class="rounded-xl w-full  object-cover" src="${image}"/></div>`;
imgContainer.append(img);
};