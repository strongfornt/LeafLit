const cardContainer = document.getElementById('card-container');
const noData = document.getElementById('no-data')
console.log(noData);
const loadSpinner = document.getElementById('spinner1');


//all data load for lets disc section=========


const allData = async() =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const {posts} = data;
    console.log(posts.length);
  
    // cardContainer.innerText='';
    posts.forEach(post => {
        // console.log(post.comment_count);
        const div = document.createElement('div');
        
       
        div.className=`mb-5  rounded-2xl`
        div.innerHTML =`
        <div class="card card-side  shadow-xl flex flex-col lg:flex-row  p-8 gap-2 bg-[#F3F3F5] ">
        <div class="avatar w-16 h-16 rounded-full relative ">
          <div class="w-16 h-16 rounded-full">
            <img class="w-5 h-5" src="${post.image}" />
          
          </div>
          ${post.isActive ?'<p class="bg-[#10B981] rounded-full w-3 h-3 absolute left-12 top-1 "></p>':'<p class="bg-[#FF3434] rounded-full w-3 h-3 absolute left-12 top-1 "></p>'}
            
          
        </div>
          <div class="w-full">
            <div class="space-y-2 mb-3">
              <div class="flex gap-4">
                <p class="text-sm text-[#12132DCC]"># <span>${post.category}</span></p>
                <p class="text-sm text-[#12132DCC]">Author : <span>${post.author.name}</span></p>
              </div>
              <h2 class="card-title title-[#12132D] font-bold">${post.title}</h2>
              <p class="text-[#12132D99] text-sm">
               ${post.description}
              </p>
            </div>
            <!--second poss-================================-->
         <div class="flex flex-col lg:flex-row justify-between border-t border-dotted py-2 border-t-[#12132D40]  w-full ">
          <!--left side icon start======================================================-->
          <div class="flex gap-2 lg:gap-10  flex-1">
            <p class="space-x-3"><img class="inline" src="images/comment.png" alt=""><span class="text-sm text-[#12132D99]">${post.comment_count}</span></p>
            <p class="space-x-3"><img class="inline" src="images/eye.png" alt=""><span class="text-sm text-[#12132D99]">${post.view_count}</span></p>
            <p class="space-x-3"><img class="inline" src="images/time (1).png" alt=""><span class="text-sm text-[#12132D99]"><span>${post.posted_time}</span> min</span></p>
            <!--left side icon end========================================================-->
         </div>
         <!--right side icon start ====================================================-->
         <div class="mt-2 lg:mt-0  rounded-full">
          <img onClick="massageButton(&quot;${post.title}&quot;, ${post.view_count})" id="massage-icon" class="bg-white rounded-full cursor-pointer" src="images/email.png" alt="">
         </div>
         <!--right side icon  end======================================================-->
         </div>
          </div>
        </div>
        `;
       
       
       
        cardContainer.appendChild(div)
    });
    loadingSpinner(false)
  
}



//fetch by category
const fetchByCategory = async(categoryName) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
  const data = await res.json();
  const {posts} = data;
  if(posts.length === 0){
    console.log("hi");
    noData.classList.remove('hidden')
    console.log(noData);
  }

  cardContainer.innerHTML='';
  posts.forEach(post => {
      // console.log(post.comment_count);
      const div = document.createElement('div');
      
     
      div.className=`mb-5  rounded-2xl`
      div.innerHTML =`
      <div class="card card-side  shadow-xl flex flex-col lg:flex-row  p-8 gap-2 bg-[#F3F3F5] ">
      <div class="avatar w-16 h-16 rounded-full relative ">
        <div class="w-16 h-16 rounded-full">
          <img class="w-5 h-5" src="${post.image}" />
        
        </div>
        ${post.isActive ?'<p class="bg-[#10B981] rounded-full w-3 h-3 absolute left-12 top-1 "></p>':'<p class="bg-[#FF3434] rounded-full w-3 h-3 absolute left-12 top-1 "></p>'}
          
        
      </div>
        <div class="w-full">
          <div class="space-y-2 mb-3">
            <div class="flex gap-4">
              <p class="text-sm text-[#12132DCC]"># <span>${post.category}</span></p>
              <p class="text-sm text-[#12132DCC]">Author : <span>${post.author.name}</span></p>
            </div>
            <h2 class="card-title title-[#12132D] font-bold">${post.title}</h2>
            <p class="text-[#12132D99] text-sm">
             ${post.description}
            </p>
          </div>
          <!--second poss-================================-->
       <div class="flex flex-col lg:flex-row justify-between border-t border-dotted py-2 border-t-[#12132D40]  w-full ">
        <!--left side icon start======================================================-->
        <div class="flex gap-2 lg:gap-10  flex-1">
          <p class="space-x-3"><img class="inline" src="images/comment.png" alt=""><span class="text-sm text-[#12132D99]">${post.comment_count}</span></p>
          <p class="space-x-3"><img class="inline" src="images/eye.png" alt=""><span class="text-sm text-[#12132D99]">${post.view_count}</span></p>
          <p class="space-x-3"><img class="inline" src="images/time (1).png" alt=""><span class="text-sm text-[#12132D99]"><span>${post.posted_time}</span> min</span></p>
          <!--left side icon end========================================================-->
       </div>
       <!--right side icon start ====================================================-->
       <div class="mt-2 lg:mt-0  rounded-full">
        <img onClick="massageButton('${post.title}', ${post.view_count})" id="massage-icon" class="bg-white rounded-full cursor-pointer" src="images/email.png" alt="">
       </div>
       <!--right side icon  end======================================================-->
       </div>
        </div>
      </div>
      `;
     
     
     
      cardContainer.appendChild(div)
  });
  // if(posts.length >1){
  //   noData.classList.add('hidden');
  //   console.log("hellfado");
  //   console.log(noData);
  // }
  loadingSpinner(false)
}

//using search bar for get data======================================
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click',()=>{
loadingSpinner(true)
  const searchField = document.getElementById('search-field');
  const searchFieldText = searchField.value;
  setTimeout(() => {
    fetchByCategory(searchFieldText);
  }, 2000);
  searchField.value="";
 
})

//title-container================================================
const titleContainer = document.getElementById('title-container');
const countTitle = document.getElementById('count-title');
let count = 0;

const massageButton = (title,view_count) =>{
  count = count + 1;
  countTitle.innerText=count;
  const div = document.createElement('div');
  div.classList.add('mb-2')
  div.innerHTML=`
  <div class="flex gap-4 justify-between  bg-white p-3 rounded-xl ">
  <div class="">
   <p  class="text-sm text-[#12132D]">
     ${title}
   </p>
  </div>
  <div class="">
   <p class="space-x-1  flex items-center"><img class="inline" src="images/eye.png" alt=""><span class="text-sm text-[#12132D99]">${view_count}</span></p>
  </div>

 </div>
  `;
  titleContainer.appendChild(div)
  
}

//load spinner============================
const loadingSpinner = (isLoading) => {
console.log(isLoading);
  if(isLoading){
    loadSpinner.classList.remove('hidden');
    
    
  }else{
    loadSpinner.classList.add('hidden');
    
    
  }
}


// if(post){
//   console.log("hi");
//   noData.classList.remove('hidden')
// }else{
//   noData.classList.add('hidden');
//   console.log("hello");
// }
const callAllData = () =>{
  loadingSpinner(true)
  setTimeout(() => {
    allData()
  },2000);

}
callAllData()