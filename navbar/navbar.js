// Navigation state
let activeNav = 'home';
let isDesktopSearchExpanded = false;
let isMobileSearchOpen = false;

// Get elements
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

const searchBtnMobile = document.getElementById('searchBtnMobile');
const searchBtnTablet = document.getElementById('searchBtnTablet');
const mobileSearchDropdown = document.getElementById('mobileSearchDropdown');
const mobileSearchInput = document.getElementById('mobileSearchInput');

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const profileBtn = document.getElementById('profileBtn');

const allNavItems = document.querySelectorAll('.nav-item');

// Desktop search toggle
if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
        isDesktopSearchExpanded = !isDesktopSearchExpanded;
        
        if (isDesktopSearchExpanded) {
            searchBar.classList.add('expanded');
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        } else {
            searchBar.classList.remove('expanded');
        }
    });
}

// Mobile/Tablet search toggle
function toggleMobileSearch() {
    isMobileSearchOpen = !isMobileSearchOpen;
    
    if (isMobileSearchOpen) {
        mobileSearchDropdown.classList.add('open');
        setTimeout(() => {
            mobileSearchInput.focus();
        }, 100);
    } else {
        mobileSearchDropdown.classList.remove('open');
    }
}

if (searchBtnMobile) {
    searchBtnMobile.addEventListener('click', toggleMobileSearch);
}

if (searchBtnTablet) {
    searchBtnTablet.addEventListener('click', toggleMobileSearch);
}

// Navigation item click handlers
allNavItems.forEach(item => {
    item.addEventListener('click', function() {
        const navId = this.getAttribute('data-nav');
        
        // Remove active class from all items with same nav id
        document.querySelectorAll(`[data-nav="${activeNav}"]`).forEach(el => {
            el.classList.remove('active');
        });
        
        // Add active class to all items with new nav id
        document.querySelectorAll(`[data-nav="${navId}"]`).forEach(el => {
            el.classList.add('active');
        });
        
        activeNav = navId;

        // Smooth scroll mapping for landing page sections
        const idMap = { bag: 'shop', cart: 'reviews' };
        const targetId = idMap[navId] || navId;
        const target = document.getElementById(targetId) || document.querySelector(`[data-section-id="${targetId}"]`);
        if (target) {
            const rect = target.getBoundingClientRect();
            const offset = 80;
            const top = rect.top + (window.pageYOffset || document.documentElement.scrollTop) - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        console.log(`Navigated to: ${navId}`);
    });
});

// Auth button handlers
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        console.log('Login triggered');
    });
}

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        console.log('Register triggered');
    });
}

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        console.log('Profile triggered');
    });
}

// Search input handlers
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        console.log('Desktop search:', e.target.value);
    });
}

if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
        console.log('Mobile search:', e.target.value);
    });
}

// Close mobile search when clicking outside
document.addEventListener('click', (e) => {
    if (isMobileSearchOpen && 
        !mobileSearchDropdown.contains(e.target) && 
        e.target !== searchBtnMobile && 
        e.target !== searchBtnTablet) {
        toggleMobileSearch();
    }
});

// Close desktop search when clicking outside
document.addEventListener('click', (e) => {
    if (isDesktopSearchExpanded && 
        searchBar && 
        !searchBar.contains(e.target)) {
        isDesktopSearchExpanded = false;
        searchBar.classList.remove('expanded');
    }
});
