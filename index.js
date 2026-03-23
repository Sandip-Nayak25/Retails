import { dashboard } from "./Pages/Dashboard/dashboard.js";
import { workforce } from "./Pages/Workforce/workforce.js";
import { sales } from "./Pages/Sales/sales.js";
import { forecast } from "./Pages/Forecast/forecast.js";
import { settings } from "./Pages/Settings/settings.js";

const components = { dashboard,
                     workforce, 
                     sales, 
                     forecast,
                     settings
                    };

const API = {
    sales: "https://6993135a8f29113acd3fe32a.mockapi.io/sales_analytics",
    empTable: "https://6998492fd66520f95f171dc7.mockapi.io/tuy"
};


const p2 = fetch(API.sales)
.then(res => res.ok ? res.json() : null)
.catch(() => null);

const p3 = fetch(API.empTable)
.then(res => res.ok ? res.json() : null)
.catch(() => null);

const salesData = await p2;
const empData = await p3;

const CACHE_KEY = "app_cache_data"; // ! localStorage key
const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};

const allApiData = {
  salesData: salesData?.length ? salesData : (cachedData.salesData || []),
  empData: empData?.length ? empData : (cachedData.empData || [])
};

if (salesData?.length || empData?.length) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(allApiData));
}

async function navigateTo(page) {

    const root = document.getElementById('root');
    const dateElement = document.getElementById('current-date');
    const viewTitle = document.getElementById("view-title");
    const title = document.getElementById("title");

    // ! Title Update
    if(title) {
        title.textContent = `RetailDash | ${page.toUpperCase()}`;
    };

    // ! Header Title Update
    if(viewTitle) {
        viewTitle.textContent = `DOWNTOWN STORE  ${page.toUpperCase()}`
    };

    // Current Time
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric', weekday: "long"
        });
    };
 
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    const renderPage = components[page];
    const content = renderPage(allApiData);

    const pageWrapper = document.createElement('div');
    const template = document.createElement('template');

    if (renderPage) {
        pageWrapper.className = 'page-content';
        if (typeof content === 'string') {
            template.innerHTML = content.trim(); 
            pageWrapper.appendChild(template.content);

        } 

        root.replaceChildren(pageWrapper);
    }

}
navigateTo( "dashboard" );

document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (link){
        navigateTo(link.dataset.page)
    };
});
    

setInterval(() => {
    const input = document.activeElement.tagName === 'INPUT';
    const textarea = document.activeElement.tagName === 'TEXTAREA';
    const activeLink = document.querySelector('.nav-link.active');
    
    const isTyping = input || textarea;
    if (isTyping) {
        // console.log("stop-refresh");
        return; 
    }
    const currentPage = activeLink.dataset.page;
    // console.log(" Auto-refresh");
    navigateTo(currentPage);
}, 6000);
