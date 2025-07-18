window.onload = function() {
    // Get parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');
    const docType = urlParams.get('type');
    const docTitle = urlParams.get('title');
    const quizId = urlParams.get('quiz');
    const isTraining = urlParams.get('training');

    let embedUrl = '';

    // Set the correct embed URL based on the type
    if (docType === 'doc') {
        embedUrl = `https://docs.google.com/document/d/${docId}/preview`;
    } else if (docType === 'presentation') {
        embedUrl = `https://docs.google.com/presentation/d/${docId}/embed?start=false&loop=false&delayms=3000`;
    } else if (docType === 'form') {
        embedUrl = `https://docs.google.com/forms/d/${docId}/viewform?embedded=true`;
    } else if (docType === 'pdf') {
        embedUrl = `https://drive.google.com/file/d/${docId}/preview`;
    } else if (docType === 'video') {
        embedUrl = `https://drive.google.com/file/d/${docId}/preview`;
    }

    // Update the page with the correct title and iframe source
    if (docId) { // This block is for viewer.html
        const titleElement = document.getElementById('document-title');
        const iframeElement = document.getElementById('doc-iframe');

        // Set the document title in the header and the browser tab
        if (document.title && titleElement) { // Check if titleElement is not null
            document.title = docTitle;
            titleElement.textContent = docTitle;
        }
            
        // Set the source for the iframe
        if (iframeElement) { // Check if iframeElement is not null
            iframeElement.src = embedUrl;
        }

        // Handle quiz section for training presentations
        if (isTraining === 'true' && quizId) {
            const quizButton = document.getElementById('quiz-button');
            
            if (quizButton) {
                // Show the quiz button
                quizButton.style.display = 'inline-block';
                quizButton.textContent = docTitle + ' Quiz';
                
                // Add click handler to open quiz
                quizButton.addEventListener('click', function() {
                    const quizUrl = `viewer.html?id=${quizId}&type=form&title=${encodeURIComponent(docTitle + ' Quiz')}`;
                    window.location.href = quizUrl;
                });
            }
        }

        // Add sidebar functionality to viewer page
        const burgerMenu = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('.sidebar');
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');

        if (burgerMenu && sidebar && sidebarOverlay) {
            // Toggle sidebar when burger menu is clicked
            burgerMenu.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                burgerMenu.classList.toggle('active');
                sidebarOverlay.classList.toggle('active');
            });

            // Close sidebar when clicking outside (on overlay)
            sidebarOverlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                burgerMenu.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });

            // Toggle submenu when sidebar menu item is clicked
            sidebarMenuItems.forEach(item => {
                item.addEventListener('click', function() {
                    const submenu = this.querySelector('.sidebar-submenu');
                    if (submenu) {
                        submenu.classList.toggle('active');
                    }
                });
            });

            // Handle submenu item clicks
            document.querySelectorAll('.sidebar-submenu-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const fileList = this.querySelector('.sidebar-file-list');
                    const subfolderList = this.querySelector('.sidebar-subfolder-list');
                    if (fileList && !subfolderList) {
                        fileList.style.display = fileList.style.display === 'none' ? 'block' : 'none';
                    }
                    if (subfolderList) {
                        subfolderList.style.display = subfolderList.style.display === 'none' ? 'block' : 'none';
                    }
                });
            });

            // Handle subfolder item clicks
            document.querySelectorAll('.sidebar-subfolder-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const fileList = this.querySelector('.sidebar-file-list');
                    if (fileList) {
                        fileList.style.display = fileList.style.display === 'none' ? 'block' : 'none';
                    }
                });
            });
        }
    } else { // Code for index.html, as docId will be null
        // --- Sidebar Navigation Logic ---
        const burgerMenu = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('.sidebar');
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        const container = document.querySelector('.container');
        const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');
        const quickLinks = document.querySelectorAll('.quick-link');
        
        // Toggle sidebar when burger menu is clicked
        if (burgerMenu) {
            burgerMenu.addEventListener('click', toggleSidebar);
        }
        
        // Close sidebar when clicking outside (on overlay)
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', toggleSidebar);
        }
        
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
            container.classList.toggle('sidebar-active');
        }
        
        // Toggle submenu when sidebar menu item is clicked
        sidebarMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                const submenu = this.querySelector('.sidebar-submenu');
                if (submenu) {
                    submenu.classList.toggle('active');
                }
                
                // Handle category navigation
                const category = this.getAttribute('data-category');
                if (category) {
                    scrollToCategory(category);
                }
            });
        });
        
        // Handle submenu item clicks
        document.querySelectorAll('.sidebar-submenu-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                // Toggle file list or subfolder list visibility
                const fileList = this.querySelector('.sidebar-file-list');
                const subfolderList = this.querySelector('.sidebar-subfolder-list');
                if (fileList && !subfolderList) {
                    fileList.style.display = fileList.style.display === 'none' ? 'block' : 'none';
                }
                if (subfolderList) {
                    subfolderList.style.display = subfolderList.style.display === 'none' ? 'block' : 'none';
                }
            });
        });

        // Handle subfolder item clicks
        document.querySelectorAll('.sidebar-subfolder-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const fileList = this.querySelector('.sidebar-file-list');
                if (fileList) {
                    fileList.style.display = fileList.style.display === 'none' ? 'block' : 'none';
                }
            });
        });
        
        // Initialize the subfolder content display for main container
        document.querySelectorAll('.subfolder-header').forEach(header => {
            const content = header.nextElementSibling;
            if (content && content.classList.contains('active')) {
                content.style.display = 'block';
            } else if (content) {
                content.style.display = 'none';
            }
        });
        
        // Handle quick links - Remove the event listeners to let them work as normal hyperlinks
        quickLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default since we're using direct links with target="_blank"
                // e.preventDefault();
                // const documentId = this.getAttribute('data-document');
                // if (documentId === 'agent-scorecard') {
                //     // Navigate to Agent Scorecard document
                //     openDocument('agent-behavior', 'Admin', 'System');
                // } else if (documentId === 'qa-results') {
                //     // Navigate to QA Results document
                //     openDocument('qa-approach', 'Content', 'Message Quality');
                // }
            });
        });
        //     });
        // });
        
        function scrollToCategory(category) {
            const categoryElement = document.querySelector(`h2 i.fas.fa-${category === 'admin' ? 'shield-alt' : 'book'}`).parentNode;
            if (categoryElement) {
                categoryElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        function scrollToFolder(folderName) {
            const folderHeaders = document.querySelectorAll('.folder-header');
            let folderHeader = null;
            
            folderHeaders.forEach(header => {
                if (header.textContent.trim().toLowerCase().includes(folderName.toLowerCase())) {
                    folderHeader = header;
                }
            });
            
            if (folderHeader) {
                folderHeader.scrollIntoView({ behavior: 'smooth' });
                // Expand folder if it's collapsed
                const folderContent = folderHeader.nextElementSibling;
                if (folderContent && folderContent.style.display === 'none') {
                    toggleFolder(folderHeader);
                }
            }
        }
        
        function openDocument(docName, category, folder) {
            // First find and click on the category
            const categoryItem = document.querySelector(`.sidebar-menu-item[data-category="${category.toLowerCase()}"]`);
            if (categoryItem) {
                categoryItem.click();
                
                // Then find and click on the folder
                const folderItem = document.querySelector(`.sidebar-submenu-item[data-folder="${folder.toLowerCase()}"]`);
                if (folderItem) {
                    folderItem.click();
                    
                    // Finally find and click on the document link
                    setTimeout(() => {
                        const docLinks = document.querySelectorAll('.file');
                        docLinks.forEach(link => {
                            if (link.textContent.trim().toLowerCase().includes(docName.toLowerCase())) {
                                link.click();
                            }
                        });
                    }, 500); // Give time for folder to expand
                }
            }
        }
        
        // --- Modern live search logic ---
        const searchInput = document.getElementById('searchInput');
        const mainElement = document.querySelector('main');
        
        // Get the search results container which is now in the HTML
        const searchResultsContainer = document.getElementById('searchResultsContainer');
        
        // Initialize it
        if (searchResultsContainer) {
            searchResultsContainer.innerHTML = '';
            searchResultsContainer.style.display = 'none';
        } else {
            console.error("Search results container not found in the DOM");
        }

        // Create no results message
        let noResultsMessage = document.getElementById('noResultsMessage');
        if (!noResultsMessage) {
            noResultsMessage = document.createElement('div');
            noResultsMessage.id = 'noResultsMessage';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.marginTop = '20px';
            noResultsMessage.style.fontSize = '1.1rem';
            noResultsMessage.style.color = '#4a5568';
            noResultsMessage.style.fontFamily = 'Montserrat, sans-serif';
            mainElement.insertBefore(noResultsMessage, mainElement.firstChild);
        }
        noResultsMessage.style.display = 'none';
        
        // Add event listener to the search input
        if (searchInput) {
            console.log("Adding search event listener");
            searchInput.addEventListener('input', function() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                console.log("Searching for:", searchTerm);
                
                // Reset search results
                searchResultsContainer.innerHTML = '';
                
                if (searchTerm === '') {
                    // Show all content when search is empty
                    setContentVisible(true);
                    searchResultsContainer.style.display = 'none';
                    noResultsMessage.style.display = 'none';
                    return;
                }
                
                let overallResultsFound = false;

                // First, try enhanced search with document registry
                if (window.documentRegistry) {
                    console.log("Using document registry for search");
                    const searchResults = window.documentRegistry.searchDocuments(searchTerm);
                    console.log("Registry search results:", searchResults);
                    
                    if (searchResults && searchResults.length > 0) {
                        overallResultsFound = true;
                        displayEnhancedSearchResults(searchResults, searchResultsContainer, searchTerm);
                        setContentVisible(false);
                        searchResultsContainer.style.display = 'block';
                    }
                } else {
                    console.log("Document registry not available");
                }
                
                // If no registry results found, try basic search
                if (!overallResultsFound) {
                    console.log("No registry results, trying basic search...");
                    
                    // Search in visible file buttons
                    const fileButtons = document.querySelectorAll('.file-button');
                    const matchingFiles = [];
                    
                    if (fileButtons.length > 0) {
                        console.log("Searching through file buttons...");
                        fileButtons.forEach(button => {
                            const title = button.querySelector('span')?.textContent.toLowerCase() || '';
                            if (title.includes(searchTerm)) {
                                matchingFiles.push({
                                    document: {
                                        title: button.querySelector('span').textContent,
                                        id: button.getAttribute('href').split('id=')[1]?.split('&')[0] || '',
                                        type: button.getAttribute('href').includes('type=presentation') ? 'presentation' : 'doc',
                                        description: ''
                                    },
                                    score: 10
                                });
                            }
                        });
                    }
                    
                    // Also search in folder structure
                    const folderElements = document.querySelectorAll('.folder-header span');
                    folderElements.forEach(folderSpan => {
                        const folderName = folderSpan.textContent.toLowerCase();
                        if (folderName.includes(searchTerm)) {
                            matchingFiles.push({
                                document: {
                                    title: folderSpan.textContent,
                                    type: 'folder',
                                    description: 'Folder in knowledge base'
                                },
                                score: 5
                            });
                        }
                    });
                    
                    if (matchingFiles.length > 0) {
                        overallResultsFound = true;
                        displayEnhancedSearchResults(matchingFiles, searchResultsContainer, searchTerm);
                        setContentVisible(false);
                        searchResultsContainer.style.display = 'block';
                    }
                }
                
                // Show no results message if needed
                if (!overallResultsFound) {
                    noResultsMessage.textContent = `No results found for "${searchTerm}"`;
                    noResultsMessage.style.display = 'block';
                    setContentVisible(false);
                } else {
                    noResultsMessage.style.display = 'none';
                }
            });
        } else {
            console.error("Search input element not found");
        }

        // Function to display enhanced search results in a pretty way
        function displayEnhancedSearchResults(results, container, searchTerm) {
            container.innerHTML = '';
            
            // Title for results
            const resultsTitle = document.createElement('div');
            resultsTitle.style.textAlign = 'center';
            resultsTitle.style.marginBottom = '25px';
            resultsTitle.style.fontSize = '1.2rem';
            resultsTitle.style.fontWeight = '600';
            resultsTitle.style.color = '#4a5568';
            resultsTitle.style.fontFamily = 'Montserrat, sans-serif';
            resultsTitle.innerHTML = `🔍 Search Results for "${searchTerm}" <span style="color:#5a67d8;">(${results.length} found)</span>`;
            container.appendChild(resultsTitle);
            
            // Results grid
            const resultsGrid = document.createElement('div');
            resultsGrid.style.display = 'grid';
            resultsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
            resultsGrid.style.gap = '20px';
            resultsGrid.style.padding = '10px';
            
            // Add each result as a card
            results.forEach(result => {
                const resultCard = document.createElement('div');
                resultCard.classList.add('search-result-card');
                resultCard.style.backgroundColor = '#ffffff';
                resultCard.style.borderRadius = '8px';
                resultCard.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                resultCard.style.padding = '20px';
                resultCard.style.transition = 'transform 0.2s, box-shadow 0.2s';
                resultCard.style.cursor = 'pointer';
                
                // Icon based on document type
                let icon = '';
                if (result.document.type === 'presentation') {
                    icon = '<i class="fas fa-file-powerpoint" style="color: #FF6B6B; margin-right: 10px;"></i>';
                } else if (result.document.type === 'doc') {
                    icon = '<i class="fas fa-file-alt" style="color: #4285F4; margin-right: 10px;"></i>';
                } else if (result.document.type === 'folder') {
                    icon = '<i class="fas fa-folder" style="color: #FFC857; margin-right: 10px;"></i>';
                }
                
                // Title
                const title = document.createElement('div');
                title.innerHTML = `${icon}<span style="font-weight: 600; font-size: 1.1rem;">${result.document.title}</span>`;
                resultCard.appendChild(title);
                
                // Description if available
                if (result.document.description) {
                    const description = document.createElement('div');
                    description.style.marginTop = '10px';
                    description.style.fontSize = '0.9rem';
                    description.style.color = '#718096';
                    description.textContent = result.document.description;
                    resultCard.appendChild(description);
                }
                
                // Match details if available
                if (result.matches && result.matches.length > 0) {
                    const matchesContainer = document.createElement('div');
                    matchesContainer.style.marginTop = '15px';
                    matchesContainer.style.fontSize = '0.9rem';
                    matchesContainer.style.borderTop = '1px solid #e2e8f0';
                    matchesContainer.style.paddingTop = '10px';
                    
                    // Only show first match to avoid clutter
                    const matchText = result.matches[0];
                    const matchElement = document.createElement('div');
                    
                    // Highlight the search term in the match
                    const highlightedText = matchText.replace(
                        new RegExp(searchTerm, 'gi'), 
                        match => `<span style="background-color: #FEFCBF; font-weight: bold;">${match}</span>`
                    );
                    
                    matchElement.innerHTML = highlightedText;
                    matchElement.style.color = '#4A5568';
                    matchElement.style.marginBottom = '5px';
                    matchesContainer.appendChild(matchElement);
                    
                    resultCard.appendChild(matchesContainer);
                }
                
                // Add click handler if it has an ID
                if (result.document.id) {
                    resultCard.addEventListener('click', function() {
                        // Open the document in viewer
                        window.open(`viewer.html?id=${result.document.id}&type=${result.document.type}&title=${encodeURIComponent(result.document.title)}`, '_blank');
                    });
                    
                    // Hover effect
                    resultCard.addEventListener('mouseover', function() {
                        this.style.transform = 'translateY(-3px)';
                        this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                    });
                    
                    resultCard.addEventListener('mouseout', function() {
                        this.style.transform = '';
                        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    });
                } else if (result.document.type === 'folder') {
                    // For folder results
                    resultCard.addEventListener('click', function() {
                        // Try to find and scroll to the folder
                        const folderHeaders = document.querySelectorAll('.folder-header');
                        folderHeaders.forEach(header => {
                            if (header.textContent.trim().toLowerCase().includes(result.document.title.toLowerCase())) {
                                setContentVisible(true);
                                searchResultsContainer.style.display = 'none';
                                
                                // Scroll to the folder
                                header.scrollIntoView({ behavior: 'smooth' });
                                
                                // Open the folder if closed
                                if (header.nextElementSibling && header.nextElementSibling.style.display === 'none') {
                                    setTimeout(() => toggleFolder(header), 500);
                                }
                            }
                        });
                    });
                    
                    // Hover effect
                    resultCard.addEventListener('mouseover', function() {
                        this.style.transform = 'translateY(-3px)';
                        this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                    });
                    
                    resultCard.addEventListener('mouseout', function() {
                        this.style.transform = '';
                        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    });
                }
                
                resultsGrid.appendChild(resultCard);
            });
            
            container.appendChild(resultsGrid);
        }

        // Hide/show all folder containers and folders
        function setContentVisible(visible) {
            const folderContainers = mainElement.querySelectorAll('.folder-container');
            const categoryHeaders = mainElement.querySelectorAll('h2');
            const searchResultsElement = document.getElementById('searchResultsContainer');
            
            folderContainers.forEach(container => {
                container.style.display = visible ? 'block' : 'none';
            });
            
            categoryHeaders.forEach(header => {
                header.style.display = visible ? 'block' : 'none';
            });
            
            if (visible && searchResultsElement) {
                searchResultsElement.style.display = 'none';
            }
        }

        // Helper function for basic search in the DOM
        function performBasicSearch(element, searchTerm) {
            let resultsFound = false;
            
            // Search in folder headers
            const folderHeaders = element.querySelectorAll('.folder-header span');
            const matchingFolders = [];
            
            folderHeaders.forEach(header => {
                const title = header.textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    matchingFolders.push({
                        document: {
                            title: header.textContent,
                            type: 'folder',
                            description: 'Folder in knowledge base'
                        },
                        score: 5
                    });
                    resultsFound = true;
                }
            });
            
            // Search in file links
            const fileLinks = element.querySelectorAll('.sidebar-file');
            fileLinks.forEach(link => {
                const title = link.textContent.toLowerCase().trim();
                if (title.includes(searchTerm)) {
                    // Extract document ID and type from href
                    const href = link.getAttribute('href');
                    const idMatch = href.match(/id=([^&]+)/);
                    const typeMatch = href.match(/type=([^&]+)/);
                    
                    if (idMatch && typeMatch) {
                        matchingFolders.push({
                            document: {
                                title: link.textContent.trim(),
                                id: idMatch[1],
                                type: typeMatch[1],
                                description: 'Document in knowledge base'
                            },
                            score: 10
                        });
                        resultsFound = true;
                    }
                }
            });
            
            if (matchingFolders.length > 0) {
                displayEnhancedSearchResults(matchingFolders, searchResultsContainer, searchTerm);
                searchResultsContainer.style.display = 'block';
                return true;
            }
            
            return resultsFound;
        }
        
        // Quick links functionality - Remove the event listeners to let them work as normal hyperlinks
        // We're using direct href links now with target="_blank", so this is no longer needed
        // document.querySelectorAll('.quick-link').forEach(link => {
        //     link.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         const documentId = this.getAttribute('data-document');
        //         
        //         // Handle specific quick links
        //         if (documentId === 'agent-scorecard') {
        //             window.location.href = 'viewer.html?id=agent-behavior&type=doc&title=Agent%20Scorecard';
    }

    // --- Main content subfolder toggle logic ---
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all subfolder headers to toggle properly
        document.querySelectorAll('.subfolder-header').forEach(header => {
            header.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Find the parent folder and close other subfolders
                const parentFolder = header.closest('.folder');
                if (parentFolder) {
                    const allSubfolders = parentFolder.querySelectorAll('.subfolder .folder-content');
                    allSubfolders.forEach(content => {
                        if (content !== header.nextElementSibling) {
                            content.classList.remove('active');
                            content.style.display = 'none';
                            const siblingHeader = content.previousElementSibling;
                            if (siblingHeader) {
                                siblingHeader.classList.remove('active');
                            }
                        }
                    });
                }
                
                // Toggle the clicked subfolder
                header.classList.toggle('active');
                const content = header.nextElementSibling;
                content.classList.toggle('active');
                
                // Force display block/none for immediate visibility
                if (content.classList.contains('active')) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // --- Burger menu movement logic ---
    window.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('.sidebar');
        if (burgerMenu && sidebar) {
            function updateBurgerPosition() {
                if (sidebar.classList.contains('active')) {
                    burgerMenu.style.left = '320px';
                } else {
                    burgerMenu.style.left = '20px';
                }
            }
            // Initial position
            updateBurgerPosition();
            // Listen for sidebar toggle
            const observer = new MutationObserver(updateBurgerPosition);
            observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
        }
    });
};