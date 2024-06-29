import{a as p,i as n,s as m}from"./assets/vendor-da73009b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g=p.create({baseURL:"https://pixabay.com"});async function y(a,r,t){try{return(await g.get("/api/",{params:{key:"44578932-6e2bdfbc9295001d2a495ef0a",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r}})).data}catch(i){n.error({title:"Error",message:`${i}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const r=a.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
                width=360;
                height=200;
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags} " />
        </a>
                <div class="image-info">
                <p class = "info-item"><strong>LIKES:</strong> ${t.likes}</p>
                <p class = "info-item"><strong>VIEWS:</strong> ${t.views}</p>
                <p class = "info-item"><strong>COMMENTS:</strong> ${t.comments}</p>
                <p class = "info-item"><strong>DOWNLOADS: </strong>${t.downloads}</p>
                </div>
        </li>
        `).join("");s.imgGallery.innerHTML=r,h.refresh()}function d(){s.formSearch.reset()}function S(){s.loader.classList.remove("hidden")}function b(){s.loader.classList.add("hidden")}function w(){s.moreBtn.style.display="flex"}function M(){s.loader.classList.add("hidden")}let c="",B=1,u=1;const f=15,s={formSearch:document.querySelector(".form"),inputImgSearch:document.querySelector(".input-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".more-button")};s.formSearch.addEventListener("submit",async a=>{if(a.preventDefault(),c=s.inputImgSearch.value.trim(),M(),c===""){n.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once",color:"#ef4000",messageColor:"#fff",messageSize:"16"});return}S(),s.imgGallery.innerHTML=" ";try{const r=await y(c,B,f);if(u=Math.ceil(r.totalHits/f),u===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once",color:"#ef4040",messageColor:"#fff",messageSize:"16",layout:2}),d();return}b(),L(r.hits),w(),d()}catch(r){n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
