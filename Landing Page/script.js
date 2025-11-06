// React and ReactDOM globals from CDN
const { createElement: h, useState, useEffect } = React;
const { createRoot } = ReactDOM;

// Image paths - Replace these with actual paths to your images
const IMAGES = {
    strawBag: 'attached_assets/generated_images/Natural_woven_straw_bag_a401f6db.png',
    patternBag: 'attached_assets/generated_images/Blue_patterned_woven_bag_08f7f229.png',
    wovenMaterial: 'attached_assets/generated_images/Hands_holding_woven_material_fd4a0b89.png',
    femaleArtisan: 'attached_assets/generated_images/Female_artisan_portrait_e3cb4428.png',
    maleArtisan: 'attached_assets/generated_images/Male_artisan_portrait_7264400f.png',
    youngArtisan: 'attached_assets/generated_images/Young_artisan_portrait_e668d4f7.png',
    wovenBags: 'attached_assets/generated_images/Woven_bags_on_fabric_907a5afd.png'
};

// Lucide Icon Components
const Icon = ({ name, className = '', size = 24, ...props }) => {
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);
    
    return h('i', {
        'data-lucide': name,
        className,
        ...props
    });
};

// Button Component
const Button = ({ children, variant = 'default', size = 'default', className = '', onClick, disabled, ...props }) => {
    const variantClasses = {
        default: 'button-primary',
        secondary: 'button-secondary',
        outline: 'button-outline'
    };
    
    const sizeClasses = {
        default: '',
        lg: 'button-lg',
        icon: 'button-icon'
    };
    
    return h('button', {
        className: `button ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
        onClick,
        disabled,
        ...props
    }, children);
};

// Input Component
const Input = ({ type = 'text', placeholder, value, onChange, className = '', ...props }) => {
    return h('input', {
        type,
        placeholder,
        value,
        onChange,
        className: `input ${className}`,
        ...props
    });
};

// Badge Component
const Badge = ({ children, variant = 'default', className = '', onClick, ...props }) => {
    const variantClasses = {
        default: 'bg-primary text-primary-foreground border-primary',
        outline: 'badge-outline'
    };
    
    return h('span', {
        className: `badge ${variantClasses[variant]} ${className}`,
        onClick,
        ...props
    }, children);
};

// Card Component
const Card = ({ children, className = '', ...props }) => {
    return h('div', {
        className: `card ${className}`,
        ...props
    }, children);
};

// Navbar Component
const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [activeFilters, setActiveFilters] = useState(['All']);
    
    const filterLabels = ['All', 'Bags', 'Baskets', 'Decor', 'Accessories', 'New', 'Sale'];
    
    const handleClearSearch = () => {
        setSearchValue('');
    };
    
    const toggleFilter = (label) => {
        if (label === 'All') {
            setActiveFilters(['All']);
        } else {
            const newFilters = activeFilters.includes(label)
                ? activeFilters.filter(f => f !== label)
                : [...activeFilters.filter(f => f !== 'All'), label];
            
            setActiveFilters(newFilters.length > 0 ? newFilters : ['All']);
        }
    };
    
    const isActive = (label) => activeFilters.includes(label);
    
    return h('nav', { className: 'center-content' },
        h('div', { id: 'navbar-container', className: 'max-w-7xl py-4 xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl w-full' },
            h('div', { className: 'flex flex-col gap-4' },
                h('div', { className: 'flex items-center justify-between gap-4 xl:gap-6 xxl:gap-8' },
                    h('div', { 
                        className: 'flex items-center justify-center w-16 h-16 rounded-full border-4 border-primary flex-shrink-0',
                        'data-testid': 'logo-circle'
                    },
                        h('span', { className: 'text-primary font-bold text-sm' }, 'PURUNIK')
                    ),
                    h('div', { className: 'flex-1 min-w-[200px] max-w-4xl relative' },
                        h(Input, {
                            type: 'search',
                            placeholder: 'Value',
                            value: searchValue,
                            onChange: (e) => setSearchValue(e.target.value),
                            className: 'pr-10',
                            'data-testid': 'input-search'
                        }),
                        searchValue && h('button', {
                            onClick: handleClearSearch,
                            className: 'absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground',
                            'data-testid': 'button-clear-search',
                            'aria-label': 'Clear search'
                        }, h(Icon, { name: 'x', className: 'w-4 h-4' }))
                    ),
                    h('div', { className: 'flex items-center gap-2 xl:gap-3 xxl:gap-4' },
                        h(Button, { size: 'icon', variant: 'outline', 'data-testid': 'button-home', 'aria-label': 'Home' },
                            h(Icon, { name: 'home', className: 'w-4 h-4' })
                        ),
                        h(Button, { size: 'icon', variant: 'outline', 'data-testid': 'button-catalog', 'aria-label': 'Catalog' },
                            h(Icon, { name: 'shopping-bag', className: 'w-4 h-4' })
                        ),
                        h(Button, { size: 'icon', variant: 'outline', 'data-testid': 'button-checkout', 'aria-label': 'Check Out' },
                            h(Icon, { name: 'shopping-cart', className: 'w-4 h-4' })
                        ),
                        h(Button, { size: 'icon', variant: 'outline', 'data-testid': 'button-contact', 'aria-label': 'Contact' },
                            h(Icon, { name: 'phone', className: 'w-4 h-4' })
                        )
                    ),
                    h('div', { className: 'flex items-center gap-2 xl:gap-3 xxl:gap-4' },
                        h(Button, { variant: 'secondary', 'data-testid': 'button-action-1' }, 'Button'),
                        h(Button, { variant: 'default', 'data-testid': 'button-action-2' }, 'Button')
                    )
                ),
                h('div', { className: 'flex items-center gap-2 flex-wrap' },
                    filterLabels.map((label) =>
                        h(Badge, {
                            key: label,
                            onClick: () => toggleFilter(label),
                            className: `cursor-pointer px-4 py-1.5 ${
                                isActive(label)
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary text-secondary-foreground'
                            }`,
                            'data-testid': `filter-${label.toLowerCase()}`
                        },
                            isActive(label) && h(Icon, { name: 'check', className: 'w-3 h-3 mr-1' }),
                            label
                        )
                    )
                )
            )
        )
    );
};

// Hero Component
const Hero = () => {
    const scrollToSejarah = () => {
        const sejarahSection = document.getElementById('sejarah-purunik');
        sejarahSection?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return h('section', { className: 'bg-background py-12 sm:py-16 lg:py-20 xl:py-24 hero-section' },
        h('div', { id: 'hero-container', className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16 xxxl:px-20 uxxl:px-24 xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl' },
            h('div', { className: 'grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 xxl:gap-20 items-center' },
                h('div', { className: 'flex flex-col items-center md:items-start text-center md:text-left gap-6' },
                    h('div', { 
                        className: 'flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary',
                        'data-testid': 'hero-logo'
                    },
                        h('span', { className: 'text-primary font-bold text-2xl' }, 'PURUNIK')
                    ),
                    h('div', { className: 'space-y-3' },
                        h('h1', { 
                            className: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground',
                            'data-testid': 'text-hero-title'
                        }, 'Purunik Kerajinan'),
                        h('p', { 
                            className: 'text-xl sm:text-2xl text-muted-foreground font-light',
                            'data-testid': 'text-hero-subtitle'
                        }, 'Natural & Eco-friendly')
                    ),
                    h(Button, {
                        size: 'lg',
                        onClick: scrollToSejarah,
                        className: 'mt-4',
                        'data-testid': 'button-learn-more'
                    }, 'Learn more')
                ),
                h('div', { className: 'grid grid-cols-2 gap-4 sm:gap-6' },
                    h('div', { 
                        className: 'hover-elevate rounded-md overflow-hidden shadow-md transition-transform hover:scale-105',
                        'data-testid': 'img-product-1'
                    },
                        h('img', {
                            src: IMAGES.strawBag,
                            alt: 'Natural woven straw bag',
                            className: 'w-full h-full object-cover'
                        })
                    ),
                    h('div', { 
                        className: 'hover-elevate rounded-md overflow-hidden shadow-md transition-transform hover:scale-105',
                        'data-testid': 'img-product-2'
                    },
                        h('img', {
                            src: IMAGES.patternBag,
                            alt: 'Blue patterned woven bag',
                            className: 'w-full h-full object-cover'
                        })
                    )
                )
            )
        )
    );
};

// Sejarah Component
const Sejarah = () => {
    return h('section', { 
        id: 'sejarah-purunik',
        className: 'bg-primary py-12 sm:py-16 lg:py-20 xl:py-24 sejarah-section'
    },
        h('div', { id: 'sejarah-container', className: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16 xxxl:px-20 uxxl:px-24 xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl' },
            h(Card, { className: 'p-6 sm:p-8 lg:p-12 xl:p-16 xxl:p-20 bg-card' },
                h('h2', { 
                    className: 'text-3xl sm:text-4xl font-bold text-center mb-8',
                    'data-testid': 'text-sejarah-title'
                }, 'Sejarah Purunik'),
                h('div', { className: 'grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center' },
                    h('div', { className: 'space-y-4 text-card-foreground' },
                        h('p', { 
                            className: 'text-base leading-relaxed',
                            'data-testid': 'text-sejarah-description'
                        }, 'Toko Online dan Offline yang menjual berbagai macam kerajinan tangan berkualitas tinggi. Kami berkomitmen untuk menyediakan produk-produk yang ramah lingkungan dan berkelanjutan, dibuat oleh pengrajin lokal dengan teknik tradisional yang telah diwariskan turun-temurun.'),
                        h('div', null,
                            h('p', { 
                                className: 'font-bold text-lg mb-1',
                                'data-testid': 'text-alamat-label'
                            }, 'Alamat:'),
                            h('p', { 
                                className: 'text-muted-foreground',
                                'data-testid': 'text-alamat-value'
                            }, 'Jl. Kerajinan No. 123, Jakarta Selatan, DKI Jakarta, Indonesia')
                        ),
                        h('p', { 
                            className: 'text-base leading-relaxed',
                            'data-testid': 'text-production-description'
                        }, 'Setiap produk kami dibuat dengan penuh perhatian terhadap detail, menggunakan bahan-bahan alami pilihan seperti rotan, pandan, dan serat alam lainnya. Proses produksi kami menggabungkan kearifan lokal dengan standar kualitas modern, menghasilkan produk yang tidak hanya indah tetapi juga tahan lama dan fungsional.')
                    ),
                    h('div', { className: 'flex justify-center' },
                        h('div', { 
                            className: 'w-64 h-64 rounded-full overflow-hidden shadow-lg',
                            'data-testid': 'img-woven-material'
                        },
                            h('img', {
                                src: IMAGES.wovenMaterial,
                                alt: 'Hand holding woven material',
                                className: 'w-full h-full object-cover'
                            })
                        )
                    )
                )
            )
        )
    );
};

// TeamCard Component
const TeamCard = ({ name, role, title, subtitle, description, imageUrl }) => {
    const nameSlug = name.toLowerCase().replace(/\s+/g, '-');
    
    return h(Card, { 
        className: 'p-6 hover-elevate transition-all hover:scale-105 hover:shadow-lg',
        'data-testid': `card-team-${nameSlug}`
    },
        h('div', { className: 'space-y-4' },
            h('div', { className: 'relative' },
                h('img', {
                    src: imageUrl,
                    alt: name,
                    className: 'w-full h-48 object-cover rounded-md',
                    'data-testid': `img-team-${nameSlug}`
                }),
                h('div', { 
                    className: 'absolute -bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl',
                    style: { backgroundColor: '#E0D6FF' },
                    'data-testid': `badge-avatar-${nameSlug}`
                },
                    h('span', { className: 'text-primary' }, name.charAt(0))
                )
            ),
            h('div', { className: 'pt-2 space-y-2' },
                h('div', null,
                    h('h3', { 
                        className: 'font-bold text-xl',
                        'data-testid': `text-name-${nameSlug}`
                    }, name),
                    h('p', { 
                        className: 'text-muted-foreground text-sm',
                        'data-testid': `text-role-${nameSlug}`
                    }, role)
                ),
                h('div', null,
                    h('p', { 
                        className: 'font-semibold text-base',
                        'data-testid': `text-title-${nameSlug}`
                    }, title),
                    h('p', { 
                        className: 'text-muted-foreground text-sm',
                        'data-testid': `text-subtitle-${nameSlug}`
                    }, subtitle)
                ),
                h('p', { 
                    className: 'text-sm leading-relaxed',
                    'data-testid': `text-description-${nameSlug}`
                }, description),
                h('div', { className: 'flex gap-2 pt-2' },
                    h(Badge, { 
                        variant: 'outline',
                        className: 'bg-background',
                        'data-testid': `badge-label-1-${nameSlug}`
                    }, 'Label'),
                    h(Badge, { 
                        className: 'bg-foreground text-background',
                        'data-testid': `badge-label-2-${nameSlug}`
                    }, 'Label')
                )
            )
        )
    );
};

// TeamSection Component
const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Anggota',
            role: 'Tugas',
            title: 'Senior Artisan',
            subtitle: 'Weaving Specialist',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: IMAGES.femaleArtisan
        },
        {
            name: 'Anggota',
            role: 'Tugas',
            title: 'Master Craftsperson',
            subtitle: 'Quality Control',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: IMAGES.maleArtisan
        },
        {
            name: 'Anggota',
            role: 'Tugas',
            title: 'Junior Artisan',
            subtitle: 'Design & Innovation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: IMAGES.youngArtisan
        }
    ];
    
    return h('section', { className: 'bg-background py-12 sm:py-16 lg:py-20 xl:py-24 team-section' },
        h('div', { id: 'team-container', className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16 xxxl:px-20 uxxl:px-24 xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl' },
            h('h2', { 
                className: 'text-3xl sm:text-4xl font-bold text-center mb-12',
                'data-testid': 'text-team-title'
            }, 'Meet the Team'),
            h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 xxl:gap-16' },
                teamMembers.map((member, index) =>
                    h(TeamCard, { key: index, ...member })
                )
            )
        )
    );
};

// SearchSeparator Component
const SearchSeparator = () => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleAddItem = () => {
        alert('Add new item');
    };
    
    return h('section', { className: 'bg-primary py-8 search-separator-section' },
        h('div', { id: 'search-separator-container', className: 'max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16 xxxl:px-20 xl:max-w-3xl xxl:max-w-4xl xxxl:max-w-5xl' },
            h('div', { className: 'flex items-center gap-2 bg-background rounded-full px-4 py-2 shadow-md' },
                h(Icon, { name: 'search', className: 'w-5 h-5 text-muted-foreground flex-shrink-0' }),
                h(Input, {
                    type: 'search',
                    placeholder: 'Search products...',
                    value: searchValue,
                    onChange: (e) => setSearchValue(e.target.value),
                    className: 'border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
                    'data-testid': 'input-search-separator'
                }),
                h(Button, {
                    size: 'icon',
                    variant: 'secondary',
                    className: 'rounded-full flex-shrink-0',
                    onClick: handleAddItem,
                    'data-testid': 'button-add-item',
                    'aria-label': 'Add new item'
                },
                    h(Icon, { name: 'plus', className: 'w-4 h-4' })
                )
            )
        )
    );
};

// ReviewCard Component
const ReviewCard = ({ title, body, reviewerName, reviewerAvatar, date }) => {
    const [hoveredStar, setHoveredStar] = useState(null);
    const nameSlug = reviewerName.toLowerCase().replace(/\s+/g, '-');
    
    return h(Card, { 
        className: 'p-6 space-y-4',
        'data-testid': `card-review-${nameSlug}`
    },
        h('div', { className: 'flex gap-1' },
            [1, 2, 3, 4, 5].map((star) =>
                h(Icon, {
                    key: star,
                    name: 'star',
                    className: `w-5 h-5 transition-colors cursor-pointer ${
                        hoveredStar && star <= hoveredStar
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                    }`,
                    onMouseEnter: () => setHoveredStar(star),
                    onMouseLeave: () => setHoveredStar(null),
                    'data-testid': `star-${star}-${nameSlug}`
                })
            )
        ),
        h('div', null,
            h('h3', { 
                className: 'font-bold text-lg mb-2',
                'data-testid': `text-review-title-${nameSlug}`
            }, title),
            h('p', { 
                className: 'text-sm text-muted-foreground leading-relaxed',
                'data-testid': `text-review-body-${nameSlug}`
            }, body)
        ),
        h('div', { className: 'flex items-center gap-3 pt-2' },
            h('img', {
                src: reviewerAvatar,
                alt: reviewerName,
                className: 'w-10 h-10 rounded-full object-cover',
                'data-testid': `img-reviewer-${nameSlug}`
            }),
            h('div', null,
                h('p', { 
                    className: 'font-semibold text-sm',
                    'data-testid': `text-reviewer-name-${nameSlug}`
                }, reviewerName),
                h('p', { 
                    className: 'xs:text-xs text-muted-foreground',
                    'data-testid': `text-review-date-${nameSlug}`
                }, date)
            )
        )
    );
};

// ReviewsSection Component
const ReviewsSection = () => {
    const reviews = [
        {
            title: 'Beautiful craftsmanship',
            body: 'The quality of these handwoven bags is exceptional. You can really feel the care and attention to detail in every piece. Highly recommend!',
            reviewerName: 'Sarah Johnson',
            reviewerAvatar: IMAGES.femaleArtisan,
            date: '2 days ago'
        },
        {
            title: 'Eco-friendly and stylish',
            body: 'I love that these products are made from natural materials. The bag I purchased is not only beautiful but also durable and sustainable.',
            reviewerName: 'Michael Chen',
            reviewerAvatar: IMAGES.maleArtisan,
            date: '1 week ago'
        },
        {
            title: 'Amazing traditional art',
            body: 'Supporting local artisans has never been easier. The traditional weaving techniques combined with modern designs make these pieces truly unique.',
            reviewerName: 'Maya Putri',
            reviewerAvatar: IMAGES.youngArtisan,
            date: '2 weeks ago'
        }
    ];
    
    return h('section', { className: 'bg-background py-12 sm:py-16 lg:py-20 xl:py-24 reviews-section' },
        h('div', { id: 'reviews-container', className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16 xxxl:px-20 uxxl:px-24 xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl' },
            h('h2', { 
                className: 'text-3xl sm:text-4xl font-bold mb-12',
                'data-testid': 'text-reviews-title'
            }, 'Latest reviews'),
            h('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 xxl:gap-16' },
                reviews.map((review, index) =>
                    h(ReviewCard, { key: index, ...review })
                )
            )
        )
    );
};

// BackgroundImage Component
const BackgroundImage = () => {
    return h('section', { 
        className: 'w-full h-64 sm:h-80 lg:h-96 xl:h-screen',
        'data-testid': 'section-background-image'
    },
        h('img', {
            src: IMAGES.wovenBags,
            alt: 'Woven bags on fabric',
            className: 'w-full h-full object-cover'
        })
    );
};

// Footer Component
const Footer = () => {
    const iconButtons = [
        { icon: 'home', label: 'Home' },
        { icon: 'shopping-bag', label: 'Catalog' },
        { icon: 'shopping-cart', label: 'Check Out' },
        { icon: 'phone', label: 'Contact' }
    ];
    
    const handleIconClick = (label) => {
        alert(`Redirecting to ${label} page`);
    };
    
    return h('footer', { className: 'bg-primary text-primary-foreground footer-section' },
        h('div', { id: 'footer-container', className: 'max-w-7xl xl:max-w-8xl xxl:max-w-9xl xxxl:max-w-10xl uxxl:max-w-11xl w-full px-4 sm:px-6 lg:px-8 xl:px-12 xxl:px-16' },
            h('div', { className: 'py-6 flex justify-center gap-3 xl:gap-4 xxl:gap-5' },
                iconButtons.map((item) =>
                    h(Button, {
                        key: item.label,
                        size: 'icon',
                        variant: 'outline',
                        className: 'bg-background text-foreground hover-elevate',
                        onClick: () => handleIconClick(item.label),
                        'data-testid': `button-footer-${item.label.toLowerCase().replace(/\s+/g, '-')}`,
                        'aria-label': item.label
                    },
                        h(Icon, { name: item.icon, className: 'w-5 h-5' })
                    )
                )
            ),
            h('div', { className: 'border-t border-primary-foreground/20 py-6' },
                h('div', { className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-6 lg:gap-8 xl:gap-10 xxl:gap-12' },
                    h('div', null,
                        h('h3', { 
                            className: 'font-bold mb-3 text-primary-foreground flex items-center gap-2',
                            'data-testid': 'text-footer-products'
                        }, 
                            h('span', { className: 'text-lg' }, '🛍️'),
                            'Products'
                        ),
                        h('ul', { className: 'space-y-2 text-sm text-primary-foreground/75 footer-links' },
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-bags' }, 'Bags')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-baskets' }, 'Baskets')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-decor' }, 'Decor')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-accessories' }, 'Accessories'))
                        )
                    ),
                    h('div', null,
                        h('h3', { 
                            className: 'font-bold mb-3 text-primary-foreground flex items-center gap-2',
                            'data-testid': 'text-footer-company'
                        }, 
                            h('span', { className: 'text-lg' }, '🏢'),
                            'Company'
                        ),
                        h('ul', { className: 'space-y-2 text-sm text-primary-foreground/75 footer-links' },
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-about' }, 'About Us')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-team' }, 'Our Team')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-careers' }, 'Careers')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-contact-footer' }, 'Contact'))
                        )
                    ),
                    h('div', null,
                        h('h3', { 
                            className: 'font-bold mb-3 text-primary-foreground flex items-center gap-2',
                            'data-testid': 'text-footer-support'
                        }, 
                            h('span', { className: 'text-lg' }, '🤝'),
                            'Support'
                        ),
                        h('ul', { className: 'space-y-2 text-sm text-primary-foreground/75 footer-links' },
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-faq' }, 'FAQ')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-shipping' }, 'Shipping')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-returns' }, 'Returns')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-help' }, 'Help Center'))
                        )
                    ),
                    h('div', null,
                        h('h3', { 
                            className: 'font-bold mb-3 text-primary-foreground flex items-center gap-2',
                            'data-testid': 'text-footer-legal'
                        }, 
                            h('span', { className: 'text-lg' }, '⚖️'),
                            'Legal'
                        ),
                        h('ul', { className: 'space-y-2 text-sm text-primary-foreground/75 footer-links' },
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-privacy' }, 'Privacy Policy')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-terms' }, 'Terms of Service')),
                            h('li', null, h('a', { href: '#', className: 'hover:text-primary-foreground transition-colors', 'data-testid': 'link-cookies' }, 'Cookie Policy'))
                        )
                    )
                )
            ),
            h('div', { className: 'border-t border-primary-foreground/20 py-6' },
                h('p', { 
                    className: 'text-center text-sm text-primary-foreground/60',
                    'data-testid': 'text-copyright'
                }, `© ${new Date().getFullYear()} Purunik Kerajinan. All rights reserved.`)
            )
        )
    );
};

// CarouselProduct Component
const CarouselProduct = ({ imageUrl, title, price, index }) => {
    return h('div', {
        className: 'carousel-item flex-shrink-0',
        'data-testid': `carousel-product-${index}`
    },
        h('div', { className: 'bg-card rounded-md overflow-hidden shadow-md h-full flex flex-col' },
            h('div', { className: 'w-48 h-48 overflow-hidden bg-background' },
                h('img', {
                    src: imageUrl,
                    alt: title,
                    className: 'w-full h-full object-cover hover:scale-105 transition-transform'
                })
            ),
            h('div', { className: 'p-4 flex flex-col flex-1 justify-between' },
                h('h3', {
                    className: 'font-semibold text-base truncate',
                    'data-testid': `carousel-title-${index}`
                }, title),
                h('p', {
                    className: 'text-primary font-bold text-lg',
                    'data-testid': `carousel-price-${index}`
                }, price)
            )
        )
    );
};

// Carousel Component
const Carousel = () => {
    const carouselProducts = [
        { imageUrl: IMAGES.strawBag, title: 'Natural Straw Bag', price: '$45' },
        { imageUrl: IMAGES.patternBag, title: 'Blue Patterned Bag', price: '$52' },
        { imageUrl: IMAGES.strawBag, title: 'Large Woven Tote', price: '$68' },
        { imageUrl: IMAGES.patternBag, title: 'Patterned Basket', price: '$39' },
        { imageUrl: IMAGES.strawBag, title: 'Eco-Friendly Carry', price: '$55' },
        { imageUrl: IMAGES.patternBag, title: 'Decorative Weave', price: '$48' }
    ];

    return h('section', { className: 'bg-primary py-8 carousel-section' },
        h('div', { className: 'w-full' },
            h('div', { className: 'carousel-container overflow-hidden' },
                h('div', { className: 'carousel-track' },
                    carouselProducts.map((product, index) =>
                        h(CarouselProduct, { key: index, ...product, index })
                    ),
                    // Duplicate items for seamless looping
                    carouselProducts.map((product, index) =>
                        h(CarouselProduct, { key: `duplicate-${index}`, ...product, index: `dup-${index}` })
                    )
                )
            )
        )
    );
};

// DecorativeBorders Component
const DecorativeBorders = () => {
    return h('div', null,
        h('div', { className: 'border-left' },
            h('div', { className: 'border-segment-1' }),
            h('div', { className: 'border-segment-2' }),
            h('div', { className: 'border-segment-3' })
        ),
        h('div', { className: 'border-right' },
            h('div', { className: 'border-segment-3' }),
            h('div', { className: 'border-segment-2' }),
            h('div', { className: 'border-segment-1' })
        )
    );
};

// Main App Component
const App = () => {
    return h('div', { className: 'min-h-screen flex flex-col' },
        h(DecorativeBorders),
        h(Navbar),
        h('main', { className: 'flex-1' },
            h(Hero),
            h(Sejarah),
            h(TeamSection),
            h(SearchSeparator),
            h(Carousel),
            h(ReviewsSection),
            h(BackgroundImage)
        ),
        h(Footer)
    );
};

// Initialize the app
const root = createRoot(document.getElementById('root'));
root.render(h(App));